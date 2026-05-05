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
  "generatedAt": "2026-05-05T13:37:50.228Z",
  "weekOf": "2026-05-04",
  "weekEnding": "2026-05-10",
  "weekLabel": "Week of May 4–10, 2026",
  "publishedThrough": "May 5, 2026",
  "digestCount": 2,
  "headlineCount": 13,
  "days": [
    {
      "isoDate": "2026-05-04",
      "displayDate": "Monday, May 4",
      "sourceFile": "ai-news-digest-2026-05-04.md",
      "headlines": [
        "Three reasons why DeepSeek's new model matters",
        "Elon Musk testifies that xAI trained Grok on OpenAI models",
        "Google Announces Gemini Enterprise Agent Platform",
        "Google's Gemini AI assistant is hitting the road in millions of vehicles",
        "Google upgrades Deep Research with MCP server integration",
        "Ars Technica publishes newsroom AI policy"
      ],
      "raw": "# AI Intelligence Briefing - May 4, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Three reasons why DeepSeek's new model matters** — Chinese AI firm DeepSeek released a preview of V4, its new flagship model featuring a novel architecture that processes much longer prompts more efficiently than its predecessor. While the market reaction was subdued compared to last year's breakthrough, the model challenges OpenAI and Anthropic in the open-source arena.\n  🔗 Graph: openai, anthropic, higher-ed-ai\n  📅 Published: 2026-04-24\n  📰 https://www.technologyreview.com/2026/04/24/1136422/why-deepseeks-v4-matters/\n\n• **Elon Musk testifies that xAI trained Grok on OpenAI models** — In the landmark Musk v. Altman trial, Elon Musk admitted under oath that xAI uses distillation techniques on OpenAI models to train Grok, calling it \"general practice among AI companies.\" The rare public acknowledgment highlights the interdependencies even between competitive AI labs.\n  🔗 Graph: openai, ai-governance, agentic-ai\n  📅 Published: 2026-05-01\n  📰 https://techcrunch.com/2026/04/30/elon-musk-testifies-that-xai-trained-grok-on-openai-models/\n\n• **Google Announces Gemini Enterprise Agent Platform** — At Google Cloud Next26, the company unveiled a comprehensive platform for building, scaling, governing, and optimizing AI agents. The announcement marks Google's formal entry into the enterprise agent infrastructure market with deep Gemini integration.\n  🔗 Graph: google, agentic-ai, litellm-enterprise\n  📅 Published: 2026-04-22\n  📰 https://cloud.google.com/blog/topics/google-cloud-next/welcome-to-google-cloud-next26\n\n• **Google's Gemini AI assistant is hitting the road in millions of vehicles** — Google announced it will begin rolling out Gemini to cars with Google built-in, replacing the current Google Assistant. The move represents one of the largest deployments of an AI assistant to date and signals Google's ambitions in ambient computing beyond phones and laptops.\n  🔗 Graph: google, gemini, vertical-ai\n  📅 Published: 2026-04-30\n  📰 https://techcrunch.com/2026/04/30/googles-gemini-ai-assistant-is-hitting-the-road-in-millions-of-vehicles/\n\n• **Google upgrades Deep Research with MCP server integration** — Google's Gemini API changelog announced new versions of the Deep Research agent featuring collaborative planning, visualization support, and Model Context Protocol (MCP) server integration. This brings agent-to-tool connectivity that aligns with the architectural patterns Brett is implementing in TritonAI.\n  🔗 Graph: gemini, model-context-protocol, enterprise-data-agent\n  📅 Published: 2026-04-28\n  📰 https://ai.google.dev/gemini-api/docs/changelog\n\n• **Ars Technica publishes newsroom AI policy** — The publication released its reader-facing explanation of how it uses and doesn't use generative AI, reflecting growing transparency expectations around AI in journalism. The policy signals maturing institutional practices around disclosure as AI-generated content becomes more common.\n  🔗 Graph: ai-governance, ai-compliance-governance, higher-ed-ai\n  📅 Published: 2026-04-22\n  📰 https://arstechnica.com/staff/2026/04/our-newsroom-ai-policy/\n\n💡 Signal: The week saw significant momentum in enterprise agent platforms (Google) and renewed competitive pressure from open-source challengers (DeepSeek V4), while governance conversations intensified through the Musk v. Altman trial revelations and institutional transparency initiatives. MCP integration is becoming table stakes for serious agent infrastructure.\n"
    },
    {
      "isoDate": "2026-05-05",
      "displayDate": "Tuesday, May 5",
      "sourceFile": "ai-news-digest-2026-05-05.md",
      "headlines": [
        "AI readiness on campus: How to strive for durability",
        "Jailbroken Frontier Models Retain Their Capabilities",
        "When Do Diffusion Models learn to Generate Multiple Objects?",
        "Skills as Verifiable Artifacts: A Trust Schema for Human-in-the-Loop Agent Runtimes",
        "AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes",
        "Rethinking Network Topologies for Cost-Effective Mixture-of-Experts LLM Serving",
        "LLM-Oriented Information Retrieval: A Denoising-First Perspective"
      ],
      "raw": "# AI Intelligence Briefing - May 5, 2026\n*Curated from knowledge graph (201 nodes, 244 edges) · All articles published within the last 7 days*\n\n• **AI readiness on campus: How to strive for durability** — University Business explores how higher ed institutions can build durable AI readiness programs, noting that employer-desired AI skills evolve rapidly and institutions must prepare students for continuous learning rather than static competencies. This aligns with the TritonAI program's focus on scaffolding sustainable AI adoption across campus.\n  🔗 Graph: higher-ed-ai, tritonai, brett-pollak\n  📅 Published: 2026-05-05\n  📰 https://universitybusiness.com/ai-readiness-on-campus-how-to-strive-for-durability/\n\n• **Jailbroken Frontier Models Retain Their Capabilities** — New arXiv research demonstrates that advanced jailbreak methods on frontier LLMs impose effectively no performance degradation, challenging assumptions about the \"jailbreak tax.\" This has direct implications for AI governance and security frameworks in enterprise deployments like TritonGPT.\n  🔗 Graph: ai-governance, ai-security, litellm-enterprise\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00267\n\n• **When Do Diffusion Models learn to Generate Multiple Objects?** — DeepMind researchers on arXiv investigate why text-to-image diffusion models struggle with multi-object generation, examining whether limitations stem from training data or architectural constraints. Relevant for understanding generative AI capabilities as institutions evaluate creative AI tools.\n  🔗 Graph: google, ai-adoption\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00273\n\n• **Skills as Verifiable Artifacts: A Trust Schema for Human-in-the-Loop Agent Runtimes** — arXiv paper proposing a trust framework for agent skills—structured packages that augment LLMs without model modification. This maps directly to the TritonAI App Builder's modular approach and the governance challenges of deploying agentic AI in higher ed.\n  🔗 Graph: agentic-ai, tritonai-app-builder, ai-governance\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00424\n\n• **AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes** — arXiv study of 260 Philippines teachers examines factors driving AI tool adoption in education, finding institutional support and teacher confidence are key mediators. Parallels TritonGPT's campus-wide adoption strategy and the Service Desk integration work underway.\n  🔗 Graph: ai-adoption, higher-ed-ai, tritongpt\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00343\n\n• **Rethinking Network Topologies for Cost-Effective Mixture-of-Experts LLM Serving** — arXiv research questions whether expensive high-bandwidth scale-up networks are strictly necessary for MoE LLM serving, presenting cross-layer analysis of network cost-effectiveness. Relevant to on-prem infrastructure decisions and SDSC hosting strategy.\n  🔗 Graph: san-diego-supercomputer-center, enterprise-monitoring, infrastructure-topic\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00254\n\n• **LLM-Oriented Information Retrieval: A Denoising-First Perspective** — arXiv perspective paper argues that modern IR must be redesigned for LLM consumption rather than human users, as noise directly causes hallucinations and reasoning failures in RAG systems. Core concept for enterprise data agents and document AI layers.\n  🔗 Graph: onyx, enterprise-data-agent, model-context-protocol\n  📅 Published: 2026-05-05\n  📰 https://arxiv.org/abs/2605.00505\n\n💡 Signal: This week's feed shows continued convergence of agentic AI research and higher ed implementation concerns—especially around governance, verifiable skills, and RAG reliability. The Berkeley/Stanford arXiv pipeline continues to dominate foundational research, while EDUCAUSE and University Business provide the institutional framing. Worth noting: multiple papers addressing the \"how do we trust agents?\" question, which will be central to the April 6 cabinet presentation and the upcoming Developer API Program launch.\n"
    }
  ]
};
