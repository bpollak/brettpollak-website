#!/usr/bin/env node

import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node scripts/run-with-supported-node.mjs <script-or-bin> [...args]');
  process.exit(1);
}

const rootDir = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const [target, ...targetArgs] = args;

const supported = process.versions.node.split('.').map(Number);
const isSupported = supported[0] >= 20 && supported[0] < 25;

const fallbackNode = '/opt/homebrew/opt/node@20/bin/node';
const nodeBin = isSupported ? process.execPath : existsSync(fallbackNode) ? fallbackNode : null;

if (!nodeBin) {
  console.error(`Unsupported Node.js version detected: ${process.versions.node}`);
  console.error('Use Node.js 20.x LTS for this repo.');
  console.error('Install node@20 or switch with `nvm use 20`.');
  process.exit(1);
}

const resolvedTarget = path.isAbsolute(target) ? target : path.join(rootDir, target);

const child = spawn(nodeBin, [resolvedTarget, ...targetArgs], {
  cwd: rootDir,
  env: process.env,
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
