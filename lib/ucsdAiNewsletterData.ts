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
  "generatedAt": "2026-04-12T00:05:50.374Z",
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
      "raw": "# UC San Diego AI Weekly Update\n\n*Week of April 6, 2026 — your roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Microsoft added track changes, comment handling, table of contents support, and page formatting actions inside Copilot in Word, which should make it easier to revise policy drafts, reports, and other high-stakes documents without losing the review trail. (Tool: Copilot for Microsoft 365)\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Admin controls now cover sensitive prompts and web-grounded searches, and the Copilot Dashboard adds richer usage and feedback reporting, which matters if your team wants more visibility before expanding Copilot use. (Tool: Microsoft Copilot with Data Protection)\n• **[The Gemini app can now generate interactive simulations and models](https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/)** — Gemini can now turn a prompt into an interactive visualization instead of a static answer, which could be useful when you need to explain a process, test a scenario, or learn something complex more quickly. (Tool: Google Gemini & NotebookLM)\n• **[Try notebooks in Gemini to easily keep track of projects](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)** — Google introduced notebooks that sync across Gemini and NotebookLM, giving you one place to keep files, chats, and instructions together for longer-running work instead of starting from scratch each time. (Tool: Google Gemini & NotebookLM)\n\n## Coming Up: Trainings & Workshops\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — A practical walkthrough of TritonGPT's newer features, including MyDocuments, model switching, chat search, and chat link sharing.\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — A useful session on where AI can speed up workflow improvement work, and where process discipline still matters.\n\n## TritonAI News\n\n• **[New Chip Design Could Boost Efficiency of Power Management in Data Centers](https://today.ucsd.edu/story/new-chip-design-could-boost-efficiency-of-power-management-in-data-centers)** — UC San Diego engineers built a chip design that handled a common data center voltage conversion with high efficiency, pointing to a possible path toward lower-power AI and GPU infrastructure.\n• **[Scripps Oceanography and San Diego Zoo Wildlife Alliance Partner for Innovative Conservation Efforts](https://today.ucsd.edu/story/scripps-institution-of-oceanography-and-san-diego-zoo-wildlife-alliance-partner-for-conservation)** — A new conservation partnership will use AI-driven digital twins and machine learning to model ecosystems, helping researchers test responses faster and at larger scale.\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
