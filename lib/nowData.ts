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
  lastUpdated: "2026-05-24",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is scaling from a flagship service to a multi-campus platform, with Baylor University currently in evaluation. We're focused on building the deployment models that allow peer institutions to adopt this vertical AI approach safely.",
    },
    {
      label: "Governed AI enablement",
      body:
        "Rolling out the Citizen Developer Program with a focus on decoupled environments—using T3 Code as the primary desktop experience to bridge the gap between sandbox experimentation and enterprise-grade deployment.",
    },
    {
      label: "AI agents in production",
      body:
        "Moving beyond exploration into active deployment. This includes the rolling launch of TritonGPT mobile apps on iOS and Android, alongside enterprise data agents that bridge natural language to structured queries.",
    },
    {
      label: "Data product architecture",
      body:
        "Shifting from Databricks migration to a true 'data product' mindset. We are implementing a data mesh model where domain teams define their own governed data products and contracts, rather than performing a simple lift-and-shift.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
