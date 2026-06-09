#!/usr/bin/env node
/**
 * Generates public/brett-pollak-og-card.png — the 1200x630 social share card
 * used as the default Open Graph / Twitter image.
 *
 * One-off asset generator: the PNG is committed, so this only needs to run
 * again when the design or headshot changes. Rendering uses the site's real
 * fonts (Newsreader + IBM Plex Sans); if they aren't installed system-wide,
 * fetch them from Google Fonts into ~/.fonts and run `fc-cache -f` first —
 * otherwise librsvg silently falls back to a default serif/sans.
 *
 * Usage: node scripts/generate-og-card.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const HEADSHOT = path.join(root, 'public', 'brett-pollak-headshot-sit-center.png');
const OUT = path.join(root, 'public', 'brett-pollak-og-card.png');

const W = 1200;
const H = 630;

// Photo panel geometry (white card with the site's offset-gold-shadow motif)
const CARD_X = 775;
const CARD_Y = 76;
const CARD_W = 356;
const CARD_H = 466;
const PAD = 16;
const SHADOW_OFFSET = 16;

// Site palette (see CLAUDE.md "Visual language")
const INK = '#17201b';
const PAPER = '#fffef9';
const LINE = '#d9dfd3';
const BLUE = '#1f5a8a';
const GOLD = '#c97712';
const GREEN = '#366c5a';
const CORAL = '#b8503f';
const BODY = '#485248';

const baseSvg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}" fill="none" stroke="${LINE}" stroke-width="2"/>

  <!-- offset shadow + white card behind the headshot -->
  <rect x="${CARD_X + SHADOW_OFFSET}" y="${CARD_Y + SHADOW_OFFSET}" width="${CARD_W}" height="${CARD_H}" fill="${GOLD}" opacity="0.16"/>
  <rect x="${CARD_X}" y="${CARD_Y}" width="${CARD_W}" height="${CARD_H}" fill="${PAPER}" stroke="${LINE}" stroke-width="2"/>

  <!-- rule label -->
  <rect x="92" y="136" width="44" height="3" fill="${GOLD}"/>
  <text x="152" y="146" font-family="IBM Plex Sans SemiBold, IBM Plex Sans" font-size="22" font-weight="600" letter-spacing="4" fill="${GOLD}">AI IN HIGHER EDUCATION</text>

  <!-- name -->
  <text x="88" y="268" font-family="Newsreader Medium, Newsreader" font-size="104" font-weight="500" fill="${INK}">Brett Pollak</text>

  <!-- subtitle -->
  <text x="92" y="334" font-family="IBM Plex Sans" font-size="29" fill="${BODY}">Institutional AI, TritonAI, and agentic</text>
  <text x="92" y="378" font-family="IBM Plex Sans" font-size="29" fill="${BODY}">workflows &#8212; field notes, talks, and</text>
  <text x="92" y="422" font-family="IBM Plex Sans" font-size="29" fill="${BODY}">practical architecture at UC San Diego.</text>

  <!-- palette accent squares -->
  <rect x="92" y="466" width="16" height="16" fill="${BLUE}"/>
  <rect x="118" y="466" width="16" height="16" fill="${GOLD}"/>
  <rect x="144" y="466" width="16" height="16" fill="${GREEN}"/>
  <rect x="170" y="466" width="16" height="16" fill="${CORAL}"/>

  <!-- site url -->
  <text x="92" y="532" font-family="IBM Plex Sans SemiBold, IBM Plex Sans" font-size="30" font-weight="600" fill="${BLUE}">brettcpollak.com</text>
</svg>`;

const photo = await sharp(HEADSHOT)
  .resize(CARD_W - PAD * 2, CARD_H - PAD * 2, { fit: 'cover', position: 'north' })
  .toBuffer();

await sharp(Buffer.from(baseSvg))
  .composite([{ input: photo, left: CARD_X + PAD, top: CARD_Y + PAD }])
  .png({ compressionLevel: 9, palette: true, quality: 95 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`Wrote ${OUT} (${meta.width}x${meta.height})`);
