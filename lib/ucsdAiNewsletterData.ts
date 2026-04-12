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
  "generatedAt": "2026-04-12T00:19:18.935Z",
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
      "toolUpdatesCount": 5,
      "tritonAiNewsCount": 1,
      "upcomingTrainingsCount": 2,
      "raw": "# UC San Diego AI Weekly Update\n\n*Week of April 6, 2026 — your roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **[Zoom improved AI Companion setup for Workplace Pro users](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061222)** — Zoom’s March 24 release added a redesigned onboarding widget for AI Companion, making it easier to turn on meeting summaries, connect calendars, and route summaries where you need them. For UC San Diego staff, that should mean less setup friction before using AI features in meetings. (Tool: Zoom AI Companion)\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Microsoft added stronger data loss prevention controls for Copilot prompts and web-grounded searches, plus more admin visibility into adoption and oversharing risks. For staff using Copilot with Data Protection, this matters because it strengthens guardrails while keeping the chat experience usable for everyday work. (Tool: Microsoft Copilot with Data Protection)\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Microsoft introduced tracked edits, contextual comments, table-of-contents updates, and page-formatting actions directly through Copilot in Word. That should make it easier to clean up reports, policies, and other shared documents without losing review history. (Tool: Copilot for Microsoft 365)\n• **[Try notebooks in Gemini to easily keep track of projects](https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/)** — Google rolled out notebooks that sync between Gemini and NotebookLM, giving you one place to organize chats, files, and project context. For UCSD staff, this is a practical way to keep source material together for longer-running research, planning, and writing work. (Tool: Google Gemini & NotebookLM)\n• **[The Gemini app can now generate interactive simulations and models](https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/)** — Gemini can now turn some prompts into interactive visualizations, including charts and simulations you can adjust inside the chat. That could be useful when you need to explain a process, test assumptions, or explore a concept before building slides or documentation. (Tool: Google Gemini & NotebookLM)\n\n## Coming Up: Trainings & Workshops\n\n### Upcoming Events\n\nNo events scheduled in the next two weeks. See the [full training catalog](https://tritonai.ucsd.edu/training-resources/) for later dates.\n\n### Recent Recordings\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — A practical look at TritonGPT’s first year, including MyDocuments, model switching, chat search, and sharing features.\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — A walkthrough of how TritonGPT and other AI tools can support workflow improvement alongside more traditional process methods.\n\n## TritonAI News\n\n• **[What Does It Mean To Learn With AI?](https://today.ucsd.edu/story/how-ai-is-showing-up-in-our-classrooms)** — UC San Diego highlights how faculty are piloting course-specific AI tutors and how the campus’s new undergraduate AI major is preparing students to build and question AI systems.\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
