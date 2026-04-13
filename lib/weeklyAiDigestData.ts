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
  "generatedAt": "2026-04-13T17:20:10.247Z",
  "weekOf": "2026-04-13",
  "weekEnding": "2026-04-19",
  "weekLabel": "Week of April 13–19, 2026",
  "publishedThrough": "April 13, 2026",
  "digestCount": 1,
  "headlineCount": 3,
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
    }
  ]
};
