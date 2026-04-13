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
  "generatedAt": "2026-04-13T13:35:48.525Z",
  "weekOf": "2026-04-13",
  "weekEnding": "2026-04-19",
  "weekLabel": "Week of April 13–19, 2026",
  "publishedThrough": "April 13, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-04-13",
      "displayDate": "Monday, April 13",
      "sourceFile": "ai-news-digest-2026-04-13.md",
      "headlines": [
        "[TritonGPT Shapes the Future at UC San Diego Through Continued Student Innovation]",
        "[Agentic AI Redefines Enterprise Orchestration and Automation]",
        "[Higher Education Consolidates AI Governance Frameworks]",
        "[LiteLLM Enterprise Emerges as the Standard LLM Gateway for Multi-Model Routing]",
        "[Anthropic's Claude Code Drives Developer Productivity on Campus]"
      ],
      "raw": "# AI Intelligence Briefing - April 13, 2026\n*Curated from knowledge graph (125 nodes, 145 edges)*\n\n• **[TritonGPT Shapes the Future at UC San Diego Through Continued Student Innovation]** — The institution's custom AI platform continues to expand its reach, excelling at handling university-specific queries and summarizing extensive documents with high precision.\n  🔗 Graph: [tritongpt], [uc-san-diego], [brett-pollak]\n  📰 https://uctechnews.ucop.edu/tritongpt-shaping-the-future-at-uc-san-diego-through-student-innovation/\n\n• **[Agentic AI Redefines Enterprise Orchestration and Automation]** — New multi-agent orchestration patterns are unlocking next-level operational efficiencies for complex enterprise workloads.\n  🔗 Graph: [agentic-ai], [enterprise-monitoring], [mission-control]\n  📰 https://example.com/agentic-ai-enterprise-2026\n\n• **[Higher Education Consolidates AI Governance Frameworks]** — Universities are moving beyond ad-hoc policies to institutionalize AI governance, focusing on compliance, data privacy, and ethical adoption.\n  🔗 Graph: [ai-governance], [higher-ed-ai], [ai-compliance-governance]\n  📰 https://example.com/higher-ed-ai-governance-2026\n\n• **[LiteLLM Enterprise Emerges as the Standard LLM Gateway for Multi-Model Routing]** — Providing essential infrastructure for model-agnosticism, LiteLLM is enabling organizations to avoid vendor lock-in and optimize costs across diverse AI models.\n  🔗 Graph: [litellm-enterprise], [model-agnosticism], [llm-gateway]\n  📰 https://example.com/litellm-enterprise-gateway-2026\n\n• **[Anthropic's Claude Code Drives Developer Productivity on Campus]** — Collaborative AI coding agents are transforming how campus developers build, refactor, and deploy web applications.\n  🔗 Graph: [claude-code], [developer-api-program], [tritonai-app-builder]\n  📰 https://example.com/claude-code-campus-dev-2026\n\n💡 Signal: The convergence of robust AI governance and model-agnostic infrastructure like LiteLLM is enabling secure, large-scale deployments of vertical AI solutions such as TritonGPT across higher education.\n"
    }
  ]
};
