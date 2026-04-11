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
  "generatedAt": "2026-04-11T23:22:01.746Z",
  "weekLabel": "Week of April 6–12, 2026",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "publishedThrough": "April 6, 2026",
  "editionCount": 1,
  "itemCount": 7,
  "editions": [
    {
      "isoDate": "2026-04-06",
      "displayDate": "Monday, April 6",
      "sourceFile": "ucsd-ai-newsletter-2026-04-06.md",
      "toolUpdatesCount": 3,
      "tritonAiNewsCount": 2,
      "upcomingTrainingsCount": 2,
      "raw": "# UCSD AI News — Week of April 6, 2026\n\n*Your weekly roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Microsoft added track changes, comment handling, table of contents support, and page layout controls directly inside Copilot in Word. For staff, that means less manual cleanup when you are revising policy drafts, reports, or other shared documents that still need an audit trail.\n  *Tool:* Copilot for Microsoft 365\n\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Microsoft expanded admin controls for prompt protection, oversharing cleanup, and Copilot reporting. That matters for campus teams because it gives IT better ways to roll Copilot out safely while showing where people are actually getting value.\n  *Tool:* Microsoft Copilot with Data Protection\n\n• **[Try notebooks in Gemini to easily keep track of projects](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)** — Google introduced notebooks in Gemini that sync with NotebookLM, so chats, files, and instructions stay together for longer-running work. For staff, this is useful when a project spans multiple documents and you do not want to re-explain the same context every time.\n  *Tool:* Google Gemini & NotebookLM\n\n## Coming Up: Trainings & Workshops\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — Recent recording on TritonGPT’s first year, including MyDocuments, model switching, chat search, and sharing features.\n\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — Recent recording on where AI can speed up process improvement work and where traditional workflow methods still fit best.\n\n## TritonAI News\n\n• **[What Does It Mean To Learn With AI?](https://today.ucsd.edu/story/how-ai-is-showing-up-in-our-classrooms)** — UC San Diego faculty are testing course-specific AI tutors and expanding AI education, with an emphasis on helping students think through problems instead of just getting answers.\n\n• **[New Chip Design Could Boost Efficiency of Power Management in Data Centers](https://today.ucsd.edu/story/new-chip-design-could-boost-efficiency-of-power-management-in-data-centers)** — UC San Diego engineers published a new chip design aimed at making GPU power conversion more efficient, which is the kind of infrastructure work that supports larger-scale AI computing.\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
