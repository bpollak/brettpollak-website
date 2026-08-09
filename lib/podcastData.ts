export interface Podcast {
  name: string;
  hosts: string;
  coverImage: string;
  category: 'AI & Tech' | 'Technology' | 'Economics & Data';
  summary: string;
  listenUrl: string;
}

/** Brett's curated podcast picks — used as static fallback and Firestore seed data */
export const podcasts: Podcast[] = [
  {
    name: 'The AI Daily Brief',
    hosts: 'Nathaniel Whittemore',
    coverImage: '/images/podcasts/ai-daily-brief.webp',
    category: 'AI & Tech',
    summary: 'A daily AI news analysis show. Nathaniel Whittemore covers the latest developments and what they mean.',
    listenUrl: 'https://aidailybrief.ai/',
  },
  {
    name: 'The Artificial Intelligence Show',
    hosts: 'Paul Roetzer & Mike Kaput',
    coverImage: '/images/podcasts/artificial-intelligence-show.webp',
    category: 'AI & Tech',
    summary: 'A weekly podcast from Paul Roetzer and Mike Kaput about applying AI in business. Practical, not theoretical.',
    listenUrl: 'https://podcast.smarterx.ai',
  },
  {
    name: 'Hard Fork',
    hosts: 'Kevin Roose & Casey Newton',
    coverImage: '/images/podcasts/hard-fork.webp',
    category: 'Technology',
    summary: 'A NYT show about tech that\'s happening now. Kevin Roose and Casey Newton on the week\'s biggest tech stories.',
    listenUrl: 'https://podcasts.apple.com/us/podcast/hard-fork/id1528594034',
  },
  {
    name: 'This Day in AI',
    hosts: 'Michael Sharkey & Chris Sharkey',
    coverImage: '/images/podcasts/this-day-in-ai.webp',
    category: 'AI & Tech',
    summary: 'Two brothers discuss AI news, papers, and models. They call themselves proudly average tech enthusiasts.',
    listenUrl: 'https://podcast.thisdayinai.com/',
  },
  {
    name: 'ThursdAI',
    hosts: 'Alex Volkov',
    coverImage: '/images/podcasts/thursdai.webp',
    category: 'AI & Tech',
    summary: 'A weekly show where AI engineers and researchers discuss the week\'s biggest AI developments.',
    listenUrl: 'https://sub.thursdai.news/',
  },
  {
    name: 'Dwarkesh Podcast',
    hosts: 'Dwarkesh Patel',
    coverImage: '/images/podcasts/dwarkesh-podcast.jpg',
    category: 'AI & Tech',
    summary: 'Long-form interviews with researchers and tech leaders, mostly about AI.',
    listenUrl: 'https://www.dwarkesh.com',
  },
  {
    name: 'Google DeepMind: The Podcast',
    hosts: 'Hannah Fry',
    coverImage: '/images/podcasts/google-deepmind.jpg',
    category: 'AI & Tech',
    summary: 'Goes behind the scenes at Google\'s AI research lab. Hannah Fry talks to researchers about what they\'re building.',
    listenUrl: 'https://deepmind.google/the-podcast/',
  },
  {
    name: 'Freakonomics Radio',
    hosts: 'Stephen J. Dubner',
    coverImage: '/images/podcasts/freakonomics-radio.jpg',
    category: 'Economics & Data',
    summary: 'Stephen Dubner explores the hidden side of everything using economics and data.',
    listenUrl: 'https://freakonomics.com',
  },
];
