# Project notes for Claude / contributors

Personal site for Brett Pollak. Next.js (App Router) + Tailwind, deployed via
GitHub Pages on push to `main`.

## Data-driven pages — update the data, not the markup

Several pages render their stats and graphics **from a data file at build time**.
When the underlying data changes, the visuals recompute automatically on the next
deploy. Never hand-edit the computed numbers or SVG geometry — edit the source
array and let the page derive everything.

### Media page (`/media`)

- **Source of truth:** `lib/mediaData.ts` (the `mediaItems` array).
- **To update:** add/edit an entry. Each item needs `publication`, `title`,
  `url`, `date` (ISO `YYYY-MM-DD`), and `category` (one of:
  `article`, `interview`, `whitepaper`, `speaking`, `award`).
- **What recomputes automatically** from that array (in `app/media/page.tsx`):
  - hero stats — indexed items, talks/sessions, coverage span;
  - the `MediaArchiveChart` graphic — the "record by format" bars and the
    "activity by year" timeline (counts, year range, and bar scaling);
  - the filter chips and per-year groupings in `MediaContent.tsx`;
  - the SEO `ItemList` JSON-LD.
- **Gotchas:** keep `date` a real ISO date (the year drives the timeline) and
  `category` to one of the five allowed values (it drives the format chart and
  the colored chips). Adding a brand-new category means also adding it to
  `FORMAT_META` in `app/media/page.tsx` and `categoryStyles`/`categoryLabels`
  in `MediaContent.tsx`.

### Other generated/archive pages

- `/ai-digest` ← `lib/weeklyAiDigestData.ts`
- `/ucsd-ai-news` ← `lib/ucsdAiNewsletterData.ts`
- `/now` ← `lib/nowData.ts`

These follow the same principle: edit the data module; the page stats and copy
follow.

## Visual language

- Palette: blue `#1f5a8a`, gold `#c97712`, green `#366c5a`, coral `#b8503f`,
  ink `#17201b`, paper `#fffef9`, base `#f7f9f5`, line `#d9dfd3`.
- Diagrams use the "flowing dotted line" kit (`.flow-path`) and fade in on scroll
  (`.diagram` + JS arming). Data-chart bars use `.grow-bar`. All motion is gated
  behind `prefers-reduced-motion`.

## Before committing

- Run `npm run check` (ESLint `--max-warnings=0` + `tsc --noEmit`). Must pass.
- `npm run build` also fetches Google Fonts; that step can fail in sandboxes
  without network but succeeds in CI.
