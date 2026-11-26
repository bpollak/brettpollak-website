/**
 * Homepage "Working on now" — three horizontal modules: UC San Diego work,
 * personal builds, and media & speaking. Rows use the site's index-row
 * language (mono date, plain text, hover accent) — no sentence underlines.
 *
 * Maintained by the Hermes `website-content-weekly-audit` job (Sunday 12:33).
 * The old `home-page-weekly-refresh` job this file used to name no longer
 * exists, so nothing refreshes these rows automatically between audits.
 * Manual edits welcome; an audit run only adds a row when a shipped release
 * or launch clearly supersedes the newest one here.
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
  lastUpdated: '2026-11-22',
  updates: [
    // ── UC San Diego work ─────────────────────────────────────────────
    {
      date: '2026-11-14',
      area: 'work',
      text: 'Harness 0.4.2 is the current stable release',
      note: 'A clearer Project Home and reorganized settings, plus follow-up flags in Outlook inbox listings and message reads.',
      href: 'https://tritonai.ucsd.edu/developer-apis/harness-release-notes.html',
    },
    {
      date: '2026-11-08',
      area: 'work',
      text: 'TritonAI Gateway crosses 598B tokens and 166M requests',
      note: 'January–October 2026 campus usage, with 89.6% served on self-hosted university infrastructure.',
      href: 'https://tritonai.ucsd.edu/developer-apis/index.html',
    },
    {
      date: '2026-10-26',
      area: 'work',
      text: 'Harness 0.4.1: record a task, turn it into a reusable skill',
      note: 'Demonstrate a task in your desktop apps and the agent works with you to turn the recorded steps into a skill you can reuse.',
      href: 'https://tritonai.ucsd.edu/developer-apis/harness-release-notes.html',
    },
    {
      date: '2026-10-04',
      area: 'work',
      text: 'TritonAI Discovery Series and certificate launch',
      note: 'Short lessons on campus AI tools, data privacy, and responsible use, with browser-based knowledge checks.',
      href: 'https://tritonai.ucsd.edu/training-resources/videos/index.html',
    },

    // ── Personal work ─────────────────────────────────────────────────
    {
      date: '2026-11-24',
      area: 'personal',
      text: 'Pocket Relay 1.0 live on the App Store',
      note: 'A free iPhone and iPad app for following your coding agent in Google Antigravity and approving its actions from anywhere.',
      href: 'https://pocketrelay.app/',
    },
    {
      date: '2026-11-11',
      area: 'personal',
      text: 'Resolution Companion 1.6.1 released: per-habit reminders and polish',
      note: 'Each reminder card names a routine that fits the suggested time, alongside fixes and polish.',
      href: 'https://resolutioncompanion.com/',
    },
    {
      date: '2026-11-06',
      area: 'personal',
      text: 'Horse Racing Companion 1.0.3 live for Del Mar fall meet',
      note: 'Bing Crosby meet (Nov 6–29) included in the season pass, with official finish grading for dead heats.',
      href: 'https://horseracingcompanion.com/',
    },
    {
      date: '2026-10-08',
      area: 'personal',
      text: 'Steel City Gameday 1.0.8 released: public Crew for fans',
      note: 'Join Steel City Public Crew to chat and make picks with other fans, alongside your private Crews.',
      href: 'https://steelcitygameday.com/updates/',
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
