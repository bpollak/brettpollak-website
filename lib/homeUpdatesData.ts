/**
 * Homepage "Working on now" — three horizontal modules: UC San Diego work,
 * personal builds, and media & speaking. Rows use the site's index-row
 * language (mono date, plain text, hover accent) — no sentence underlines.
 *
 * Refreshed by the Hermes `home-page-weekly-refresh` cron job (same pattern
 * as nowData.ts). Manual edits welcome; the cron compares against current
 * state and only pushes reasoned changes, so a human edit sticks until
 * something material changes.
 *
 * Rules:
 * - Keep 3–4 rows per module. Keep one module per area of life.
 * - `date` is when the thing happened or shipped (ISO). Display sorts newest first.
 * - `text` is a short plain-language title. No sentence underline in UI.
 * - `note` (optional) one-line context shown under the title.
 * - `href` points at the live artifact (app site, release notes, article, event).
 */

export type HomeUpdateArea = 'work' | 'personal' | 'media';

export type HomeUpdate = {
  date: string;
  area: HomeUpdateArea;
  text: string;
  note?: string;
  href: string;
};

export type HomeUpdatesData = {
  lastUpdated: string;
  updates: HomeUpdate[];
};

export const homeUpdates: HomeUpdatesData = {
  lastUpdated: '2026-09-08',
  updates: [
    // ── UC San Diego work ─────────────────────────────────────────────
    {
      date: '2026-09-08',
      area: 'work',
      text: 'TritonGPT 4.6.6 reaches production',
      note: 'New default model on UC-hosted infrastructure, Voice Mode, and a coding sandbox.',
      href: 'https://tritonai.ucsd.edu/tritongpt/release-notes/9-8-2026-release.html',
    },
    {
      date: '2026-09-04',
      area: 'work',
      text: 'TritonAI Harness access expands',
      note: 'Faculty and staff can request the Harness desktop agent workspace through the approved gateway.',
      href: 'https://tritonai.ucsd.edu/developer-apis/harness.html',
    },
    {
      date: '2026-09-03',
      area: 'work',
      text: 'SCOUT in production beta at UC Merced',
      note: 'The shared TritonAI platform now serves another UC campus — 100+ faculty and staff users.',
      href: 'https://tritonai.ucsd.edu/about/tritonai-updates.html',
    },
    {
      date: '2026-08-30',
      area: 'work',
      text: 'Citizen developer guidance published',
      note: 'How campus staff can build with approved AI tools, data classes, and supported hosting.',
      href: 'https://tritonai.ucsd.edu/about/tritonai-updates.html',
    },

    // ── Personal work ─────────────────────────────────────────────────
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Resolution Companion 1.4.0 in App Store review',
      note: 'New coach check-ins and progress view. Site refreshed with current screenshots.',
      href: 'https://resolutioncompanion.com/',
    },
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Steel City Gameday submitted for App Store review',
      note: 'Private Crews, pregame picks, and Flash Picks — built for the fall 2026 football season.',
      href: 'https://steelcitygameday.com/',
    },
    {
      date: '2026-09-07',
      area: 'personal',
      text: 'Del Mar season record: 31 of 72 picks matched',
      note: 'Horse Racing Companion saved every pick before post. 43.1% match rate across ten cards.',
      href: 'https://horseracingcompanion.com/',
    },

    // ── Media & speaking ──────────────────────────────────────────────
    {
      date: '2026-08-10',
      area: 'media',
      text: 'EDUCAUSE Member QuickTalk',
      note: 'The Next Data Decision — what institutions should focus on in their data journey.',
      href: 'https://events.educause.edu/member-quicktalks/2026/the-next-data-decision-what-institutions-should-focus-on-in-their-data-journey',
    },
    {
      date: '2026-08-03',
      area: 'media',
      text: 'Higher Ed AI Playbook',
      note: "Inside UC San Diego's build-it-yourself AI strategy — 2.5 hours to 11 minutes on transcripts.",
      href: 'https://www.higheredaiplaybook.com/p/25-hours-to-11-minutes-60000-transcripts',
    },
    {
      date: '2026-06-03',
      area: 'media',
      text: 'UC AI Council webinar: AI literacy framework',
      note: 'Mitigating Risk through Awareness — a framework for AI literacy.',
      href: 'https://ucop.zoom.us/webinar/register/WN_DxGMOcL1RdG-bcyOmfOC1Q',
    },
  ],
};

export const updatesByArea = (area: HomeUpdateArea): HomeUpdate[] =>
  homeUpdates.updates
    .filter(update => update.area === area)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
