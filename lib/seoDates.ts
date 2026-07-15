import { mediaItems } from "./mediaData";
import { weeklyAiDigestData } from "./weeklyAiDigestData";
import { ucsdAiNewsletterData } from "./ucsdAiNewsletterData";
import { currentNow } from "./nowData";

export const SITE_URL = "https://brettcpollak.com";

/**
 * Hand-maintained "content last meaningfully changed" dates (ISO YYYY-MM-DD)
 * for pages whose copy lives in the page file itself rather than in a lib/
 * data module. These feed the sitemap <lastmod> values and per-page JSON-LD
 * dateModified, so a stale entry teaches crawlers to distrust the sitemap.
 *
 * Bump the matching entry whenever a page's content changes substantively
 * (copy, sections, data points) — not for pure styling/refactor commits.
 *
 * Do NOT add data-driven routes here (/media, /ai-digest, /ucsd-ai-news,
 * /now): their dates are derived from the data modules below and update
 * automatically when the OpenClaw content crons refresh the data files.
 */
export const staticPageDates: Record<string, string> = {
  "/": "2026-06-01",
  "/about": "2026-07-12",
  "/tritongpt": "2026-06-07",
  "/speaking": "2026-06-02",
  "/products": "2026-07-14",
  "/products/cason-recruiting-crm": "2026-07-14",
  "/ai-agent-architecture": "2026-06-07",
  "/podcasts": "2026-06-01",
  "/linkedin": "2026-05-31",
  "/contact": "2026-06-01",
};

/** First-published dates for long-form pages that carry Article JSON-LD. */
export const pagePublishDates: Record<string, string> = {
  "/ai-agent-architecture": "2026-05-31",
};

function maxIso(dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b));
}

function minIso(dates: string[]): string {
  return dates.reduce((a, b) => (a < b ? a : b));
}

const buildDateIso = new Date().toISOString().slice(0, 10);

/**
 * Media items can carry future dates (scheduled talks and events). A future
 * <lastmod> makes crawlers distrust the whole sitemap, so derived dates are
 * clamped to the build date.
 */
function clampToBuildDate(iso: string): string {
  return iso > buildDateIso ? buildDateIso : iso;
}

// Derived automatically from the data modules; nothing to maintain here.
export const latestMediaDate = clampToBuildDate(
  maxIso(mediaItems.map((item) => item.date)),
);

export const latestDigestDate = clampToBuildDate(
  maxIso([
    weeklyAiDigestData.weekOf,
    ...weeklyAiDigestData.days.map((day) => day.isoDate),
  ]),
);

export const latestNewsletterDate = clampToBuildDate(
  maxIso([
    ucsdAiNewsletterData.weekOf,
    ...ucsdAiNewsletterData.editions.map((edition) => edition.isoDate),
  ]),
);

export const earliestNewsletterDate = minIso([
  ucsdAiNewsletterData.weekOf,
  ...ucsdAiNewsletterData.editions.map((edition) => edition.isoDate),
]);

export const nowLastUpdated = currentNow.lastUpdated;

/** Most recent change anywhere on the site (used by /llms-full.txt). */
export const siteLastUpdated = maxIso([
  ...Object.values(staticPageDates),
  latestMediaDate,
  latestDigestDate,
  latestNewsletterDate,
  nowLastUpdated,
]);

/** Noon UTC avoids the date shifting across timezones in <lastmod>. */
export function isoToDate(iso: string): Date {
  return new Date(`${iso}T12:00:00Z`);
}
