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
  "generatedAt": "2026-04-21T17:20:12.028Z",
  "weekOf": "2026-04-20",
  "weekEnding": "2026-04-26",
  "weekLabel": "Week of April 20–26, 2026",
  "publishedThrough": "April 21, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-04-20",
      "displayDate": "Monday, April 20",
      "sourceFile": "ai-news-digest-2026-04-20.md",
      "headlines": [
        "Mississippi law school becomes first in Southeast to require AI instruction",
        "It’s time for students to start committing to colleges. The age of AI is making it complicated",
        "NSA spies are reportedly using Anthropic’s Mythos, despite Pentagon feud",
        "DeepER-Med: Advancing Deep Evidence-Based Research in Medicine Through Agentic AI",
        "HarmfulSkillBench: How Do Harmful Skills Weaponize Your Agents?"
      ],
      "raw": "# AI Intelligence Briefing - April 20, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Mississippi law school becomes first in Southeast to require AI instruction** — First-year students completed the college's first mandatory intensive class on AI.\n  🔗 Graph: higher-ed-ai\n  📅 Published: 2026-04-20\n  📰 https://universitybusiness.com/mississippi-law-school-is-the-first-in-the-southeast-to-require-ai-education/\n\n• **It’s time for students to start committing to colleges. The age of AI is making it complicated** — Uncertainty about AI's impact on entry-level jobs is making it harder for families to judge the value of a college degree.\n  🔗 Graph: higher-ed-ai\n  📅 Published: 2026-04-20\n  📰 https://universitybusiness.com/its-time-for-students-to-start-committing-to-colleges-the-age-of-ai-is-making-it-complicated/\n\n• **NSA spies are reportedly using Anthropic’s Mythos, despite Pentagon feud** — NSA is said to be using Anthropic's restricted Mythos AI model for intelligence operations.\n  🔗 Graph: anthropic, ai-security\n  📅 Published: 2026-04-20\n  📰 https://techcrunch.com/2026/04/20/nsa-spies-are-reportedly-using-anthropics-mythos-despite-pentagon-feud/\n\n• **DeepER-Med: Advancing Deep Evidence-Based Research in Medicine Through Agentic AI** — Explores explicit and inspectable criteria for evidence appraisal in medical AI agents to prevent compounding errors.\n  🔗 Graph: agentic-ai\n  📅 Published: 2026-04-20\n  📰 https://arxiv.org/abs/2604.15456\n\n• **HarmfulSkillBench: How Do Harmful Skills Weaponize Your Agents?** — Highlights security vulnerabilities regarding skills that may be misused for harmful actions in agentic systems.\n  🔗 Graph: agentic-ai, ai-security\n  📅 Published: 2026-04-20\n  📰 https://arxiv.org/abs/2604.15415\n\n💡 Signal: Agentic systems and security remain paramount in technical circles, while higher education institutions are accelerating both formal AI curriculum and grappling with AI's broader impact on the value of degrees.\n"
    }
  ]
};
