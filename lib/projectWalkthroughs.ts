export type ProjectWalkthrough = {
  image: string; imageAlt: string; imageCaption: string; imageWidth: number; imageHeight: number;
  slug: string; title: string; group: string; category: string; status: string; description: string; purpose: string; features: string[]; steps: string[][]; boundary: string; publicUrl?: string; publicLabel?: string; creditUrl?: string; creditLabel?: string;
};

export const projectWalkthroughs: ProjectWalkthrough[] = [
  {
    "slug": "resolution-companion",
    "image": "/resolution-companion.webp",
    "imageAlt": "Resolution Companion screens showing the journey calendar, today view, and AI coach",
    "imageCaption": "Screens from the public app site, resolutioncompanion.com, captured September 8, 2026.",
    "imageWidth": 900,
    "imageHeight": 1280,
    "title": "Resolution Companion",
    "group": "personal-apps",
    "category": "AI-powered habit building",
    "status": "Available on iOS · v1.4.0",
    "description": "An iPhone app for identity-based habit change: define who you're becoming, complete small daily actions, and review progress with an AI coach. Version 1.4.0 is now live on the App Store.",
    "purpose": "Most habit apps count streaks, and one broken streak ends the habit. Resolution Companion starts from identity instead: name who you are becoming, then log small daily actions that reinforce it, with an AI coach in the loop for the days when motivation runs out.",
    "features": [
      "Identity-based plans, not streak counts",
      "One small habit at a time, with a two-minute version of every action",
      "AI Coach: build your starting plan in two steps, then chat-based check-ins",
      "Journey calendar with direct habit editing and recovery for interrupted replies",
      "Plans and progress stay on the device"
    ],
    "steps": [
      [
        "Define who you're becoming",
        "Talk with AI Coach to shape one small habit, then review the plan summary and schedule before your first day."
      ],
      [
        "Act today",
        "Each day shows the next small action, with the full version or its two-minute kickstart. One missed day never erases the record."
      ],
      [
        "Review with the coach",
        "Chat-based check-ins, weekly reviews, and direct habit adjustments from the Journey calendar. Nothing changes until it is confirmed."
      ]
    ],
    "boundary": "Resolution Companion is live on the App Store with a free core and an optional Premium subscription. Plans and actions are stored on the device; the AI coach provides motivational and informational guidance only. Version 1.4.0 was approved by Apple and is available now (September 8, 2026).",
    "publicUrl": "https://resolutioncompanion.com/",
    "publicLabel": "Visit the app's website",
    "creditUrl": "https://apps.apple.com/us/app/resolution-companion-ai-coach/id6757996708",
    "creditLabel": "Download on the App Store"
  },
  {
    "slug": "horse-racing-companion",
    "image": "/horse-racing-companion-framed.png",
    "imageAlt": "Horse Racing Companion iPhone app showing race day picks and analysis",
    "imageCaption": "Screens from the public app site, horseracingcompanion.com, captured September 8, 2026.",
    "imageWidth": 691,
    "imageHeight": 1391,
    "title": "Horse Racing Companion",
    "group": "personal-apps",
    "category": "Independent race-day analysis",
    "status": "Available on iOS · Del Mar 2026 season",
    "description": "An independent iPhone app for Del Mar race days: one pick per race with the reasons, every horse's estimated win chance, and a saved record of each final pick beside the official result. Live on the App Store through the 2026 season.",
    "purpose": "A day at Del Mar had one frustrating part: the betting window. Horse Racing Companion weighs public odds, past Del Mar results for horses, trainers, jockeys, and post position the same way for every race — and says so when the information is not there.",
    "features": [
      "One pick per race: Win, Show, or a three-horse Trifecta box",
      "Estimated win chance for every horse in the race",
      "Odds, scratches, and post times rechecked until just before post",
      "Final picks saved before post and kept beside official results",
      "Public record: 31 of 72 final picks matched across ten tracked cards"
    ],
    "steps": [
      [
        "Read the day's card",
        "The Races tab lists every Del Mar race with post time, surface, and distance, with the next race first. Live picks open about two hours before first post."
      ],
      [
        "See the pick and the reasons",
        "Each race shows the pick, a confidence meter, and a short explanation, plus every horse with jockey, trainer, odds, and estimated win chance."
      ],
      [
        "Check the record",
        "About two minutes before post the pick is saved. The Results tab shows it beside the official finish, marked Matched or Did Not Match, with a summary for each race day."
      ]
    ],
    "boundary": "Horse Racing Companion is an independent app and is not affiliated with Del Mar Thoroughbred Club. It has no bet slip, wagering account, or connection to a betting operator, and it never places a wager. The tracked record — 31 of 72 final picks matched (43.1%) across ten cards, August 20 to September 4, 2026 — is a small sample that does not establish profitability or a betting edge. For adults 18+.",
    "publicUrl": "https://horseracingcompanion.com/",
    "publicLabel": "Visit the app's website",
    "creditUrl": "https://apps.apple.com/us/app/horse-racing-companion/id6802113749",
    "creditLabel": "Download on the App Store"
  },
  {
    "slug": "steel-city-gameday",
    "image": "/steel-city-gameday.png",
    "imageAlt": "Steel City Gameday with a private Crew room and a live Flash Pick",
    "imageCaption": "Screens from the public app site, steelcitygameday.com, captured September 8, 2026.",
    "imageWidth": 1200,
    "imageHeight": 630,
    "title": "Steel City Gameday",
    "group": "personal-apps",
    "category": "Sports group experience",
    "status": "In App Store review · Fall 2026",
    "description": "A private iPhone app for Steelers fans: invite-only Crews share game-day chat, pregame picks, timed live polls, and season-long standings. Currently in App Store review ahead of the fall 2026 season.",
    "purpose": "Watching the game apart is normal now, but group texts lose the season. Steel City Gameday turns the people you watch with into a Crew and gives every game a scored record that lasts all year.",
    "features": [
      "Invite-only Crews — no public feed",
      "Pregame picks, editable until kickoff and private until they lock",
      "Timed Flash Picks while the game is live",
      "Season standings, receipts, and quarter races",
      "The Wire: Steelers headlines from original publishers, refreshed every 15 minutes"
    ],
    "steps": [
      [
        "Start a Crew",
        "Create a private Crew for family, college friends, or whoever you watch with. Members join by invite link only."
      ],
      [
        "Make picks before and during the game",
        "Answer pregame questions — who wins, total points, first touchdown — then timed Flash Picks while the game is live. Picks stay private until they lock."
      ],
      [
        "Keep the season tally",
        "Correct answers earn points, every game leaves a receipt, and Crew standings carry the season. The Wire keeps Steelers news alongside."
      ]
    ],
    "boundary": "Steel City Gameday is in App Store review as of September 8, 2026, built for the 2026 NFL season. Crews are private and join by invite only. Picks are for entertainment; there is no wagering, entry fee, or prize of monetary value. Crew chat is free; scored picks and standings are free for the first five played games, then a one-time 2026 Season Pass.",
    "publicUrl": "https://steelcitygameday.com/",
    "publicLabel": "Visit the app's website"
  },
  {
    "slug": "numbers-game-hq",
    "image": "/project-numbers-game-hq.png",
    "imageAlt": "Numbers Game HQ Waivers screen captured in the iOS simulator",
    "imageCaption": "Actual iOS simulator capture from September 5, 2026. The QA session uses test players and values, not a live league.",
    "imageWidth": 1206,
    "imageHeight": 2622,
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
    "boundary": "This is a private app, not a public download. The simulator capture uses test data and contains no private account information."
  },
  {
    "slug": "student-experience",
    "image": "/project-student-experience.png",
    "imageAlt": "Student Experience web prototype showing its Today view",
    "imageCaption": "Live web prototype captured September 7, 2026. Student records shown are the application\u2019s built-in sample data.",
    "imageWidth": 1280,
    "imageHeight": 900,
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
    "boundary": "The web demonstrator uses sample student records and transactions. It is not a live student system. The mobile prototype adapts the existing UC San Diego Campus Mobile application; my work includes the navigation and flagship experience, building on that team\u2019s code. Live integration and release readiness vary by platform.",
    "publicUrl": "https://ucsd-student-experience.vercel.app/",
    "publicLabel": "Open the sample-data web demo",
    "creditUrl": "https://github.com/UCSD/campus-mobile",
    "creditLabel": "UC San Diego Campus Mobile source"
  },
  {
    "slug": "passports-visitor-management",
    "image": "/project-passports-visitor-management.png",
    "imageAlt": "Passports Visitor Management location check-in screen",
    "imageCaption": "Live visitor check-in entry page captured September 7, 2026.",
    "imageWidth": 1280,
    "imageHeight": 900,
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
    "boundary": "This is a prototype overview, not an announcement of a campus service rollout. The public entry page was reviewed; end-to-end check-in and staff-dashboard behavior have not been independently verified for this walkthrough. No visitor records are shown."
  },
  {
    "slug": "school-brief",
    "image": "/project-school-brief-workspace.png",
    "imageAlt": "School Brief dashboard showing attention summaries and parent follow-up controls",
    "imageCaption": "Cropped from the running app on September 7, 2026, with no student data connected. Counts and lists show the empty state.",
    "imageWidth": 1220,
    "imageHeight": 588,
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
    "boundary": "The application is private. The capture shows its dashboard with no student records connected. Collectors are read-only; the app does not submit assignments, send Classroom messages, or change grades."
  },
  {
    "slug": "tritonverify",
    "image": "/project-tritonverify-workspace.png",
    "imageAlt": "TritonVerify agent console showing the verification-session form and policy guidance",
    "imageCaption": "Captured from the running local app on September 7, 2026. The session form is empty and the staff directory is disconnected.",
    "imageWidth": 1280,
    "imageHeight": 900,
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
    "boundary": "Agent access is restricted. This walkthrough does not expose identities, challenge links, or staff records, and it does not claim a campus-wide production rollout."
  },
  {
    "slug": "process-discovery",
    "image": "/project-process-discovery-workspace.png",
    "imageAlt": "Process Discovery interview-template editor showing persona, opening line, and interview sections",
    "imageCaption": "Cropped from the running local app on September 7, 2026. This is the built-in administrative-workflow template; no staff interviews are loaded.",
    "imageWidth": 1210,
    "imageHeight": 810,
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
    "boundary": "The console is invitation-only. This page contains no staff interviews or transcripts. An opportunity in the backlog is a proposal for review, not a decision to automate someone\u2019s work."
  },
  {
    "slug": "reviewdraft",
    "image": "/project-reviewdraft-workspace.png",
    "imageAlt": "ReviewDraft self-assessment workspace with review-period, goals, and supervisor-feedback fields",
    "imageCaption": "Captured from the running local app on September 7, 2026, with an empty database and disconnected private sources. The form shows the app\u2019s default review period.",
    "imageWidth": 1280,
    "imageHeight": 900,
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
    "boundary": "This is a local proof of concept, not an institutional performance-management service. The self-assessment workspace was run locally for this capture. No employee records or evaluations are shown here."
  }
];
