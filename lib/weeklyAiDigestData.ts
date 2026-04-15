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
  "generatedAt": "2026-04-15T18:47:21.548Z",
  "weekOf": "2026-04-13",
  "weekEnding": "2026-04-19",
  "weekLabel": "Week of April 13–19, 2026",
  "publishedThrough": "April 15, 2026",
  "digestCount": 3,
  "headlineCount": 11,
  "days": [
    {
      "isoDate": "2026-04-13",
      "displayDate": "Monday, April 13",
      "sourceFile": "ai-news-digest-2026-04-13.md",
      "headlines": [
        "Anthropic inks deal with Google to power Claude with next-gen TPUs",
        "OpenAI Is Having a Rough 2026 - And It Shows",
        "Changelog · Cursor"
      ],
      "raw": "# AI Intelligence Briefing - April 13, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Anthropic inks deal with Google to power Claude with next-gen TPUs** — Anthropic announced a major partnership with Google and Broadcom to power Claude using next-generation TPU capacity starting as soon as next year. This strategic move deepens the infrastructure ties between key AI players in the industry.\n  🔗 Graph: anthropic, google, claude\n  📅 Published: 2026-04-12\n  📰 https://9to5google.com/2026/04/06/anthropic-inks-deal-with-google-to-power-claude-with-next-gen-tpus/\n\n• **OpenAI Is Having a Rough 2026 - And It Shows** — OpenAI is facing internal challenges, including leadership shakeups, killed products, and increasing pressure from rising rivals in the generative AI space. This turbulence suggests a pivotal year for the company as it navigates both product delays and executive departures.\n  🔗 Graph: openai\n  📅 Published: 2026-04-08\n  📰 https://autogpt.net/openai-is-having-a-rough-2026-and-it-shows/\n\n• **Changelog · Cursor** — Cursor's latest update introduces significant enhancements to Bugbot, including real-time self-improvement and native Model Context Protocol (MCP) support. This update reflects the rapid maturation of AI-first IDEs and standardized agentic integrations.\n  🔗 Graph: cursor, model-context-protocol\n  📅 Published: 2026-04-08\n  📰 https://cursor.com/changelog\n\n💡 Signal: This week highlights a tightening hardware-software ecosystem with Anthropic leveraging Google TPUs, while developer tooling accelerates through Cursor's adoption of the Model Context Protocol. Meanwhile, OpenAI faces growing organizational pressure amid rising competition across the stack."
    },
    {
      "isoDate": "2026-04-14",
      "displayDate": "Tuesday, April 14",
      "sourceFile": "ai-news-digest-2026-04-14.md",
      "headlines": [
        "Expanding the MCP Maintainer Team | Model Context Protocol Blog",
        "Anthropic Claims Its New A.I. Model, Mythos, Is a Cybersecurity ‘Reckoning’ - The New York Times",
        "Vercel CEO Signals IPO Readiness Amid AI Agent Revenue Surge | Enterprise Unified LLM API Gateway (One Key for All Models) | n1n.ai",
        "Google Open Sources Experimental Multi-Agent Orchestration Testbed Scion - InfoQ",
        "Top Databricks Features Transforming Data and AI in 2026",
        "AI governance really matters amid evolving compliance landscape"
      ],
      "raw": "# AI Intelligence Briefing - April 14, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Expanding the MCP Maintainer Team | Model Context Protocol Blog** — The open-source Model Context Protocol framework has announced new maintainers to help scale the project as its enterprise adoption accelerates. This signals further stabilization of the tooling ecosystem connecting LLMs to external systems.\n  🔗 Graph: Model Context Protocol, Agentic AI, Anthropic\n  📅 Published: 2026-04-09\n  📰 https://blog.modelcontextprotocol.io/posts/2026-04-08-maintainer-update/\n\n• **Anthropic Claims Its New A.I. Model, Mythos, Is a Cybersecurity ‘Reckoning’ - The New York Times** — Anthropic is rolling out a new model called Claude Mythos Preview to a select consortium of enterprise partners. The specialized model is built heavily around advancing cybersecurity and system defense capabilities.\n  🔗 Graph: Anthropic, Claude, AI Security\n  📅 Published: 2026-04-07\n  📰 https://www.nytimes.com/2026/04/07/technology/anthropic-claims-its-new-ai-model-mythos-is-a-cybersecurity-reckoning.html\n\n• **Vercel CEO Signals IPO Readiness Amid AI Agent Revenue Surge | Enterprise Unified LLM API Gateway (One Key for All Models) | n1n.ai** — Vercel's CEO highlighted a major push towards making AI deployment as frictionless as a git push, coinciding with surging growth from AI agent workloads. The strategic positioning could shape how platforms host next-gen orchestrated workflows.\n  🔗 Graph: Vercel, Agentic AI, LLM Gateway\n  📅 Published: 2026-04-14\n  📰 https://explore.n1n.ai/blog/vercel-ceo-signals-ipo-readiness-ai-agent-growth-2026-04-14\n\n• **Google Open Sources Experimental Multi-Agent Orchestration Testbed Scion - InfoQ** — Google has open-sourced Scion, an experimental testbed for coordinating complex multi-agent architectures using deep agents like Claude Code, Gemini CLI, and Codex. It isolates agents in separate containers and git worktrees to orchestrate parallel tasks safely.\n  🔗 Graph: Google, Agentic AI, Claude Code\n  📅 Published: 2026-04-07\n  📰 https://www.infoq.com/news/2026/04/google-agent-testbed-scion/\n\n• **Top Databricks Features Transforming Data and AI in 2026** — An overview of new Databricks functionality that promises to democratize data analytics across the enterprise. The tools aim to bridge the divide between technical data engineers and broad functional departments leveraging AI.\n  🔗 Graph: Databricks, Data Analytics\n  📅 Published: 2026-04-09\n  📰 https://www.beyondkey.com/blog/databricks-features/\n\n• **AI governance really matters amid evolving compliance landscape** — Enterprise HR and IT teams are increasingly demanding stronger risk controls, governance, and transparency from their AI vendors. Compliance structures are rapidly shifting from optional features to critical procurement blockers.\n  🔗 Graph: AI Governance, AI Compliance & Governance\n  📅 Published: 2026-04-07\n  📰 https://www.hr-brew.com/stories/2026/04/07/ai-governance-really-matters-amid-evolving-compliance-landscape\n\n💡 Signal: The ecosystem is rapidly shifting focus from raw model performance toward robust enterprise infrastructure, with major developments in agent orchestration testbeds (Scion), cybersecurity-focused models (Mythos), and tightening governance standards.\n"
    },
    {
      "isoDate": "2026-04-15",
      "displayDate": "Wednesday, April 15",
      "sourceFile": "ai-news-digest-2026-04-15.md",
      "headlines": [
        "Anthropic’s New Product Aims to Handle the Hard Part of Building AI Agents",
        "LIFE -- an energy efficient advanced continual learning agentic AI framework for frontier systems"
      ],
      "raw": "# AI Intelligence Briefing - April 15, 2026\n*Curated from knowledge graph (163 nodes, 195 edges) · All articles published within the last 7 days*\n\n• **Anthropic’s New Product Aims to Handle the Hard Part of Building AI Agents** — The tool, Claude Managed Agents, offers developers out-of-the-box infrastructure to build autonomous AI systems......\n  🔗 Graph: Claude, Anthropic, Agentic AI\n  📅 Published: 2026-04-09\n  📰 https://www.wired.com/story/anthropic-launches-claude-managed-agents/\n\n• **LIFE -- an energy efficient advanced continual learning agentic AI framework for frontier systems** — arXiv:2604.12874v1 Announce Type: new Abstract: The rapid advancement of AI has changed the character of HPC usage such as dimensioning, provisioning,...\n  🔗 Graph: Agentic AI\n  📅 Published: 2026-04-15\n  📰 https://arxiv.org/abs/2604.12874\n\n💡 Signal: Continued rapid developments in the agentic AI and enterprise vendor space.\n"
    }
  ]
};
