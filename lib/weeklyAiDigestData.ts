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
  "generatedAt": "2026-04-22T13:37:11.694Z",
  "weekOf": "2026-04-20",
  "weekEnding": "2026-04-26",
  "weekLabel": "Week of April 20–26, 2026",
  "publishedThrough": "April 22, 2026",
  "digestCount": 3,
  "headlineCount": 15,
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
    },
    {
      "isoDate": "2026-04-21",
      "displayDate": "Tuesday, April 21",
      "sourceFile": "ai-news-digest-2026-04-21.md",
      "headlines": [
        "'AI or die' - but can Big Tech's profits survive the energy squeeze?",
        "Meta extends custom chips deal with Broadcom to power AI ambitions",
        "Employers say they struggle to find graduates with the right AI skillset",
        "4 higher education leaders on AI’s biggest benefits and risks",
        "The Myriad Complex Ways Young People Use AI"
      ],
      "raw": "# AI Intelligence Briefing - April 21, 2026\n*Curated from knowledge graph (101 nodes, 209 edges) · All articles published within the last 7 days*\n\n• **'AI or die' - but can Big Tech's profits survive the energy squeeze?** — Power and infrastructure are becoming the practical constraint on AI scale. For Brett, that makes this less about hype and more about the operating economics of running durable AI services.\n  🔗 Graph: AI Strategy, Enterprise Monitoring, UC San Diego\n  📅 Published: 2026-04-20\n  📰 https://www.reuters.com/markets/commodities/ai-or-die-can-big-techs-profits-survive-energy-squeeze-2026-04-20/\n\n• **Meta extends custom chips deal with Broadcom to power AI ambitions** — Custom silicon is turning into a strategic advantage for large AI operators. That matters for any long-term model-agnostic platform strategy because upstream infrastructure choices increasingly shape cost, latency, and scale.\n  🔗 Graph: AI Strategy, Model Agnosticism, Vertical AI\n  📅 Published: 2026-04-14\n  📰 https://www.reuters.com/business/meta-inks-deal-with-broadcom-custom-ai-chips-2026-04-14/\n\n• **Employers say they struggle to find graduates with the right AI skillset** — The workforce signal is getting sharper: AI fluency is becoming table stakes, but applied capability is still scarce. That strengthens the case for institution-specific AI programs that combine tools, training, and governed adoption.\n  🔗 Graph: Higher Ed AI, AI Adoption, UC San Diego\n  📅 Published: 2026-04-21\n  📰 https://www.highereddive.com/news/employers-struggle-to-find-workers-with-the-right-ai-skillset/818017/\n\n• **4 higher education leaders on AI’s biggest benefits and risks** — Campus leaders are converging on a familiar balance: real upside in productivity and student support, paired with persistent governance and trust concerns. It maps directly to Brett's challenge of scaling AI without losing institutional control.\n  🔗 Graph: Higher Ed AI, AI Governance, AI Compliance & Governance\n  📅 Published: 2026-04-21\n  📰 https://www.highereddive.com/news/4-higher-education-leaders-on-ais-biggest-benefits-and-risks/818014/\n\n• **The Myriad Complex Ways Young People Use AI** — Student behavior is already ahead of most formal policy frameworks. The important signal is not whether AI use is happening, but how institutions respond with guidance, guardrails, and service design.\n  🔗 Graph: Higher Ed AI, AI Adoption, AI Governance\n  📅 Published: 2026-04-21\n  📰 https://www.insidehighered.com/news/student-success/health-wellness/2026/04/21/myriad-complex-ways-young-people-use-ai\n\n💡 Signal: This week's strongest pattern is the collision of AI scale and institutional reality: infrastructure costs are hardening upstream, while higher ed is still sorting out workforce readiness, student behavior, and governance. The opportunity remains real, but the winners will be the operators who can industrialize AI without losing trust, cost discipline, or policy control.\n"
    },
    {
      "isoDate": "2026-04-22",
      "displayDate": "Wednesday, April 22",
      "sourceFile": "ai-news-digest-2026-04-22.md",
      "headlines": [
        "We're launching two specialized TPUs for the agentic era.",
        "Anthropic’s most dangerous AI model just fell into the wrong hands",
        "Top takeaways for college leaders from ASU+GSV",
        "AutomationBench",
        "ClawNet: Human-Symbiotic Agent Network for Cross-User Autonomous Cooperation"
      ],
      "raw": "# AI Intelligence Briefing - April 22, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **We're launching two specialized TPUs for the agentic era.** — Google Cloud introduces its eighth-generation specialized chips designed specifically to power multi-agent systems and agentic AI workflows.\n  🔗 Graph: Google, Agentic AI, Infrastructure & Migration\n  📅 Published: 2026-04-22\n  📰 https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/tpus-8t-8i-cloud-next/\n\n• **Anthropic’s most dangerous AI model just fell into the wrong hands** — A powerful cybersecurity tool developed by Anthropic, intended to remain restricted, has reportedly been accessed by unauthorized users, highlighting ongoing AI governance challenges.\n  🔗 Graph: Anthropic, Claude, AI Security, AI Governance\n  📅 Published: 2026-04-22\n  📰 https://www.theverge.com/ai-artificial-intelligence/916501/anthropic-mythos-unauthorized-users-access-security\n\n• **Top takeaways for college leaders from ASU+GSV** — Higher education experts at the ASU+GSV Summit discussed how AI will affect workforce development and institutional services for nontraditional students.\n  🔗 Graph: ASU+GSV Summit, Higher Ed AI, UC San Diego\n  📅 Published: 2026-04-22\n  📰 https://www.highereddive.com/news/top-takeaways-for-college-leaders-from-asugsv/818083/\n\n• **AutomationBench** — Researchers have introduced a new benchmark for evaluating AI automation agents on tasks that combine cross-application coordination, autonomous API discovery, and policy adherence.\n  🔗 Graph: Agentic AI, AI Strategy\n  📅 Published: 2026-04-22\n  📰 https://arxiv.org/abs/2604.18934\n\n• **ClawNet: Human-Symbiotic Agent Network for Cross-User Autonomous Cooperation** — A new framework exploring how AI agents can move beyond single-user tasks to negotiate and delegate collaboratively across multiple human users.\n  🔗 Graph: Agentic AI, AI Strategy\n  📅 Published: 2026-04-22\n  📰 https://arxiv.org/abs/2604.19211\n\n💡 Signal: The AI landscape is rapidly shifting toward agentic architectures, demanding new specialized hardware from vendors like Google and rigorous cross-application benchmarks, while governance and security—highlighted by Anthropic's recent leak—remain critical priorities for higher ed leaders navigating these tools.\n"
    }
  ]
};
