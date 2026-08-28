/**
 * /linkedin page data.
 *
 * The page used to be a third-party SociableKit widget, which meant the static
 * HTML carried no indexable content and the page broke entirely if the vendor
 * lapsed. It is now server-rendered from first-party data.
 *
 * Only the editorial framing lives here. The article and publication lists on
 * the page are derived from `lib/mediaData.ts` at build time, so anything added
 * there shows up here automatically — there is no second list to keep in sync.
 *
 * `themes` describes what Brett writes about; keep it to things the rest of the
 * site can back up. Do not paste post text here unless it is genuinely his.
 */

export type LinkedInTheme = {
  /** Short label, e.g. "Institutional AI". */
  label: string;
  /** 1–2 sentences, plain prose. */
  body: string;
};

export type LinkedInProfile = {
  /** ISO date the framing below was last reviewed. */
  lastReviewed: string;
  profileUrl: string;
  /** One-line opener under the page title. */
  intro: string;
  themes: LinkedInTheme[];
};

export const linkedInProfile: LinkedInProfile = {
  lastReviewed: "2026-07-26",
  profileUrl: "https://www.linkedin.com/in/brettpollak/",
  intro:
    "I use LinkedIn for shorter notes on current work, including costs, mistakes, and things that may be reusable elsewhere.",
  themes: [
    {
      label: "Institutional AI",
      body:
        "Notes on TritonAI and TritonGPT at UC San Diego, including the move from a pilot to a governed campus service.",
    },
    {
      label: "Governance and adoption",
      body:
        "How data classification, review, and guardrails affect the pace and scope of institutional AI work.",
    },
    {
      label: "Agent workflows",
      body:
        "Examples from contract review, transcript matching, scheduling, and enterprise data, including where agents have and have not been useful.",
    },
    {
      label: "Tools for people who are not developers",
      body:
        "Notes on the Citizen Developer Program and Developer API Program, including how staff and faculty move from an idea to a supported tool.",
    },
  ],
};
