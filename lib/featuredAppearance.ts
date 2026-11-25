/**
 * The one appearance the homepage features in its own band, directly under
 * the hero (components/home/FeaturedEpisode.tsx).
 *
 * To feature a different episode or talk, replace this object. The same item
 * should also have a row in lib/mediaData.ts so it is counted on /media.
 * Chapter times are "MM:SS" from the publisher's own show notes; each one
 * links to that moment in the video.
 */
export type FeaturedAppearance = {
  show: string;
  episodeLabel: string;
  title: string;
  /** ISO date the episode was published. */
  date: string;
  duration: string;
  host: string;
  summary: string;
  /** Publisher's episode page: player, show notes, transcript. */
  url: string;
  youtubeId: string;
  image: string;
  imageAlt: string;
  chapters: { time: string; title: string }[];
};

export const featuredAppearance: FeaturedAppearance = {
  show: 'Campus Technology Insider',
  episodeLabel: 'Season 7, Episode 9',
  title: 'Supporting Citizen Developers and AI Innovation at UC San Diego',
  date: '2026-11-23',
  duration: '30 min',
  host: 'Rhea Kelly, editor-in-chief of Campus Technology',
  summary:
    'How TritonAI runs open-weight models on university infrastructure, why we stay model-agnostic behind one gateway, and what happens when campus staff start building their own AI tools.',
  url: 'https://campustechnology.com/podcasts/2026/11/supporting-citizen-developers-and-ai-innovation-at-uc-san-diego.aspx',
  youtubeId: 'jN7RzoB8tgc',
  image: '/media/campus-technology-insider-s7e9.webp',
  imageAlt:
    'Campus Technology Insider podcast, Season 7, Episode 9: Supporting Citizen Developers and AI Innovation at UC San Diego',
  chapters: [
    { time: '01:50', title: 'Origins of TritonGPT' },
    { time: '04:04', title: 'Running models in house' },
    { time: '07:54', title: 'The TritonAI ecosystem' },
    { time: '10:47', title: 'TritonAI Harness explained' },
    { time: '13:51', title: 'Citizen development at scale' },
    { time: '16:36', title: 'Data integration and governance' },
    { time: '22:08', title: 'When IT steps in' },
    { time: '26:36', title: 'Avoiding tool sprawl' },
  ],
};
