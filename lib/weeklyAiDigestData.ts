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
  "generatedAt": "2026-04-29T17:20:06.566Z",
  "weekOf": "2026-04-27",
  "weekEnding": "2026-05-03",
  "weekLabel": "Week of April 27 – May 3, 2026",
  "publishedThrough": "April 29, 2026",
  "digestCount": 3,
  "headlineCount": 18,
  "days": [
    {
      "isoDate": "2026-04-27",
      "displayDate": "Monday, April 27",
      "sourceFile": "ai-news-digest-2026-04-27.md",
      "headlines": [
        "Google to invest up to $40B in Anthropic as Claude outsells Gemini in enterprise",
        "Microsoft to integrate Anthropic's Mythos into its security development program",
        "AI is here. You can stop investing in two futures",
        "OpenAI releases GPT-5.5, bringing company one step closer to an AI 'super app'",
        "Google Cloud's enterprise strategy coming into focus",
        "Higher Ed Must Not Let AI Write Its Own Argument"
      ],
      "raw": "# AI Intelligence Briefing - Monday, April 27, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Google to invest up to $40B in Anthropic as Claude outsells Gemini in enterprise** — Google's massive commitment signals that Claude's dominance in enterprise and developer markets (including Claude Code's explosive growth) is forcing even its biggest competitor to double down on it; for Brett's TritonAI stack, this means Anthropic/Claude's infrastructure capacity constraints should ease — and LiteLLM's model-agnostic gateway strategy looks increasingly prescient.\n  🔗 Graph: anthropic, claude, google, litellm-enterprise, model-agnosticism\n  📅 Published: 2026-04-24\n  📰 https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/\n\n• **Microsoft to integrate Anthropic's Mythos into its security development program** — Microsoft is embedding Claude Mythos Preview into its Security Development Lifecycle (SDL) as part of \"Project Glasswing,\" using the model to find and fix vulnerabilities before adversaries can exploit them; this represents a landmark enterprise AI security deployment that directly touches the Microsoft + Anthropic stack Brett uses at UC San Diego.\n  🔗 Graph: microsoft, anthropic, claude, ai-security, azure-openai\n  📅 Published: 2026-04-22\n  📰 https://www.reuters.com/technology/microsoft-integrate-anthropics-mythos-into-its-security-development-program-2026-04-22/\n\n• **AI is here. You can stop investing in two futures** — University Business calls out the \"hedging\" era in higher ed AI as over: institutions still treating AI as a parallel experiment rather than the core operating model are wasting resources and losing relevance; the framing aligns precisely with the strategic argument Brett makes for TritonAI as mission-critical infrastructure, not a pilot.\n  🔗 Graph: higher-ed-ai, tritonai, ai-governance, vertical-ai, ai-adoption\n  📅 Published: 2026-04-27\n  📰 https://universitybusiness.com/ai-in-higher-ed-you-can-stop-investing-in-two-futures/\n\n• **OpenAI releases GPT-5.5, bringing company one step closer to an AI 'super app'** — GPT-5.5 delivers higher intelligence at the same per-token latency as GPT-5.4, with full API feature parity (prompt caching, hosted tools, tool search, compaction); this is a direct upgrade for TritonAI's LiteLLM gateway users who rely on OpenAI models, requiring no integration changes.\n  🔗 Graph: openai, gpt-4, litellm-enterprise, tritongpt, developer-api-program\n  📅 Published: 2026-04-23\n  📰 https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/\n\n• **Google Cloud's enterprise strategy coming into focus** — Google is positioning itself as an AI distribution layer rather than a model-only vendor, with a VP quoted as saying \"we will help enterprises access the intelligence of those models\" — essentially describing the gateway-and-orchestration model that TritonAI already embodies; Google is watching how UC San Diego-style deployments work and building toward it.\n  🔗 Graph: google, gemini, litellm-enterprise, model-agnosticism, enterprise-data-agent\n  📅 Published: 2026-04-22\n  📰 https://www.reuters.com/technology/artificial-intelligence/google-finds-its-place-ai-battle-enterprise-2026-04-22/\n\n• **Higher Ed Must Not Let AI Write Its Own Argument** — Inside Higher Ed publishes a sharp challenge to higher education's passive acceptance of AI-driven benchmarks (like OpenAI's GDPval) as determinants of institutional strategy; argues that what labor should remain human and what losses are acceptable cannot be outsourced to vendor efficiency metrics — a critical governance perspective for Brett's AI Cabinet presentations.\n  🔗 Graph: higher-ed-ai, ai-governance, ai-compliance-governance, tritonai\n  📅 Published: 2026-04-22\n  📰 https://www.insidehighered.com/opinion/letters/2026/04/22/higher-ed-must-not-let-ai-write-its-own-argument\n\n💡 Signal: This week's biggest signal is the Anthropic funding supernova — both Google ($40B) and Amazon ($25B) committing tens of billions in days proves Claude has won the enterprise developer market. For Brett, this validates the TritonAI bet on Anthropic as a primary model provider and suggests Claude Code capacity (which has been strained) will expand. Meanwhile, the higher ed discourse is finally maturing past \"should we use AI?\" into \"what does institutional identity mean when AI does the work?\" — exactly the governance conversation Brett needs to own.\n"
    },
    {
      "isoDate": "2026-04-28",
      "displayDate": "Tuesday, April 28",
      "sourceFile": "ai-news-digest-2026-04-28.md",
      "headlines": [
        "Anthropic adds persistent memory to Claude Managed Agents in public beta",
        "Anthropic MCP Design Vulnerability Enables RCE, Threatening AI Supply Chain",
        "OpenAI releases GPT-5.5, its \"smartest and most intuitive\" model yet",
        "DeepSeek unveils V4 model tailored for Huawei chips as China pushes for tech autonomy",
        "Google signs classified AI deal with Pentagon amid employee opposition",
        "University of Wisconsin receives $100 million for its new AI college",
        "5 AI Myths and Why We Must Move Past Them"
      ],
      "raw": "# AI Intelligence Briefing - Tuesday, April 28, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Anthropic adds persistent memory to Claude Managed Agents in public beta** — Agents built on the Claude Platform can now learn and share knowledge across sessions; a direct unlock for TritonAI's agentic workflows and the Developer API Program, where session continuity has been a key gap.\n  🔗 Graph: anthropic, claude, agentic-ai, developer-api-program\n  📅 Published: 2026-04-23\n  📰 https://sdtimes.com/anthropic/anthropic-adds-memory-to-claude-managed-agents/\n\n• **Anthropic MCP Design Vulnerability Enables RCE, Threatening AI Supply Chain** — OX Security disclosed 10 vulnerabilities (CVE-2026-30623) in Anthropic's MCP SDK stdio transport affecting LiteLLM, LangChain, LangFlow, and others; authenticated and unauthenticated command injection paths. Upgrade LiteLLM to v1.83.7-stable immediately — TritonAI's gateway is directly in scope.\n  🔗 Graph: litellm-enterprise, model-context-protocol, ai-security, tritongpt\n  📅 Published: 2026-04-21\n  📰 https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html\n\n• **OpenAI releases GPT-5.5, its \"smartest and most intuitive\" model yet** — Positioned as a step toward an AI \"super app,\" GPT-5.5 is more efficient and better at coding than GPT-5 and is rolling out to ChatGPT users and the API. Evaluate for TritonAI gateway routing as it may offer a cost/capability advantage over current GPT-5.4 defaults.\n  🔗 Graph: openai, gpt-4, litellm-enterprise, model-agnosticism\n  📅 Published: 2026-04-23\n  📰 https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/\n\n• **DeepSeek unveils V4 model tailored for Huawei chips as China pushes for tech autonomy** — DeepSeek's 1.6-trillion-parameter V4 and a smaller V4-Flash variant trained on Huawei Ascend 950s demonstrate that frontier-quality models no longer require Nvidia hardware — with rock-bottom pricing that could reshape on-prem AI infrastructure planning at SDSC.\n  🔗 Graph: model-agnosticism, san-diego-supercomputer-center, tritongpt, ai-governance\n  📅 Published: 2026-04-24\n  📰 https://www.reuters.com/technology/chinas-deepseek-returns-with-new-model-year-after-viral-rise-2026-04-24/\n\n• **Google signs classified AI deal with Pentagon amid employee opposition** — Google joined OpenAI and xAI in granting DoD rights to use its AI for \"any lawful government purpose\" in classified settings, even as hundreds of employees pushed back. Sets a tone for how major AI vendors will navigate government/national security contracts — relevant context for UC San Diego's own AI governance posture.\n  🔗 Graph: google, ai-governance, ai-compliance-governance, vertical-ai\n  📅 Published: 2026-04-28\n  📰 https://www.reuters.com/technology/google-signs-classified-ai-deal-with-pentagon-information-reports-2026-04-28/\n\n• **University of Wisconsin receives $100 million for its new AI college** — UW–Madison named its founding dean and secured $100M in philanthropic support and 50 new faculty lines for its College of Computing and Artificial Intelligence, set to launch July 1. As UC San Diego positions TritonAI as a flagship, peer institutions formalizing AI at the college level raises the competitive bar.\n  🔗 Graph: higher-ed-ai, uc-san-diego, tritonai, ai-adoption\n  📅 Published: 2026-04-28\n  📰 https://universitybusiness.com/university-of-wisconsin-receives-100-million-for-its-new-ai-college/\n\n• **5 AI Myths and Why We Must Move Past Them** — Inside Higher Ed op-ed argues that standard advice on AI in teaching — including \"tell students to disclose AI use\" and \"focus on detection\" — is already outdated and is holding institutions back from genuine AI integration. Directly relevant to TritonAI's faculty adoption and the AI Symposium UCSD planning.\n  🔗 Graph: higher-ed-ai, tritonai, ai-adoption, ai-symposium-ucsd\n  📅 Published: 2026-04-28\n  📰 https://www.insidehighered.com/opinion/views/2026/04/28/5-ai-myths-and-why-we-must-move-past-them-opinion\n\n💡 Signal: Two urgent items today. First: patch LiteLLM immediately — CVE-2026-30623 affects MCP stdio transport in your exact stack. Second: Anthropic's persistent memory for Managed Agents plus GPT-5.5's release represent back-to-back capability jumps that make the case for updating TritonAI's model routing strategy this week. On the governance front, Google's DoD deal and UW-Madison's $100M college launch signal that the institutional stakes around AI are escalating fast — useful framing for Brett's upcoming cabinet and conference presentations.\n"
    },
    {
      "isoDate": "2026-04-29",
      "displayDate": "Wednesday, April 29",
      "sourceFile": "ai-news-digest-2026-04-29.md",
      "headlines": [
        "Cybersecurity in the Intelligence Age",
        "Faculty Concerned About ASU's 'Frankensteinian' AI Course Builder",
        "A Decoupled Human-in-the-Loop System for Controlled Autonomy in Agentic Workflows",
        "A Systematic Approach for Large Language Models Debugging",
        "Structural Enforcement of Goal Integrity in AI Agents via Separation-of-Powers Architecture"
      ],
      "raw": "# AI Intelligence Briefing - April 29, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Cybersecurity in the Intelligence Age** — OpenAI outlines a five-part action plan for AI-powered cyber defense and democratizing AI security tools. Relevant for UC San Diego's AI security posture and TritonAI's enterprise risk framework.\n  🔗 Graph: AI Security, OpenAI, Agentic AI\n  📅 Published: 2026-04-29\n  📰 https://openai.com/index/cybersecurity-in-the-intelligence-age\n\n• **Faculty Concerned About ASU's 'Frankensteinian' AI Course Builder** — Arizona State quietly deployed an AI tool that pulls from faculty content to generate courses, raising governance concerns about consent and access. A cautionary tale for TritonAI's rollout ethics.\n  🔗 Graph: Higher Ed AI, AI Governance, TritonAI\n  📅 Published: 2026-04-29\n  📰 https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/04/29/faculty-concerned-about-asus-new-ai-course\n\n• **A Decoupled Human-in-the-Loop System for Controlled Autonomy in Agentic Workflows** — Research on safe human oversight for AI agents that maintains accountability without embedding HITL logic in every application. Directly applicable to TritonAI's agent architecture.\n  🔗 Graph: Agentic AI, AI Governance, Human-in-the-Loop\n  📅 Published: 2026-04-29\n  📰 https://arxiv.org/abs/2604.23049\n\n• **A Systematic Approach for Large Language Models Debugging** — Treats LLMs as observable systems with structured debugging protocols. Addresses operational reliability challenges Brett faces at scale with TritonGPT.\n  🔗 Graph: LLM Operations, TritonGPT, AI Observability\n  📅 Published: 2026-04-29\n  📰 https://arxiv.org/abs/2604.23027\n\n• **Structural Enforcement of Goal Integrity in AI Agents via Separation-of-Powers Architecture** — Proposes architectural safety guarantee beyond probabilistic methods like RLHF. Aligns with Brett's governance-first approach to campus AI deployment.\n  🔗 Graph: AI Governance, Agentic AI, AI Safety\n  📅 Published: 2026-04-29\n  📰 https://arxiv.org/abs/2604.23646\n\n💡 Signal: Two themes dominate this week's feed: AI security infrastructure (OpenAI's cyber plan, agent safety architectures) and the governance challenges of rapid higher-ed AI deployment (ASU's faculty concerns). Both reinforce the strategic value of UC San Diego's measured, governance-first TritonAI approach.\n"
    }
  ]
};
