/**
 * Homepage "Working on now" updates — dated one-liners for what Brett is
 * actively shipping, inside and outside UC San Diego.
 *
 * Refreshed by the Hermes `home-page-weekly-refresh` cron job (same pattern
 * as nowData.ts). Manual edits welcome; the cron compares against current
 * state and only pushes reasoned changes, so a human edit sticks until
 * something material changes.
 *
 * Rules:
 * - Keep 4–6 items. One sentence each. Plain, factual language.
 * - `date` is when the update happened (ISO). Display sorts newest first.
 * - `area` drives the card label: 'work' | 'personal' | 'media'.
 * - `href` points at the live artifact (app site, release notes, article).
 */

export type HomeUpdateArea = 'work' | 'personal' | 'media';

export type HomeUpdate = {
  date: string;
  area: HomeUpdateArea;
  text: string;
  href: string;
};

export type HomeUpdatesData = {
  lastUpdated: string;
  updates: HomeUpdate[];
};

export const homeUpdates: HomeUpdatesData = {
  lastUpdated: '2026-09-08',
  updates: [
    {
      date: '2026-09-08',
      area: 'work',
      text: 'TritonGPT 4.6.6 reached production — new default model on UC-hosted infrastructure, Voice Mode, and a coding sandbox.',
      href: 'https://tritonai.ucsd.edu/tritongpt/release-notes/9-8-2026-release.html',
    },
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Resolution Companion 1.4.0 submitted to the App Store — new coach check-ins and progress view; site refreshed with current screenshots.',
      href: 'https://resolutioncompanion.com/',
    },
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Steel City Gameday reworked its homepage copy and opened external TestFlight testing for the fall season.',
      href: 'https://steelcitygameday.com/',
    },
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Del Mar season update from Horse Racing Companion: 31 of 72 final picks matched their published result type across ten tracked cards — a 43.1% pick-match rate, with every pick saved before post.',
      href: 'https://horseracingcompanion.com/',
    },
    {
      date: '2026-08-10',
      area: 'media',
      text: 'EDUCAUSE Member QuickTalk: The Next Data Decision — what institutions should focus on in their data journey.',
      href: 'https://events.educause.edu/member-quicktalks/2026/the-next-data-decision-what-institutions-should-focus-on-in-their-data-journey',
    },
    {
      date: '2026-08-03',
      area: 'media',
      text: "Higher Ed AI Playbook: inside UC San Diego's build-it-yourself AI strategy — 2.5 hours to 11 minutes on transcripts.",
      href: 'https://www.higheredaiplaybook.com/p/25-hours-to-11-minutes-60000-transcripts',
    },
  ],
};
