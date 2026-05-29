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
  "generatedAt": "2026-05-29T13:35:33.770Z",
  "weekOf": "2026-05-25",
  "weekEnding": "2026-05-31",
  "weekLabel": "Week of May 25–31, 2026",
  "publishedThrough": "May 29, 2026",
  "digestCount": 5,
  "headlineCount": 27,
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
        "Google Unveils Android XR Smart Glasses, Powered by Gemini AI",
        "Harness, Scaffold, and the AI Agent Terms Worth Getting Right",
        "Higher education must be rebuilt to restore public trust. Here’s how.",
        "OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership",
        "Confidence Calibration in Large Language Models",
        "Context: Proactive Goal‑Directed Intelligence via Composable Sandboxed Programs"
      ],
      "raw": "# AI Intelligence Briefing - May 26, 2026\n*Curated from knowledge graph (68 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Google Unveils Android XR Smart Glasses, Powered by Gemini AI** — Google pushes wearable AI with Gemini, signaling a new wave of AI‑enhanced hardware for enterprise and education use.\n  🔗 Graph: Google, Gemini, Agentic AI\n  📅 Published: 2026-05-22\n  📰 https://campustechnology.com/articles/2026/05/22/google-unveils-android-xr-smart-glasses-powered-by-gemini-ai.aspx\n\n• **Harness, Scaffold, and the AI Agent Terms Worth Getting Right** — Hugging Face outlines core terminology for AI agents, helping teams standardize on concepts crucial for TritonAI’s agentic roadmap.\n  🔗 Graph: Agentic AI, LiteLLM Enterprise, Hugging Face\n  📅 Published: 2026-05-25\n  📰 https://huggingface.co/blog/agent-glossary\n\n• **Higher education must be rebuilt to restore public trust. Here’s how.** — A deep dive into reforms needed in higher‑ed governance, aligning with Brett’s AI governance priorities.\n  🔗 Graph: Higher Ed AI, AI Governance, Inside Higher Ed\n  📅 Published: 2026-05-26\n  📰 https://www.highereddive.com/news/higher-education-must-be-rebuilt-to-restore-public-trust-heres-how/821031/\n\n• **OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership** — OpenAI expands trustworthy news integration, a potential model for TritonAI’s content pipelines.\n  🔗 Graph: OpenAI, AI Governance, AI Adoption\n  📅 Published: 2026-05-25\n  📰 https://openai.com/index/grupo-folha-grupo-uol-partnership\n\n• **Confidence Calibration in Large Language Models** — New research highlights over‑confidence in LLMs, underscoring the need for robust AI reliability measures in TritonAI.\n  🔗 Graph: GPT-4, AI Governance, Model Agnosticism\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.23909\n\n• **Context: Proactive Goal‑Directed Intelligence via Composable Sandboxed Programs** — Proposes a framework for autonomous agents, directly relevant to TritonAI’s agentic AI ambitions.\n  🔗 Graph: Agentic AI, Onyx, Model Context Protocol\n  📅 Published: 2026-05-26\n  📰 https://arxiv.org/abs/2605.23928\n\n💡 Signal: AI governance, agentic AI standards, and enterprise‑ready AI hardware dominate the week, reinforcing Brett’s focus on responsible, scalable AI deployment across UC San Diego.\n"
    },
    {
      "isoDate": "2026-05-27",
      "displayDate": "Wednesday, May 27",
      "sourceFile": "ai-news-digest-2026-05-27.md",
      "headlines": [
        "Making the Invisible Visible: Redesigning an Onboarding Workflow for International Students",
        "Higher Education Network Infrastructure in the Age of AI",
        "Before Deploying AI in Admissions, Ask Why",
        "OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership",
        "Can LLMs Introspect? A Reality Check",
        "Your Agents Are Aging Too: Agent Lifespan Engineering for Deployed Systems"
      ],
      "raw": "# AI Intelligence Briefing - May 27, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Making the Invisible Visible: Redesigning an Onboarding Workflow for International Students** — Universities are overhauling enrollment processes with AI-driven automation, improving compliance and staff efficiency.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-27\n  📰 https://er.educause.edu/articles/2026/5/making-the-invisible-visible-redesigning-an-onboarding-workflow-for-international-students\n\n• **Higher Education Network Infrastructure in the Age of AI** — AI workloads strain campus networks, prompting a push for smarter infrastructure management.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-26\n  📰 https://edtechmagazine.com/higher/article/2026/05/higher-education-network-infrastructure-age-ai\n\n• **Before Deploying AI in Admissions, Ask Why** — A new framework urges institutions to align AI adoption with clear admissions goals.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-27\n  📰 https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/05/27/deploying-ai-admissions-ask-why\n\n• **OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership** — OpenAI expands trusted news integration, a move relevant for responsible AI content distribution.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-25\n  📰 https://openai.com/index/grupo-folha-grupo-uol-partnership\n\n• **Can LLMs Introspect? A Reality Check** — Researchers question whether large language models truly understand their internal states, impacting agentic AI reliability.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-27\n  📰 https://arxiv.org/abs/2605.26242\n\n• **Your Agents Are Aging Too: Agent Lifespan Engineering for Deployed Systems** — Study highlights the need for lifecycle engineering of AI agents to maintain performance over time.\n  🔗 Graph: tritonai, agentic-ai, higher-ed-ai\n  📅 Published: 2026-05-27\n  📰 https://arxiv.org/abs/2605.26302\n\n💡 Signal: Higher education institutions accelerate AI adoption while grappling with governance and infrastructure challenges; agentic AI research pushes deeper understanding of model introspection and lifecycle."
    },
    {
      "isoDate": "2026-05-28",
      "displayDate": "Thursday, May 28",
      "sourceFile": "ai-news-digest-2026-05-28.md",
      "headlines": [
        "Google Moves AI Agents into the Mainstream",
        "3 Things to Know About Trump’s Higher Education Grant Competitions",
        "ITBench-AA: Frontier Models Score Below 50% on the First Benchmark for Agentic Enterprise IT Tasks — by Artificial Analysis and IBM",
        "Cisco and OpenAI redefine enterprise engineering with Codex",
        "Identifying and Understanding Human Values in Text: A Tailorable LLM‑based Architecture"
      ],
      "raw": "# AI Intelligence Briefing - Saturday, May 28, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Google Moves AI Agents into the Mainstream** — Google announced a push to integrate AI agents across its product suite, signaling broader enterprise adoption of agentic AI.\n  🔗 Graph: Agentic AI, Google, TritonAI\n  📅 Published: 2026-05-27\n  📰 https://campustechnology.com/articles/2026/05/27/google-moves-ai-agents-into-the-mainstream.aspx\n\n• **3 Things to Know About Trump’s Higher Education Grant Competitions** — New federal grant rules could reshape funding streams for public universities, affecting long‑term AI research budgets.\n  🔗 Graph: Higher Ed AI, UC San Diego, AI Governance\n  📅 Published: 2026-05-28\n  📰 https://www.insidehighered.com/news/government/student-aid-policy/2026/05/28/3-things-know-about-trumps-higher-ed-grant\n\n• **ITBench-AA: Frontier Models Score Below 50% on the First Benchmark for Agentic Enterprise IT Tasks — by Artificial Analysis and IBM** — Early benchmarking shows current frontier models still struggle with complex enterprise IT automation, underscoring the need for TritonAI’s agentic improvements.\n  🔗 Graph: Agentic AI, IBM, TritonAI\n  📅 Published: 2026-05-27\n  📰 https://huggingface.co/blog/ibm-research/itbench-aa\n\n• **Cisco and OpenAI redefine enterprise engineering with Codex** — The partnership showcases Codex‑powered AI tooling for large‑scale network automation, directly relevant to TritonAI’s infrastructure roadmap.\n  🔗 Graph: Codex, Cisco, OpenAI\n  📅 Published: 2026-05-27\n  📰 https://openai.com/index/cisco\n\n• **Identifying and Understanding Human Values in Text: A Tailorable LLM‑based Architecture** — New research proposes a modular LLM approach to embed human values, aligning with TritonAI’s AI governance agenda.\n  🔗 Graph: AI Governance, LLM, TritonAI\n  📅 Published: 2026-05-28\n  📰 https://arxiv.org/abs/2605.27373\n\n💡 Signal: Enterprise‑focused AI agents are gaining momentum across both vendor roadmaps (Google, Cisco/OpenAI) and academic research (agentic benchmarks, value‑aligned LLMs), reinforcing Brett’s strategic push on agentic AI, AI governance, and higher‑ed adoption.\n"
    },
    {
      "isoDate": "2026-05-29",
      "displayDate": "Friday, May 29",
      "sourceFile": "ai-news-digest-2026-05-29.md",
      "headlines": [
        "Google Moves AI Agents into the Mainstream",
        "ACTUAL Intelligence: Practitioner Perspectives on Centering the Human in the Age of AI",
        "The Canvas Breach: Reframing Higher Ed’s SaaS Risk Exposure",
        "OpenAI’s Frontier Governance Framework",
        "Why I Created the National AI Equity Lab"
      ],
      "raw": "# AI Intelligence Briefing - May 29, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Google Moves AI Agents into the Mainstream** — Google’s push to embed AI agents across its product suite signals a mainstream turn for agentic AI, directly relevant to Brett’s focus on agentic capabilities.\n  🔗 Graph: agentic-ai, google, gemini\n  📅 Published: 2026-05-27\n  📰 https://campustechnology.com/articles/2026/05/27/google-moves-ai-agents-into-the-mainstream.aspx\n\n• **ACTUAL Intelligence: Practitioner Perspectives on Centering the Human in the Age of AI** — Highlights the need for human‑centric AI policies in higher education, aligning with AI governance priorities.\n  🔗 Graph: ai-governance, higher-ed-ai, eduCAUSE\n  📅 Published: 2026-05-28\n  📰 https://er.educause.edu/articles/2026/5/actual-intelligence-practitioner-perspectives-on-centering-the-human-in-the-age-of-ai\n\n• **The Canvas Breach: Reframing Higher Ed’s SaaS Risk Exposure** — A major data breach at Canvas underscores security challenges for campus SaaS tools, a key concern for enterprise monitoring.\n  🔗 Graph: ai-security, higher-ed-ai, canvas-lms\n  📅 Published: 2026-05-28\n  📰 https://edtechmagazine.com/higher/article/2026/05/canvas-breach-reframing-higher-eds-saas-risk-exposure\n\n• **OpenAI’s Frontier Governance Framework** — OpenAI outlines its safety and governance practices, offering a benchmark for UCSD’s AI governance efforts.\n  🔗 Graph: ai-governance, openai, gpt-4\n  📅 Published: 2026-05-28\n  📰 https://openai.com/index/openai-frontier-governance-framework\n\n• **Why I Created the National AI Equity Lab** — Discusses equity in AI deployment, informing AI governance and inclusion strategies on campus.\n  🔗 Graph: ai-governance, higher-ed-ai, equity\n  📅 Published: 2026-05-29\n  📰 https://www.insidehighered.com/opinion/columns/resident-scholar/2026/05/29/why-i-created-national-ai-equity-lab\n\n💡 Signal: Campus AI governance, security, and agentic capabilities are accelerating, with major vendors and higher‑ed institutions racing to embed responsible AI.\n"
    }
  ]
};
