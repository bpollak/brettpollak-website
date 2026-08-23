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
  lastUpdated: "2026-08-23",
  location: "San Diego, California",
  intro:
    "What I'm focused on at UC San Diego and around it. Updated weekly when something material shifts.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT has grown to 73,000+ users, with the vast majority of inference processed on-prem through our LLM gateway. The platform is evolving beyond chat into agentic workflows, with new models and capabilities shipping in regular sprints.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is in beta distribution with strong early adoption across development teams. The usage recharge model is now finalized: on-prem inference is free for administrative use, while cloud usage requires a funding source. A privacy and data explainer is in progress before broader rollout.",
    },
    {
      label: "AI agents in production",
      body:
        "The Student Scheduling Assistant launched this summer, serving students in waves alongside the UC San Diego Assistant on the flagship mobile app. Enterprise data agents continue bridging natural language to structured data queries, and a pipeline of new agent concepts is forming around transfer credit evaluation, academic integrity triage, and student success analytics.",
    },
    {
      label: "Student system stabilization",
      body:
        "The student system cutover has been in crisis recovery through summer. Most students have booked classes, but thousands of transfer transcripts required an emergency automated processing pipeline to unblock registration. The team is at capacity, and we're beginning to scope the longer-term replacement path.",
    },
    {
      label: "Data platform modernization",
      body:
        "Evaluating lakehouse migration from our legacy data warehouse platform. The field has narrowed to a hybrid architecture: one platform for data engineering, another for integration and governance. Decision likely December as vendor pricing converges. On the observability side, architecture is locked: open-format telemetry feeds a data lake that vendor tools consume from. UC San Diego owns its telemetry data."
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "Developing a shared GPU strategy to support data science and machine learning needs, with a proposal forming for a small enabling team that would serve as a campus-facing front door for AI platform capabilities. Positioning UC San Diego as an inference and AI services provider for the UC system and beyond.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
