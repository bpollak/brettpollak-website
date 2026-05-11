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
  "generatedAt": "2026-05-11T13:35:45.638Z",
  "weekOf": "2026-05-11",
  "weekEnding": "2026-05-17",
  "weekLabel": "Week of May 11–17, 2026",
  "publishedThrough": "May 11, 2026",
  "digestCount": 1,
  "headlineCount": 6,
  "days": [
    {
      "isoDate": "2026-05-11",
      "displayDate": "Monday, May 11",
      "sourceFile": "ai-news-digest-2026-05-11.md",
      "headlines": [
        "Pentagon strikes classified AI deals with OpenAI, Google, and Nvidia — but not Anthropic",
        "OpenAI Campus Network: Student club interest form",
        "How enterprises are scaling AI",
        "Google, Microsoft, and xAI will allow the US government to review their new AI models",
        "In an AI-driven world, the most important skills are still human",
        "From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms"
      ],
      "raw": "# AI Intelligence Briefing - Monday, May 11, 2026\n*Curated from knowledge graph (201 nodes, 244 edges) · All articles published within the last 7 days*\n\n• **Pentagon strikes classified AI deals with OpenAI, Google, and Nvidia — but not Anthropic** — The US Department of Defense has signed agreements allowing it to use AI tools from OpenAI, Google, Microsoft, Amazon, Nvidia, xAI, and Reflection in classified settings. Notably absent from the list is Anthropic, despite its Claude models being used in many enterprise and government-adjacent workflows. This signals shifting competitive dynamics in the federal AI procurement space.\n  🔗 Graph: OpenAI, Google, Anthropic, AI Governance\n  📅 Published: 2026-05-07\n  📰 https://www.theverge.com/ai-artificial-intelligence/922113/pentagon-ai-classified-openai-google-nvidia\n\n• **OpenAI Campus Network: Student club interest form** — OpenAI is building a formal network of student AI clubs at universities worldwide, offering access to AI tools, event hosting support, and community resources. For institutions like UC San Diego already running TritonAI, this represents both a validation of the campus-AI model and potential for partnership or competition.\n  🔗 Graph: OpenAI, Higher Ed AI, UC San Diego\n  📅 Published: 2026-05-11\n  📰 https://openai.com/index/openai-campus-network-student-club-interest-form\n\n• **How enterprises are scaling AI** — OpenAI published a guide distilling patterns from enterprise deployments: trust-building, governance frameworks, workflow redesign, and quality-at-scale strategies. The emphasis on governance and compounding impact mirrors TritonAI's own enterprise adoption philosophy.\n  🔗 Graph: OpenAI, AI Governance, Agentic AI, Enterprise Data Agent\n  📅 Published: 2026-05-11\n  📰 https://openai.com/business/guides-and-resources/how-enterprises-are-scaling-ai\n\n• **Google, Microsoft, and xAI will allow the US government to review their new AI models** — Major AI labs have agreed to voluntary pre-release government review of new models. This self-regulatory move preempts formal mandates and establishes a de facto compliance layer that will likely influence procurement requirements for public institutions including university systems.\n  🔗 Graph: Google, Microsoft, OpenAI, AI Governance, AI Compliance & Governance\n  📅 Published: 2026-05-05\n  📰 https://www.theverge.com/ai-artificial-intelligence/924017/google-microsoft-xai-government-review\n\n• **In an AI-driven world, the most important skills are still human** — Higher Ed Dive sponsored perspective arguing that as AI capabilities grow, the real competitive advantage shifts to developing essential human skills for the new information environment. Aligns with vertical AI philosophy: AI handles the routine, humans handle the judgment.\n  🔗 Graph: Higher Ed AI, Vertical AI, UC San Diego\n  📅 Published: 2026-05-11\n  📰 https://www.highereddive.com/spons/in-an-ai-driven-world-the-most-important-skills-are-still-human/819282/\n\n• **From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms** — Comprehensive arXiv survey tracing how LLM agent memory has evolved from simple storage to sophisticated experience-based systems. Critical reading for anyone building agentic infrastructure like TritonAI's Enterprise Data Agent or Developer API tooling.\n  🔗 Graph: Agentic AI, Enterprise Data Agent, TritonAI, Model Context Protocol\n  📅 Published: 2026-05-11\n  📰 https://arxiv.org/abs/2605.06716\n\n💡 Signal: The convergence of federal procurement deals, voluntary government review agreements, and campus network expansion suggests AI is rapidly institutionalizing. The window for organic experimentation is closing; governance frameworks and compliance architectures are becoming table stakes for serious deployments.\n"
    }
  ]
};
