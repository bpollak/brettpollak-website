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
  lastUpdated: "2026-05-10",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "Work focus",
      body:
        "Stabilizing UC San Diego's Citizen Agentic Development Framework. Pilot implementations are now moving through tier-two production review, tuning safety gates and governance processes based on real usage data. Talent win: just secured Dominic Feliton's retention to lead the infrastructure layer through launch.",
    },
    {
      label: "Organizational restructuring",
      body:
        "Leading a comprehensive reorg discussion across our senior management team with Kevin Chou. The org design will reshape how we handle observability, endpoint management, and infrastructure platform strategy. This is forcing function for how we allocate resources against TritonAI's scaling needs and operational dependencies.",
    },
    {
      label: "High-stakes commitment",
      body:
        "Preparing a Health Sciences AI/BI presentation for the Chancellor on May 27 with Rina Davison and cross-functional leadership. The goal is to showcase progress while framing adoption challenges honestly — positioning AI as an institutional capability, not a mandate.",
    },
    {
      label: "Data foundation",
      body:
        "Financial data extracts are now ready (6.7M rows) for AI agent benchmarking and ground-truth validation. This is the backbone for preventing agent drift and building confidence in agentic decision-making in high-stakes domains.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
