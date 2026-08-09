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
  lastUpdated: "2026-08-09",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is at 73,000+ users with 309 billion tokens through our LLM gateway since January — 95% processed on‑prem. BearGPT is live at UC Berkeley, FredGPT at Fairleigh Dickinson, and UC Merced is online. We're refining deployment models for peer institutions while building agentic capabilities alongside traditional chat.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is in beta distribution with active development — faculty are piloting Canvas/Onyx integration for AI-assisted course content, and an educational series is taking shape on the Triton AI platform with a three-tier learning pathway. A token recharge policy is landing: on-prem models free for administrative use, cloud cost-recovered, research always pays. Privacy and data documentation in progress ahead of broader rollout.",
    },
    {
      label: "AI agents in production",
      body:
        "The Student Scheduling Assistant launched July 9 with Class Planner following July 20 — student waves are scaling with ongoing access support as enrollment grows. The UC San Diego Assistant is live on the flagship mobile app, and enterprise data agents continue bridging natural language to structured data warehouse queries. A new workstream is applying AI to business operations, starting with automating cash receipt matching for unapplied accounts.",
    },
    {
      label: "Data platform modernization",
      body:
        "Databricks is under active evaluation as a replacement for SAP HANA, with a decision target by end of August — SAP's renewal terms are still pending and factor heavily into the calculus. Materialize is being evaluated as a complementary real-time layer. The Activity Hub migration RFP is live with 57 vendors registered, targeting work to begin January 2027. On the observability side, architecture is locked: OpenTelemetry collectors feed an open-format data lake — UCSD owns its telemetry data. Splunk stays for SecOps; OpenSearch for everything else.",
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
