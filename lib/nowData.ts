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
  lastUpdated: "2026-10-25",
  location: "San Diego, California",
  intro:
    "A short record of where my attention is going, at UC San Diego and on the apps I build. Updated when something material changes.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT is available across campus and runs by default on university-hosted infrastructure, so routine campus AI traffic stays on UC-controlled hardware. Voice mode and a coding sandbox are live in the assistant, and it now works as an LTI tool in the learning management system, so courses can use it without a separate login. The campus-wide launch for faculty and staff shipped with a full training program behind it. Earlier this month I delivered the campus leadership update on the citizen developer and sovereign AI pillars, and it turned into a much longer conversation than planned. University-wide sessions follow in November and December, with citizen developers co-presenting.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is out of pilot and is a supported build path for development teams, with a broad rollout and training program now live. The usage model is set: on-premises inference is free for administrative use, while cloud usage requires a funding source. Past 100 active users, so this is a product now, not a pilot.",
    },
    {
      label: "AI agents in the business of the university",
      body:
        "Agents are moving out of the assistant and into core workflows. Two are now live: one drafts compensation offers using peer benchmarks, and students and faculty request their own AI platform access through a self-service agent instead of a ticket queue. The near-term roadmap is locked: an institutional-data Q&A tool now live for leadership, automating cash application in the financial system, and an enterprise data agent demo. Next year's budget planning sharpens all of it. With a structural gap between cost growth and revenue growth, every plan is judged on what it does to labor and cost, not personal productivity.",
    },
    {
      label: "AI workflow pilots and services",
      body:
        "The Student Scheduling Assistant is live for fall planning and seeing record use, alongside a voice assistant in the campus mobile app that answers questions using live university data. Other work includes natural-language access to structured data, automated transfer credit evaluation, academic integrity triage, and student success analytics.",
    },
    {
      label: "Student system stabilization",
      body:
        "The student system held through fall enrollment after a difficult summer, and the class-planning tool has doubled in use as it becomes the go-to path for course planning. The work now is data quality cleanup and deciding the longer-term replacement path, which is firming around that same tool.",
    },
    {
      label: "Data platform modernization",
      body:
        "The lakehouse migration off our legacy data warehouse is in evaluation: the RFP closed with 19 bids, and the field is narrowing toward a hybrid architecture, one platform for data engineering and another for integration and governance. Vendor demos are running, with a decision likely December as pricing converges. The target architecture is firming: data lands in a lakehouse on university-owned cloud storage, and the reporting tools people already use stay as consumers. On the observability side, architecture is locked: open-format telemetry feeds a data lake that vendor tools consume from. UC San Diego owns its telemetry data. Endpoint security is moving to a shared systemwide product next year, with campus migration starting in the new year.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "The shared AI platform now runs assistants for several other campuses, and the newest partner went live in September. Two newer moves: a peer campus will start paying for gateway usage, a first step toward offering the gateway as a service, and a shared GPU cluster for data science and machine learning has received funding and is moving forward, with a smaller shared cluster for teaching and learning alongside it. The data science platform relaunches this month under a new name with refreshed documentation. A pilot systemwide inference service is taking shape: our campus provides the open-weight models, and three partner campuses consume them through our gateway. A small central team to coordinate access to AI platform capabilities is proposed.",
    },
    {
      label: "Core infrastructure consolidation",
      body:
        "We finished moving about 1,500 virtual machines to an alternative hypervisor in roughly seven months, and UC San Diego is now a reference campus for peers working through the same licensing shift. Now the question is the main on-campus data center: the colocation model is set, the first partner racks are arriving this month, but ownership and funding are still to land.",
    },
    {
      label: "Identity management",
      body:
        "Kicked off a project to rebuild the identity registry as the foundation for access management. Starting with the registry itself before tackling downstream automation. Alignment with the health sciences side of campus is a key risk we're managing.",
    },
    {
      label: "Systemwide and national AI strategy",
      body:
        "A systemwide AI council is now negotiating systemwide licensing directly with the major model providers, and I'm pushing API-first access over single-vendor lock-in. Contracts are expected soon, with final decisions landing with the Regents by December. Our campus AI strategy goes to the Regents this month. Separately, our campus is the on-premises and open-source tier of that strategy. I also joined the NASH AI Advisory Board, the first national AI effort built exclusively for public higher education systems, on its Data Infrastructure & Privacy working group. I'm co-writing an article for a UC technology publication on campuses sharing one open-weight platform, and a recorded podcast conversation on the same theme is coming.",
    },
    {
      label: "The apps I build",
      body:
        "Outside the day job I build iOS apps. Resolution Companion 1.6 just went to App Review, adding per-habit reminders. Horse Racing Companion is live, with the fall meet opening in early November. Steel City Gameday is mid-season with its public Crew feature live, and a fix for cross-game replies shipped this week.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
