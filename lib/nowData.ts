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
  lastUpdated: "2026-07-26",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is at 73,000+ users with 309 billion tokens through our LLM gateway since January — 95% processed on‑prem. BearGPT is live at UC Berkeley, UC ANR renewal is in flight, and we're refining deployment models that work for peer institutions while adding agentic capabilities alongside traditional chat.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is in beta distribution — 22.5 billion tokens, 119 merged PRs, and 1,139 AI reviews in the first two and a half weeks. Microsoft Graph plugin is live in draft-only mode, OIA pen-tested it clean, and the team presented to 212 attendees at our AI Use Case Office Hours. Working on a privacy and data explainer before broader rollout.",
    },
    {
      label: "AI agents in production",
      body:
        "The Student Scheduling Assistant launched July 9 and Class Planner went live July 20, but TSS is crashing under launch-load concurrency. We built a stopgap caching app so students can still plan when TSS is down, and a weekend sprint shipped package-level deep links for the next 8,000-student wave. The UC San Diego Assistant is live on the flagship mobile app, and enterprise data agents continue bridging natural language to structured data warehouse queries.",
    },
    {
      label: "Data platform modernization",
      body:
        "Databricks remains the migration target from SAP HANA (2027 paywall), but the POC is currently blocked on vendor-side driver readiness — keeping pressure on the vendor while maintaining a parallel SAP baseline. On the observability side, architecture is locked: OpenTelemetry collectors feed an open-format data lake that vendor tools consume from — UCSD owns its telemetry data. Splunk stays for SecOps; OpenSearch for everything else.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "Aligning with HSDSC on a shared GPU strategy — keeping GPU workloads at SDSC, retrofitting TPCF for non-GPU compute, with RTX 6000 Blackwell as the primary hardware target and hardware refresh due FY28. The bigger picture: positioning UCSD as an inference and AI services provider for the UC system and beyond, with active conversations spanning CENIC, California's community colleges, and peer institutions.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
