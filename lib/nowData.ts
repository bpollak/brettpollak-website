/**
 * /now page data — what Brett is focused on right now.
 *
 * Auto-refreshed weekly by the Hermes `now-page-weekly-refresh` cron job
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
  lastUpdated: "2026-08-15",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is at 73,000+ users with 309 billion tokens through our LLM gateway since January — 95% processed on‑prem. We're refining deployment models that work for peer institutions while adding agentic capabilities alongside traditional chat.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is in beta distribution with strong early adoption across development teams. Working on a privacy and data explainer before broader rollout, and exploring token recharge policy direction for cloud vs. on-prem usage.",
    },
    {
      label: "AI agents in production",
      body:
        "The Student Scheduling Assistant launched this summer, serving tens of thousands of students in waves. The UC San Diego Assistant is live on the flagship mobile app, and enterprise data agents continue bridging natural language to structured data warehouse queries.",
    },
    {
      label: "Data platform modernization",
      body:
        "Advancing lakehouse migration planning from our legacy data warehouse platform, with evaluation wrapping up and a decision expected before September. On the observability side, architecture is locked: open-format telemetry feeds a data lake that vendor tools consume from — UCSD owns its telemetry data.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "Developing a shared GPU strategy to support data science and machine learning platform needs with a school at UC San Diego, positioning UCSD as an inference and AI services provider for the UC system and beyond.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
