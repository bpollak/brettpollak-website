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
  "generatedAt": "2026-04-12T02:26:25.520Z",
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
      "toolUpdatesCount": 6,
      "tritonAiNewsCount": 0,
      "upcomingTrainingsCount": 2,
      "raw": "# UC San Diego AI Weekly Update\n\n*Week of April 6, 2026 — your roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n### TritonGPT\n\n• **[UI overhaul, multi-LLM support, enhanced context, and user customization.](https://tritonai.ucsd.edu/tritongpt/release-notes/4-2-2025-release.html)** — TritonGPT’s latest release adds a cleaner chat layout, grouped history, easier assistant switching, bigger context windows, and model choice between GPT-4o and Llama 3.3. For staff, that means less hunting around in the interface and more flexibility when a task needs either speed or stronger reasoning.\n\n### Zoom AI Companion\n\n• **[Release notes for the Zoom Workplace app](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061222)** — Zoom’s recent Workplace updates include a redesigned AI Companion onboarding flow that makes it easier to turn on meeting summaries, connect calendars, and set where summaries go. That should make setup less finicky for staff who want AI notes without digging through portal settings.\n\n### Microsoft Copilot with Data Protection\n\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Microsoft added stronger admin controls around sensitive prompts, web searches, and Copilot usage reporting. For UC San Diego teams, that matters because it gives security and IT admins more visibility while keeping everyday Copilot use inside better guardrails.\n\n### Copilot for Microsoft 365\n\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Copilot in Word can now work with tracked changes, comments, tables of contents, headers, footers, and page numbers in one workflow. If you draft reports, policies, or review-heavy documents, this should cut down the back-and-forth cleanup after Copilot writes.\n\n### Google Gemini & NotebookLM\n\n• **[The Gemini app can now generate interactive simulations and models.](https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/)** — Gemini can now build interactive visualizations directly in chat instead of only returning static text or diagrams. That makes it more useful for explaining a process, testing assumptions, or turning a complex idea into something easier to explore.\n• **[Try notebooks in Gemini to easily keep track of projects](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)** — Google added notebooks in Gemini that sync with NotebookLM, giving you one place to keep chats, files, and instructions for longer-running work. For staff, this is a practical upgrade if you’re juggling meeting notes, PDFs, and draft content across the same project.\n\n## Coming Up: Trainings & Workshops\n\n### Upcoming Events\n\nNo events scheduled in the next two weeks. See the [full training catalog](https://tritonai.ucsd.edu/training-resources/) for later dates.\n\n### Recent Recordings\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — A walkthrough of TritonGPT’s first year, including MyDocuments, model switching, chat search, and chat sharing.\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — A practical comparison of process improvement methods and where TritonGPT can help streamline day-to-day work.\n\n## TritonAI News\n\nNo new announcements this week — see the latest at https://tritonai.ucsd.edu/\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
