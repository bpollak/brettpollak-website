#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const nextDistDir = path.join(rootDir, 'node_modules', 'next', 'dist');
const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

function formatFailure(message, details = []) {
  const lines = [message];

  for (const detail of details) {
    lines.push(`- ${detail}`);
  }

  lines.push('Repair with `npm ci`, then start localhost again.');

  return lines.join('\n');
}

function checkForDatalessNextFiles() {
  if (process.platform !== 'darwin') {
    return null;
  }

  const probe = spawnSync('ls', ['-lROe', nextDistDir], {
    cwd: rootDir,
    encoding: 'utf8',
    maxBuffer: 8 * 1024 * 1024,
  });

  if (probe.error || probe.status !== 0) {
    return null;
  }

  if (!probe.stdout.includes('dataless')) {
    return null;
  }

  return formatFailure(
    'Detected macOS dataless files inside the Next.js runtime.',
    ['These placeholder files can cause `npm run dev` to hang before localhost becomes available.'],
  );
}

function checkCompiledTracingRuntime() {
  const probe = spawnSync(
    process.execPath,
    ['-e', "require('next/dist/compiled/@opentelemetry/api')"],
    {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 5000,
    },
  );

  if (probe.error?.code === 'ETIMEDOUT') {
    return formatFailure(
      'The Next.js tracing runtime did not load within 5 seconds.',
      ['This usually means a local dependency file is corrupted or unavailable on disk.'],
    );
  }

  if (probe.status === 0) {
    return null;
  }

  const detail = (probe.stderr || probe.stdout || '').trim();

  return formatFailure('The Next.js tracing runtime could not be loaded locally.', detail ? [detail] : []);
}

export function assertLocalRuntimeHealthy() {
  const failures = [checkForDatalessNextFiles(), checkCompiledTracingRuntime()].filter(Boolean);

  if (failures.length === 0) {
    return;
  }

  throw new Error(failures.join('\n\n'));
}

if (isDirectRun) {
  try {
    assertLocalRuntimeHealthy();
    console.log('Local runtime check passed.');
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
