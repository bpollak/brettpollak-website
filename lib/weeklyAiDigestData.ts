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
  "generatedAt": "2026-04-07T16:32:01.863Z",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "weekLabel": "Week of April 6–12, 2026",
  "publishedThrough": "April 7, 2026",
  "digestCount": 2,
  "headlineCount": 7,
  "days": [
    {
      "isoDate": "2026-04-06",
      "displayDate": "Monday, April 6",
      "sourceFile": "ai-news-digest-2026-04-06.md",
      "headlines": [
        "Temporary Digest File"
      ],
      "raw": "# AI Intelligence Briefing - 2026-04-06\n*Curated from knowledge graph (Temporary file - automated generation under investigation)*\n\n🧠 AI Intelligence Briefing — 2026-04-06\nCurated from your knowledge graph — Temporary digest while automated generation is being reviewed.\n\n• **Temporary Digest File** — This file was created manually to ensure the website AI digest updates correctly while the automated AI news digest job (briefing-ai-news) is being investigated for timeout issues.\n  🔗 Graph: system-maintenance\n  📰 Internal note: Automated generation timeout investigation in progress\n\n💡 Signal: The website AI digest will update once this file is present in the workspace/docs/ directory. The automated briefing-ai-news cron job is currently timing out and being reviewed.\n\n*Note: This is a temporary placeholder. The normal AI intelligence briefing will resume once the timeout issue is resolved.*\n"
    },
    {
      "isoDate": "2026-04-07",
      "displayDate": "Tuesday, April 7",
      "sourceFile": "ai-news-digest-2026-04-07.md",
      "headlines": [
        "Slow your rollout: AI in higher education | New University | UC Irvine",
        "All Things AI – April 2026 – Campus Research Computing Consortium (CaRCC)",
        "Better Together: California Convening on AI in Higher Education",
        "Unlocking Institutional Insights: Discover UC San Diego’s TritonGPT Journey",
        "Ushering in a New Era of AI-Driven Data Insights at UC San Diego | EDUCAUSE Review",
        "UCSD adds AI major – The UCSD Guardian"
      ],
      "raw": "# AI Intelligence Briefing - April 7, 2026\n*Curated from knowledge graph (6 articles, 8 edges)*\n\n• **Slow your rollout: AI in higher education | New University | UC Irvine** — This April 2, 2026 article discusses UC San Diego's AI degree offerings, directly relevant to Brett's leadership in higher ed AI initiatives and workforce development.\n  🔗 Graph: higher-ed-ai, uc-san-diego\n  📰 https://newuniversity.org/2026/04/02/slow-your-rollout-ai-in-higher-education/\n\n• **All Things AI – April 2026 – Campus Research Computing Consortium (CaRCC)** — This March 25, 2026 listing highlights upcoming AI workshops at UC San Diego, including SDSC HPC and Data Science Summer Institute, aligning with Brett's infrastructure and AI education priorities.\n  🔗 Graph: ai-cabinet-meeting-april-6, uc-san-diego\n  📰 https://carcc.org/2026/03/25/all-things-ai-april-2026/\n\n• **Better Together: California Convening on AI in Higher Education** — The February 5-6, 2026 summit at UC San Diego Park & Market focuses on AI governance and policy in higher ed, core to Brett's strategic priorities and upcoming AI Cabinet meeting.\n  🔗 Graph: ai-governance, higher-ed-ai, uc-san-diego\n  📰 https://aiconvening.ucsd.edu/\n\n• **Unlocking Institutional Insights: Discover UC San Diego’s TritonGPT Journey** — This Internet2 session from April 10, 2025 covers TritonGPT's governance structure and use case prioritization process, essential for Brett's AI governance and adoption efforts.\n  🔗 Graph: tritongpt, uc-san-diego, ai-governance\n  📰 https://internet2.edu/discover-uc-san-diegos-tritongpt-journey/\n\n• **Ushering in a New Era of AI-Driven Data Insights at UC San Diego | EDUCAUSE Review** — This February 2025 feature highlights TritonGPT's role in revolutionizing institutional data interactions, connecting to Brett's Enterprise Data Agent project and data analytics strategy.\n  🔗 Graph: tritongpt, uc-san-diego, enterprise-data-agent\n  📰 https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego/\n\n• **UCSD adds AI major – The UCSD Guardian** — The October 6, 2025 announcement of UC San Diego's new AI major with specialized electives supports Brett's higher ed AI leadership and talent pipeline development.\n  🔗 Graph: higher-ed-ai, uc-san-diego\n  📰 https://ucsdguardian.org/2025/10/06/ucsd-adds-ai-major/\n\n💡 Signal: Higher education institutions are rapidly operationalizing AI governance frameworks while expanding specialized AI education programs — creating both immediate implementation needs for TritonGPT-style solutions and long-term demand for enterprise-ready AI literacy across campus constituencies."
    }
  ]
};
