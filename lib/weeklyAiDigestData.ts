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
  "generatedAt": "2026-06-10T17:20:11.479Z",
  "weekOf": "2026-06-08",
  "weekEnding": "2026-06-14",
  "weekLabel": "Week of June 8–14, 2026",
  "publishedThrough": "June 10, 2026",
  "digestCount": 3,
  "headlineCount": 15,
  "days": [
    {
      "isoDate": "2026-06-08",
      "displayDate": "Monday, June 8",
      "sourceFile": "ai-news-digest-2026-06-08.md",
      "headlines": [
        "Internet2: Closing the Access Gap for Research Cyberinfrastructure",
        "Call for Speakers Now Open for Tech Tactics in Education Fall 2026",
        "Measuring the impact of learning with AI in Sierra Leone and beyond"
      ],
      "raw": "# AI Intelligence Briefing - June 8, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days* (Backfilled on 2026-06-09)\n\n• **Internet2: Closing the Access Gap for Research Cyberinfrastructure** — Campus Technology article on collaborative research network initiatives.\n  🔗 Graph: enterprise-monitoring, ai-adoption, tritonai\n  📅 Published: 2026-06-08\n  📰 https://campustechnology.com/articles/2026/06/08/internet2-closing-the-access-gap-for-research-cyberinfrastructure.aspx\n  📌 Key takeaways:\n    • Internet2 unites CIOs, researchers, and data facilitators.\n    • Provides a shared cyberinfrastructure to accelerate AI‑driven research.\n    • Emphasizes scalable, secure networking for campus collaborations.\n    • Highlights funding opportunities for joint projects.\n\n• **Call for Speakers Now Open for Tech Tactics in Education Fall 2026** — Virtual conference invitation focusing on AI, cybersecurity, and emerging tech.\n  🔗 Graph: higher-ed-ai, ai-governance, tritonai\n  📅 Published: 2026-06-08\n  📰 https://campustechnology.com/articles/2026/06/08/call-for-speakers-now-open-for-tech-tactics-in-education-fall-2026.aspx\n  📌 Key takeaways:\n    • Seeks thought leaders to discuss AI integration in higher ed.\n    • Highlights sessions on cybersecurity and data governance.\n    • Offers networking with campus IT executives.\n    • Application deadline: September 2026.\n\n• **Measuring the impact of learning with AI in Sierra Leone and beyond** — DeepMind blog post on AI‑guided learning outcomes.\n  🔗 Graph: agentic-ai, litellm-enterprise, higher-ed-ai\n  📅 Published: 2026-06-08\n  📰 https://deepmind.google/blog/measuring-the-impact-of-learning-with-ai-in-sierra-leone-and-beyond/\n  📌 Key takeaways:\n    • Gemini’s Guided Learning feature boosts engagement in low‑resource settings.\n    • Randomized trial shows measurable improvement in knowledge retention.\n    • Provides a template for campus‑wide AI‑enhanced curricula.\n    • Calls for partnership with universities to scale impact.\n\n💡 Signal: Infrastructure collaboration, speaker engagements, and AI‑enhanced learning pilots signal a broadening of AI adoption across higher education ecosystems."
    },
    {
      "isoDate": "2026-06-09",
      "displayDate": "Tuesday, June 9",
      "sourceFile": "ai-news-digest-2026-06-09.md",
      "headlines": [
        "The Experience Gap: 4 Strategies to Fix Campus Fragmentation",
        "Data Literacy Is Key to AI ROI for Higher Education",
        "The latest AI news we announced in May 2026",
        "How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces",
        "OpenAI Economic Research Exchange",
        "PathoSage: Towards Multi‑Source Evidence Adjudication in Pathology via Experience‑Aware Agentic Workflow"
      ],
      "raw": "# AI Intelligence Briefing - June 9, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **The Experience Gap: 4 Strategies to Fix Campus Fragmentation** — Higher education institutions face costly digital fragmentation; the article outlines four strategic moves to build an AI‑ready, student‑first campus.\n  🔗 Graph: higher-ed-ai, ai-governance, tritonai\n  📅 Published: 2026-06-08\n  📰 https://er.educause.edu/articles/sponsored/2026/6/the-experience-gap-4-strategies-to-fix-campus-fragmentation\n  📌 Key takeaways:\n    • Identify and map fragmented digital tools across campus.\n    • Consolidate platforms to create unified data flows.\n    • Invest in AI‑ready infrastructure to enable scalable services.\n    • Center design around student experience to improve outcomes.\n\n• **Data Literacy Is Key to AI ROI for Higher Education** — Without staff proficiency in data, AI investments falter; the piece details governance steps to unlock ROI.\n  🔗 Graph: higher-ed-ai, data-analytics, ai-governance\n  📅 Published: 2026-06-05\n  📰 https://edtechmagazine.com/higher/article/2026/06/data-literacy-key-ai-roi-higher-education-perfcon\n  📌 Key takeaways:\n    • Train university staff on data interpretation and AI concepts.\n    • Establish clear governance policies for AI model deployment.\n    • Align AI projects with measurable institutional goals.\n    • Prioritize data quality to ensure reliable AI outputs.\n\n• **The latest AI news we announced in May 2026** — Google AI Blog recap of May releases, including Gemini enhancements and new responsible‑AI tooling.\n  🔗 Graph: agentic-ai, litellm-enterprise, google\n  📅 Published: 2026-06-05\n  📰 https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/\n  📌 Key takeaways:\n    • Gemini model gains multimodal reasoning capabilities.\n    • New responsible‑AI APIs simplify bias detection.\n    • Integration with LiteLLM Enterprise streamlines on‑prem deployments.\n    • Emphasis on developer‑friendly documentation for campus teams.\n\n• **How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces** — Demonstrates agentic workflow chaining to generate immersive 3D environments.\n  🔗 Graph: agentic-ai, tritonai, onyx\n  📅 Published: 2026-06-09\n  📰 https://huggingface.co/blog/mishig/spaces-agents-md\n  📌 Key takeaways:\n    • Uses two Hugging Face Spaces sequentially to render 3D assets.\n    • Showcases reusable agent components for rapid prototyping.\n    • Highlights low‑latency inference on on‑prem GPUs.\n    • Provides a blueprint for campus‑level AI‑driven visualizations.\n\n• **OpenAI Economic Research Exchange** — New OpenAI program invites researchers to study AI’s macroeconomic impact.\n  🔗 Graph: ai-governance, openai, higher-ed-ai\n  📅 Published: 2026-06-08\n  📰 https://openai.com/index/economic-research-exchange\n  📌 Key takeaways:\n    • Offers grants for academics investigating AI‑driven productivity.\n    • Emphasizes transparent data sharing for reproducible studies.\n    • Aligns with university research agendas on AI policy.\n    • Connects OpenAI researchers with campus AI labs.\n\n• **PathoSage: Towards Multi‑Source Evidence Adjudication in Pathology via Experience‑Aware Agentic Workflow** — arXiv paper proposes an agentic system for aggregating pathology evidence.\n  🔗 Graph: agentic-ai, tritonai, litellm-enterprise\n  📅 Published: 2026-06-09\n  📰 https://arxiv.org/abs/2606.07549\n  📌 Key takeaways:\n    • Introduces an experience‑aware reasoning module for medical image analysis.\n    • Combines multimodal LLMs with external knowledge bases.\n    • Demonstrates improved diagnostic accuracy over baseline models.\n    • Provides open‑source code usable in TritonAI pipelines.\n\n💡 Signal: AI governance, agentic workflows, and data literacy dominate this week, underscoring the strategic push toward AI‑ready campuses and robust ROI frameworks."
    },
    {
      "isoDate": "2026-06-10",
      "displayDate": "Wednesday, June 10",
      "sourceFile": "ai-news-digest-2026-06-10.md",
      "headlines": [
        "Gemini 3.5 Live Translate — Near‑real‑time speech translation across Google AI Studio, Translate, and Meet",
        "From data to decisions: how LSEG is scaling trusted AI — Enterprise‑wide AI adoption at London Stock Exchange Group",
        "‘All or Nothing’ Approach to AI — Risks shutting down innovation",
        "The Experience Gap: 4 Strategies to Fix Campus Fragmentation",
        "Deployment‑Time Memorization in Foundation‑Model Agents",
        "OpenAI to Combine AI Products into Desktop ‘Superapp’"
      ],
      "raw": "# AI Intelligence Briefing - June 10, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Gemini 3.5 Live Translate — Near‑real‑time speech translation across Google AI Studio, Translate, and Meet**\n  🔗 Graph: tritonai, gemini, agentic-ai\n  📅 Published: 2026-06-09\n  📰 https://deepmind.google/blog/fluid-natural-voice-translation-with-gemini-35-live-translate/\n  📌 Key takeaways:\n    • Gemini 3.5 Live Translate enables near‑real‑time, natural‑sounding speech translation for multiple languages.\n    • Integrated into Google AI Studio, Google Translate, and Google Meet to boost cross‑language collaboration.\n    • Provides an API that can be accessed via TritonAI’s LiteLLM gateway for campus deployments.\n    • Aims to improve accessibility and productivity in multilingual education and research settings.\n    • Positions Gemini as a core model for TritonAI’s upcoming multilingual AI services.\n\n• **From data to decisions: how LSEG is scaling trusted AI — Enterprise‑wide AI adoption at London Stock Exchange Group**\n  🔗 Graph: tritonai, liteLLM‑enterprise, ai‑governance\n  📅 Published: 2026-06-10\n  📰 https://openai.com/index/lseg\n  📌 Key takeaways:\n    • LSEG deployed OpenAI models to automate analysis of financial data across its global operations.\n    • The rollout accelerated insight generation and shortened release cycles, empowering ~4,000 employees.\n    • Demonstrates a scalable, trusted‑AI approach that aligns with TritonAI’s enterprise data agent vision.\n    • Highlights the importance of AI governance and model‑agnostic integration (LiteLLM) in large institutions.\n    • Provides a template for UC San Diego to adopt AI‑driven decision‑making in research administration.\n\n• **‘All or Nothing’ Approach to AI — Risks shutting down innovation**\n  🔗 Graph: higher‑ed‑ai, ai‑governance, tritonai\n  📅 Published: 2026-06-10\n  📰 https://www.insidehighered.com/news/tech-innovation/teaching-learning/2026/06/10/all-or-nothing-approach-ai-risks-shutting-down\n  📌 Key takeaways:\n    • Argues against binary regulation of AI in higher education, urging a balanced, holistic approach.\n    • Features insights from a Google DeepMind representative emphasizing responsible AI adoption.\n    • Suggests concrete steps for campuses: pilot programs, transparent evaluation, and faculty training.\n    • Directly relevant to TritonAI’s AI‑governance roadmap for UC San Diego ITS.\n    • Highlights the need for policy frameworks that enable innovation while protecting students.\n\n• **The Experience Gap: 4 Strategies to Fix Campus Fragmentation**\n  🔗 Graph: tritonai, higher‑ed‑ai, ai‑adoption\n  📅 Published: 2026-06-08\n  📰 https://er.educause.edu/articles/sponsored/2026/6/the-experience-gap-4-strategies-to-fix-campus-fragmentation\n  📌 Key takeaways:\n    • Identifies fragmented digital tools as a costly \"experience gap\" for students and staff.\n    • Proposes four strategic moves: unified AI‑ready platform, data‑centric integration, streamlined support, and continuous feedback loops.\n    • Calls for campus‑wide AI platforms – a perfect fit for TritonAI’s vertical‑AI strategy.\n    • Highlights measurable ROI through reduced support tickets and higher student satisfaction.\n    • Provides a roadmap for UC San Diego to consolidate AI services under a single governance model.\n\n• **Deployment‑Time Memorization in Foundation‑Model Agents**\n  🔗 Graph: agentic-ai, tritonai, liteLLM‑enterprise\n  📅 Published: 2026-06-10\n  📰 https://arxiv.org/abs/2606.10062\n  📌 Key takeaways:\n    • Introduces a technique for agents to memorize critical data at deployment, avoiding costly fine‑tuning.\n    • Shows empirical gains in task‑specific performance and reduced inference latency.\n    • Offers a blueprint for building more efficient TritonAI agents that operate with limited compute.\n    • Demonstrates compatibility with model‑agnostic gateways like LiteLLM Enterprise.\n    • Suggests next‑step experiments: integrate memorization layer into TritonAI’s Enterprise Data Agent.\n\n• **OpenAI to Combine AI Products into Desktop ‘Superapp’**\n  🔗 Graph: tritonai, openai, ai‑adoption\n  📅 Published: 2026-06-09\n  📰 https://campustechnology.com/articles/2026/06/09/openai-to-combine-ai-products-into-desktop-superapp.aspx\n  📌 Key takeaways:\n    • OpenAI is developing a desktop application that consolidates multiple AI tools into a single workflow.\n    • Aims to boost productivity by reducing context‑switching for power users.\n    • Signals a move toward integrated AI ecosystems, mirroring TritonAI’s multi‑model strategy.\n    • Highlights potential integration points for TritonAI’s API program with campus‑wide desktop deployments.\n    • Raises considerations around licensing, data privacy, and on‑prem versus cloud deployment.\n\n💡 Signal: AI adoption is accelerating across both industry and higher‑education ecosystems, with a clear trend toward unified, model‑agnostic platforms. TritonAI’s focus on agentic AI, governance, and campus‑wide integration positions UC San Diego to lead this wave.\n"
    }
  ]
};
