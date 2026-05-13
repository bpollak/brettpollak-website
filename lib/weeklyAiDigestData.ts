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
  "generatedAt": "2026-05-13T13:43:29.426Z",
  "weekOf": "2026-05-11",
  "weekEnding": "2026-05-17",
  "weekLabel": "Week of May 11–17, 2026",
  "publishedThrough": "May 13, 2026",
  "digestCount": 3,
  "headlineCount": 19,
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
    },
    {
      "isoDate": "2026-05-12",
      "displayDate": "Tuesday, May 12",
      "sourceFile": "ai-news-digest-2026-05-12.md",
      "headlines": [
        "Running Codex safely at OpenAI",
        "OpenAI launches DeployCo to help businesses build around intelligence",
        "How ChatGPT adoption broadened in early 2026",
        "How frontier firms are pulling ahead",
        "The new AI-powered Google Finance is expanding to Europe",
        "Simplex rethinks software development with Codex",
        "Advancing voice intelligence with new models in the API"
      ],
      "raw": "# AI Intelligence Briefing - May 12, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Running Codex safely at OpenAI** — OpenAI published their security architecture for Codex, covering sandboxing, approval workflows, network policies, and agent-native telemetry. Directly relevant to UC San Diego's Claude Code and agentic AI deployments where safety and compliance are non-negotiable.\n  🔗 Graph: OpenAI, Codex, Agentic AI, AI Security\n  📅 Published: 2026-05-08\n  📰 https://openai.com/index/running-codex-safely\n\n• **OpenAI launches DeployCo to help businesses build around intelligence** — OpenAI spun up a dedicated enterprise deployment company to bridge the gap between AI experiments and production systems. Mirrors the operational challenges Brett's team faces scaling TritonAI across campus.\n  🔗 Graph: OpenAI, AI Governance, Agentic AI\n  📅 Published: 2026-05-11\n  📰 https://openai.com/index/openai-launches-the-deployment-company\n\n• **How ChatGPT adoption broadened in early 2026** — OpenAI's Q1 2026 data shows fastest growth among users over 35 and more balanced gender demographics. Signals AI's transition from early-adopter tech to mainstream infrastructure—relevant for campus-wide TritonGPT rollout strategy.\n  🔗 Graph: OpenAI, AI Adoption, TritonGPT\n  📅 Published: 2026-05-11\n  📰 https://openai.com/signals/research/2026q1-update\n\n• **How frontier firms are pulling ahead** — OpenAI's B2B Signals research quantifies how leading enterprises scale from experimentation to compounding impact through trust, governance, and workflow integration. The pattern matches what UC San Diego is building with TritonAI.\n  🔗 Graph: OpenAI, AI Governance, Enterprise AI\n  📅 Published: 2026-05-06\n  📰 https://openai.com/index/introducing-b2b-signals\n\n• **The new AI-powered Google Finance is expanding to Europe** — Google's AI finance tools are now live across Europe with full local language support. Illustrates how vertical AI applications (like TritonGPT's specialized campus assistants) scale beyond chatbots into domain-specific utility.\n  🔗 Graph: Google, Vertical AI, AI Adoption\n  📅 Published: 2026-05-11\n  📰 https://blog.google/products-and-platforms/products/search/ai-powered-google-finance-in-europe/\n\n• **Simplex rethinks software development with Codex** — Banking platform Simplex reduced design, build, and testing time by integrating ChatGPT Enterprise and Codex. Shows how AI coding agents move from novelty to measurable productivity gains in regulated industries.\n  🔗 Graph: Codex, OpenAI, Enterprise AI\n  📅 Published: 2026-05-06\n  📰 https://openai.com/index/simplex\n\n• **Advancing voice intelligence with new models in the API** — OpenAI released new realtime voice models that can reason, translate, and transcribe speech. Voice as an interface layer matters for accessibility and non-traditional computing contexts in higher ed.\n  🔗 Graph: OpenAI, Agentic AI\n  📅 Published: 2026-05-07\n  📰 https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api\n\n💡 Signal: Production deployment is this week's theme—from OpenAI's Codex safety architecture to the launch of DeployCo as a standalone enterprise deployment company, the industry is moving past experimentation into hardened operational infrastructure. TritonAI's emphasis on governance, LiteLLM gateway resilience, and vertical AI assistants puts UC San Diego ahead of this curve.\n"
    },
    {
      "isoDate": "2026-05-13",
      "displayDate": "Wednesday, May 13",
      "sourceFile": "ai-news-digest-2026-05-13.md",
      "headlines": [
        "How enterprises are scaling AI",
        "OpenAI launches DeployCo to help businesses build around intelligence",
        "Running Codex safely at OpenAI",
        "How ChatGPT adoption broadened in early 2026",
        "Advancing voice intelligence with new models in the API",
        "What Parameter Golf taught us about AI-assisted research"
      ],
      "raw": "# AI Intelligence Briefing - May 13, 2026\n*Curated from knowledge graph (201 nodes, 244 edges) · All articles published within the last 7 days*\n\n• **How enterprises are scaling AI** — OpenAI's guide on moving from early experiments to compounding impact through trust, governance, and workflow design. Directly relevant to TritonAI's maturation from pilot to production-scale deployment.\n  🔗 Graph: ai-governance, agentic-ai, ai-adoption\n  📅 Published: 2026-05-11\n  📰 https://openai.com/business/guides-and-resources/how-enterprises-are-scaling-ai\n\n• **OpenAI launches DeployCo to help businesses build around intelligence** — New enterprise deployment company focused on bringing frontier AI into production with measurable business impact. Mirrors the vertical AI approach Brett has championed with TritonGPT.\n  🔗 Graph: openai, agentic-ai, vertical-ai\n  📅 Published: 2026-05-11\n  📰 https://openai.com/index/openai-launches-the-deployment-company\n\n• **Running Codex safely at OpenAI** — Deep dive on sandboxing, approvals, network policies, and agent-native telemetry for compliant coding agent adoption. Essential reading for UC San Diego's Developer API Program governance.\n  🔗 Graph: codex, ai-security, developer-api-program\n  📅 Published: 2026-05-08\n  📰 https://openai.com/index/running-codex-safely\n\n• **How ChatGPT adoption broadened in early 2026** — Q1 data shows fastest growth among users over 35 and balanced gender usage, signaling mainstream AI adoption. Comparable patterns likely emerging in TritonGPT's campus user base.\n  🔗 Graph: ai-adoption, higher-ed-ai, openai\n  📅 Published: 2026-05-11\n  📰 https://openai.com/signals/research/2026q1-update\n\n• **Advancing voice intelligence with new models in the API** — New realtime voice models that can reason, translate, and transcribe—opening possibilities for campus services accessibility and multilingual support in higher ed.\n  🔗 Graph: openai, ai-strategy-topic, higher-ed-ai\n  📅 Published: 2026-05-07\n  📰 https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api\n\n• **What Parameter Golf taught us about AI-assisted research** — 1,000+ participants explored ML research with AI agents under constraints. Higher ed research teams can learn from these patterns for own AI-assisted research workflows.\n  🔗 Graph: ai-strategy-topic, higher-ed-ai, openai\n  📅 Published: 2026-05-12\n  📰 https://openai.com/index/what-parameter-golf-taught-us\n\n💡 Signal: OpenAI is pivoting sharply toward enterprise infrastructure—DeployCo launch, scaling frameworks, and safety tooling suggest the market is moving from experimentation to operationalization, validating TritonAI's vertical-AI-first approach.\n"
    }
  ]
};
