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
  "generatedAt": "2026-04-11T21:47:04.572Z",
  "weekLabel": "Week of April 6–12, 2026",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "publishedThrough": "April 6, 2026",
  "editionCount": 1,
  "itemCount": 9,
  "editions": [
    {
      "isoDate": "2026-04-06",
      "displayDate": "Monday, April 6",
      "sourceFile": "ucsd-ai-newsletter-2026-04-06.md",
      "toolUpdatesCount": 4,
      "tritonAiNewsCount": 2,
      "upcomingTrainingsCount": 3,
      "raw": "# UCSD AI News — Week of April 6, 2026\n\n*Your weekly roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **Gemini notebooks now sync with NotebookLM for project work** — Google added notebooks in Gemini so you can keep chats, files, and instructions together for longer projects, then pick up the same notebook in NotebookLM. For staff doing research, writing, or planning work across multiple documents, this makes it easier to keep context in one place instead of rebuilding it each time.\n  *Tool:* Google Gemini • *Source:* https://blog.google/innovation-and-ai/products/gemini-app/notebooks-gemini-notebooklm/\n\n• **NotebookLM notebooks now show up directly inside Gemini** — Google’s new help update confirms that notebooks created in NotebookLM can now appear in Gemini, with source changes and instructions syncing across both apps. That means less copying between tools and a clearer split between focused source-grounded work in NotebookLM and broader brainstorming in Gemini.\n  *Tool:* NotebookLM • *Source:* https://support.google.com/notebooklm/answer/17003757\n\n• **Copilot for Microsoft 365 is expanding into more Teams conversations** — Microsoft says Microsoft 365 Copilot Chat is now available in Teams chats, channels, calling, and meetings. For UCSD staff already living in Teams, that means less app-switching when you want a quick summary, draft, or follow-up during collaboration.\n  *Tool:* Copilot for Microsoft 365 • *Source:* https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes\n\n• **Copilot can now analyze files it finds through chat search** — Microsoft updated Copilot so its code interpreter can work on files surfaced through enterprise search, even if you did not manually upload them first. In practice, that should cut a few steps when you need Copilot to summarize, chart, or inspect a spreadsheet or document you already have stored in Microsoft 365.\n  *Tool:* Microsoft Copilot with Data Protection • *Source:* https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes\n\n## TritonAI News\n\n• **New chip design could boost efficiency of power management in data centers** — UC San Diego engineers developed a chip design that improved high-voltage to low-voltage conversion efficiency in lab tests, with potential relevance for future AI and high-performance computing infrastructure.\n  *Source:* https://today.ucsd.edu/story/new-chip-design-could-boost-efficiency-of-power-management-in-data-centers\n\n• **Scripps and San Diego Zoo Wildlife Alliance launch a new conservation partnership** — The new ARCH partnership will use tools including digital twins, biobanking, and machine learning to support conservation research and student learning.\n  *Source:* https://today.ucsd.edu/story/scripps-institution-of-oceanography-and-san-diego-zoo-wildlife-alliance-partner-for-conservation\n\n## Coming Up: Trainings & Workshops\n\n📼 **AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future** — A practical look back at TritonGPT’s first year, including MyDocuments, model switching, chat search, and chat link sharing.\n  *Watch:* https://youtu.be/qaRfaAzmBEs\n\n📼 **AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence** — This session compares process improvement methods with AI tools and shows where TritonGPT can help streamline workflow and problem-solving.\n  *Watch:* https://youtu.be/tAnnUlRP2uo?feature=shared\n\n📼 **AI Webinar #3 - Blueprint Revealed: Inside TritonGPT** — A deeper walkthrough of how TritonGPT works and how staff can think about using it more effectively in day-to-day tasks.\n  *Watch:* https://youtu.be/7_gaYWEMsOY\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*"
    }
  ]
};
