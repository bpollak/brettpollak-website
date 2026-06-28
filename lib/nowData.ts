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
  lastUpdated: "2026-06-28",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT continues scaling as a multi‑campus platform — BearGPT is live at UC Berkeley, and UC ANR is in pilot. We're refining deployment models that work for peer institutions while adding agentic capabilities alongside traditional chat interfaces.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness — our campus agentic development platform — reached V1 feature‑complete on Mac this month, becoming the execution layer where staff build governed, tool‑using AI workers. The Citizen Developer Program now has a real platform to graduate sandbox experiments into production tools.",
    },
    {
      label: "AI agents in production",
      body:
        "The UC San Diego Assistant is live on the flagship mobile app, and the Student Scheduling Assistant launches July 9, bringing AI‑powered course planning to 20,000–40,000 students. Enterprise data agents continue bridging natural language to structured queries.",
    },
    {
      label: "Data product architecture",
      body:
        "Advancing a data‑mesh approach where domain teams define governed data products and contracts. Databricks adoption is underway as a modernization target, and we're shifting from first‑come‑first‑serve to tiered GPU allocation on our on‑prem clusters.",
    },
    {
      label: "AI‑powered email automation",
      body:
        "The inbox‑draft‑reply skill automates threaded draft replies in Outlook based on recent email context, with voice‑matched and human‑ized language. Running daily as part of the personal agent workflow.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
