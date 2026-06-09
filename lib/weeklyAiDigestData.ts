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
  "generatedAt": "2026-06-09T13:35:42.285Z",
  "weekOf": "2026-06-08",
  "weekEnding": "2026-06-14",
  "weekLabel": "Week of June 8–14, 2026",
  "publishedThrough": "June 9, 2026",
  "digestCount": 2,
  "headlineCount": 9,
  "days": [
    {
      "isoDate": "2026-06-08",
      "displayDate": "Monday, June 8",
      "sourceFile": "ai-news-digest-2026-06-08.md",
      "headlines": [
        "Internet2: Closing the Access Gap for Research Cyberinfrastructure",
        "Call for Speakers Now Open for Tech Tactics in Education Fall 2026",
        "Measuring the impact of learning with AI in Sierra Leone and beyond"
      ],
      "raw": "# AI Intelligence Briefing - June 8, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days* (Backfilled on 2026-06-09)\n\n• **Internet2: Closing the Access Gap for Research Cyberinfrastructure** — Campus Technology article on collaborative research network initiatives.\n  🔗 Graph: enterprise-monitoring, ai-adoption, tritonai\n  📅 Published: 2026-06-08\n  📰 https://campustechnology.com/articles/2026/06/08/internet2-closing-the-access-gap-for-research-cyberinfrastructure.aspx\n  📌 Key takeaways:\n    • Internet2 unites CIOs, researchers, and data facilitators.\n    • Provides a shared cyberinfrastructure to accelerate AI‑driven research.\n    • Emphasizes scalable, secure networking for campus collaborations.\n    • Highlights funding opportunities for joint projects.\n\n• **Call for Speakers Now Open for Tech Tactics in Education Fall 2026** — Virtual conference invitation focusing on AI, cybersecurity, and emerging tech.\n  🔗 Graph: higher-ed-ai, ai-governance, tritonai\n  📅 Published: 2026-06-08\n  📰 https://campustechnology.com/articles/2026/06/08/call-for-speakers-now-open-for-tech-tactics-in-education-fall-2026.aspx\n  📌 Key takeaways:\n    • Seeks thought leaders to discuss AI integration in higher ed.\n    • Highlights sessions on cybersecurity and data governance.\n    • Offers networking with campus IT executives.\n    • Application deadline: September 2026.\n\n• **Measuring the impact of learning with AI in Sierra Leone and beyond** — DeepMind blog post on AI‑guided learning outcomes.\n  🔗 Graph: agentic-ai, litellm-enterprise, higher-ed-ai\n  📅 Published: 2026-06-08\n  📰 https://deepmind.google/blog/measuring-the-impact-of-learning-with-ai-in-sierra-leone-and-beyond/\n  📌 Key takeaways:\n    • Gemini’s Guided Learning feature boosts engagement in low‑resource settings.\n    • Randomized trial shows measurable improvement in knowledge retention.\n    • Provides a template for campus‑wide AI‑enhanced curricula.\n    • Calls for partnership with universities to scale impact.\n\n💡 Signal: Infrastructure collaboration, speaker engagements, and AI‑enhanced learning pilots signal a broadening of AI adoption across higher education ecosystems."
    },
    {
      "isoDate": "2026-06-09",
      "displayDate": "Tuesday, June 9",
      "sourceFile": "ai-news-digest-2026-06-09.md",
      "headlines": [
        "The Experience Gap: 4 Strategies to Fix Campus Fragmentation",
        "Data Literacy Is Key to AI ROI for Higher Education",
        "The latest AI news we announced in May 2026",
        "How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces",
        "OpenAI Economic Research Exchange",
        "PathoSage: Towards Multi‑Source Evidence Adjudication in Pathology via Experience‑Aware Agentic Workflow"
      ],
      "raw": "# AI Intelligence Briefing - June 9, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **The Experience Gap: 4 Strategies to Fix Campus Fragmentation** — Higher education institutions face costly digital fragmentation; the article outlines four strategic moves to build an AI‑ready, student‑first campus.\n  🔗 Graph: higher-ed-ai, ai-governance, tritonai\n  📅 Published: 2026-06-08\n  📰 https://er.educause.edu/articles/sponsored/2026/6/the-experience-gap-4-strategies-to-fix-campus-fragmentation\n  📌 Key takeaways:\n    • Identify and map fragmented digital tools across campus.\n    • Consolidate platforms to create unified data flows.\n    • Invest in AI‑ready infrastructure to enable scalable services.\n    • Center design around student experience to improve outcomes.\n\n• **Data Literacy Is Key to AI ROI for Higher Education** — Without staff proficiency in data, AI investments falter; the piece details governance steps to unlock ROI.\n  🔗 Graph: higher-ed-ai, data-analytics, ai-governance\n  📅 Published: 2026-06-05\n  📰 https://edtechmagazine.com/higher/article/2026/06/data-literacy-key-ai-roi-higher-education-perfcon\n  📌 Key takeaways:\n    • Train university staff on data interpretation and AI concepts.\n    • Establish clear governance policies for AI model deployment.\n    • Align AI projects with measurable institutional goals.\n    • Prioritize data quality to ensure reliable AI outputs.\n\n• **The latest AI news we announced in May 2026** — Google AI Blog recap of May releases, including Gemini enhancements and new responsible‑AI tooling.\n  🔗 Graph: agentic-ai, litellm-enterprise, google\n  📅 Published: 2026-06-05\n  📰 https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/\n  📌 Key takeaways:\n    • Gemini model gains multimodal reasoning capabilities.\n    • New responsible‑AI APIs simplify bias detection.\n    • Integration with LiteLLM Enterprise streamlines on‑prem deployments.\n    • Emphasis on developer‑friendly documentation for campus teams.\n\n• **How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces** — Demonstrates agentic workflow chaining to generate immersive 3D environments.\n  🔗 Graph: agentic-ai, tritonai, onyx\n  📅 Published: 2026-06-09\n  📰 https://huggingface.co/blog/mishig/spaces-agents-md\n  📌 Key takeaways:\n    • Uses two Hugging Face Spaces sequentially to render 3D assets.\n    • Showcases reusable agent components for rapid prototyping.\n    • Highlights low‑latency inference on on‑prem GPUs.\n    • Provides a blueprint for campus‑level AI‑driven visualizations.\n\n• **OpenAI Economic Research Exchange** — New OpenAI program invites researchers to study AI’s macroeconomic impact.\n  🔗 Graph: ai-governance, openai, higher-ed-ai\n  📅 Published: 2026-06-08\n  📰 https://openai.com/index/economic-research-exchange\n  📌 Key takeaways:\n    • Offers grants for academics investigating AI‑driven productivity.\n    • Emphasizes transparent data sharing for reproducible studies.\n    • Aligns with university research agendas on AI policy.\n    • Connects OpenAI researchers with campus AI labs.\n\n• **PathoSage: Towards Multi‑Source Evidence Adjudication in Pathology via Experience‑Aware Agentic Workflow** — arXiv paper proposes an agentic system for aggregating pathology evidence.\n  🔗 Graph: agentic-ai, tritonai, litellm-enterprise\n  📅 Published: 2026-06-09\n  📰 https://arxiv.org/abs/2606.07549\n  📌 Key takeaways:\n    • Introduces an experience‑aware reasoning module for medical image analysis.\n    • Combines multimodal LLMs with external knowledge bases.\n    • Demonstrates improved diagnostic accuracy over baseline models.\n    • Provides open‑source code usable in TritonAI pipelines.\n\n💡 Signal: AI governance, agentic workflows, and data literacy dominate this week, underscoring the strategic push toward AI‑ready campuses and robust ROI frameworks."
    }
  ]
};
