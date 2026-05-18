export type WeeklyDigestDay = {
  isoDate: string;
  displayDate: string;
  sourceFile: string;
  headlines: string[];
  raw: string;
};

export type WeeklyDigestData = {
  generatedAt: string;
  weekOf: string;
  weekEnding: string;
  weekLabel: string;
  publishedThrough: string;
  digestCount: number;
  headlineCount: number;
  days: WeeklyDigestDay[];
};

export const weeklyAiDigestData: WeeklyDigestData = {
  "generatedAt": "2026-05-18T13:35:51.793Z",
  "weekOf": "2026-05-18",
  "weekEnding": "2026-05-24",
  "weekLabel": "Week of May 18–24, 2026",
  "publishedThrough": "May 18, 2026",
  "digestCount": 1,
  "headlineCount": 7,
  "days": [
    {
      "isoDate": "2026-05-18",
      "displayDate": "Monday, May 18",
      "sourceFile": "ai-news-digest-2026-05-18.md",
      "headlines": [
        "University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot",
        "Canvas Breach Highlights Growing Risks of Digital Dependence in Higher Education",
        "Google Launches Gemini Intelligence for Android with Proactive AI Capabilities",
        "OpenAI Launches the OpenAI Deployment Company to Help Businesses Build Around Intelligence",
        "ChatGPT Launches GPT-5.5 Instant as New Default Model",
        "No, Colleges Can't Just Quit Canvas",
        "Signals of Change, AI, and Tensions Around the Value of Higher Ed"
      ],
      "raw": "# AI Intelligence Briefing - Monday, May 18, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot** — Higher ed AI governance at scale: UK unified 150+ AI efforts under a transdisciplinary strategy framework and scaled trusted governance practices. Now 70,000+ students and staff use Copilot tools. A model for TritonAI's campus-wide adoption strategy.\n  🔗 Graph: higher-ed-ai, ai-governance, ai-adoption\n  📅 Published: 2026-05-18\n  📰 https://er.educause.edu/articles/sponsored/2026/5/university-of-kentucky-sparks-campus-wide-innovation-with-microsoft-365-copilot\n\n• **Canvas Breach Highlights Growing Risks of Digital Dependence in Higher Education** — Nearly 9,000 schools affected worldwide during peak academic season. The incident underscores why UC San Diego's vertical AI approach—on-prem at SDSC—matters for institutional data sovereignty and security.\n  🔗 Graph: ai-security, uc-san-diego, higher-ed-ai\n  📅 Published: 2026-05-18\n  📰 https://universitybusiness.com/canvas-breach-highlights-growing-risks-of-digital-dependence-in-higher-education/\n\n• **Google Launches Gemini Intelligence for Android with Proactive AI Capabilities** — Google's new \"Gemini Intelligence\" brings proactive task automation, web content summarization, and context-aware assistance to Android. The \"magic pointer\" feature turns cursors into AI-powered contextual help tools. Relevant for TritonAI's mobile and accessibility roadmap.\n  🔗 Graph: gemini, google, agentic-ai\n  📅 Published: 2026-05-13\n  📰 https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/\n\n• **OpenAI Launches the OpenAI Deployment Company to Help Businesses Build Around Intelligence** — New corporate entity focused on enterprise AI deployment. Signals the maturation of AI infra market—relevant to Brett's work with LiteLLM Enterprise and the TritonAI Developer API Program.\n  🔗 Graph: openai, ai-governance, litellm-enterprise\n  📅 Published: 2026-05-11\n  📰 https://openai.com/news/\n\n• **ChatGPT Launches GPT-5.5 Instant as New Default Model** — OpenAI's latest release claims sharper accuracy, clearer answers, and stronger STEM capabilities. Achieved 81.2 on AIME 2025 math test (vs 65.4 prior). TritonAI's LiteLLM gateway will need evaluation for campus workloads.\n  🔗 Graph: openai, gpt-4, litellm-enterprise\n  📅 Published: 2026-05-05\n  📰 https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/\n\n• **No, Colleges Can't Just Quit Canvas** — Inside Higher Ed's analysis of LMS lock-in: moving platforms is \"much easier said than done\" even before security incidents. Reinforces the strategic value of UC San Diego's multi-pronged AI approach and data portability investments.\n  🔗 Graph: higher-ed-ai, canvas-lms, ai-security\n  📅 Published: 2026-05-18\n  📰 https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/05/18/no-colleges-cant-just-quit-canvas\n\n• **Signals of Change, AI, and Tensions Around the Value of Higher Ed** — EDUCAUSE Horizon Report podcast discussing the 2026 Teaching and Learning Edition findings. Critical listening for TritonAI's strategic positioning and cabinet presentation preparation.\n  🔗 Graph: higher-ed-ai, educause, ai-strategy-topic\n  📅 Published: 2026-05-18\n  📰 https://er.educause.edu/podcasts/educause-shop-talk/2026/signals-of-change-ai-and-tensions-around-the-value-of-higher-ed\n\n💡 **Signal:** The Canvas breach (9,000 schools) validates UC San Diego's on-prem SDSC strategy for TritonAI. Meanwhile, Kentucky's 70,000-user Copilot deployment and Google's proactive \"Gemini Intelligence\" show where higher ed AI is heading: integrated, governed, and increasingly agentic. The infrastructure Brett built—LiteLLM gateway, model agnosticism, vertical agents—positions TritonAI ahead of these curves.\n"
    }
  ]
};
