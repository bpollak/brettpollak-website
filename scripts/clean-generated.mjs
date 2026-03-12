#!/usr/bin/env node

import { rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = new Set(process.argv.slice(2));

if (args.has('--help') || args.has('-h')) {
  console.log(`Usage: npm run clean

Removes generated local build artifacts:
  - .next/
  - out/
`);
  process.exit(0);
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(scriptDir, '..');
const generatedDirs = ['.next', 'out'];

for (const dir of generatedDirs) {
  const target = path.join(rootDir, dir);
  rmSync(target, { recursive: true, force: true });
  console.log(`Removed ${dir}`);
}
