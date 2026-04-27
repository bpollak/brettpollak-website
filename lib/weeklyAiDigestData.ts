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
  "generatedAt": "2026-04-27T14:07:19.523Z",
  "weekOf": "2026-04-27",
  "weekEnding": "2026-05-03",
  "weekLabel": "Week of April 27 – May 3, 2026",
  "publishedThrough": "April 27, 2026",
  "digestCount": 1,
  "headlineCount": 6,
  "days": [
    {
      "isoDate": "2026-04-27",
      "displayDate": "Monday, April 27",
      "sourceFile": "ai-news-digest-2026-04-27.md",
      "headlines": [
        "Google to invest up to $40B in Anthropic as Claude outsells Gemini in enterprise",
        "Microsoft to integrate Anthropic's Mythos into its security development program",
        "AI is here. You can stop investing in two futures",
        "OpenAI releases GPT-5.5, bringing company one step closer to an AI 'super app'",
        "Google Cloud's enterprise strategy coming into focus",
        "Higher Ed Must Not Let AI Write Its Own Argument"
      ],
      "raw": "# AI Intelligence Briefing - Monday, April 27, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Google to invest up to $40B in Anthropic as Claude outsells Gemini in enterprise** — Google's massive commitment signals that Claude's dominance in enterprise and developer markets (including Claude Code's explosive growth) is forcing even its biggest competitor to double down on it; for Brett's TritonAI stack, this means Anthropic/Claude's infrastructure capacity constraints should ease — and LiteLLM's model-agnostic gateway strategy looks increasingly prescient.\n  🔗 Graph: anthropic, claude, google, litellm-enterprise, model-agnosticism\n  📅 Published: 2026-04-24\n  📰 https://techcrunch.com/2026/04/24/google-to-invest-up-to-40b-in-anthropic-in-cash-and-compute/\n\n• **Microsoft to integrate Anthropic's Mythos into its security development program** — Microsoft is embedding Claude Mythos Preview into its Security Development Lifecycle (SDL) as part of \"Project Glasswing,\" using the model to find and fix vulnerabilities before adversaries can exploit them; this represents a landmark enterprise AI security deployment that directly touches the Microsoft + Anthropic stack Brett uses at UC San Diego.\n  🔗 Graph: microsoft, anthropic, claude, ai-security, azure-openai\n  📅 Published: 2026-04-22\n  📰 https://www.reuters.com/technology/microsoft-integrate-anthropics-mythos-into-its-security-development-program-2026-04-22/\n\n• **AI is here. You can stop investing in two futures** — University Business calls out the \"hedging\" era in higher ed AI as over: institutions still treating AI as a parallel experiment rather than the core operating model are wasting resources and losing relevance; the framing aligns precisely with the strategic argument Brett makes for TritonAI as mission-critical infrastructure, not a pilot.\n  🔗 Graph: higher-ed-ai, tritonai, ai-governance, vertical-ai, ai-adoption\n  📅 Published: 2026-04-27\n  📰 https://universitybusiness.com/ai-in-higher-ed-you-can-stop-investing-in-two-futures/\n\n• **OpenAI releases GPT-5.5, bringing company one step closer to an AI 'super app'** — GPT-5.5 delivers higher intelligence at the same per-token latency as GPT-5.4, with full API feature parity (prompt caching, hosted tools, tool search, compaction); this is a direct upgrade for TritonAI's LiteLLM gateway users who rely on OpenAI models, requiring no integration changes.\n  🔗 Graph: openai, gpt-4, litellm-enterprise, tritongpt, developer-api-program\n  📅 Published: 2026-04-23\n  📰 https://techcrunch.com/2026/04/23/openai-chatgpt-gpt-5-5-ai-model-superapp/\n\n• **Google Cloud's enterprise strategy coming into focus** — Google is positioning itself as an AI distribution layer rather than a model-only vendor, with a VP quoted as saying \"we will help enterprises access the intelligence of those models\" — essentially describing the gateway-and-orchestration model that TritonAI already embodies; Google is watching how UC San Diego-style deployments work and building toward it.\n  🔗 Graph: google, gemini, litellm-enterprise, model-agnosticism, enterprise-data-agent\n  📅 Published: 2026-04-22\n  📰 https://www.reuters.com/technology/artificial-intelligence/google-finds-its-place-ai-battle-enterprise-2026-04-22/\n\n• **Higher Ed Must Not Let AI Write Its Own Argument** — Inside Higher Ed publishes a sharp challenge to higher education's passive acceptance of AI-driven benchmarks (like OpenAI's GDPval) as determinants of institutional strategy; argues that what labor should remain human and what losses are acceptable cannot be outsourced to vendor efficiency metrics — a critical governance perspective for Brett's AI Cabinet presentations.\n  🔗 Graph: higher-ed-ai, ai-governance, ai-compliance-governance, tritonai\n  📅 Published: 2026-04-22\n  📰 https://www.insidehighered.com/opinion/letters/2026/04/22/higher-ed-must-not-let-ai-write-its-own-argument\n\n💡 Signal: This week's biggest signal is the Anthropic funding supernova — both Google ($40B) and Amazon ($25B) committing tens of billions in days proves Claude has won the enterprise developer market. For Brett, this validates the TritonAI bet on Anthropic as a primary model provider and suggests Claude Code capacity (which has been strained) will expand. Meanwhile, the higher ed discourse is finally maturing past \"should we use AI?\" into \"what does institutional identity mean when AI does the work?\" — exactly the governance conversation Brett needs to own.\n"
    }
  ]
};
