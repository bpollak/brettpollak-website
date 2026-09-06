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
  lastUpdated: "2026-09-06",
  location: "San Diego, California",
  intro:
    "A short record of the work taking most of my attention. Updated when something material changes.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is available across campus, with most inference still processed on-premises through the university's LLM gateway. Current work includes landing new models on the gateway, expanding developer access, and supervised agent workflows that operate inside campus systems.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is now a supported build path for development teams. The usage model is set: on-premises inference is free for administrative use, while cloud usage requires a funding source.",
    },
    {
      label: "AI workflow pilots and services",
      body:
        "The Student Scheduling Assistant is live for fall planning and seeing record use, alongside the UC San Diego Assistant in the campus mobile app. Other work includes natural-language access to structured data, automated transfer credit evaluation, academic integrity triage, and student success analytics.",
    },
    {
      label: "Student system stabilization",
      body:
        "The student system has stabilized after a difficult summer, and enrollment has recovered to near-normal levels. The team remains at capacity. The longer-term replacement path is taking shape around the class-planning tool, which has seen record adoption.",
    },
    {
      label: "Data platform modernization",
      body:
        "Evaluating lakehouse migration from our legacy data warehouse platform. The field has narrowed to a hybrid architecture: one platform for data engineering, another for integration and governance. Decision likely December as vendor pricing converges. On the observability side, architecture is locked: open-format telemetry feeds a data lake that vendor tools consume from. UC San Diego owns its telemetry data.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "Developing a shared GPU strategy for data science and machine learning, along with a proposal for a small central team to coordinate access to AI platform capabilities. The scope may include shared services for other UC locations.",
    },
    {
      label: "Core infrastructure consolidation",
      body:
        "We finished moving about 1,500 virtual machines to an alternative hypervisor in roughly seven months, and UC San Diego is now a reference campus for peers working through the same licensing shift. The bigger open question is the endgame for our main on-campus data center: ownership, funding, and whether to offer colocation to partner institutions.",
    },
    {
      label: "Identity management",
      body:
        "Kicked off a project to rebuild the identity registry as the foundation for access management. Starting with the registry itself before tackling downstream automation. Alignment with the health sciences side of campus is a key risk we're managing.",
    },
    {
      label: "Systemwide AI strategy",
      body:
        "Contributing to the university system's position on systemwide AI licensing, pushing API-first access over single-vendor lock-in. Also working with national higher-ed groups on shared AI standards for research institutions.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
