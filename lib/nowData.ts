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
  lastUpdated: "2026-05-17",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is moving from UC San Diego's flagship to a multi-campus platform — Baylor University is evaluating adoption, and we're seeing expansion interest beyond our existing partnerships. The infrastructure is proven; now it's about scaling the deployment model and helping peer institutions adopt the vertical AI approach.",
    },
    {
      label: "Governed AI enablement",
      body:
        "Rolling out the Citizen Developer Program — campus staff, researchers, and faculty building AI-powered apps through TritonAI with guardrails, metering, and oversight. Moving from sandbox proposal to 'both and' consensus (desktop + enterprise tier) with formal approval phase underway.",
    },
    {
      label: "AI agents in production",
      body:
        "Shifting from exploration to implementation. AWS Bedrock agents for observability, recruitment intelligence agents for hiring workflows, and enterprise data agents that bridge natural language to structured queries. Governance and guardrails are built in, not added later.",
    },
    {
      label: "Data and observability foundation",
      body:
        "Completed Databricks POC and approved observability team restructure. OpenTelemetry standardization across Splunk and Databricks; FinOps visibility finally getting integrated into financial operations. The infrastructure Brett's team owns now spans AI, analytics, and cost accountability.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
