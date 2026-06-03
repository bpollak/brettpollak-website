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
  "generatedAt": "2026-06-03T13:35:29.115Z",
  "weekOf": "2026-06-01",
  "weekEnding": "2026-06-07",
  "weekLabel": "Week of June 1–7, 2026",
  "publishedThrough": "June 3, 2026",
  "digestCount": 3,
  "headlineCount": 16,
  "days": [
    {
      "isoDate": "2026-06-01",
      "displayDate": "Monday, June 1",
      "sourceFile": "ai-news-digest-2026-06-01.md",
      "headlines": [
        "The Wrong Battle: Why Your Institution's AI Policy Is Probably Solving the Wrong Problem",
        "Will AI Help Revive the ‘Stale’ OPM Market?",
        "Higher Ed IT Plays an Essential Role in Reducing Workday Friction",
        "9 demos of Gemini Omni and Gemini 3.5 in action",
        "Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action"
      ],
      "raw": "# AI Intelligence Briefing - June 01, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **The Wrong Battle: Why Your Institution's AI Policy Is Probably Solving the Wrong Problem** — A critical look at AI policy focus on detection over broader strategy, urging institutions to rethink their approach.\n  🔗 Graph: ai-governance, higher-ed-ai, brett-pollak\n  📅 Published: 2026-05-28\n  📰 https://campustechnology.com/articles/2026/05/28/the-wrong-battle-why-your-institutions-ai-policy-is-probably-solving-the-wrong-problem.aspx\n\n• **Will AI Help Revive the ‘Stale’ OPM Market?** — Explores how AI could rejuvenate the outsourced program management market, highlighting potential efficiencies and challenges.\n  🔗 Graph: ai-adoption, ai-governance, brett-pollak\n  📅 Published: 2026-06-01\n  📰 https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market\n\n• **Higher Ed IT Plays an Essential Role in Reducing Workday Friction** — Discusses how higher ed IT can streamline workday processes to support AI solutions and reduce administrative overhead.\n  🔗 Graph: higher-ed-ai, workday, brett-pollak\n  📅 Published: 2026-05-29\n  📰 https://edtechmagazine.com/higher/article/2026/05/higher-ed-it-plays-essential-role-reducing-workday-friction\n\n• **9 demos of Gemini Omni and Gemini 3.5 in action** — Showcases nine video demos of Google’s latest Gemini models, highlighting advanced multimodal capabilities.\n  🔗 Graph: gemini, google, brett-pollak\n  📅 Published: 2026-05-29\n  📰 https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/\n\n• **Welcome NVIDIA Cosmos 3: The First Open Omni-model for Physical AI Reasoning and Action** — Introduces NVIDIA’s Cosmos 3 model, an open omni-model aimed at physical AI reasoning and action.\n  🔗 Graph: agentic-ai, ai-governance, brett-pollak\n  📅 Published: 2026-06-01\n  📰 https://huggingface.co/blog/nvidia/cosmos-3-for-physical-ai\n\n💡 Signal: Across higher‑education and industry sources, the focus sharpens on AI governance, practical adoption, and emerging multimodal models—key areas aligning with Brett’s TritonAI strategy."
    },
    {
      "isoDate": "2026-06-02",
      "displayDate": "Tuesday, June 2",
      "sourceFile": "ai-news-digest-2026-06-02.md",
      "headlines": [
        "How we used Gemini to build Google I/O 2026",
        "OpenAI frontier models and Codex are now available on AWS",
        "Turnitin Adds Customizable AI Assistance to Support Different Assignments, Grade Levels",
        "Data Literacy Is Key to AI ROI for Higher Education",
        "Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic"
      ],
      "raw": "# AI Intelligence Briefing - June 2, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **How we used Gemini to build Google I/O 2026** — Google showcased how its Gemini models powered the production of I/O 2026, highlighting the maturity of generative AI in large‑scale events.\n  🔗 Graph: google, gemini, agentic-ai\n  📅 Published: 2026-06-01\n  📰 https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/\n\n• **OpenAI frontier models and Codex are now available on AWS** — OpenAI released its latest frontier models and Codex on Amazon Web Services, expanding enterprise access to cutting‑edge AI.\n  🔗 Graph: openai, codex, ai-governance\n  📅 Published: 2026-06-01\n  📰 https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws\n\n• **Turnitin Adds Customizable AI Assistance to Support Different Assignments, Grade Levels** — Turnitin introduces configurable AI settings, letting instructors tailor AI help per assignment, a move aligning with higher‑education AI adoption trends.\n  🔗 Graph: higher-ed-ai, ai-adoption, data-analytics\n  📅 Published: 2026-06-01\n  📰 https://campustechnology.com/articles/2026/06/01/turnitin-adds-customizable-ai-assistance-to-support-different-assignments-grade-levels.aspx\n\n• **Data Literacy Is Key to AI ROI for Higher Education** — A case study shows how data‑literacy programs boost AI return on investment at Morgan State University, underscoring the role of analytics in campus AI strategies.\n  🔗 Graph: higher-ed-ai, data-analytics, ai-governance\n  📅 Published: 2026-06-01\n  📰 https://edtechmagazine.com/higher/article/2026/06/data-literacy-key-ai-roi-higher-education-perfcon\n\n• **Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic** — Hugging Face argues that robust agentic architectures are essential for enterprise‑scale AI, a perspective resonating with TritonAI’s roadmap.\n  🔗 Graph: agentic-ai, ai-adoption, litellm-enterprise\n  📅 Published: 2026-06-01\n  📰 https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption\n\n💡 Signal: AI governance, agentic architectures, and higher‑education data initiatives dominate the week, reinforcing Brett’s focus on scalable, policy‑aware AI deployment across UC San Diego.\n"
    },
    {
      "isoDate": "2026-06-03",
      "displayDate": "Wednesday, June 3",
      "sourceFile": "ai-news-digest-2026-06-03.md",
      "headlines": [
        "Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic",
        "Direct Preference Optimization Beyond Chatbots",
        "How we used Gemini to build Google I/O 2026",
        "Turnitin Adds Customizable AI Assistance to Support Different Assignments, Grade Levels",
        "Data Literacy Is Key to AI ROI for Higher Education",
        "OpenAI frontier models and Codex are now generally available on AWS"
      ],
      "raw": "# AI Intelligence Briefing - June 3, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic** — Explores how agentic AI can drive enterprise-scale deployments, directly aligning with Brett’s focus on agentic AI and TritonAI’s roadmap.\n  🔗 Graph: [Agentic AI], [LiteLLM Enterprise], [TritonAI]\n  📅 Published: 2026-06-03\n  📰 https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption\n\n• **Direct Preference Optimization Beyond Chatbots** — Details advances in preference optimization that improve AI alignment, a key area for TritonAI’s next-gen models.\n  🔗 Graph: [Agentic AI], [Claude], [TritonGPT]\n  📅 Published: 2026-06-03\n  📰 https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots\n\n• **How we used Gemini to build Google I/O 2026** — Showcases Gemini’s capabilities in large‑scale event production, highlighting technology Brett’s team may integrate via the LiteLLM gateway.\n  🔗 Graph: [Gemini], [Google], [TritonAI]\n  📅 Published: 2026-06-01\n  📰 https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/\n\n• **Turnitin Adds Customizable AI Assistance to Support Different Assignments, Grade Levels** — Turnitin’s new AI assistant reflects the growing demand for higher‑ed AI tools, echoing Brett’s AI adoption initiatives.\n  🔗 Graph: [Higher Ed AI], [TritonAI], [Data Analytics]\n  📅 Published: 2026-06-01\n  📰 https://campustechnology.com/articles/2026/06/01/turnitin-adds-customizable-ai-assistance-to-support-different-assignments-grade-levels.aspx\n\n• **Data Literacy Is Key to AI ROI for Higher Education** — Highlights the importance of data literacy, tying into Brett’s data‑analytics governance priorities.\n  🔗 Graph: [Data Analytics], [Higher Ed AI], [TritonAI]\n  📅 Published: 2026-06-01\n  📰 https://edtechmagazine.com/higher/article/2026/06/data-literacy-key-ai-roi-higher-education-perfcon\n\n• **OpenAI frontier models and Codex are now generally available on AWS** — Announces broader access to OpenAI’s models and Codex, relevant for TritonAI’s developer API program.\n  🔗 Graph: [OpenAI], [Codex], [Amazon Web Services]\n  📅 Published: 2026-06-01\n  📰 https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws\n"
    }
  ]
};
