export type UcsdAiNewsletterEdition = {
  isoDate: string;
  displayDate: string;
  sourceFile: string;
  toolUpdatesCount: number;
  tritonAiNewsCount: number;
  upcomingTrainingsCount: number;
  raw: string;
};

export type UcsdAiNewsletterData = {
  generatedAt: string;
  weekLabel: string;
  weekOf: string;
  weekEnding: string;
  publishedThrough: string;
  editionCount: number;
  itemCount: number;
  editions: UcsdAiNewsletterEdition[];
};

export const ucsdAiNewsletterData: UcsdAiNewsletterData = {
  "generatedAt": "2026-04-11T23:01:31.723Z",
  "weekLabel": "Week of April 6–12, 2026",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "publishedThrough": "April 6, 2026",
  "editionCount": 1,
  "itemCount": 8,
  "editions": [
    {
      "isoDate": "2026-04-06",
      "displayDate": "Monday, April 6",
      "sourceFile": "ucsd-ai-newsletter-2026-04-06.md",
      "toolUpdatesCount": 4,
      "tritonAiNewsCount": 2,
      "upcomingTrainingsCount": 2,
      "raw": "# UCSD AI News — Week of April 6, 2026\n\n*Your weekly roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **Zoom improves AI Companion setup for meetings** — Zoom updated the AI Companion onboarding flow so it is easier to turn on meeting help features and less likely to disappear because of admin settings. For UC San Diego staff, that should mean fewer clicks and less guesswork before using meeting summaries or Q&A.\n  *Tool:* Zoom AI Companion • *Source:* https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061222\n\n• **Copilot in Word adds workflow tools for document-heavy work** — Microsoft 365 Copilot now helps more with structured document tasks in Word, especially for legal, finance, and compliance-style workflows. For staff who spend time drafting or revising formal documents, this should reduce manual rework and make first drafts more usable.\n  *Tool:* Copilot for Microsoft 365 • *Source:* https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974\n\n• **Microsoft adds more Copilot controls and reporting** — Microsoft added new security, management, and analytics features for Copilot. For UC San Diego teams rolling out Copilot, that matters because admins can get better visibility into usage and apply tighter guardrails.\n  *Tool:* Copilot for Microsoft 365 • *Source:* https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476\n\n• **Google rolls more Gemini app updates into work features** — Google bundled recent Gemini app changes into its latest update round, including workflow improvements across the app experience. For staff using Gemini for drafting, summarizing, or quick research, this is the clearest vendor update page to watch for feature changes.\n  *Tool:* Google Gemini & NotebookLM • *Source:* https://blog.google/innovation-and-ai/products/gemini-app/gemini-drop-updates-march-2026/\n\n## Coming Up: Trainings & Workshops\n\n📼 **AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future** — A look back at TritonGPT’s first year, including new features like MyDocuments, model switching, chat search, and shared chat links.\n  *Watch:* https://youtu.be/qaRfaAzmBEs\n\n📼 **AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence** — A practical session on where AI helps with workflow improvement and how it differs from Lean Six Sigma methods.\n  *Watch:* https://youtu.be/tAnnUlRP2uo?feature=shared\n\n## TritonAI News\n\n• **New Chip Design Could Boost Efficiency of Power Management in Data Centers** — UC San Diego researchers developed a chip design that could help data centers use power more efficiently, a practical reminder that AI growth depends on smarter infrastructure too.\n  *Source:* https://today.ucsd.edu/story/new-chip-design-could-boost-efficiency-of-power-management-in-data-centers\n\n• **Scripps Oceanography and San Diego Zoo Wildlife Alliance Partner for Innovative Conservation Efforts** — UC San Diego highlighted a new conservation partnership this week. It is not a tool update, but it did appear in the same TritonAI-linked AI news feed used for this roundup.\n  *Source:* https://today.ucsd.edu/story/scripps-institution-of-oceanography-and-san-diego-zoo-wildlife-alliance-partner-for-conservation\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
