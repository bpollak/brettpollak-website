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
  lastUpdated: "2026-11-15",
  location: "San Diego, California",
  intro:
    "A short record of where my attention is going, at UC San Diego and on the apps I build. Updated when something material changes.",
  items: [
    {
      label: "AI as institutional infrastructure",
      body:
        "TritonGPT runs across campus and defaults to university-hosted infrastructure, so routine campus AI traffic stays on hardware we control. Voice, a code sandbox, and an LMS integration are live, so a course can use it without a separate login. In November we put the platform in front of campus in one session. About 600 people came, and the most useful feedback was the bluntest: the demos showed finished work instead of the first click. December's session is step by step, one tool at a time, watch then do. That critique turned into a five-session series we're putting in front of leadership for the spring. The Chancellor also announced that an AI council is forming, which is the right place for the governance question.",
    },
    {
      label: "Governed AI enablement",
      body:
        "The TritonAI Harness is a supported build path for development teams, with training behind it and more than 100 active users. The usage model is set: on-premises inference is free for administrative work, and cloud usage needs a funding source. Access stopped being the constraint this year. Fluency is the constraint now.",
    },
    {
      label: "AI agents in the business of the university",
      body:
        "Agents are moving out of the assistant and into core workflows. Two are live. One drafts compensation offers using peer benchmarks. The other lets students and faculty request their own AI platform access instead of filing a ticket. An institutional-data Q&A tool is live for leadership, and next in line is automating cash application in the financial system plus an enterprise data agent. Next year's budget sharpens all of it. With a structural gap between cost growth and revenue growth, every plan is judged on what it does to labor and cost, not personal productivity.",
    },
    {
      label: "AI workflow pilots and services",
      body:
        "The Student Scheduling Assistant is live and is where students now go to plan courses. A voice assistant in the campus mobile app answers questions from live university data. Other work in progress: natural-language access to structured data, automated transfer credit evaluation, academic integrity triage, and student success analytics.",
    },
    {
      label: "Student system stabilization",
      body:
        "The student system got through fall enrollment after a difficult summer, and stabilization is running longer than anyone planned. Data quality cleanup continues. The Class Planner is the path students actually use for course planning now, and it's the template the rest of the student-facing work extends from. The longer-term replacement path is firming around it.",
    },
    {
      label: "Data platform modernization",
      body:
        "The warehouse replacement came into focus this month, and it moved away from a full lakehouse build. The lean for now is a lower-cost managed path for the warehouse itself. An open table format pilot covers the activity data layer, and the hot tier stays in a streaming store. Cost forced the timing: the warehouse renewal, and a reporting platform renewal at more than double budget. The reporting tools people already use stay as consumers either way. On observability, open-format telemetry feeds a data lake that vendor tools read from, so we own the telemetry data.",
    },
    {
      label: "On-prem AI infrastructure and expansion",
      body:
        "The shared AI platform now runs assistants for several other campuses, and the newest partner went live in September. Two newer moves: a peer campus will start paying for gateway usage, a first step toward offering the gateway as a service, and a shared GPU cluster for data science and machine learning has received funding and is moving forward, with a smaller shared cluster for teaching and learning alongside it. The data science platform relaunched as PARASOL with refreshed documentation, and a school has invested in shared GPU compute that joins the existing teaching cluster. A pilot systemwide inference service is taking shape: our campus provides the open-weight models, and partner campuses consume them through our gateway. A small central team to coordinate access to AI platform capabilities is proposed.",
    },
    {
      label: "Core infrastructure consolidation",
      body:
        "We finished moving about 1,500 virtual machines to an alternative hypervisor in roughly seven months, and UC San Diego is now a reference campus for peers working through the same licensing shift. Now the question is the main on-campus data center: the colocation model is set and the first partner commitments are in place, but ownership and funding are still to land.",
    },
    {
      label: "Identity management",
      body:
        "The identity registry rebuild is underway, starting with the registry itself before downstream automation. Alignment with the health sciences side of campus is the main risk we're managing.",
    },
    {
      label: "Systemwide and national AI strategy",
      body:
        "A systemwide council is negotiating licensing with the major model providers, and I'm pushing API-first access over single-vendor lock-in. The offers on the table are shorter and thinner than what campuses actually need. December decisions at the Regents aren't a formality. Our campus is the on-premises and open-source tier of that strategy. I also sit on the NASH AI Advisory Board, the first national AI effort built only for public higher education systems, on its Data Infrastructure and Privacy working group. Its guiding questions came to me this month. My written answers are the campus position: one gateway in front of every model, access driven by data classification, metering from day one.",
    },
    {
      label: "The apps I build",
      body:
        "Resolution Companion 1.6.1 is live with the reminder and rating fixes. The next release is a New Year version, and the plan is proof before promotion: a small cohort uses it through December, a larger one in January, and the numbers decide whether a marketing push is worth it. Horse Racing Companion shipped its meet updates and is in the middle of the Del Mar fall meet. Steel City Gameday is mid-season with public Crew chat and weekly picks live.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
