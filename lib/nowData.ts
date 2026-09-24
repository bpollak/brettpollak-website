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
  lastUpdated: "2026-09-20",
  location: "San Diego, California",
  intro:
    "A short record of where my attention is going, at UC San Diego and on the apps I build. Updated when something material changes.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is available across campus, and the default model now runs on university-hosted infrastructure, so routine campus AI traffic stays on UC-controlled hardware. Voice mode and a coding sandbox are live in the assistant, and supervised agent workflows operate inside campus systems. This month the assistant became an LTI tool in the learning management system, so courses can use it without a separate login.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is moving from pilot to a supported build path for development teams, with a broader rollout planned this fall. The usage model is set: on-premises inference is free for administrative use, while cloud usage requires a funding source.",
    },
    {
      label: "AI workflow pilots and services",
      body:
        "The Student Scheduling Assistant is live for fall planning and seeing record use, alongside a voice assistant in the campus mobile app that answers questions using live university data. Other work includes natural-language access to structured data, automated transfer credit evaluation, academic integrity triage, and student success analytics.",
    },
    {
      label: "Student system stabilization",
      body:
        "The student system held through fall enrollment after a difficult summer, though a rough second pass kept the team firefighting. The longer-term replacement path is firming around the class-planning tool, which has doubled in use.",
    },
    {
      label: "Data platform modernization",
      body:
        "The lakehouse migration off our legacy data warehouse is in evaluation: the RFP closed with about ten bids, and the field is narrowing toward a hybrid architecture, one platform for data engineering and another for integration and governance. Decision likely December as vendor pricing converges. On the observability side, architecture is locked: open-format telemetry feeds a data lake that vendor tools consume from. UC San Diego owns its telemetry data.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "The shared AI platform now runs assistants for several other campuses, and the newest partner went live this month. The bigger effort is a shared GPU strategy for data science and machine learning, which has received funding and is moving forward, plus a proposal for a small central team to coordinate access to AI platform capabilities.",
    },
    {
      label: "Core infrastructure consolidation",
      body:
        "We finished moving about 1,500 virtual machines to an alternative hypervisor in roughly seven months, and UC San Diego is now a reference campus for peers working through the same licensing shift. Now the question is the main on-campus data center: the colocation model is set and the first partner racks arrive this fall, but ownership and funding are still to land.",
    },
    {
      label: "Identity management",
      body:
        "Kicked off a project to rebuild the identity registry as the foundation for access management. Starting with the registry itself before tackling downstream automation. Alignment with the health sciences side of campus is a key risk we're managing.",
    },
    {
      label: "Systemwide and national AI strategy",
      body:
        "Contributing to the university system's position on systemwide AI licensing, pushing API-first access over single-vendor lock-in. Full terms are now on the table and the decision lands with the Regents by December. I also joined the NASH AI Advisory Board, the first national AI effort built exclusively for public higher education systems, on its Data Infrastructure & Privacy working group.",
    },
    {
      label: "The apps I build",
      body:
        "Outside the day job I build iOS apps, and all three shipped this month. Resolution Companion added coach check-ins. Horse Racing Companion is ready for the fall meet. Steel City Gameday launched for the 2026 season.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
