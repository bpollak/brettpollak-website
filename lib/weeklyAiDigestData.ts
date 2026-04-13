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
  "generatedAt": "2026-04-13T17:07:29.027Z",
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
        "Anthropic closes door on subscription use of OpenClaw",
        "What Gemini features you get with Google AI Plus, Pro, & Ultra [April 2026]",
        "Databricks Data + AI Summit 2026 | Leading AI Conference"
      ],
      "raw": "# AI Intelligence Briefing - April 13, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Anthropic closes door on subscription use of OpenClaw** — Anthropic is shifting from policy warnings to billing-based enforcement for its enterprise tiers, signaling tighter controls on multi-tenant deployment architectures.\n  🔗 Graph: Anthropic, Claude\n  📅 Published: 2026-04-06\n  📰 https://www.theregister.com/2026/04/06/anthropic_closes_door_on_subscription/\n\n• **What Gemini features you get with Google AI Plus, Pro, & Ultra [April 2026]** — Google is reorganizing its Gemini product tiers, clarifying the distinction between consumer Pro features and enterprise-grade Ultra deployments for cloud environments.\n  🔗 Graph: Google, Gemini\n  📅 Published: 2026-04-11\n  📰 https://9to5google.com/2026/04/11/google-ai-pro-ultra-features/\n\n• **Databricks Data + AI Summit 2026 | Leading AI Conference** — Databricks has opened registration for its premier 2026 summit, a key event for tracking data governance, analytics trends, and enterprise AI integrations.\n  🔗 Graph: Databricks, Data Analytics\n  📅 Published: 2026-04-12\n  📰 https://www.databricks.com/dataaisummit\n\n💡 Signal: Enterprise AI vendors like Anthropic and Google are cementing their pricing and feature tiers as organizations transition from pilot phases into highly-governed, consumption-based operational deployments."
    }
  ]
};
