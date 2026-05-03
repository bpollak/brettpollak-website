/**
 * /now page data — what Brett is focused on right now.
 *
 * Auto-refreshed weekly by the OpenClaw `now-page-weekly-refresh` cron job
 * (Sundays ~11:33am PT). The cron only updates this file when it detects
 * meaningful drift; otherwise the file is unchanged.
 *
 * Manual edits welcome — the cron compares against current state and only
 * pushes changes that the prompt has reasoned about, so a human edit will
 * stick until something materially changes.
 */

export type NowItem = {
  /** Section heading, e.g., "Work focus" */
  label: string;
  /** 1–3 sentences. Plain prose, written like you'd tell a friend. */
  body: string;
};

export type NowSnapshot = {
  /** ISO date string, e.g., "2026-04-24". Always present. */
  lastUpdated: string;
  /** Where Brett is right now, e.g., "San Diego, California". Optional. */
  location?: string;
  /** Optional one-line opener under the page title. */
  intro?: string;
  /** The actual /now content, in display order. */
  items: NowItem[];
};

export const currentNow: NowSnapshot = {
  lastUpdated: "2026-05-03",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "Work focus",
      body:
        "Stabilizing UC San Diego's Citizen Agentic Development Framework, moving pilot implementations from onboarding into early-stage production performance review. The focus is now on tuning tier-two review processes based on real usage data and hardening the underlying agentic infrastructure.",
    },
    {
      label: "Building",
      body:
        "Maturing the TritonAI Developer API Program. We're prioritizing reliable access to agentic tools and workflow APIs so campus developers can build on the platform's core substrate rather than relying on brittle, one-off scraping workarounds.",
    },
    {
      label: "Sharing the work",
      body:
        "Automating the weekly AI News Digest for campus distribution to keep stakeholders informed of the rapidly shifting external landscape. Providing a consistent signal is just as important as building the tools, helping campus leaders filter noise and identify high-value operational opportunities.",
    },
    {
      label: "Thinking about",
      body:
        "How universities can maintain control of institutional context. The power of agentic AI lies in our own file systems and data repositories; as long as the architecture remains model-agnostic and under our governance, we avoid vendor lock-in and keep our institutional memory secure.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
