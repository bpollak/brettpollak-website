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
  "generatedAt": "2026-04-23T17:20:05.265Z",
  "weekOf": "2026-04-20",
  "weekEnding": "2026-04-26",
  "weekLabel": "Week of April 20–26, 2026",
  "publishedThrough": "April 23, 2026",
  "digestCount": 3,
  "headlineCount": 11,
  "days": [
    {
      "isoDate": "2026-04-21",
      "displayDate": "Tuesday, April 21",
      "sourceFile": "ai-news-digest-2026-04-21.md",
      "headlines": [
        "AI backlash is coming for elections",
        "Michigan State, University of Michigan face over 60% cut under state funding bill",
        "Artificial Intelligence | The Verge"
      ],
      "raw": "# AI Intelligence Briefing - April 21, 2026\n*Curated from knowledge graph (110 nodes, 34 edges) · All articles published within the last 7 days*\n*(Backfilled on 2026-04-23)*\n\n• **AI backlash is coming for elections** — Growing bipartisan scrutiny is tracking the expansion of data centers and the widespread deployment of generative AI across domestic and international infrastructure projects.\n  🔗 Graph: Governance, Policy, AI Datacenters\n  📅 Published: 2026-04-21\n  📰 https://www.theverge.com/policy/916210/ai-midterm-elections-data-centers-jobs\n\n• **Michigan State, University of Michigan face over 60% cut under state funding bill** — Significant state funding restructurings threaten core higher education budgets, forcing universities to rethink long-term infrastructure and technology investments.\n  🔗 Graph: Higher Education, Budget, IT Infrastructure\n  📅 Published: 2026-04-23\n  📰 https://www.highereddive.com/news/michigan-state-university-of-michigan-face-over-60-cut-under-state-fundin/818270/\n\n• **Artificial Intelligence | The Verge** — Rapid advancements across OpenAI, Google, and Microsoft continue to reshape foundational technology integrations, with AI acting as a primary driver of industry shifts.\n  🔗 Graph: OpenAI, Microsoft, Google\n  📅 Published: 2026-04-20\n  📰 https://www.theverge.com/ai-artificial-intelligence\n\n💡 Signal: Regulatory pushback on AI data centers and tightening university budgets emphasize the growing friction between technology expansion and structural constraints."
    },
    {
      "isoDate": "2026-04-22",
      "displayDate": "Wednesday, April 22",
      "sourceFile": "ai-news-digest-2026-04-22.md",
      "headlines": [
        "OpenAI in talks to commit up to $1.5 billion to private equity JV, FT reports",
        "Why campuses are the right place for candidate debates",
        "Elevating Austria: Google invests in its first data center in the Alps."
      ],
      "raw": "# AI Intelligence Briefing - April 22, 2026\n*Curated from knowledge graph (110 nodes, 34 edges) · All articles published within the last 7 days*\n*(Backfilled on 2026-04-23)*\n\n• **OpenAI in talks to commit up to $1.5 billion to private equity JV, FT reports** — OpenAI is reportedly pursuing enterprise adoption via substantial joint venture investments to compete directly with Anthropic’s strong corporate foothold.\n  🔗 Graph: OpenAI, Anthropic, Business\n  📅 Published: 2026-04-22\n  📰 https://www.reuters.com/legal/transactional/openai-talks-commit-up-15-billion-private-equity-joint-venture-ft-reports-2026-04-22/\n\n• **Why campuses are the right place for candidate debates** — Educational institutions continue to navigate their roles in civic engagement and structural investments amidst broader societal technology integrations.\n  🔗 Graph: Higher Education, Governance\n  📅 Published: 2026-04-23\n  📰 https://universitybusiness.com/why-campuses-are-the-right-place-for-candidate-debates/\n\n• **Elevating Austria: Google invests in its first data center in the Alps.** — Google expands its global compute capabilities by breaking ground on a new cloud and data infrastructure facility in Kronstorf, Austria.\n  🔗 Graph: Google AI, Data Centers, Cloud Infrastructure\n  📅 Published: 2026-04-23\n  📰 https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/google-data-center-austria/\n\n💡 Signal: Enterprise maneuvers and physical data center expansion continue to shape the AI landscape, while higher education balances infrastructure scaling with core operational responsibilities."
    },
    {
      "isoDate": "2026-04-23",
      "displayDate": "Thursday, April 23",
      "sourceFile": "ai-news-digest-2026-04-23.md",
      "headlines": [
        "Amazon to invest up to $25 billion in Anthropic as part of $100 billion cloud deal",
        "OpenAI starts offering a biology-tuned LLM",
        "US security agency is using Anthropic's Mythos despite blacklist, Axios reports",
        "The AI apps are coming for your PC",
        "From OpenAI to Nvidia, firms channel billions into AI infrastructure as demand booms"
      ],
      "raw": "# AI Intelligence Briefing - April 23, 2026\n*Curated from knowledge graph (110 nodes, 34 edges) · All articles published within the last 7 days*\n\n• **Amazon to invest up to $25 billion in Anthropic as part of $100 billion cloud deal** — Amazon is doubling down on its generative AI investments, significantly expanding its commitment to Anthropic following earlier multi-billion dollar stakes in both Anthropic and OpenAI.\n  🔗 Graph: Amazon Web Services, Anthropic, GenAI\n  📅 Published: 2026-04-21\n  📰 https://www.reuters.com/technology/anthropic-spend-over-100-billion-amazons-cloud-technology-2026-04-20/\n\n• **OpenAI starts offering a biology-tuned LLM** — OpenAI has launched a specialized language model designed to help life science researchers tackle massive datasets generated from genome sequencing and protein biochemistry.\n  🔗 Graph: OpenAI, LLM, Healthcare IT\n  📅 Published: 2026-04-16\n  📰 https://arstechnica.com/science/2026/04/openai-starts-offering-a-biology-tuned-llm/\n\n• **US security agency is using Anthropic's Mythos despite blacklist, Axios reports** — The Pentagon and the US administration are engaging with Anthropic's latest and most advanced AI model, Mythos, designed for defensive cybersecurity tasks, despite previous disputes over AI usage models.\n  🔗 Graph: Anthropic, Cybersecurity, Infrastructure\n  📅 Published: 2026-04-19\n  📰 https://www.reuters.com/business/us-security-agency-is-using-anthropics-mythos-despite-blacklist-axios-reports-2026-04-19/\n\n• **The AI apps are coming for your PC** — OpenAI's newest tool, Codex, aims to be an all-in-one AI superapp that features a web browser, coding integrations, and settings enabling autonomous computer control for end users.\n  🔗 Graph: OpenAI, Endpoint Management, Developer Tools\n  📅 Published: 2026-04-18\n  📰 https://www.theverge.com/tech/914429/the-ai-apps-are-coming-for-your-pc\n\n• **From OpenAI to Nvidia, firms channel billions into AI infrastructure as demand booms** — Surging demand is driving major firms to heavily fund next-generation AI infrastructure, hardware, and specialized silicon facilities worldwide.\n  🔗 Graph: Infrastructure, Cloud Computing, OpenAI\n  📅 Published: 2026-04-21\n  📰 https://www.reuters.com/business/autos-transportation/companies-pouring-billions-advance-ai-infrastructure-2026-04-21/\n\n💡 Signal: Massive capital injections are accelerating the deployment of specialized AI hardware and tailored LLMs (like biology-tuned models and cybersecurity-focused Mythos), moving the industry beyond general-purpose chat toward domain-specific enterprise infrastructure."
    }
  ]
};
