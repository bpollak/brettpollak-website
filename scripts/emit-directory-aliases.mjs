/**
 * Post-build step: make trailing-slash URLs work.
 *
 * `output: 'export'` with the default `trailingSlash: false` emits flat files —
 * out/speaking.html, not out/speaking/index.html. GitHub Pages serves /speaking
 * from speaking.html, but /speaking/ looks for speaking/index.html and 404s. The
 * export does create out/speaking/ for RSC payloads, so the directory exists
 * with no index to serve.
 *
 * Setting `trailingSlash: true` would fix that, but it flips which form is
 * canonical: every canonical tag, the sitemap, llms.txt, and every already
 * published link would need to change, and /speaking would start redirecting.
 *
 * Instead every page is also written to <route>/index.html. Both forms then
 * return 200 with the same content, and because the canonical tag inside points
 * at the non-slash URL, the slash form is not indexed separately — so nothing
 * about the site's existing URLs changes.
 */

import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(import.meta.dirname, '..', 'out');

// index.html already answers "/". 404.html and _not-found.html must stay where
// they are: GitHub Pages looks for /404.html specifically.
const SKIP = new Set(['index.html', '404.html', '_not-found.html']);

function htmlFilesIn(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // _next holds build assets, never routes.
      if (entry.name === '_next') continue;
      htmlFilesIn(full, found);
    } else if (entry.name.endsWith('.html')) {
      found.push(full);
    }
  }
  return found;
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error(`emit-directory-aliases: no out/ directory at ${outDir} — run the build first.`);
    process.exit(1);
  }

  const pages = htmlFilesIn(outDir);
  let written = 0;
  const skipped = [];

  for (const file of pages) {
    const rel = path.relative(outDir, file);

    if (SKIP.has(rel)) {
      skipped.push(`${rel} (reserved)`);
      continue;
    }
    // An already-nested index.html is its own alias target.
    if (path.basename(file) === 'index.html') {
      skipped.push(`${rel} (already an index)`);
      continue;
    }

    const target = path.join(outDir, rel.replace(/\.html$/, ''), 'index.html');
    if (fs.existsSync(target)) {
      skipped.push(`${rel} (target exists)`);
      continue;
    }

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(file, target);
    written += 1;
  }

  console.log(`emit-directory-aliases: wrote ${written} trailing-slash alias(es) from ${pages.length} page(s).`);
  // Surface what was left out rather than implying full coverage.
  for (const note of skipped) console.log(`  skipped ${note}`);
}

main();
