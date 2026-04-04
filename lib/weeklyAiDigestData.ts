export type WeeklyDigestDay = {
  isoDate: string;
  displayDate: string;
  sourceFile: string;
  headlines: string[];
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
  "generatedAt": "2026-04-04T20:18:20.442Z",
  "weekOf": "2026-03-30",
  "weekEnding": "2026-04-05",
  "weekLabel": "Week of March 30 – April 5, 2026",
  "publishedThrough": "April 4, 2026",
  "digestCount": 4,
  "headlineCount": 24,
  "days": [
    {
      "isoDate": "2026-04-01",
      "displayDate": "Wednesday, April 1",
      "sourceFile": "ai-news-digest-2026-04-01.md",
      "headlines": [
        "Gartner: Over 40% of Multi-Agent AI Projects Will Be Canceled Without Unified Infrastructure",
        "Gartner D&A Summit 2026: \"Agentic Hybridity\" and the Catastrophic Cost of Waiting",
        "LiteLLM Trending on GitHub: Unified Gateway for 100+ LLM APIs Gains Enterprise Momentum",
        "Anthropic Signs AI Safety MOU with Australia — Includes University Research Partnerships",
        "When Agentic AI Browsers Outrun Governance: Prompt Injection and the New Risk Surface",
        "New Relic Named IDC MarketScape Leader in AIOps 2026 — ServiceNow + RAG Integration Highlighted"
      ]
    },
    {
      "isoDate": "2026-04-02",
      "displayDate": "Thursday, April 2",
      "sourceFile": "ai-news-digest-2026-04-02.md",
      "headlines": [
        "AWS DevOps Agent Reaches General Availability — Autonomous Incident Response Now Production-Ready",
        "ServiceNow Ships MCP + Anthropic Catalog Integration in AI Gateway",
        "Faculty Are Forcing Delays on Big-Money OpenAI Deals at Universities",
        "Databricks Launches Lakewatch — Agentic SIEM on the Lakehouse",
        "AI in Higher Ed Hits Inflection Point — New Research Maps Adoption, Policy Gaps",
        "Enterprise AI 2026: Agentic AI \"Widely Adopted but Selectively Trusted\"",
        "MCP Becomes the Standard: OpenAI, Google, Microsoft All Adopt Anthropic's Protocol"
      ]
    },
    {
      "isoDate": "2026-04-03",
      "displayDate": "Friday, April 3",
      "sourceFile": "ai-news-digest-2026-04-03.md",
      "headlines": [
        "LiteLLM Ditches Compliance Startup Delve After PyPI Malware Incident",
        "AWS DevOps Agent Now Generally Available — 75% Lower MTTR, Autonomous Incident Triage",
        "Agentic AI Governance: The Clock Is Ticking — EU AI Act Enforcement Starts August 2026",
        "AI in Higher Ed Reaches Inflection Point — BCC Research Report Maps Global Institutional Readiness",
        "ServiceNow AI Gateway Now Natively Browses Anthropic's MCP Server Catalog",
        "Databricks Launches Lakebase, Genie, and Agent Bricks — Unified Data + AI Platform Push"
      ]
    },
    {
      "isoDate": "2026-04-04",
      "displayDate": "Saturday, April 4",
      "sourceFile": "ai-news-digest-2026-04-04.md",
      "headlines": [
        "Case Western Reserve University Deploys Google Gemini",
        "Nvidia launches enterprise AI agent platform with Adobe, Salesforce, SAP among 17 adopters at GTC 2026",
        "The 2026 MCP Roadmap",
        "Codex now offers pay-as-you-go pricing for teams",
        "Popular AI gateway startup LiteLLM ditches controversial startup Delve"
      ]
    }
  ]
};
