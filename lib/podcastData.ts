export interface Podcast {
  name: string;
  hosts: string;
  coverImage: string;
  category: 'AI & Tech' | 'Technology' | 'Economics & Data';
  summary: string;
  listenUrl: string;
}

export const podcasts: Podcast[] = [
  {
    name: 'The AI Daily Brief',
    hosts: 'Nathaniel Whittemore',
    coverImage: '/images/podcasts/ai-daily-brief.webp',
    category: 'AI & Tech',
    summary: 'A daily news analysis show covering all things artificial intelligence, providing insights and analysis on the latest AI developments and their implications.',
    listenUrl: 'https://aidailybrief.ai/',
  },
  {
    name: 'The Artificial Intelligence Show',
    hosts: 'Paul Roetzer & Mike Kaput',
    coverImage: '/images/podcasts/artificial-intelligence-show.webp',
    category: 'AI & Tech',
    summary: 'A weekly guide to making AI approachable and actionable for businesses and individuals, helping listeners understand and apply AI in practical ways.',
    listenUrl: 'https://podcast.smarterx.ai',
  },
  {
    name: 'Hard Fork',
    hosts: 'Kevin Roose & Casey Newton',
    coverImage: '/images/podcasts/hard-fork.webp',
    category: 'Technology',
    summary: 'A New York Times show about the future that\'s already here, making sense of the latest developments in the rapidly changing world of tech.',
    listenUrl: 'https://podcasts.apple.com/us/podcast/hard-fork/id1528594034',
  },
  {
    name: 'This Day in AI',
    hosts: 'Michael Sharkey & Chris Sharkey',
    coverImage: '/images/podcasts/this-day-in-ai.webp',
    category: 'AI & Tech',
    summary: 'Two brothers discuss the latest AI news, papers, and models in an accessible way, describing themselves as proudly average tech enthusiasts.',
    listenUrl: 'https://podcast.thisdayinai.com/',
  },
  {
    name: 'ThursdAI',
    hosts: 'Alex Volkov',
    coverImage: '/images/podcasts/thursdai.webp',
    category: 'AI & Tech',
    summary: 'A weekly show where AI engineers, data scientists, and experts discuss everything major that happened in the world of AI for the past week.',
    listenUrl: 'https://sub.thursdai.news/',
  },
  {
    name: 'Dwarkesh Podcast',
    hosts: 'Dwarkesh Patel',
    coverImage: '/images/podcasts/dwarkesh-podcast.jpg',
    category: 'AI & Tech',
    summary: 'Long-form interviews with scientists, technology leaders, historians, and economists, focusing on artificial intelligence, science, and history.',
    listenUrl: 'https://www.dwarkesh.com',
  },
  {
    name: 'Google DeepMind: The Podcast',
    hosts: 'Hannah Fry',
    coverImage: '/images/podcasts/google-deepmind.jpg',
    category: 'AI & Tech',
    summary: 'Goes behind the scenes of the world-leading AI research lab to uncover the extraordinary ways AI is transforming our world.',
    listenUrl: 'https://deepmind.google/the-podcast/',
  },
  {
    name: 'Freakonomics Radio',
    hosts: 'Stephen J. Dubner',
    coverImage: '/images/podcasts/freakonomics-radio.jpg',
    category: 'Economics & Data',
    summary: 'Explores the hidden side of everything using economics, data, and unconventional thinking, analyzing everyday phenomena through an economic lens.',
    listenUrl: 'https://freakonomics.com',
  },
];
