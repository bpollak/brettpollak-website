/**
 * /now page data - what Brett is focused on right now.
 *
 * Auto-refreshed weekly by the OpenClaw `now-page-weekly-refresh` cron job
 * (Sundays ~11:33am PT). The cron only updates this file when it detects
 * meaningful drift; otherwise the file is unchanged.
 *
 * Manual edits welcome - the cron compares against current state and only
 * pushes changes that the prompt has reasoned about, so a human edit will
 * stick until something materially changes.
 */

export type NowItem = {
  /** Section heading, e.g., "Work focus" */
  label: string;
  /** 1-3 sentences. Plain prose, written like you'd tell a friend. */
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
  lastUpdated: "2026-06-14",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT continues scaling to a multi‑campus platform, with peer institutions moving into pilot phases. We're refining deployment models for safe, institution‑wide adoption.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The Citizen Developer Program is now delivering prototype workflows built on TritonGPT, avoiding external platforms. We’re bridging sandbox experimentation to enterprise‑grade deployment using AI‑powered tools.",
    },
    {
      label: "AI agents in production",
      body:
        "We’re beta‑testing TritonGPT mobile apps on iOS and Android, and expanding enterprise data agents that translate natural language to structured queries.",
    },
    {
      label: "Data product architecture",
      body:
        "Advancing a data‑mesh approach where domain teams define governed data products and contracts, moving beyond simple lift‑and‑shift migrations.",
    },
    {
      label: "AI‑powered email automation",
      body:
        "Deployed the inbox‑draft‑reply skill, automating threaded draft replies in Outlook based on recent email context, with voice‑matched and human‑ized language.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
