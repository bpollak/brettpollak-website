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
  "generatedAt": "2026-05-19T14:36:38.297Z",
  "weekOf": "2026-05-18",
  "weekEnding": "2026-05-24",
  "weekLabel": "Week of May 18–24, 2026",
  "publishedThrough": "May 19, 2026",
  "digestCount": 2,
  "headlineCount": 13,
  "days": [
    {
      "isoDate": "2026-05-18",
      "displayDate": "Monday, May 18",
      "sourceFile": "ai-news-digest-2026-05-18.md",
      "headlines": [
        "University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot",
        "Canvas Breach Highlights Growing Risks of Digital Dependence in Higher Education",
        "Google Launches Gemini Intelligence for Android with Proactive AI Capabilities",
        "OpenAI Launches the OpenAI Deployment Company to Help Businesses Build Around Intelligence",
        "ChatGPT Launches GPT-5.5 Instant as New Default Model",
        "No, Colleges Can't Just Quit Canvas",
        "Signals of Change, AI, and Tensions Around the Value of Higher Ed"
      ],
      "raw": "# AI Intelligence Briefing - Monday, May 18, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot** — Higher ed AI governance at scale: UK unified 150+ AI efforts under a transdisciplinary strategy framework and scaled trusted governance practices. Now 70,000+ students and staff use Copilot tools. A model for TritonAI's campus-wide adoption strategy.\n  🔗 Graph: higher-ed-ai, ai-governance, ai-adoption\n  📅 Published: 2026-05-18\n  📰 https://er.educause.edu/articles/sponsored/2026/5/university-of-kentucky-sparks-campus-wide-innovation-with-microsoft-365-copilot\n\n• **Canvas Breach Highlights Growing Risks of Digital Dependence in Higher Education** — Nearly 9,000 schools affected worldwide during peak academic season. The incident underscores why UC San Diego's vertical AI approach—on-prem at SDSC—matters for institutional data sovereignty and security.\n  🔗 Graph: ai-security, uc-san-diego, higher-ed-ai\n  📅 Published: 2026-05-18\n  📰 https://universitybusiness.com/canvas-breach-highlights-growing-risks-of-digital-dependence-in-higher-education/\n\n• **Google Launches Gemini Intelligence for Android with Proactive AI Capabilities** — Google's new \"Gemini Intelligence\" brings proactive task automation, web content summarization, and context-aware assistance to Android. The \"magic pointer\" feature turns cursors into AI-powered contextual help tools. Relevant for TritonAI's mobile and accessibility roadmap.\n  🔗 Graph: gemini, google, agentic-ai\n  📅 Published: 2026-05-13\n  📰 https://blog.google/products-and-platforms/platforms/android/gemini-intelligence/\n\n• **OpenAI Launches the OpenAI Deployment Company to Help Businesses Build Around Intelligence** — New corporate entity focused on enterprise AI deployment. Signals the maturation of AI infra market—relevant to Brett's work with LiteLLM Enterprise and the TritonAI Developer API Program.\n  🔗 Graph: openai, ai-governance, litellm-enterprise\n  📅 Published: 2026-05-11\n  📰 https://openai.com/news/\n\n• **ChatGPT Launches GPT-5.5 Instant as New Default Model** — OpenAI's latest release claims sharper accuracy, clearer answers, and stronger STEM capabilities. Achieved 81.2 on AIME 2025 math test (vs 65.4 prior). TritonAI's LiteLLM gateway will need evaluation for campus workloads.\n  🔗 Graph: openai, gpt-4, litellm-enterprise\n  📅 Published: 2026-05-05\n  📰 https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/\n\n• **No, Colleges Can't Just Quit Canvas** — Inside Higher Ed's analysis of LMS lock-in: moving platforms is \"much easier said than done\" even before security incidents. Reinforces the strategic value of UC San Diego's multi-pronged AI approach and data portability investments.\n  🔗 Graph: higher-ed-ai, canvas-lms, ai-security\n  📅 Published: 2026-05-18\n  📰 https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/05/18/no-colleges-cant-just-quit-canvas\n\n• **Signals of Change, AI, and Tensions Around the Value of Higher Ed** — EDUCAUSE Horizon Report podcast discussing the 2026 Teaching and Learning Edition findings. Critical listening for TritonAI's strategic positioning and cabinet presentation preparation.\n  🔗 Graph: higher-ed-ai, educause, ai-strategy-topic\n  📅 Published: 2026-05-18\n  📰 https://er.educause.edu/podcasts/educause-shop-talk/2026/signals-of-change-ai-and-tensions-around-the-value-of-higher-ed\n\n💡 **Signal:** The Canvas breach (9,000 schools) validates UC San Diego's on-prem SDSC strategy for TritonAI. Meanwhile, Kentucky's 70,000-user Copilot deployment and Google's proactive \"Gemini Intelligence\" show where higher ed AI is heading: integrated, governed, and increasingly agentic. The infrastructure Brett built—LiteLLM gateway, model agnosticism, vertical agents—positions TritonAI ahead of these curves.\n"
    },
    {
      "isoDate": "2026-05-19",
      "displayDate": "Tuesday, May 19",
      "sourceFile": "ai-news-digest-2026-05-19.md",
      "headlines": [
        "University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot",
        "SDOF: Taming the Alignment Tax in Multi-Agent Orchestration with State-Constrained Dispatch",
        "STAR: A Stage-attributed Triage and Repair framework for RCA Agents in Microservices",
        "PRISM: Prompt Reliability via Iterative Simulation and Monitoring for Enterprise Conversational AI",
        "Verifiable Agentic Infrastructure: Proof-Derived Authorization for Sovereign AI Systems",
        "Canvas breach highlights growing risks of digital dependence in higher education"
      ],
      "raw": "# AI Intelligence Briefing - Tuesday, May 19, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **University of Kentucky Sparks Campus-Wide Innovation with Microsoft 365 Copilot** — UK's Commonwealth AI Transdisciplinary Strategy unified 150+ AI initiatives and scaled trusted governance to 70,000+ students and staff. A model for vertical AI adoption in higher ed that Brett is tracking closely for TritonAI's institutional playbook.\n  🔗 Graph: Higher-Ed AI, AI Governance, AI Adoption, Vertical AI\n  📅 Published: 2026-05-18\n  📰 https://er.educause.edu/articles/sponsored/2026/5/university-of-kentucky-sparks-campus-wide-innovation-with-microsoft-365-copilot\n\n• **SDOF: Taming the Alignment Tax in Multi-Agent Orchestration with State-Constrained Dispatch** — New framework treats multi-agent execution as a constrained state machine with defensive layers for task routing and safety enforcement. Directly relevant to TritonAI's LiteLLM-based agent choreography and Model Context Protocol adoption.\n  🔗 Graph: Agentic AI, LiteLLM Enterprise, Model Context Protocol, Multi-Agent Orchestration\n  📅 Published: 2026-05-18\n  📰 https://arxiv.org/abs/2605.15204\n\n• **STAR: A Stage-attributed Triage and Repair framework for RCA Agents in Microservices** — LLM-based root cause analysis agents with staged error recovery and repair pipelines for incident diagnosis. Aligns with Brett's enterprise monitoring modernization priority and AI-driven observability pilot.\n  🔗 Graph: Agentic AI, Enterprise Monitoring, AIOps, Self-Healing\n  📅 Published: 2026-05-18\n  📰 https://arxiv.org/abs/2605.15581\n\n• **PRISM: Prompt Reliability via Iterative Simulation and Monitoring for Enterprise Conversational AI** — Framework for detecting and repairing prompt regressions in production LLM deployments through iterative testing and monitoring. Essential for scaling enterprise conversational agents like UC San Diego's TritonGPT at 73K+ users.\n  🔗 Graph: Enterprise Data Agent, Claude, Governance, Production Reliability\n  📅 Published: 2026-05-18\n  📰 https://arxiv.org/abs/2605.15665\n\n• **Verifiable Agentic Infrastructure: Proof-Derived Authorization for Sovereign AI Systems** — Introduces proof-derived authorization for autonomous AI agents in sovereign systems, addressing authorization risks when agents can generate syntactically valid but semantically unsafe actions. Critical for TritonAI's on-prem deployment at SDSC.\n  🔗 Graph: Agentic AI, AI Security, Governance, Sovereign Systems\n  📅 Published: 2026-05-18\n  📰 https://arxiv.org/abs/2605.15228\n\n• **Canvas breach highlights growing risks of digital dependence in higher education** — Canvas LMS vulnerability exposed ~9,000 schools. Underscores higher ed's infrastructure concentration risk and justifies defensive AI monitoring strategies Brett is piloting.\n  🔗 Graph: Higher-Ed AI, AI Security, Canvas LMS, Digital Resilience\n  📅 Published: 2026-05-18\n  📰 https://universitybusiness.com/canvas-breach-highlights-growing-risks-of-digital-dependence-in-higher-education/\n\n💡 Signal: Multi-agent orchestration is maturing from research to deployed enterprise infrastructure. The week's papers emphasize reliability (PRISM), safety (SDOF, Verifiable Agentic), and observability (STAR)—exactly the governance layer Brett is building into TritonAI. Higher ed adoption is accelerating (UK's 70K users), but security risks (Canvas breach) demand proactive monitoring and sovereignty (on-prem deployment patterns).\n"
    }
  ]
};
