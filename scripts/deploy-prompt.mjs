#!/usr/bin/env node

import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getDeployState, getQueueSummary } from './deploy-queue.mjs';

const execFileAsync = promisify(execFile);
const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

async function runGit(args) {
  const { stdout: commandStdout } = await execFileAsync('git', args, {
    cwd: rootDir,
    maxBuffer: 1024 * 1024 * 4,
  });

  return commandStdout.trim();
}

const state = await getDeployState({ fetchRemote: true });
const summary = getQueueSummary(state);

console.log(summary.message);

if (!summary.readyToPrompt) {
  process.exit(0);
}

if (state.outgoingCommits.length > 0) {
  console.log('\nCommits queued for Vercel deployment:');
  for (const line of state.outgoingCommits) {
    console.log(`  ${line}`);
  }
}

const rl = createInterface({ input: stdin, output: stdout });

try {
  const answer = await rl.question('\nPush local `main` to `origin/main` and trigger Vercel? [y/N] ');
  const normalized = answer.trim().toLowerCase();

  if (normalized !== 'y' && normalized !== 'yes') {
    console.log('Push cancelled.');
    process.exit(0);
  }

  await runGit(['push', 'origin', 'main']);
  console.log('Pushed `main` to `origin/main`. Vercel should pick up the new deployment.');
} finally {
  rl.close();
}
