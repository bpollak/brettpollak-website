import { projectWalkthroughs } from "./projectWalkthroughs";
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
 * "The page file" includes a sibling *Content.tsx component where one exists:
 * /tritongpt, /podcasts, /contact, and /linkedin keep most of their copy
 * there, not in page.tsx. Editing TritonGPTContent.tsx is a /tritongpt content
 * change and needs the same bump — that gap is how /tritongpt's entry drifted
 * seven weeks behind its own copy.
 *
 * Do NOT add data-driven routes here (/media, /ai-digest, /ucsd-ai-news,
 * /now): their dates are derived from the data modules below and update
 * automatically when the Hermes content crons refresh the data files.
 */
export const staticPageDates: Record<string, string> = {
  ...Object.fromEntries(projectWalkthroughs.map(project => [`/products/${project.slug}`, "2026-09-07"])),
  "/": "2026-11-20",  // homepage: branded title, CTA alignment, NACUBO talk, internal UCSD Weekly links, gateway dispatch
  "/work": "2026-11-20",  // TritonAI case study updated through 2026
  "/about": "2026-11-20",  // Writing card links added
  "/tritongpt": "2026-11-20",  // Fall 2026 cohort wording, Harness supported status, video autoplay removed
  "/speaking": "2026-11-20",  // refreshed bio, 2026 topics, May 2026 UC AI Council featured session
  "/products": "2026-11-20",  // absolute schema URLs, title punctuation, direct LinkedIn CTA
  "/products/resolution-companion": "2026-11-20",  // v1.6.1 caption refresh
  "/products/passports-visitor-management": "2026-11-20",  // clarified prototype vs campus production
  "/products/cason-recruiting-crm": "2026-07-14",
  "/products/cason-scholarship-agent": "2026-07-25",
  "/ai-agent-architecture": "2026-11-20",  // Gemma timing fix, changelog privacy scrub & monthly rollup
  "/podcasts": "2026-06-01",
  "/linkedin": "2026-10-26",  // title
  "/tritonai-meeting-scheduler": "2026-10-04",
  "/sent-using-tritonai": "2026-10-02",
  "/contact": "2026-11-20",  // dual-audience framing + app feedback topic
  "/products/horse-racing-companion": "2026-09-09",
  "/products/steel-city-gameday": "2026-09-10",  // SCG live on the App Store
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
  maxIso(['2026-09-05', ...mediaItems.map((item) => item.date)]) // Featured selections revised September 5.
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
