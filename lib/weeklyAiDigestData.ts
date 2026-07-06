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
  "generatedAt": "2026-07-06T17:20:29.422Z",
  "weekOf": "2026-07-06",
  "weekEnding": "2026-07-12",
  "weekLabel": "Week of July 6–12, 2026",
  "publishedThrough": "July 6, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-07-06",
      "displayDate": "Monday, July 6",
      "sourceFile": "ai-news-digest-2026-07-06.md",
      "headlines": [
        "Claude's getting a lab coat",
        "College leaders gather to collaborate on AI adoption",
        "Report: AI impact starts with strong data foundation",
        "Microsoft 'Copilot OS' revealed in leaked video",
        "🤗 Kernels: Major Updates"
      ],
      "raw": "# AI Intelligence Briefing - July 6, 2026\n*Curated from knowledge graph (633 nodes, 674 edges) · All articles published within the last 7 days*\n\n• **Claude's getting a lab coat** — Anthropic launched Claude Science in beta, an \"AI workbench for scientists\" that pulls fragmented research tools and datasets into a single environment and can generate visual outputs like 3D protein structures. The company stresses this is not a new model but a specialized workflow layer. Biology is the starting vertical, with plans to expand.\n 🔗 Graph: Anthropic (8), Claude (8), Agentic AI (9), Higher Ed AI (9)\n 📅 Published: 2026-06-30\n 📰 https://www.theverge.com/ai-artificial-intelligence/959371/claudes-getting-a-lab-coat\n 📌 Key takeaways:\n • Claude Science is a purpose-built AI workbench for researchers, not a new foundation model — Anthropic is betting domain-specific tooling over general capability.\n • Initial focus is biology (3D protein visualization, dataset integration), with expansion into other scientific domains planned.\n • The launch follows Claude Sonnet 5 and the broader trend of AI moving from chat interfaces into specialized workflow products.\n • For UCSD's TritonAI ecosystem, this reinforces the vertical-AI thesis: building task-specific AI tools for research domains (like the Enterprise Data Agent) rather than generic chatbots.\n • Watch for Anthropic's next moves in life sciences — the company has separately signaled interest in drug development.\n\n• **College leaders gather to collaborate on AI adoption** — Nearly 200 participants from 30+ institutions convened at Complete College America's AI and Student Success Summit in Chicago to build governance frameworks, infrastructure plans, and change-management strategies for responsible AI adoption across higher education.\n 🔗 Graph: AI Governance (9), Higher Ed AI (9), AI Adoption (7)\n 📅 Published: 2026-07-02\n 📰 https://www.govtech.com/education/higher-ed/college-leaders-gather-to-collaborate-on-ai-adoption\n 📌 Key takeaways:\n • The summit focused on \"organizational design\" rather than technology adoption — CCA's director of technology innovation said the distinguishing factor between institutions closing completion gaps is \"the sophistication of their people and systems.\"\n • Curriculum centered on mission alignment, resource management, responsible data use, talent development, and change management.\n • Builds on CCA's 2025 AI Readiness Consortium and case studies from University of Louisiana, UMass, and Arizona State University.\n • This mirrors the governance challenges UCSD is navigating with TritonAI — the question isn't whether the technology works, but how institutions organize around it.\n • The emphasis on cross-institutional trust and shared governance frameworks aligns with AI governance frameworks and governance work.\n\n• **Report: AI impact starts with strong data foundation** — TDWI Research's 2026 Blueprint report finds the decisive factor separating high-impact AI organizations from those stuck in pilots is not model choice but the condition of their data foundation — including governance, architecture, semantic alignment, and accessibility.\n 🔗 Graph: Data Analytics (8), Data Analytics Governance (7), AI Adoption (7)\n 📅 Published: 2026-06-29\n 📰 https://campustechnology.com/articles/2026/06/29/report-ai-impact-starts-with-strong-data-foundation.aspx\n 📌 Key takeaways:\n • 95% of high-impact AI organizations view the data foundation as \"absolutely required\" or important for AI success, versus only ~17-18% of lower-impact organizations.\n • Fragmented data environments, inconsistent governance, and weak semantic alignment become critical constraints as AI moves from pilots to production.\n • Unstructured data is now central to enterprise AI use cases — a shift from traditional structured-data analytics.\n • Directly relevant to UCSD's data governance challenges and the Enterprise Data Agent project: without a strong data foundation, AI scale stalls.\n • TDWI defines an AI-ready data foundation as governed, contextualized, accessible assets spanning ingestion, pipelines, metadata, lineage, and access controls.\n\n• **Microsoft 'Copilot OS' revealed in leaked video** — A leaked internal Microsoft video shows Project Aion, a lightweight, web-based Windows OS built entirely around Copilot and agentic AI. The prototype runs on a Win3 codebase with an Edge-powered shell where every interaction routes through an AI assistant.\n 🔗 Graph: Microsoft (7), Agentic AI (9), AI Adoption (7)\n 📅 Published: 2026-07-02\n 📰 https://www.windowscentral.com/microsoft/windows-11/microsoft-copilot-os-revealed-in-leaked-video-lightweight-windows-os-exploration-features-new-desktop-ui-built-entirely-around-copilot-and-agentic-ai\n 📌 Key takeaways:\n • The leaked 3-minute video (first posted on BetaWiki Discord) shows working but early code of a radical Windows redesign where Copilot replaces the traditional Start menu and taskbar as the primary user interface.\n • The OS is built on \"Win3,\" a lightweight web-based Windows codebase, with Microsoft Edge serving as the rendering shell.\n • Apps run via picture-in-picture browser windows rather than native executables — a fundamental architectural shift.\n • While this may never ship as a consumer product, it signals Microsoft's long-term bet that the OS layer becomes AI-native, which would reshape the enterprise desktop environment UCSD manages.\n • For endpoint management (Parrish Nnambi's team), an AI-native OS would fundamentally change deployment, security, and compliance models.\n\n• **🤗 Kernels: Major Updates** — Hugging Face shipped significant upgrades to its Kernels project: a new kernel repository type on the Hub, trusted publisher security model, code signing via Sigstore/cosign, expanded framework support, and a foundation for agentic kernel development.\n 🔗 Graph: AI Adoption (7), Model Agnosticism (7)\n 📅 Published: 2026-07-06\n 📰 https://huggingface.co/blog/revamped-kernels\n 📌 Key takeaways:\n • Kernels now have a dedicated repository type on Hugging Face Hub with system-card-style compatibility metadata (accelerators, OS, backend versions).\n • Security overhaul: trusted publisher model restricts kernel loading to vetted organizations by default, with opt-in for untrusted code. Code signing via Sigstore cosign adds protection against credential-compromise scenarios.\n • Nix-based reproducibility ensures kernels can be recompiled and verified against source — important for enterprise audit requirements.\n • The project is building toward \"agentic kernel development\" where AI agents can autonomously write, test, and deploy custom kernels.\n • For UCSD's on-prem AI infrastructure at SDSC, standardized, signed kernels reduce supply-chain risk for GPU-accelerated workloads.\n\n💡 Signal: This week's research-application pattern is unmistakable — Anthropic launched a dedicated science workbench, Microsoft showed an AI-native OS, and higher-ed leaders gathered specifically to build AI governance rather than debate adoption. The conversation has shifted from \"should we use AI\" to \"how do we organize around it.\" The TDWI data-foundation report reinforces what UCSD's Enterprise Data Agent is already doing: treating data infrastructure as the strategic bottleneck, not model selection.\n"
    }
  ]
};
