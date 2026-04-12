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
  "generatedAt": "2026-04-12T00:27:10.114Z",
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
      "toolUpdatesCount": 4,
      "tritonAiNewsCount": 1,
      "upcomingTrainingsCount": 2,
      "raw": "# UC San Diego AI Weekly Update\n\n*Week of April 6, 2026 — your roundup of what's new with UC San Diego's supported AI services.*\n\n## What's New in Your AI Tools\n\n• **[Copilot in Word: New Capabilities for Document Workflows](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/copilot-in-word-new-capabilities-for-document-workflows/4508974)** — Copilot in Word can now turn on Track Changes, work with comments, and update headers, footers, page numbers, and tables of contents for you. For staff who draft policy, finance, or compliance documents, that means less cleanup after AI help and a clearer review trail inside Word. (Tool: Copilot for Microsoft 365)\n• **[Latest enhancements for Copilot security, management, and analytics](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/latest-enhancements-for-copilot-security-management-and-analytics/4508476)** — Microsoft added stronger admin controls for Copilot prompts and web searches, plus better dashboard reporting on adoption, satisfaction, and usage patterns. If your team uses Copilot with campus data protection requirements, this matters because IT can tighten guardrails without shutting the tool down. (Tool: Microsoft Copilot with Data Protection)\n• **[What’s New in Microsoft 365 Copilot | March 2026](https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-365-copilot--march-2026/4506322)** — March brought practical upgrades across Teams, Excel, Word, and PowerPoint, including video recap in Copilot Chat, better context in Excel, automatic citations in Word, and one-click format cleanup in PowerPoint. The useful takeaway for staff is that more routine meeting follow-up, spreadsheet edits, and slide polishing can now happen inside the apps you already use. (Tool: Copilot for Microsoft 365)\n• **[New ways to create faster with Gemini in Docs, Sheets, Slides and Drive](https://blog.google/products-and-platforms/products/workspace/gemini-workspace-updates-march-2026/)** — Google is expanding Gemini so it can draft documents from your files and email, build spreadsheets from a prompt, create slides, and answer questions across Drive content. For staff, that points to less copy-pasting between tools and faster first drafts when you're building docs, trackers, decks, or pulling together reference material. (Tool: Google Gemini & NotebookLM)\n\n## Coming Up: Trainings & Workshops\n\n### Upcoming Events\n\nNo events scheduled in the next two weeks. See the [full training catalog](https://tritonai.ucsd.edu/training-resources/) for later dates.\n\n### Recent Recordings\n\n📼 **[AI Webinar #6 - One Year of Innovation with TritonGPT: Past, Present, and Future](https://youtu.be/qaRfaAzmBEs)** — A walkthrough of TritonGPT updates including MyDocuments, model switching, chat search, and chat link sharing, with practical ideas for staying current on campus AI tools.\n📼 **[AI Webinar #5 - Lean Six Sigma vs. Artificial Intelligencence](https://youtu.be/tAnnUlRP2uo?feature=shared)** — A practical comparison of process improvement methods and TritonGPT use cases, with examples of where AI can speed up workflow and decision support.\n\n## TritonAI News\n\n• **[What Does It Mean To Learn With AI?](https://today.ucsd.edu/story/how-ai-is-showing-up-in-our-classrooms)** — UC San Diego highlighted faculty experiments with course-specific AI tutors and the new undergraduate AI major, showing how the campus is treating AI as both a teaching tool and a field of study.\n\n---\n\n*Want to share feedback on this newsletter? Reply to this email.*\n"
    }
  ]
};
