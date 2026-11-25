/**
 * /now page data — what Brett is focused on right now.
 *
 * Auto-refreshed weekly by the Hermes `now-page-weekly-refresh` cron job
 * (Sundays ~11:33am PT). The cron only updates this file when it detects
 * meaningful drift; otherwise the file is unchanged.
 *
 * Manual edits welcome — the cron compares against current state and only
 * pushes changes that the prompt has reasoned about, so a human edit will
 * stick until something materially changes.
 */

export type NowItem = {
  /** Section heading, e.g., "Work focus" */
  label: string;
  /** 1–3 sentences. Plain prose, written like you'd tell a friend. */
  body: string;
};

export type NowSnapshot = {
  /** ISO date string, e.g., "2026-04-24". Always present. */
  lastUpdated: string;
  /** Where Brett is right now, e.g., "San Diego, California". Optional. */
  location?: string;
  /** Optional one-line opener under the page title. */
  intro?: string;
  /** The actual /now content, in display order. */
  items: NowItem[];
};

export const currentNow: NowSnapshot = {
  lastUpdated: "2026-11-25",
  location: "San Diego, California",
  intro:
    "A short record of where my attention is going, at UC San Diego and on the apps I build. Updated when something material changes.",
  items: [
    {
      label: "Institutional AI at UC San Diego",
      body:
        "TritonGPT runs across campus and defaults to university-hosted infrastructure, so routine traffic stays on hardware we control. Voice Mode, an in-chat coding sandbox, and a Canvas LMS integration are live. In November we put the platform in front of campus in one session with about 600 attendees, and the sharpest feedback was simple: show the first click, not just finished demos. December's session is step by step, one tool at a time. The proposed follow-on is a five-session series through spring on the same format, alongside a campus AI council that is still forming.",
    },
    {
      label: "Developer enablement and operational agents",
      body:
        "The TritonAI Harness is the supported build path for campus developers. It is on 0.4.2 with a rebuilt training course, and more than 400 active installs since October. On-premises inference carries no recharge for campus administrative work, while cloud routes bill to a departmental chartstring. Access stopped being the constraint this year. Fluency is the constraint now. Meanwhile, supervised agents are moving into core workflows, including offer-drafting with peer benchmarks, self-service AI platform access requests, and leadership Q&A over institutional data.",
    },
    {
      label: "Shared infrastructure across campuses",
      body:
        "The shared TritonAI platform now supports peer institutions including UC Berkeley (BearGPT), UC Merced (SCOUT), UC Agriculture and Natural Resources, and Fairleigh Dickinson University (FredGPT). I've been taking the Harness to the systemwide AI community of practice as a UC-agnostic build platform, and the first non-UC institutions are asking about it. GPU capacity for data science, machine learning, and teaching is funded and being built out under PARASOL, the platform's new name. On core infrastructure, on-premises capacity is going up, not down, while we modernize the campus data platform and identity registry.",
    },
    {
      label: "Systemwide and national AI governance",
      body:
        "I serve on the inaugural NASH AI Advisory Board, the first national AI effort built exclusively for public higher education systems, on its Data Infrastructure and Privacy working group. My focus across systemwide and national conversations is consistent: one gateway in front of every model, access governed by data classification, and usage metering from day one.",
    },
    {
      label: "The apps I build",
      body:
        "Resolution Companion 1.6.1 is live on the App Store with per-habit reminders and polish fixes, and a New Year release is next. Horse Racing Companion 1.0.3 shipped its fall meet updates for Del Mar's Bing Crosby meet (Nov 6–29). Steel City Gameday 1.0.8 is mid-season with public Crew chat, weekly matchup cards, and live Flash Picks. Two new apps reached the App Store this week. Pocket Relay follows and steers a coding agent in Google Antigravity from an iPhone or iPad, and version 1.2 works from anywhere. TritonAI Harness Chat is the single-chat phone client I built for the Harness: one conversation, no thread or model picking.",
    },
  ],
};

/**
 * Optional archive of past /now snapshots. Empty for now;
 * the weekly cron may append entries here when it makes a substantive
 * change so visitors can see how the focus has shifted over time.
 */
export const nowArchive: NowSnapshot[] = [];
