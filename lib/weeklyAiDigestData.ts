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
  "generatedAt": "2026-04-17T17:20:06.800Z",
  "weekOf": "2026-04-13",
  "weekEnding": "2026-04-19",
  "weekLabel": "Week of April 13–19, 2026",
  "publishedThrough": "April 17, 2026",
  "digestCount": 5,
  "headlineCount": 22,
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
        "The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break",
        "‘There is no silver bullet’: How 2 colleges use AI to support nontraditional learners",
        "What Is ‘Jagged Intelligence’ and How Can It Reframe the AI Debate? - The New York Times"
      ],
      "raw": "# AI Intelligence Briefing - April 15, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break** — Recent evaluations reveal how long-horizon tasks challenge current agentic systems. A cross-domain diagnostic benchmark highlights execution layer vulnerabilities.\n  🔗 Graph: Agentic AI\n  📅 Published: 2026-04-15\n  📰 https://arxiv.org/abs/2604.11978\n\n• **‘There is no silver bullet’: How 2 colleges use AI to support nontraditional learners** — Leaders at the ASU+GSV Summit emphasize that effectively adopting AI requires more than just buying products; it requires strategic implementation to bridge student gaps.\n  🔗 Graph: Higher Ed AI, ASU+GSV Summit\n  📅 Published: 2026-04-15\n  📰 https://www.highereddive.com/news/there-is-no-silver-bullet-how-2-colleges-use-ai-to-support-nontraditiona/817465/\n\n• **What Is ‘Jagged Intelligence’ and How Can It Reframe the AI Debate? - The New York Times** — Researchers introduce the concept of jagged intelligence to explain why AI excels at complex coding but struggles with simple tasks, reframing how organizations evaluate model capabilities.\n  🔗 Graph: AI Strategy\n  📅 Published: 2026-04-15\n  📰 https://www.nytimes.com/2026/04/15/technology/how-jagged-intelligence-can-reframe-the-ai-debate.html\n\n💡 Signal: The conversation is moving past generic AI capabilities into the realities of implementation—diagnosing agentic breakdowns, managing uneven model capabilities (\"jagged intelligence\"), and acknowledging the organizational heavy lifting required in higher education."
    },
    {
      "isoDate": "2026-04-16",
      "displayDate": "Thursday, April 16",
      "sourceFile": "ai-news-digest-2026-04-16.md",
      "headlines": [
        "AI is remaking the workforce. How can colleges ensure students thrive?",
        "Databricks Tames Agentic AI",
        "The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break",
        "When to Forget: A Memory Governance Primitive",
        "Enterprises Align AI and Data Platforms to Scale AI Deployments with Accuracy, – ISG – April 15, 2026."
      ],
      "raw": "# AI Intelligence Briefing - April 16, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **AI is remaking the workforce. How can colleges ensure students thrive?** — Skills training and public-private partnerships are key in a rapidly changing job landscape, as discussed at the annual ASU+GSV Summit.\n  🔗 Graph: Higher Ed AI, ASU+GSV Summit\n  📅 Published: 2026-04-16\n  📰 https://www.highereddive.com/news/ai-is-remaking-the-workforce-how-can-colleges-ensure-students-thrive/817598/\n\n• **Databricks Tames Agentic AI** — Databricks is extending its AI Gateway to manage LLM interactions with tools and APIs, including support for the Model Context Protocol (MCP) to govern agentic usage.\n  🔗 Graph: Databricks, Agentic AI, Model Context Protocol\n  📅 Published: 2026-04-15\n  📰 https://www.startuphub.ai/ai-news/technology/2026/databricks-tames-agentic-ai\n\n• **The Long-Horizon Task Mirage? Diagnosing Where and Why Agentic Systems Break** — A new cross-domain diagnostic benchmark characterizes why LLM agents often break down on long-horizon tasks that require extended, interdependent action sequences.\n  🔗 Graph: Agentic AI\n  📅 Published: 2026-04-16\n  📰 https://arxiv.org/abs/2604.11978\n\n• **When to Forget: A Memory Governance Primitive** — Proposes a new memory governance metric, Memory Worth (MW), for managing memory quality in AI agents dynamically as task distributions shift.\n  🔗 Graph: AI Governance, Agentic AI\n  📅 Published: 2026-04-16\n  📰 https://arxiv.org/abs/2604.12007\n\n• **Enterprises Align AI and Data Platforms to Scale AI Deployments with Accuracy, – ISG – April 15, 2026.** — Supabase and other emerging data platforms are recognized as innovative in supporting enterprise AI deployments and scaling architectures.\n  🔗 Graph: Supabase, Data Analytics\n  📅 Published: 2026-04-15\n  📰 https://www.biztechreports.com/news-archive/2026/4/10/enterprises-align-ai-and-data-platforms-to-scale-ai-deployments-with-accuracy-isg-april-14-2026\n\n💡 Signal: This week's developments emphasize the operationalization of agentic systems, focusing on governance mechanisms like Databricks' MCP integration and memory management frameworks, while higher ed institutions grapple with workforce alignment at forums like ASU+GSV."
    },
    {
      "isoDate": "2026-04-17",
      "displayDate": "Friday, April 17",
      "sourceFile": "ai-news-digest-2026-04-17.md",
      "headlines": [
        "Formalizing the Safety, Security, and Functional Properties of Agentic AI Systems",
        "Can Coding Agents Be General Agents?",
        "OpenAI has bought AI personal finance startup Hiro",
        "AgentForge: Execution-Grounded Multi-Agent LLM Framework for Autonomous Software Engineering",
        "MCPThreatHive: Automated Threat Intelligence for Model Context Protocol Ecosystems"
      ],
      "raw": "# AI Intelligence Briefing - April 17, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Formalizing the Safety, Security, and Functional Properties of Agentic AI Systems** — Explores the critical safety and functional properties of agentic ecosystems, highlighting the need for cohesive standards across fragmented communication layers like the Model Context Protocol (MCP).\n  🔗 Graph: Agentic AI, AI Security, Model Context Protocol\n  📅 Published: 2026-04-17\n  📰 https://arxiv.org/abs/2510.14133\n\n• **Can Coding Agents Be General Agents?** — Investigates whether specialized AI coding agents can successfully generalize their reasoning patterns to tackle end-to-end business process automation beyond software engineering.\n  🔗 Graph: Agentic AI, Claude Code, Codex\n  📅 Published: 2026-04-17\n  📰 https://arxiv.org/abs/2604.13107\n\n• **OpenAI has bought AI personal finance startup Hiro** — OpenAI signals an expansion of ChatGPT's capabilities into financial planning by acquiring the specialized AI personal finance startup.\n  🔗 Graph: OpenAI, GPT-4\n  📅 Published: 2026-04-16\n  📰 https://techcrunch.com/2026/04/13/openai-has-bought-ai-personal-finance-startup-hiro/\n\n• **AgentForge: Execution-Grounded Multi-Agent LLM Framework for Autonomous Software Engineering** — Proposes a new framework where autonomous coding agents must verify every generated code change through sandboxed execution before deploying to the codebase.\n  🔗 Graph: Agentic AI, Developer API Program\n  📅 Published: 2026-04-17\n  📰 https://arxiv.org/abs/2604.13120\n\n• **MCPThreatHive: Automated Threat Intelligence for Model Context Protocol Ecosystems** — Introduces an open-source platform specifically designed to monitor and address new security vulnerabilities introduced by integrating Model Context Protocol (MCP) into agentic systems.\n  🔗 Graph: Model Context Protocol, AI Security\n  📅 Published: 2026-04-17\n  📰 https://arxiv.org/abs/2604.13849\n\n💡 Signal: This week shows a strong shift toward securing and standardizing agentic infrastructure, particularly around the Model Context Protocol (MCP), alongside continued efforts to generalize coding agents for broader enterprise automation."
    }
  ]
};
