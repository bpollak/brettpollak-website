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
  lastUpdated: "2026-04-24",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "Work focus",
      body:
        "Standing up UC San Diego's Citizen Agentic Development Framework — a four-tier model that lets faculty and staff build AI-assisted apps with risk-appropriate review at each tier. The first hosting environment is live and onboarding pilots; in parallel, the ITS team is shipping enterprise-grade agentic apps (transcript matching for Enrollment Management, contract review for Procurement) on the same Developer API substrate.",
    },
    {
      label: "Building",
      body:
        "Expanding the TritonAI Developer API Program — every UCSD affiliate now gets $15/month in free credits and a paved path from Claude Code on a laptop to a hosted app on *.apps.ucsd.edu. The hard part isn't the gateway; it's getting the right APIs and MCPs in front of campus builders so they don't reach for browser-scraping workarounds.",
    },
    {
      label: "Sharing the work",
      body:
        "Socializing the citizen-developer approach with peer institutions and writing it up so other higher-ed IT teams can adapt it. Most universities are stuck choosing between buying generic AI for everyone and routing every request through central IT — there's a third path, and it's worth documenting clearly.",
    },
    {
      label: "Thinking about",
      body:
        "How universities can adopt AI without ceding their institutional memory to a vendor. The architecture lives in our filesystems and under our control; any model can plug in and any model can be swapped out. The context layer is the moat — and it shouldn't belong to OpenAI, Anthropic, or Google.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
