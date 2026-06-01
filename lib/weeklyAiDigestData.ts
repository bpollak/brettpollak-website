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
  "generatedAt": "2026-06-01T17:20:14.422Z",
  "weekOf": "2026-06-01",
  "weekEnding": "2026-06-07",
  "weekLabel": "Week of June 1–7, 2026",
  "publishedThrough": "June 1, 2026",
  "digestCount": 1,
  "headlineCount": 5,
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
    }
  ]
};
