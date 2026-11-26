export type ProjectWalkthrough = {
  image: string; imageAlt: string; imageCaption: string; imageWidth: number; imageHeight: number;
  slug: string; title: string; group: string; category: string; status: string; description: string; purpose: string; features: string[]; steps: string[][]; boundary: string; publicUrl?: string; publicLabel?: string; creditUrl?: string; creditLabel?: string;
  /** Optional gallery of additional app screens below the hero image. */
  gallery?: { image: string; alt: string; width: number; height: number; caption: string }[];
};

export const projectWalkthroughs: ProjectWalkthrough[] = [
  {
    "slug": "resolution-companion",
    "image": "/resolution-companion-social.webp",
    "imageAlt": "Resolution Companion: a real app screen showing a reading habit and its two-minute alternative, with the app name and tagline.",
    "imageCaption": "Current social card from resolutioncompanion.com. App screens below show the core Today, Plan, Journey, and Coach flows; version 1.6.1 is live on the App Store.",
    "imageWidth": 1200,
    "imageHeight": 630,
    "title": "Resolution Companion",
    "group": "app-store",
    "category": "AI-powered habit building",
    "status": "Available on iOS as “Resolution: Habit Tracker” · v1.6.1",
    "description": "An iPhone app for identity-based habit change: define who you're becoming, complete small daily actions, and review progress with an AI coach. Version 1.6.1 is now live on the App Store.",
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
    "boundary": "Resolution Companion is live on the App Store with a free core and an optional Premium subscription. Plans and actions are stored on the device; the AI coach provides motivational and informational guidance only. Version 1.6.1 is live on the App Store as of November 11, 2026.",
    "gallery": [
      {
        "image": "/resolution-companion-screen-today.webp",
        "alt": "Resolution Companion Today screen showing identity, daily progress, and actions",
        "width": 603,
        "height": 1311,
        "caption": "Today: the daily ring and one or two small actions, each with a two-minute version."
      },
      {
        "image": "/resolution-companion-screen-plan.webp",
        "alt": "Resolution Companion plan summary screen from the two-step AI Coach setup",
        "width": 603,
        "height": 1311,
        "caption": "Your plan, before you start: review the habit and schedule the AI Coach drafted, then begin."
      },
      {
        "image": "/resolution-companion-screen-journey.webp",
        "alt": "Resolution Companion Journey screen with the calendar and notes",
        "width": 603,
        "height": 1311,
        "caption": "Journey: the calendar keeps the record. One missed day never erases the growth."
      },
      {
        "image": "/resolution-companion-screen-coach.webp",
        "alt": "Resolution Companion Coach screen with a conversation and quick review options",
        "width": 603,
        "height": 1311,
        "caption": "Coach: chat-based check-ins, weekly reviews, and plan adjustments you confirm."
      }
    ],
    "publicUrl": "https://resolutioncompanion.com/",
    "publicLabel": "Visit the app's website",
    "creditUrl": "https://apps.apple.com/us/app/resolution-habit-tracker/id6757996708",
    "creditLabel": "Download on the App Store"
  },
  {
    "slug": "horse-racing-companion",
    "image": "/horse-racing-companion-social.jpg",
    "imageAlt": "Horse Racing Companion app banner: neon racetrack light trails over a Del Mar night racing scene, with the tagline Picks backed by data. Not hunches.",
    "imageCaption": "The app's launch banner from the public app site, horseracingcompanion.com.",
    "imageWidth": 1200,
    "imageHeight": 630,
    "title": "Horse Racing Companion",
    "group": "app-store",
    "category": "Independent race-day analysis",
    "status": "Available on iOS · v1.0.3 · Bing Crosby fall meet Nov 6–29",
    "description": "An independent iPhone app for Del Mar race days: one pick per race with the reasons, every horse's estimated win chance, and a saved record of each final pick beside the official result. Version 1.0.3 puts the current meet on the Season Pass screen, grades dead heats by official finish position, and adds the fall Bing Crosby meet schedule alongside the Pool money card that shows exotic-pool prices beside the pick.",
    "purpose": "A day at Del Mar had one frustrating part: the betting window. Horse Racing Companion weighs public odds, past Del Mar results for horses, trainers, jockeys, and post position the same way for every race — and says so when the information is not there.",
    "features": [
      "One pick per race: Win, Show, or a three-horse Trifecta box",
      "Estimated win chance for every horse in the race",
      "Odds, scratches, and post times rechecked until just before post",
      "Final picks saved before post and kept beside official results",
      "Summer record: 47 of 105 final picks matched (44.8%) across 13 tracked cards",
      "Pool money card: exotic-pool prices beside the pick — information only, never a bet slip",
      "Fall Bing Crosby meet, November 6–29, included in the season pass"
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
    "boundary": "Horse Racing Companion is an independent app and is not affiliated with Del Mar Thoroughbred Club. It has no bet slip, wagering account, or connection to a betting operator, and it never places a wager. The tracked summer record — 47 of 105 final picks matched (44.8%) across 13 cards, August 20 through closing day September 7, 2026, with no pick in 16 of 121 settled races — is a small sample that does not establish profitability or a betting edge. The fall Bing Crosby meet (November 6–29) is included in the season pass at no additional charge. For adults 18+.",
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
    "group": "app-store",
    "category": "Sports group experience",
    "status": "Live on the App Store · Fall 2026",
    "description": "An iPhone app for Steelers fans: private invite-only Crews plus an optional public Crew for fan chat, with game-day picks, timed live polls, and season-long standings. Live on the App Store for the 2026 season.",
    "purpose": "Watching the game apart is normal now, but group texts lose the season. Steel City Gameday turns the people you watch with into a Crew and gives every game a scored record that lasts all year.",
    "features": [
      "Private Crews by invite, plus an optional public Crew for fan chat",
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
    "boundary": "Steel City Gameday is live on the App Store as of September 10, 2026, built for the 2026 NFL season. Crews are private and join by invite only. Picks are for entertainment; there is no wagering, entry fee, or prize of monetary value. Crew chat is free; scored picks and standings are free for the first five played games, then a one-time 2026 Season Pass.",
    "publicUrl": "https://steelcitygameday.com/",
    "publicLabel": "Visit the app's website",
    "creditUrl": "https://apps.apple.com/us/app/steel-city-gameday/id6806732803",
    "creditLabel": "Download on the App Store"
  },
  {
    "slug": "pocket-relay",
    "image": "/pocket-relay-social.png",
    "imageAlt": "Pocket Relay social card: the app's planet mascot beside the line \"Follow and steer your coding agent from your iPhone or iPad.\"",
    "imageCaption": "Social card from pocketrelay.app. The app screens below come from real agent sessions on the app's own public repositories, recorded November 23, 2026.",
    "imageWidth": 1200,
    "imageHeight": 630,
    "title": "Pocket Relay",
    "group": "app-store",
    "category": "Developer tools",
    "status": "Live on the App Store · v1.2.0",
    "description": "A free iPhone and iPad app that pairs with Google Antigravity on your own computer, so you can follow your coding agent, approve or deny its actions, and answer its questions away from your desk, at home or anywhere else. Version 1.2.0 is live on the App Store.",
    "purpose": "Coding agents now run for minutes at a time, and they stall the moment they need a person: a command to approve, a question to answer. Pocket Relay puts those moments on your phone, so a long task keeps moving while you are in a meeting or across the room.",
    "features": [
      "A one-line status of what the agent is doing right now",
      "Approve or deny commands and file edits, once or always",
      "Answer the agent's questions and send new prompts, including by voice",
      "Review file changes and watch terminals",
      "Works from anywhere: directly on your Wi-Fi, or through an end-to-end encrypted relay that cannot read your prompts or files"
    ],
    "steps": [
      [
        "Pair your computer",
        "Paste one command on your computer to install the free Pocket Relay Bridge, then scan its QR code. On the same Wi-Fi, a 6-digit code works too."
      ],
      [
        "Hand the agent a task",
        "Start from the phone or the desktop. The status line shows whether the agent is thinking, editing files, running commands, or finished."
      ],
      [
        "Step in when it asks",
        "Approval cards and questions arrive on the phone. Approve once, approve always, or deny, then read the result and the diff when it is done."
      ]
    ],
    "boundary": "Pocket Relay is an independent app, not made by or affiliated with Google. It is free on the App Store as of November 24, 2026, and requires iOS or iPadOS 26 or later. Away from home the phone reaches your computer through an end-to-end encrypted relay that cannot read prompts or files and stores nothing. Prompts and files go only to the AI providers configured on your own computer; the developer does not receive them.",
    "publicUrl": "https://pocketrelay.app/",
    "publicLabel": "Visit the app's website",
    "creditUrl": "https://apps.apple.com/us/app/pocket-relay-for-antigravity/id6837743748",
    "creditLabel": "Download on the App Store",
    "gallery": [
      {
        "image": "/pocket-relay-screen-working.webp",
        "alt": "Pocket Relay in a phone frame, showing the agent editing files while it adds a version flag to the bridge",
        "width": 600,
        "height": 1176,
        "caption": "Status: one line says what the agent is doing, here editing files while it adds a --version flag to the bridge."
      },
      {
        "image": "/pocket-relay-screen-approval.webp",
        "alt": "Pocket Relay in a phone frame: an approval card asking to run the bridge test suite, with Deny, Allow Once, and Always buttons",
        "width": 600,
        "height": 1176,
        "caption": "Approvals: the agent asks before running the test suite, and the answer is one tap."
      },
      {
        "image": "/pocket-relay-screen-finished.webp",
        "alt": "Pocket Relay in a phone frame, showing a finished task with the agent's summary of changes and verification",
        "width": 600,
        "height": 1176,
        "caption": "Finished: the agent's summary of what changed and how it checked the work."
      }
    ]
  },
  {
    "slug": "tritonai-harness-chat",
    "image": "/harness-chat-pocket.jpg",
    "imageAlt": "TritonAI Harness Chat on an iPhone: the TritonAI assistant asks \"What can I do for you?\" with suggested requests, under the line \"Your work computer, right in your pocket.\"",
    "imageCaption": "App Store screenshots of the built-in demo, which uses sample answers rather than anyone's real information.",
    "imageWidth": 598,
    "imageHeight": 1300,
    "title": "TritonAI Harness Chat",
    "group": "experiments",
    "category": "Mobile experiment for UC San Diego staff",
    "status": "Experimental beta · UC San Diego employees only",
    "description": "An experiment in reaching the TritonAI Harness from a phone. UC San Diego employees in the beta ask a question or hand off a small task on their iPhone, and the Harness on their Mac or PC does the work, with the answer coming back in one running conversation. It is a test of the idea, not a supported service, and it may or may not go further.",
    "purpose": "Staff do a lot of their work away from a desk: between meetings, on the way across campus, at the end of the day. The Harness already does real work on their computer with their files, calendar, and campus tools. This beta tests whether a simple chat on the phone is a good way to reach it, without asking anyone to learn projects, threads, or model settings.",
    "features": [
      "Ask in your own words; the Harness on your computer does the work",
      "Answers about how things are done at UC San Diego, with the source",
      "Drafts of emails, agendas, and summaries to copy or open in Mail and send yourself",
      "Scheduled routines, such as a morning brief or meeting prep",
      "Asks before opening a web page, and can ask before every step",
      "Requests and answers go only to your own computer"
    ],
    "steps": [
      [
        "Connect your computer",
        "Open the TritonAI Harness (0.4.2 or later) on your Mac or PC, create a one-time link, and scan it with the phone. Setup takes about two minutes, and a demo with sample answers works before you connect anything."
      ],
      [
        "Ask from your phone",
        "Type or speak a question or a small task. The Harness on your computer does the work with the files, calendar, and tools it already has, and the answer appears in the conversation."
      ],
      [
        "Stay in charge",
        "Approve steps when it asks, then review what it wrote. Drafts are for you to send yourself; nothing is sent on your behalf."
      ]
    ],
    "boundary": "An experiment, not a supported UC San Diego service. The beta is for UC San Diego employees who already use the TritonAI Harness on a Mac or PC, and it may or may not go further. The app is listed on the App Store, but apart from its demo it does nothing without a connected Harness: the computer has to be on with the Harness open, and the phone needs the same Wi-Fi, or Tailscale on both devices to work from anywhere. Requires iOS 18 or later.",
    "creditUrl": "https://apps.apple.com/us/app/tritonai-harness-chat/id6837802331",
    "creditLabel": "See the beta listing on the App Store",
    "gallery": [
      {
        "image": "/harness-chat-answer.jpg",
        "alt": "Harness Chat demo answering \"How do I get reimbursed for a conference trip?\" in three steps, with its source linked",
        "width": 598,
        "height": 1300,
        "caption": "Ask in your own words: a plain answer with the source it came from."
      },
      {
        "image": "/harness-chat-approval.jpg",
        "alt": "Harness Chat asking \"Open blink.ucsd.edu to look this up?\" with Yes once, No, and Yes and don't ask again buttons",
        "width": 598,
        "height": 1300,
        "caption": "Nothing happens without your OK: the assistant asks before it opens a web page."
      },
      {
        "image": "/harness-chat-draft.jpg",
        "alt": "Harness Chat showing a draft email about timesheets with Copy and Open in Mail buttons, and the note that nothing has been sent",
        "width": 598,
        "height": 1300,
        "caption": "Drafts you copy or open in Mail. Nothing is sent for you."
      },
      {
        "image": "/harness-chat-routines.jpg",
        "alt": "Harness Chat Scheduled screen with a weekday calendar check turned on and ready-made routines: Morning brief, Meeting prep, Needs a reply",
        "width": 598,
        "height": 1300,
        "caption": "Routines that run on your computer while you are away, with answers delivered to the conversation."
      }
    ]
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
    "status": "Early web prototype \u00b7 campus service now in production",
    "description": "The early campus visitor-management prototype behind UC San Diego's Passport Services check-in flow, with a location-based entry point and staff queue dashboard.",
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
    "boundary": "This walkthrough documents the early web prototype captured in September 2026. Passport Visitor Management has since moved into campus production at two UC San Diego locations (see the TritonAI portfolio overview). No visitor records are shown here."
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
    "slug": "tritonai-meeting-scheduler",
    "image": "/project-tritonai-scheduler.png",
    "imageAlt": "TritonAI Meeting Scheduler hero: an assistant for the back-and-forth, coordinating meeting times by email and placing agreed meetings on the calendar",
    "imageCaption": "Captured from the live scheduler page on brettcpollak.com, October 4, 2026.",
    "imageWidth": 1280,
    "imageHeight": 574,
    "title": "TritonAI Meeting Scheduler",
    "group": "campus-tools",
    "category": "Autonomous meeting coordination",
    "status": "Live assistant \u00b7 email-based",
    "description": "A scheduling assistant built with TritonAI that handles meeting coordination by email: it checks my calendar, negotiates times with attendees on its own, and books the agreed meeting with a Zoom link.",
    "purpose": "Scheduling a meeting means rounds of reply-all that nobody enjoys. The assistant carries that back-and-forth itself: I start it on a thread, it works out availability with the attendees, and the calendar invitation follows once everyone required agrees.",
    "features": [
      "Email-first coordination on existing threads",
      "Reads my Exchange calendar and proposes real availability",
      "Negotiates directly with attendees without copying me on every exchange",
      "Books the meeting with a Zoom link once everyone agrees",
      "Asks me when details are unclear; brings me back in after three unsuccessful rounds"
    ],
    "steps": [
      [
        "Start the conversation",
        "I add the assistant to an email thread with the meeting length and a preferred date range."
      ],
      [
        "It coordinates",
        "The assistant checks my calendar and emails available times to the attendees, working through replies until it finds a slot that works for everyone."
      ],
      [
        "The invitation follows",
        "Once everyone required agrees, it re-checks availability and sends the calendar invitation with a Zoom link, and lets me know it is booked."
      ]
    ],
    "boundary": "Meetings fit Monday through Friday, 8 AM to 5 PM Pacific, and are remote unless I specify otherwise. The assistant asks me before proceeding when a detail is missing or a reply is unclear. Email, calendar, and meeting services still handle the information needed to arrange the meeting.",
    "publicUrl": "https://brettcpollak.com/tritonai-meeting-scheduler",
    "publicLabel": "How it works for attendees"
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
