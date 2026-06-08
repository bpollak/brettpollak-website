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
  "generatedAt": "2026-06-08T14:00:19.370Z",
  "weekOf": "2026-06-08",
  "weekEnding": "2026-06-14",
  "weekLabel": "Week of June 8–14, 2026",
  "publishedThrough": "June 8, 2026",
  "digestCount": 1,
  "headlineCount": 5,
  "days": [
    {
      "isoDate": "2026-06-08",
      "displayDate": "Monday, June 8",
      "sourceFile": "ai-news-digest-2026-06-08.md",
      "headlines": [
        "Cybersecurity ROI in Higher Education: How To Win the Budget Conversation",
        "Ohio State Settles With Nearly 300 Strauss Victims",
        "The state of international enrollment in 6 charts",
        "Detecting and Mitigating Bias by Treating Fairness as a Symmetry Operation",
        "Building Pakistan Notice Helper: A Small AI Tool for a Very Local Safety Problem"
      ],
      "raw": "# AI Intelligence Briefing - Monday, June 8, 2026\n*Curated from knowledge graph (125 nodes, 145 edges) · All articles published within the last 7 days*\n\n• **Cybersecurity ROI in Higher Education: How To Win the Budget Conversation** — Shifting cybersecurity from a back‑office cost to a strategic investment can unlock budget approvals.\n  🔗 Graph: ai-governance, higher-ed-ai, tritonai\n  📅 Published: 2026-06-05\n  📰 https://edtechmagazine.com/higher/article/2026/06/cybersecurity-roi-higher-education-how-win-budget-conversation-perfcon\n  📌 Key takeaways:\n    • Emphasizes moving perception of cybersecurity to a strategic, risk‑reduction investment.\n    • CISOs can engage university leadership with simplified, outcome‑focused dialogues.\n    • Shows budgeting discussions tying security spend to measurable institutional risk mitigation.\n    • Aligns with Brett’s enterprise monitoring modernization and higher‑ed IT strategy.\n\n• **Ohio State Settles With Nearly 300 Strauss Victims** — The university reaches a settlement covering almost 300 victims of historic abuse.\n  🔗 Graph: ai-governance, higher-ed-ai, tritonai\n  📅 Published: 2026-06-08\n  📰 https://www.insidehighered.com/news/quick-takes/2026/06/08/ohio-state-settles-nearly-300-strauss-victims\n  📌 Key takeaways:\n    • Ohio State University agreed to compensate nearly 300 survivors of the Strauss scandal.\n    • Settlement reflects a broader reckoning with historical misconduct in higher‑ed institutions.\n    • Highlights the need for robust compliance, reporting, and governance frameworks on campus.\n    • Relevant to Brett’s AI‑governance and data‑ethics initiatives across UCSD.\n\n• **The state of international enrollment in 6 charts** — Visa policy shifts and other trends are reshaping foreign student numbers.\n  🔗 Graph: ai-governance, higher-ed-ai, tritonai\n  📅 Published: 2026-06-08\n  📰 https://www.highereddive.com/news/the-state-of-international-enrollment-in-6-charts/821753/\n  📌 Key takeaways:\n    • International enrollment is declining, driven in part by tighter U.S. visa policies from the Trump era.\n    • Early data suggests visa restrictions are having a measurable impact on campus demographics.\n    • Changes affect budgeting, staffing, and AI‑driven enrollment analytics.\n    • Directly ties to Brett’s data‑governance and predictive‑analytics work for UCSD.\n\n• **Detecting and Mitigating Bias by Treating Fairness as a Symmetry Operation** — A new fairness framework formalizes bias as symmetry breaking.\n  🔗 Graph: ai-governance, higher-ed-ai, tritonai\n  📅 Published: 2026-06-08\n  📰 https://arxiv.org/abs/2606.06514\n  📌 Key takeaways:\n    • Defines bias as a symmetry‑breaking operation; a fair model’s outputs stay invariant when swapping a protected attribute.\n    • Introduces loss‑based regularization to restore symmetry and improve fairness metrics.\n    • Validated on four synthetic datasets with varying levels of bias.\n    • Directly informs AI‑governance and responsible‑AI policies Brett is championing.\n\n• **Building Pakistan Notice Helper: A Small AI Tool for a Very Local Safety Problem** — A lightweight LLM‑powered triage assistant for suspicious messages.\n  🔗 Graph: ai-governance, higher-ed-ai, tritonai\n  📅 Published: 2026-06-08\n  📰 https://huggingface.co/blog/build-small-hackathon/building-pakistan-notice-helper\n  📌 Key takeaways:\n    • Offers a risk‑labeling triage tool that returns a short explanation, visible red flags, and safe next‑step recommendations.\n    • Accepts both raw text and screenshot inputs, handling English and Urdu.\n    • Designed for the specific safety challenges faced by users in Pakistan, demonstrating domain‑specific AI deployment.\n    • Shows how small‑model safety assistants can be built quickly, echoing Brett’s vertical‑AI approach.\n\n💡 Signal: Higher‑ed institutions are tightening governance and risk controls while AI research pushes toward principled fairness—both trends reinforce the strategic importance of AI‑governance and domain‑specific safety tools for UC San Diego.\n\n"
    }
  ]
};
