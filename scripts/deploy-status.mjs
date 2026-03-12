#!/usr/bin/env node

import { getDeployState, getQueueSummary } from './deploy-queue.mjs';

const state = await getDeployState({ fetchRemote: process.argv.includes('--fetch') });
const summary = getQueueSummary(state);

console.log(`Branch: ${state.branch || '(unknown)'}`);
console.log(`Remote: ${state.remote || '(origin not configured)'}`);

if (state.fetchFailed) {
  console.log('Remote sync: fetch failed, so ahead/behind counts may be stale');
}

if (state.localChanges.length > 0) {
  console.log('\nUncommitted changes:');
  for (const line of state.localChanges) {
    console.log(`  ${line}`);
  }
}

if (state.outgoingCommits.length > 0) {
  console.log('\nQueued commits for origin/main:');
  for (const line of state.outgoingCommits) {
    console.log(`  ${line}`);
  }
}

console.log(`\n${summary.message}`);
