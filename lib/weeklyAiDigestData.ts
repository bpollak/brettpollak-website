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
  "generatedAt": "2026-05-26T13:55:45.774Z",
  "weekOf": "2026-05-25",
  "weekEnding": "2026-05-31",
  "weekLabel": "Week of May 25–31, 2026",
  "publishedThrough": "May 26, 2026",
  "digestCount": 2,
  "headlineCount": 10,
  "days": [
    {
      "isoDate": "2026-05-25",
      "displayDate": "Monday, May 25",
      "sourceFile": "ai-news-digest-2026-05-25.md",
      "headlines": [
        "OpenAI co-founder Andrej Karpathy joins Anthropic's pre-training team",
        "With Gemini 3.5 Flash, Google bets its next AI wave on agents, not chatbots",
        "All the Gemini announcements from Google I/O 2026",
        "RMA: an Agentic System for Research-Level Mathematical Problems",
        "Energy per Successful Goal: Goal-Level Energy Accounting for Agentic AI Systems"
      ],
      "raw": "# AI Intelligence Briefing - May 25, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **OpenAI co-founder Andrej Karpathy joins Anthropic's pre-training team** — Former OpenAI co-founder Andrej Karpathy has officially joined Anthropic's pre-training team to work at the frontier of LLM research.\n  🔗 Graph: anthropic, openai\n  📅 Published: 2026-05-19\n  📰 https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/\n\n• **With Gemini 3.5 Flash, Google bets its next AI wave on agents, not chatbots** — Google's new Gemini 3.5 Flash model is designed for autonomous task execution and software building, signaling a major shift toward agentic AI.\n  🔗 Graph: google, gemini, agentic-ai\n  📅 Published: 2026-05-19\n  📰 https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/\n\n• **All the Gemini announcements from Google I/O 2026** — Google I/O showcased Gemini Omni, a multi-modal model designed as a step toward AGI, alongside significant updates to the Gemini ecosystem.\n  🔗 Graph: google, gemini\n  📅 Published: 2026-05-19\n  📰 https://mashable.com/tech/all-the-gemini-announcements-google-io-2026\n\n• **RMA: an Agentic System for Research-Level Mathematical Problems** — A new research framework, RMA, enables autonomous reasoning and iterative proof refinement for complex mathematical research.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-25\n  📰 https://arxiv.org/abs/2605.22875\n\n• **Energy per Successful Goal: Goal-Level Energy Accounting for Agentic AI Systems** — New research proposes a way to measure the energy efficiency of agentic systems based on goal completion rather than simple token counts.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-25\n  📰 https://arxiv.org/abs/2605.22883\n\n💡 Signal: The industry is rapidly transitioning from chat-based interfaces to agentic systems that can autonomously execute complex, multi-step workflows.\n"
    },
    {
      "isoDate": "2026-05-26",
      "displayDate": "Tuesday, May 26",
      "sourceFile": "ai-news-digest-2026-05-26.md",
      "headlines": [
        "In Search of the Ingredients of Open-Endedness: Replicating Picbreeder with Large Vision-Language Models",
        "Understanding and Mitigating Premature Confidence for Better LLM Reasoning",
        "AgentFugue: Agent Scaling for Long-Horizon Tasks through Collective Reasoning",
        "Adaptive Human-AI Coordination via Hierarchical Action Disentanglement",
        "Meta-Agent: From Task Descriptions to Verified Multi-Agent Systems"
      ],
      "raw": "# AI Intelligence Briefing - May 26, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **In Search of the Ingredients of Open-Endedness: Replicating Picbreeder with Large Vision-Language Models** — Research explores whether artificial agents can demonstrate open-ended discovery by replicating Picbreeder-like evolution using large vision-language models.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.23908\n\n• **Understanding and Mitigating Premature Confidence for Better LLM Reasoning** — A study identifies \"premature confidence\" in long chains of thought as a key limiting factor in LLM reasoning and proposes ways to improve quality via confidence evolution monitoring.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.24396\n\n• **AgentFugue: Agent Scaling for Long-Horizon Tasks through Collective Reasoning** — New research examines \"scaling out\" agentic capabilities by having multiple peer agents collaborate on long-horizon tasks without explicit role specialization.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.24486\n\n• **Adaptive Human-AI Coordination via Hierarchical Action Disentanglement** — Researchers propose Intrinsic Action Disentanglement (IAD) to help AI agents better adapt to the diverse behaviors and skill levels of human partners.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.24343\n\n• **Meta-Agent: From Task Descriptions to Verified Multi-Agent Systems** — A new two-phase framework, Meta-Agent, automates the construction and execution of specialized multi-agent systems from natural language task descriptions.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.25233\n\n💡 Signal: The research landscape is heavily focused on solving the \"long-horizon\" problem in agentic AI, specifically through better coordination, hierarchical reasoning, and autonomous system construction.\n"
    }
  ]
};
