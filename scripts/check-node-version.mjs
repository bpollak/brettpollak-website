#!/usr/bin/env node

const args = new Set(process.argv.slice(2));
const warnOnly = args.has('--warn');

const [major, minor, patch] = process.versions.node.split('.').map(Number);
const supported = major >= 20 && major < 25;

if (supported) {
  process.exit(0);
}

const message = [
  `Unsupported Node.js version detected: ${major}.${minor}.${patch}`,
  'Use Node.js 20.x LTS for this repo.',
  'The local toolchain and CI are aligned to Node 20, and newer majors can cause lint/typecheck/build hangs.',
  '',
  'Suggested fix:',
  '  nvm use 20',
].join('\n');

if (warnOnly) {
  console.warn(message);
  process.exit(0);
}

console.error(message);
process.exit(1);
