#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { request } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { assertLocalRuntimeHealthy } from './check-local-runtime.mjs';
import { getDeployState, getQueueSummary } from './deploy-queue.mjs';

const args = new Set(process.argv.slice(2));

if (args.has('--help') || args.has('-h')) {
  console.log(`Usage: npm run dev [-- --open]

Starts the Next.js dev server and waits for the local preview to come up.
Changes in the app update automatically via Next.js hot reload.

Options:
  --open    Open the local preview in the default browser once ready
`);
  process.exit(0);
}

const host = process.env.HOST ?? '127.0.0.1';
const port = process.env.PORT ?? '3000';
const healthUrl = `http://${host}:${port}`;
const browserUrl = `http://localhost:${port}`;
const shouldOpen = args.has('--open');

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const nextBin = path.join(scriptDir, '..', 'node_modules', 'next', 'dist', 'bin', 'next');

try {
  assertLocalRuntimeHealthy();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

console.log(`Starting local preview at ${browserUrl}`);
console.log('File changes will hot-reload automatically.\n');

const child = spawn(process.execPath, [nextBin, 'dev', '--hostname', host, '--port', port], {
  cwd: path.join(scriptDir, '..'),
  env: process.env,
  stdio: 'inherit',
});

let readyLogged = false;
let deployStateKey = '';
let deployCheckInFlight = false;

const healthTimer = setInterval(() => {
  const req = request(healthUrl, { method: 'GET', timeout: 1000 }, (res) => {
    res.resume();

    if (readyLogged) {
      return;
    }

    readyLogged = true;
    console.log(`\nLocal preview ready: ${browserUrl}`);
    console.log('Deployment queue is active. I will surface when changes are only local versus ready to push to GitHub main for Vercel.');

    if (shouldOpen) {
      openBrowser(browserUrl);
    }
  });

  req.on('error', () => {});
  req.on('timeout', () => req.destroy());
  req.end();
}, 1000);

const deployTimer = setInterval(async () => {
  if (!readyLogged || deployCheckInFlight) {
    return;
  }

  deployCheckInFlight = true;

  try {
    const state = await getDeployState();
    const summary = getQueueSummary(state);

    if (summary.key !== deployStateKey) {
      deployStateKey = summary.key;
      console.log(`\n${summary.message}`);
    }
  } catch {
    // Keep the local preview running even if git state cannot be inspected.
  } finally {
    deployCheckInFlight = false;
  }
}, 4000);

function openBrowser(url) {
  const browserCommand =
    process.platform === 'darwin'
      ? ['open', [url]]
      : process.platform === 'win32'
        ? ['cmd', ['/c', 'start', '', url]]
        : ['xdg-open', [url]];

  const [command, commandArgs] = browserCommand;

  const browserProcess = spawn(command, commandArgs, {
    detached: true,
    stdio: 'ignore',
  });

  browserProcess.unref();
}

function forwardSignal(signal) {
  clearInterval(healthTimer);
  clearInterval(deployTimer);

  if (!child.killed) {
    child.kill(signal);
  }
}

process.on('SIGINT', () => forwardSignal('SIGINT'));
process.on('SIGTERM', () => forwardSignal('SIGTERM'));

child.on('exit', (code, signal) => {
  clearInterval(healthTimer);
  clearInterval(deployTimer);

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
