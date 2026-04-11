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
  "generatedAt": "2026-04-11T23:49:56.112Z",
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
      "raw": "# UCSD AI News — Week of April 6, 2026\n\n*Your weekly roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Microsoft added stronger controls for sensitive prompts and web searches, plus clearer dashboard reporting for adoption and satisfaction. For UCSD staff, that means safer day-to-day use and better visibility into how Copilot is being used across teams.\n  *Tool:* Microsoft Copilot with Data Protection\n\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Copilot in Word can now work with track changes, comments, tables of contents, and page formatting in a more structured way. That should make it more useful for policy drafts, reviews, and other documents where you need to see exactly what changed.\n  *Tool:* Copilot for Microsoft 365\n\n• **[Make the switch: Bring your AI memories and chat history to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/switch-to-gemini-app/)** — Google is rolling out tools that let people import chat history and saved preferences from other AI apps into Gemini. For UCSD staff trying Gemini, this lowers the setup friction and helps it feel useful faster instead of starting from a blank slate.\n  *Tool:* Google Gemini & NotebookLM\n\n## Coming Up: Trainings & Workshops\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — A practical walkthrough of TritonGPT’s first year, including MyDocuments, model switching, chat search, and chat sharing. *Recorded:* Recent recording\n\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — A grounded look at where AI tools like TritonGPT can speed up problem-solving, and where process improvement methods still matter. *Recorded:* Recent recording\n\n## TritonAI News\n\n• **[What Does It Mean To Learn With AI?](https://today.ucsd.edu/story/how-ai-is-showing-up-in-our-classrooms)** — UC San Diego is piloting an AI tutor that helps students work through problems instead of just handing over answers, while also building out its new undergraduate AI major.\n\n• **[Funding Fundamentals: 6 Dos and Don’ts from a UC San Diego Grant Writer](https://today.ucsd.edu/story/funding-fundamentals-6-dos-and-donts-from-qis-grant-writer)** — A Qualcomm Institute grant writer shares practical advice on where AI can help with proposal prep, and where human judgment still matters most.\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
