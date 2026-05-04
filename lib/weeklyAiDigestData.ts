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
  "generatedAt": "2026-05-04T13:36:28.396Z",
  "weekOf": "2026-05-04",
  "weekEnding": "2026-05-10",
  "weekLabel": "Week of May 4–10, 2026",
  "publishedThrough": "May 4, 2026",
  "digestCount": 1,
  "headlineCount": 6,
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
    }
  ]
};
