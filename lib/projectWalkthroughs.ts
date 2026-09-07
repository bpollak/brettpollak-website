export type ProjectWalkthrough = {
  slug: string; title: string; group: string; category: string; status: string; description: string; purpose: string; features: string[]; steps: string[][]; example: string; boundary: string; publicUrl?: string; publicLabel?: string; creditUrl?: string; creditLabel?: string;
};

export const projectWalkthroughs: ProjectWalkthrough[] = [
  {
    "slug": "numbers-game-hq",
    "title": "Numbers Game HQ",
    "group": "personal-apps",
    "category": "Fantasy football",
    "status": "Private iOS app \u00b7 walkthrough",
    "description": "A private iOS app for managing a fantasy-football team, with lineup, waiver, trade, and standings views plus an assistant that can work with league context.",
    "purpose": "Fantasy-football decisions depend on more than one player projection. This project brings team needs, league context, and follow-up into a mobile workspace.",
    "features": [
      "Lineup and roster views",
      "Waiver and trade workflows",
      "League-aware questions",
      "Background processing and notifications"
    ],
    "steps": [
      [
        "Review the team",
        "See the roster and league context before making a decision."
      ],
      [
        "Explore a move",
        "Compare lineup, waiver, or trade options and ask follow-up questions."
      ],
      [
        "Follow the outcome",
        "Use the activity log and notifications to track the work."
      ]
    ],
    "example": "A manager asks which bench player could cover a lineup gap, then reviews the options in the context of the rest of the team.",
    "boundary": "This is a private app, not a public download. The example here is illustrative and contains no real league or account data."
  },
  {
    "slug": "student-experience",
    "title": "Student Experience",
    "group": "campus-tools",
    "category": "Student services",
    "status": "Web and mobile prototypes",
    "description": "A student-experience prototype that brings academics, money, campus life, and services into one web portal, alongside a mobile adaptation of UC San Diego Campus Mobile.",
    "purpose": "Students should be able to understand what needs attention without piecing it together across unrelated screens. The web prototype explores a shared view of the day, upcoming work, and next steps.",
    "features": [
      "Daily priorities and next steps",
      "Academic and financial views",
      "Synthetic student scenarios",
      "Companion mobile prototype"
    ],
    "steps": [
      [
        "Start with today",
        "See the next class, upcoming work, and items needing attention."
      ],
      [
        "Review the context",
        "Move into academics, money, campus, or services for more detail."
      ],
      [
        "Find the next step",
        "Explore how a unified experience could guide a student through a task."
      ]
    ],
    "example": "A fictional student checks an upcoming class, reviews a balance after aid, and opens the next coursework item from one starting point.",
    "boundary": "The web demonstrator uses sample student records and transactions. It is not a live student system. The mobile prototype adapts the existing UC San Diego Campus Mobile application; my work includes the navigation and flagship experience, building on that team\u2019s code. Live integration and release readiness vary by platform.",
    "publicUrl": "https://ucsd-student-experience.vercel.app/",
    "publicLabel": "Open the sample-data web demo",
    "creditUrl": "https://github.com/UCSD/campus-mobile",
    "creditLabel": "UC San Diego Campus Mobile source"
  },
  {
    "slug": "passports-visitor-management",
    "title": "Passports Visitor Management",
    "group": "campus-tools",
    "category": "Visitor services",
    "status": "Web prototype \u00b7 walkthrough",
    "description": "A campus visitor-management prototype with a location-based check-in entry point for passport services.",
    "purpose": "A visitor\u2019s first step should be easy to find. This prototype presents the service location first and gives visitors a clear starting point for check-in.",
    "features": [
      "Location-based check-in",
      "Campus service entry page",
      "Visitor-facing web interface",
      "Employee dashboard entry"
    ],
    "steps": [
      [
        "Choose the location",
        "Start from the service location the visitor is attending."
      ],
      [
        "Begin check-in",
        "Follow the location-specific starting point."
      ],
      [
        "Connect the service workflow",
        "The app also includes an employee-dashboard entry for the staff side of the experience."
      ]
    ],
    "example": "A visitor arriving at a campus service counter chooses that location and starts the check-in flow.",
    "boundary": "This is a prototype overview, not an announcement of a campus service rollout. The public entry page was reviewed; end-to-end check-in and staff-dashboard behavior have not been independently verified for this walkthrough. No visitor records are shown."
  },
  {
    "slug": "school-brief",
    "title": "School Brief",
    "group": "personal-apps",
    "category": "Family organization",
    "status": "Private web app \u00b7 walkthrough",
    "description": "A private family dashboard that brings assignments, grade reports, and selected school notices into one place through read-only collectors.",
    "purpose": "School information arrives through several systems. This project creates a shared place for a family to review what is coming up and what may need attention.",
    "features": [
      "Assignment overview",
      "Grade-report context",
      "Selected school notices",
      "Private parent access"
    ],
    "steps": [
      [
        "Collect read-only updates",
        "Gather supported school information without submitting work or changing school records."
      ],
      [
        "Review the brief",
        "Bring assignments, reports, and selected notices into the private dashboard."
      ],
      [
        "Plan the follow-up",
        "Use the information to decide what to discuss or check next."
      ]
    ],
    "example": "A fictional family reviews an upcoming science assignment and a school notice before planning the week.",
    "boundary": "The application is private. This page uses an illustrative scenario, not student records. Collectors are read-only; the app does not submit assignments, send Classroom messages, or change grades."
  },
  {
    "slug": "tritonverify",
    "title": "TritonVerify",
    "group": "campus-tools",
    "category": "Service-desk identity verification",
    "status": "Restricted web prototype",
    "description": "A service-desk prototype for organizing remote identity verification into scoped sessions, email challenges, policy checks, and audit records.",
    "purpose": "Remote identity checks need a consistent process. TritonVerify explores how a service-desk agent can follow a defined verification workflow with a record of the steps taken.",
    "features": [
      "Scoped verification sessions",
      "Email-link challenges",
      "Policy checks and escalation",
      "Audit records"
    ],
    "steps": [
      [
        "Open a session",
        "An authorized agent begins a verification session for a support interaction."
      ],
      [
        "Follow the checks",
        "Apply the configured verification steps and escalation path."
      ],
      [
        "Record the outcome",
        "Retain the workflow outcome and audit events for follow-up."
      ]
    ],
    "example": "A fictional caller needs account help. An agent follows the verification workflow before continuing with the support request.",
    "boundary": "Agent access is restricted. This walkthrough does not expose identities, challenge links, or staff records, and it does not claim a campus-wide production rollout."
  },
  {
    "slug": "process-discovery",
    "title": "Process Discovery / Fable",
    "group": "campus-tools",
    "category": "Voice interviews",
    "status": "Private web app \u00b7 walkthrough",
    "description": "A voice-interview platform that collects descriptions of administrative work and organizes them into an evidence-backed backlog of possible automation projects.",
    "purpose": "Useful automation starts with understanding the work. This project connects structured interviews with a reviewable set of opportunities and the evidence behind them.",
    "features": [
      "Configurable interview templates",
      "Consent and interview flow",
      "Evidence-backed opportunity backlog",
      "Themes and review reports"
    ],
    "steps": [
      [
        "Set up the interview",
        "Define the questions, scope, and consent process for a campaign."
      ],
      [
        "Understand the work",
        "Collect a participant\u2019s description of recurring tasks and friction."
      ],
      [
        "Review opportunities",
        "Organize findings into themes and possible projects for human review."
      ]
    ],
    "example": "An illustrative interview describes repeatedly moving information between two systems. The reviewer examines the supporting evidence before deciding whether to investigate an integration.",
    "boundary": "The console is invitation-only. This page contains no staff interviews or transcripts. An opportunity in the backlog is a proposal for review, not a decision to automate someone\u2019s work."
  },
  {
    "slug": "reviewdraft",
    "title": "ReviewDraft",
    "group": "experiments",
    "category": "Performance-review drafting",
    "status": "Local prototype \u00b7 walkthrough",
    "description": "A local prototype for drafting staff performance reviews and self-assessments, with an editable document, a conversation panel, and supporting context.",
    "purpose": "Writing a review involves bringing together goals, self-assessments, and specific examples. ReviewDraft explores how those materials can support a draft that a supervisor reviews and edits.",
    "features": [
      "Review and self-assessment flows",
      "Editable drafting canvas",
      "Supporting-context sidebar",
      "Rating and narrative checks"
    ],
    "steps": [
      [
        "Gather the inputs",
        "Start with review-period goals, themes, and a self-assessment."
      ],
      [
        "Work on the draft",
        "Use an editable document alongside a conversation panel and supporting context."
      ],
      [
        "Review before use",
        "Check the narrative against the inputs and retain responsibility for the final assessment."
      ]
    ],
    "example": "Using invented goals and accomplishments, a supervisor develops a draft and checks that each statement has supporting context.",
    "boundary": "This is a local proof of concept, not an institutional performance-management service. Its source and design were reviewed, but current runtime readiness was not tested. No employee records or evaluations are shown here."
  }
];
