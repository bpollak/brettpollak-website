#!/usr/bin/env node
/**
 * Fetches a favicon for every unique domain linked from lib/mediaData.ts into
 * public/media-icons/<host>.png (64x64), and writes the lookup manifest
 * lib/mediaIconManifest.json used by app/media/MediaContent.tsx.
 *
 * Both the icons and the manifest are committed. Rerun this after adding
 * media items that link to a NEW domain:
 *
 *   node scripts/fetch-media-icons.mjs
 *
 * Failure-soft by design: domains that can't be resolved to an icon simply
 * stay out of the manifest and the media page falls back to the publication
 * monogram tile, so skipping this step never breaks anything.
 *
 * Sources: DuckDuckGo's icon service first (real favicons, 404 when unknown),
 * then Google's s2 service (always answers, but with a generic globe for
 * unknown domains — detected via a fingerprint request and skipped).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataFile = path.join(root, 'lib', 'mediaData.ts');
const outDir = path.join(root, 'public', 'media-icons');
const manifestFile = path.join(root, 'lib', 'mediaIconManifest.json');

const FETCH_TIMEOUT_MS = 8000;

function hostsFromData() {
  const src = fs.readFileSync(dataFile, 'utf8');
  const urls = [...src.matchAll(/url:\s*'([^']+)'/g)].map((m) => m[1]);
  const hosts = new Set();
  for (const u of urls) {
    if (!u.startsWith('http')) continue;
    try {
      hosts.add(new URL(u).hostname.replace(/^www\./, ''));
    } catch {
      /* skip malformed URLs */
    }
  }
  return [...hosts].sort();
}

async function get(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  if (!res.ok) return null;
  return Buffer.from(await res.arrayBuffer());
}

function isPng(buf) {
  return buf && buf.length > 8 && buf.readUInt32BE(0) === 0x89504e47;
}

async function normalize(buf) {
  return sharp(buf)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function fetchIcon(host, googleDefaultHash) {
  // DuckDuckGo: serves the site's real favicon; some responses are PNG bytes
  // despite the .ico name. sharp can't decode true ICO, so only PNG passes.
  const ddg = await get(`https://icons.duckduckgo.com/ip3/${host}.ico`).catch(() => null);
  if (isPng(ddg)) return normalize(ddg);

  const g = await get(`https://www.google.com/s2/favicons?domain=${host}&sz=64`).catch(() => null);
  if (g && crypto.createHash('sha1').update(g).digest('hex') !== googleDefaultHash) {
    return normalize(g).catch(() => null);
  }
  return null;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  // Seed the manifest with icons already on disk so an offline rerun never
  // throws away previously fetched icons.
  const manifest = {};
  for (const f of fs.readdirSync(outDir)) {
    if (f.endsWith('.png')) manifest[f.slice(0, -4)] = f;
  }

  const fingerprint = await get(
    'https://www.google.com/s2/favicons?domain=no-such-domain-fingerprint.invalid&sz=64',
  ).catch(() => null);
  const googleDefaultHash = fingerprint
    ? crypto.createHash('sha1').update(fingerprint).digest('hex')
    : '';

  let fetched = 0;
  let skipped = 0;
  for (const host of hostsFromData()) {
    try {
      const icon = await fetchIcon(host, googleDefaultHash);
      if (icon) {
        fs.writeFileSync(path.join(outDir, `${host}.png`), icon);
        manifest[host] = `${host}.png`;
        fetched += 1;
      } else {
        skipped += 1;
        console.warn(`no icon for ${host} (will use monogram fallback)`);
      }
    } catch (err) {
      skipped += 1;
      console.warn(`failed ${host}: ${err.message} (will use monogram fallback)`);
    }
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(manifestFile, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`icons: ${fetched} fetched, ${skipped} fallback, manifest entries: ${Object.keys(sorted).length}`);
}

main();
