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
  "generatedAt": "2026-04-20T17:20:11.686Z",
  "weekOf": "2026-04-20",
  "weekEnding": "2026-04-26",
  "weekLabel": "Week of April 20–26, 2026",
  "publishedThrough": "April 20, 2026",
  "digestCount": 1,
  "headlineCount": 4,
  "days": [
    {
      "isoDate": "2026-04-20",
      "displayDate": "Monday, April 20",
      "sourceFile": "ai-news-digest-2026-04-20.md",
      "headlines": [
        "College Students Are More Polarized Than Ever. Can AI Help?",
        "DeepER-Med: Advancing Deep Evidence-Based Research in Medicine Through Agentic AI",
        "The Synthetic Media Shift: Tracking the Rise, Virality, and Detectability of AI-Generated Multimodal Misinformation",
        "Integrating Graphs, Large Language Models, and Agents: Reasoning and Retrieval"
      ],
      "raw": "# AI Intelligence Briefing - April 20, 2026\n*Curated from knowledge graph (183 nodes, 260 edges) · All articles published within the last 7 days*\n\n• **College Students Are More Polarized Than Ever. Can AI Help?** — A look at how AI and constructive dialogue tools are being evaluated to bridge divides on college campuses.\n  🔗 Graph: higher-ed-ai, ai-adoption, uc-san-diego\n  📅 Published: 2026-04-20\n  📰 https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/04/20/college-students-are-more-polarized-ever\n\n• **DeepER-Med: Advancing Deep Evidence-Based Research in Medicine Through Agentic AI** — New research on deep evidence-grounded scientific discovery systems integrating AI agents with multi-hop information retrieval and reasoning.\n  🔗 Graph: agentic-ai, tritonai\n  📅 Published: 2026-04-20\n  📰 https://arxiv.org/abs/2604.15456\n\n• **The Synthetic Media Shift: Tracking the Rise, Virality, and Detectability of AI-Generated Multimodal Misinformation** — An analysis of over 150K multimodal posts detailing the detectability of AI-generated misinformation and its impact on information integrity.\n  🔗 Graph: ai-security, ai-governance\n  📅 Published: 2026-04-20\n  📰 https://arxiv.org/abs/2604.15372\n\n• **Integrating Graphs, Large Language Models, and Agents: Reasoning and Retrieval** — A structured overview of the design choices underlying the integration of graphs with LLMs for reasoning and retrieval tasks.\n  🔗 Graph: enterprise-data-agent, onyx\n  📅 Published: 2026-04-20\n  📰 https://arxiv.org/abs/2604.15951\n\n💡 Signal: Agentic workflows and multi-modal integration continue to advance rapidly in research, while higher ed and policy focus heavily on managing the societal and security implications of these AI capabilities.\n"
    }
  ]
};
