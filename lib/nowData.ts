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
  lastUpdated: "2026-07-19",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is at 73,000+ users with 309 billion tokens through our LLM gateway since January — 95% processed on‑prem. BearGPT is live at UC Berkeley, UC ANR is in pilot, and we're refining deployment models that work for peer institutions while adding agentic capabilities alongside traditional chat.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness — our campus agentic development platform — reached V1 feature‑complete on Mac in June and is now being shared for broader evaluation. The Citizen Developer Program has a real platform for graduating sandbox experiments into production tools, and agentic app conversions are underway starting with HR systems like performance management.",
    },
    {
      label: "AI agents in production",
      body:
        "The Student Scheduling Assistant launched July 9, serving 20,000–40,000 students in waves, with Class Planner go‑live on July 20. The UC San Diego Assistant is live on the flagship mobile app, and enterprise data agents continue bridging natural language to structured data warehouse queries.",
    },
    {
      label: "Data platform modernization",
      body:
        "All‑in on Databricks as the migration target from SAP HANA, driven by HANA's 2027 paywall. RFI with migration partners underway, targeting a November recommendation. On the observability side, architecture is locked: OpenTelemetry collectors feed an open‑format data lake that vendor tools consume from — UCSD owns its telemetry data. Splunk stays for SecOps; OpenSearch for everything else.",
    },
    {
      label: "Expanding AI collaboration across higher ed",
      body:
        "Active conversations with peer health systems and California's community college system about extending UCSD's AI infrastructure model beyond our campus. Early‑stage but strategically aligned with positioning UC San Diego as an inference and AI services hub for the UC system and beyond.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
