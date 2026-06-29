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
  "generatedAt": "2026-06-29T17:19:55.458Z",
  "weekOf": "2026-06-29",
  "weekEnding": "2026-07-05",
  "weekLabel": "Week of June 29 – July 5, 2026",
  "publishedThrough": "June 29, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-06-29",
      "displayDate": "Monday, June 29",
      "sourceFile": "ai-news-digest-2026-06-29.md",
      "headlines": [
        "Is competing for faster compute higher ed's new arms race?",
        "OpenAI reveals its first AI processor: Jalapeño",
        "HP Inc. launches Frontier strategic partnership with OpenAI",
        "Generative AI Policies at the World's Top Universities: 2026 Update",
        "Europe Is Fed Up and Wants Its Own AI"
      ],
      "raw": "# AI Intelligence Briefing - June 29, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Is competing for faster compute higher ed's new arms race?** — High-performance computing is becoming a key differentiator for universities as AI-powered research and curricula demand infrastructure that most campuses lack, raising equity concerns across the sector.\n  🔗 Graph: [Higher Ed AI], [San Diego Supercomputer Center], [TritonAI], [Enterprise Monitoring], [UC San Diego]\n  📅 Published: 2026-06-29\n  📰 https://universitybusiness.com/is-competing-for-faster-compute-higher-eds-new-arms-race/\n  📌 Key takeaways:\n    • High-performance computing is rapidly becoming a prerequisite for research and teaching across disciplines — not just STEM, but also ethics, philosophy, and the social sciences\n    • Cloud-only environments are insufficient for most institutions due to the cost of continuous large-scale workloads and the need for hands-on control\n    • Funding is the No. 1 barrier: GPUs can become obsolete during the procurement cycle, and ongoing power/cooling costs strain annual budgets\n    • The compute divide threatens to create a \"have/have-not\" gap between institutions that can invest and those that cannot\n\n• **OpenAI reveals its first AI processor: Jalapeño** — OpenAI and Broadcom unveiled a custom inference chip purpose-built for LLM workloads, aiming for deployment by end of 2026 with substantially better performance per watt than current hardware.\n  🔗 Graph: [OpenAI], [LiteLLM Enterprise], [Model Agnosticism], [San Diego Supercomputer Center], [AI Security]\n  📅 Published: 2026-06-24\n  📰 https://www.theverge.com/ai-artificial-intelligence/955939/openai-reveals-its-first-ai-processor-jalapeno\n  📌 Key takeaways:\n    • Jalapeño is a blank-slate design for LLM inference, not a repurposed general-purpose accelerator — optimized specifically for transformer-based model workloads\n    • Co-developed with Broadcom, physical samples were delivered June 24 with production deployment targeted by end of 2026\n    • OpenAI calls it \"the first step in a multi-generation compute platform,\" signaling long-term silicon strategy beyond reliance on NVIDIA GPUs\n    • Performance-per-watt substantially exceeds current state-of-the-art, which could meaningfully reduce inference costs for API consumers like UCSD\n\n• **HP Inc. launches Frontier strategic partnership with OpenAI** — HP is scaling its OpenAI Frontier partnership to embed AI across customer experiences, software development, and enterprise operations, marking one of the largest traditional tech company adoptions of Frontier model access.\n  🔗 Graph: [OpenAI], [Enterprise Monitoring], [AI Adoption], [Microsoft 365], [AI Security]\n  📅 Published: 2026-06-28\n  📰 https://openai.com/index/hp-frontier-partnership\n  📌 Key takeaways:\n    • HP is deploying OpenAI's Frontier models across three domains: customer-facing experiences, internal software development workflows, and enterprise operational processes\n    • The partnership signals growing demand from traditional enterprise tech companies for direct Frontier-model integration rather than building custom AI infrastructure\n    • HP joins a wave of large enterprises (Samsung, LSEG) establishing deep OpenAI partnerships, reinforcing the model-as-platform trend\n    • For UCSD as an HP customer, this could influence future product roadmap and campus device AI capabilities\n\n• **Generative AI Policies at the World's Top Universities: 2026 Update** — University generative AI policies are rapidly maturing beyond classroom advice toward structured frameworks for assessment governance, data privacy, disclosure, and research accountability.\n  🔗 Graph: [AI Governance], [Higher Ed AI], [AI Compliance & Governance], [TritonAI], [Developer API Program]\n  📅 Published: 2026-06-24\n  📰 https://www.thesify.ai/blog/generative-ai-policies-top-universities-2026\n  📌 Key takeaways:\n    • Top research universities are shifting from general AI classroom guidance toward specific policies on assessment governance, disclosure requirements, data privacy, and research accountability\n    • 95% of UK university respondents report using generative tools (HEPI 2026), and a US study of 95,000 academics found one-third regularly integrate LLMs into workflows\n    • Institutions are moving away from AI detectors (high false-positive rates) toward permission-based frameworks that emphasize disclosure and human accountability\n    • Research integrity requirements now demand documentation of AI tool use; most universities allow AI for drafting and coding but restrict it for examined work without explicit permission\n\n• **Europe Is Fed Up and Wants Its Own AI** — European leaders are pushing for AI sovereignty as US-China dominance and Trump-era policies catalyze efforts to build independent European AI capabilities, though the funding gap remains daunting.\n  🔗 Graph: [AI Governance], [AI Compliance & Governance], [Higher Ed AI], [Model Agnosticism], [OpenAI]\n  📅 Published: 2026-06-26\n  📰 https://www.wired.com/story/europe-is-fed-up-and-wants-its-own-ai/\n  📌 Key takeaways:\n    • AI sovereignty dominated discussions at Vivatech and G7, with France's Macron threatening independent European action if US nationalistic AI policies continue\n    • The funding gap is staggering: Anthropic's $65B fund-raise exceeded all investment in European and UK AI startups combined last year\n    • US export controls on advanced models (Anthropic Mythos 5, OpenAI GPT-5.6) are inadvertently accelerating Europe's resolve to build independent capability\n    • Cohere CEO Aiden Gomez argues \"a democracy must occupy the #2 position\" in global AI, but most analysts remain skeptical Europe can close the gap without a breakthrough in less resource-intensive model architectures\n\n💡 Signal: Three converging trends this week — the higher-ed compute arms race is real and tied directly to AI infrastructure investment decisions; OpenAI's custom silicon strategy (Jalapeño) and Frontier enterprise partnerships (HP) signal a maturing AI supply chain; and university AI governance is evolving from reactive classroom policies to structured institutional frameworks. For UCSD, all three intersect: SDSC compute capacity, LiteLLM gateway vendor strategy, and the ongoing governance work Brett is leading.\n"
    }
  ]
};
