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
  "generatedAt": "2026-04-13T16:37:57.214Z",
  "weekOf": "2026-04-13",
  "weekEnding": "2026-04-19",
  "weekLabel": "Week of April 13–19, 2026",
  "publishedThrough": "April 13, 2026",
  "digestCount": 1,
  "headlineCount": 2,
  "days": [
    {
      "isoDate": "2026-04-13",
      "displayDate": "Monday, April 13",
      "sourceFile": "ai-news-digest-2026-04-13.md",
      "headlines": [
        "Anthropic inks deal with Google to power Claude with next-gen TPUs",
        "Anthropic scales up with enterprise features for Claude Cowork and Managed Agents"
      ],
      "raw": "# AI Intelligence Briefing - April 13, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Anthropic inks deal with Google to power Claude with next-gen TPUs** — Anthropic announced a major deal that will see Google and Broadcom powering Claude through next-generation TPU capacity starting next year.\n  🔗 Graph: Anthropic, Claude, Google\n  📅 Published: 2026-04-13\n  📰 https://9to5google.com/2026/04/06/anthropic-inks-deal-with-google-to-power-claude-with-next-gen-tpus/\n\n• **Anthropic scales up with enterprise features for Claude Cowork and Managed Agents** — Claude Cowork exits research preview and introduces new enterprise capabilities and role-based access controls for organizations.\n  🔗 Graph: Anthropic, Claude\n  📅 Published: 2026-04-10\n  📰 https://9to5mac.com/2026/04/09/anthropic-scales-up-with-enterprise-features-for-claude-cowork-and-managed-agents/\n\n💡 Signal: Anthropic is rapidly expanding its enterprise capabilities and underlying compute infrastructure through major partnerships, continuing to solidify Claude's position as a top-tier model for organizational deployments.\n"
    }
  ]
};
