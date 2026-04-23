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
  "generatedAt": "2026-04-23T13:36:55.016Z",
  "weekOf": "2026-04-20",
  "weekEnding": "2026-04-26",
  "weekLabel": "Week of April 20–26, 2026",
  "publishedThrough": "April 23, 2026",
  "digestCount": 1,
  "headlineCount": 4,
  "days": [
    {
      "isoDate": "2026-04-23",
      "displayDate": "Thursday, April 23",
      "sourceFile": "ai-news-digest-2026-04-23.md",
      "headlines": [
        "Google Releases New AI Agents to Challenge OpenAI and Anthropic - Bloomberg",
        "SpaceX is working with Cursor and has an option to buy the startup for $60B | TechCrunch",
        "Your Questions About Anthropic’s Mythos AI Model, Answered",
        "The App Store is booming again, and AI may be why | TechCrunch"
      ],
      "raw": "# AI Intelligence Briefing - April 23, 2026\n*Curated from knowledge graph (3 nodes, 0 edges) · All articles published within the last 7 days*\n\n• **Google Releases New AI Agents to Challenge OpenAI and Anthropic - Bloomberg** — Alphabet unveils new enterprise-focused AI agent tools designed to automate complex tasks, escalating the direct competition with OpenAI and Anthropic in the enterprise automation market.\n  🔗 Graph: TritonGPT, AI ecosystem\n  📅 Published: 2026-04-22\n  📰 https://www.bloomberg.com/news/articles/2026-04-22/google-releases-new-ai-agents-to-challenge-openai-and-anthropic\n\n• **SpaceX is working with Cursor and has an option to buy the startup for $60B | TechCrunch** — SpaceX has partnered with the popular AI coding platform Cursor to develop next-generation engineering tools, securing a massive $60 billion purchase option in the process.\n  🔗 Graph: Developer tooling, AI ecosystem\n  📅 Published: 2026-04-21\n  📰 https://techcrunch.com/2026/04/21/spacex-is-working-with-cursor-and-has-an-option-to-buy-the-startup-for-60-billion/\n\n• **Your Questions About Anthropic’s Mythos AI Model, Answered** — Anthropic recently restricted its advanced Mythos cybersecurity model to select businesses to test its vulnerability detection, aiming to harden software against potential AI-driven attacks.\n  🔗 Graph: TritonAI, Governance\n  📅 Published: 2026-04-20\n  📰 https://www.bloomberg.com/news/articles/2026-04-20/anthropic-s-mythos-ai-model-questions-answered\n\n• **The App Store is booming again, and AI may be why | TechCrunch** — AI's increasing usability is serving as a catalyst for a new wave of mobile app development, enabling creators to build tools and applications much faster than before.\n  🔗 Graph: AI ecosystem\n  📅 Published: 2026-04-18\n  📰 https://techcrunch.com/2026/04/18/the-app-store-is-booming-again-and-ai-may-be-why/\n\n💡 Signal: The AI arms race is pivoting heavily toward enterprise agentic automation and developer productivity, with major players like Google scaling agent frameworks and strategic partnerships like SpaceX/Cursor reinforcing the value of AI coding assistants.\n"
    }
  ]
};
