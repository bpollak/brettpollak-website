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
    "Most of what I post is the in-between version of the work on this site — what a deployment actually cost, what we got wrong first, and what turned out to be reusable.",
  themes: [
    {
      label: "Institutional AI, with the numbers attached",
      body:
        "TritonAI and TritonGPT at UC San Diego: what it takes to move from a pilot to a governed service serving 73,000+ people, and what changes about the work at that scale.",
    },
    {
      label: "Governance as an accelerant",
      body:
        "Data classification, guardrails, and review paths are what let an institution say yes faster. Most of what I write about governance is really about removing the reason to say no.",
    },
    {
      label: "Agentic workflows in real administrative work",
      body:
        "Contract review, transcript matching, scheduling, enterprise data questions — where agents have earned their place in production, and where they have not.",
    },
    {
      label: "Enabling people who are not developers",
      body:
        "The Citizen Developer Program and the Developer API Program: giving staff and faculty a governed path from an idea to a tool other people depend on.",
    },
  ],
};
