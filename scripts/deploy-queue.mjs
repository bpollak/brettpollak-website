#!/usr/bin/env node

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const execFileAsync = promisify(execFile);
const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

async function runGit(args, options = {}) {
  const { stdout } = await execFileAsync('git', args, {
    cwd: rootDir,
    maxBuffer: 1024 * 1024 * 4,
    timeout: 5000,
    ...options,
  });

  return stdout.trim();
}

export async function getDeployState({ fetchRemote = false } = {}) {
  const state = {
    branch: '',
    remote: '',
    ahead: 0,
    behind: 0,
    localChanges: [],
    outgoingCommits: [],
    fetchFailed: false,
  };

  try {
    state.branch = await runGit(['branch', '--show-current']);
  } catch {
    return state;
  }

  try {
    state.remote = await runGit(['remote', 'get-url', 'origin']);
  } catch {
    state.remote = '';
  }

  if (fetchRemote && state.remote) {
    try {
      await runGit(['fetch', 'origin', 'main', '--quiet']);
    } catch {
      state.fetchFailed = true;
    }
  }

  try {
    const status = await runGit(['status', '--short', '--untracked-files=all']);
    state.localChanges = status ? status.split('\n') : [];
  } catch {
    state.localChanges = [];
  }

  try {
    const counts = await runGit(['rev-list', '--left-right', '--count', 'origin/main...main']);
    const [behind, ahead] = counts.split(/\s+/).map((value) => Number.parseInt(value, 10) || 0);
    state.behind = behind;
    state.ahead = ahead;
  } catch {
    state.behind = 0;
    state.ahead = 0;
  }

  if (state.ahead > 0) {
    try {
      const log = await runGit(['log', '--oneline', 'origin/main..main']);
      state.outgoingCommits = log ? log.split('\n') : [];
    } catch {
      state.outgoingCommits = [];
    }
  }

  return state;
}

export function getQueueSummary(state) {
  if (!state.branch) {
    return {
      key: 'no-repo',
      readyToPrompt: false,
      message: 'Deployment queue unavailable: unable to read git state.',
    };
  }

  if (state.localChanges.length > 0) {
    return {
      key: `dirty:${state.localChanges.join('|')}`,
      readyToPrompt: false,
      message: 'Local changes are live on localhost. Deployment queue is waiting for you to review and commit them before pushing to GitHub main for Vercel.',
    };
  }

  if (state.branch !== 'main') {
    return {
      key: `branch:${state.branch}`,
      readyToPrompt: false,
      message: `Deployment queue is paused because you are on \`${state.branch}\`. Merge or switch to \`main\` before pushing to GitHub main for Vercel.`,
    };
  }

  if (state.behind > 0) {
    return {
      key: `behind:${state.behind}`,
      readyToPrompt: false,
      message: `Deployment queue is blocked because local \`main\` is behind \`origin/main\` by ${state.behind} commit(s). Pull or rebase before pushing.`,
    };
  }

  if (state.ahead > 0) {
    return {
      key: `ahead:${state.ahead}`,
      readyToPrompt: true,
      message: `Deployment queue ready: local \`main\` is ahead of \`origin/main\` by ${state.ahead} commit(s). Run \`npm run deploy:prompt\` to confirm a push for Vercel.`,
    };
  }

  return {
    key: 'idle',
    readyToPrompt: false,
    message: 'No GitHub push is queued right now. Localhost is up to date with your working tree.',
  };
}
