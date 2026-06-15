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
  "generatedAt": "2026-06-15T13:35:50.517Z",
  "weekOf": "2026-06-15",
  "weekEnding": "2026-06-21",
  "weekLabel": "Week of June 15–21, 2026",
  "publishedThrough": "June 15, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-06-15",
      "displayDate": "Monday, June 15",
      "sourceFile": "ai-news-digest-2026-06-15.md",
      "headlines": [
        "Microsoft Discovery Platform Brings Agentic AI to Scientific Research",
        "What Can Higher Ed IT Do About the Agentic AI Cheating Crisis?",
        "Introducing the OpenAI Partner Network",
        "Orchestra‑o1: Omnimodal Agent Orchestration",
        "Report: Online Students and Faculty Are Aligned on GenAI Use"
      ],
      "raw": "# AI Intelligence Briefing - June 15, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Microsoft Discovery Platform Brings Agentic AI to Scientific Research** — Microsoft’s Discovery platform reaches general availability, giving researchers a production‑ready AI‑agent environment to accelerate scientific workflows.\n  🔗 Graph: [agentic-ai], [microsoft], [tritonai]\n  📅 Published: 2026-06-12\n  📰 https://campustechnology.com/articles/2026/06/12/microsoft-discovery-platform-brings-agentic-ai-to-scientific-research.aspx\n  📌 Key takeaways:\n    • GA release enables AI agents to coordinate data analysis, hypothesis generation, and knowledge management.\n    • Built on a graph‑based knowledge engine that connects proprietary research data with external scientific information.\n    • Offers a desktop app preview for labs and students not ready for full enterprise deployment.\n    • Positions Microsoft as a key player in agentic AI for higher‑ed research environments.\n    • Relevant to Brett’s AI governance and agentic AI initiatives.\n\n• **What Can Higher Ed IT Do About the Agentic AI Cheating Crisis?** — The Einstein tool’s autonomous LMS actions exposed a critical gap: institutions lack reliable methods to differentiate students from AI agents.\n  🔗 Graph: [agentic-ai], [higher-ed-ai], [ai-governance]\n  📅 Published: 2026-06-11\n  📰 https://edtechmagazine.com/higher/article/2026/06/what-can-higher-ed-it-do-about-agentic-ai-cheating-crisis\n  📌 Key takeaways:\n    • Einstein could log into Canvas, watch lectures, write papers, and submit work without faculty awareness.\n    • Highlights the need for authentication and provenance mechanisms in LMS platforms.\n    • Calls for campus IT to develop detection tools and policy frameworks for AI‑generated work.\n    • Aligns with UCSD’s AI governance priorities and Brett’s focus on responsible AI adoption.\n    • Offers a roadmap for institutions to safeguard academic integrity against agentic AI.\n\n• **Introducing the OpenAI Partner Network** — OpenAI launches a $150 M partner program to accelerate enterprise AI adoption through technical support, co‑marketing, and early‑model access.\n  🔗 Graph: [openai], [ai-adoption], [litellm-enterprise]\n  📅 Published: 2026-06-14\n  📰 https://openai.com/index/introducing-openai-partner-network\n  📌 Key takeaways:\n    • $150 M investment to help partners scale AI solutions for businesses and institutions.\n    • Provides dedicated engineering assistance, go‑to‑market resources, and priority access to upcoming models.\n    • Emphasizes responsible AI practices, including safety tooling and governance guidance.\n    • Potentially relevant for TritonAI’s vendor ecosystem and Brett’s strategy to broaden AI adoption on campus.\n    • Signals a shift toward deeper collaboration between OpenAI and enterprise partners.\n\n• **Orchestra‑o1: Omnimodal Agent Orchestration** — New framework enables multimodal LLM agents to collaborate on complex tasks, outperforming prior approaches by 10.3 % on the OmniGAIA benchmark.\n  🔗 Graph: [agentic-ai], [orchestration], [ai-research]\n  📅 Published: 2026-06-15\n  📰 https://arxiv.org/abs/2606.13707\n  📌 Key takeaways:\n    • Introduces a unified orchestration mechanism for text, image, audio, and video modalities.\n    • Supports modality‑aware task decomposition and parallel sub‑task execution.\n    • Achieves state‑of‑the‑art performance on the OmniGAIA benchmark (+10.3 % accuracy).\n    • Presents DA‑GRPO, a novel reinforcement‑learning approach for training omnimodal agents.\n    • Opens avenues for campus AI labs to build richer, cross‑modal agentic applications.\n\n• **Report: Online Students and Faculty Are Aligned on GenAI Use** — Survey of 1,600 online learners and instructors finds converging perceptions of generative AI tools.\n  🔗 Graph: [higher-ed-ai], [ai-governance], [online-learning]\n  📅 Published: 2026-06-11\n  📰 https://wcet.wiche.edu/frontiers/2026/06/11/report-online-students-and-faculty-are-aligned-on-ai/\n  📌 Key takeaways:\n    • Both groups view GenAI as a productivity enhancer rather than a threat.\n    • Majority report similar comfort levels with AI‑assisted content creation and research.\n    • Challenges assumptions that faculty and students are at odds over AI adoption.\n    • Suggests policy focus on shared best practices and joint training programs.\n    • Provides data that can inform UCSD’s AI adoption strategy and curriculum design.\n\n💡 Signal: Agentic AI is moving from experimental labs into production tools across research, education, and enterprise, prompting urgent governance, detection, and orchestration advances that align tightly with Brett’s strategic priorities.\n"
    }
  ]
};
