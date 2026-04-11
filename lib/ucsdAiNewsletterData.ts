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
  "generatedAt": "2026-04-11T21:29:51.681Z",
  "weekLabel": "Week of April 6–12, 2026",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "publishedThrough": "April 6, 2026",
  "editionCount": 1,
  "itemCount": 3,
  "editions": [
    {
      "isoDate": "2026-04-06",
      "displayDate": "Monday, April 6",
      "sourceFile": "ucsd-ai-newsletter-2026-04-06.md",
      "toolUpdatesCount": 3,
      "tritonAiNewsCount": 0,
      "upcomingTrainingsCount": 0,
      "raw": "# UCSD AI News — Week of April 6, 2026\n\n*Your weekly roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **Zoom outlines more follow-through after meetings with AI Companion** — Zoom says it is expanding AI Companion from meeting summaries toward handling follow-up work such as drafting next steps, pulling context from past conversations, and preparing briefings. For UCSD staff, that points to less manual cleanup after meetings and fewer action items getting lost.\n  *Tool:* Zoom AI Companion • *Source:* https://www.zoom.com/en/blog/the-next-phase-of-work/\n\n• **Gemini can now build interactive visuals inside a chat** — Google says the Gemini app can now generate interactive simulations and models, not just static diagrams. That could make it easier for staff to explore a concept, explain an idea, or pressure-test assumptions without leaving the conversation.\n  *Tool:* Google Gemini • *Source:* https://blog.google/innovation-and-ai/products/gemini-app/3d-models-charts/\n\n• **Google is adding shared notebooks between Gemini and NotebookLM** — New notebooks let users organize files and chats for a project, then move between Gemini and NotebookLM with the same source set. For workflow-heavy work, that means less re-uploading, better continuity, and an easier way to keep a longer project in one place.\n  *Tool:* Google Gemini & NotebookLM • *Source:* https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/\n\n## TritonAI News\n\nNo new announcements this week — see the latest at https://tritonai.ucsd.edu/\n\n## Coming Up: Trainings & Workshops\n\nNo new trainings scheduled for the next two weeks. See the full catalog at https://tritonai.ucsd.edu/training-resources/\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*"
    }
  ]
};
