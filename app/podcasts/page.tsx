import type { Metadata } from 'next';
import PodcastsContent from './PodcastsContent';

export const metadata: Metadata = {
  title: "Podcast Discovery | Brett Pollak",
  description: "Discover and share your favorite podcasts on AI, technology, economics, and more. Featuring Brett's curated picks and community recommendations.",
  alternates: {
    canonical: "https://brettcpollak.com/podcasts",
  },
  openGraph: {
    title: "Podcast Discovery | Brett Pollak",
    description: "Discover and share your favorite podcasts on AI, technology, economics, and more.",
    url: "https://brettcpollak.com/podcasts",
  },
  twitter: {
    card: "summary",
    title: "Podcast Discovery | Brett Pollak",
    description: "Discover and share your favorite podcasts on AI, technology, economics, and more.",
  },
};

export default function Podcasts() {
  return (
    <div className="min-h-screen bg-paper" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="eyebrow mb-6">
            PODCAST DISCOVERY
          </div>
          <h1 className="display-title display-title--xl mb-6">Podcast Discovery</h1>
          <div className="divider-accent w-24 mb-8"></div>
          <p className="text-xl sm:text-2xl text-muted max-w-3xl leading-relaxed">
            My curated picks and community recommendations on AI, technology, and the forces shaping our world. Share yours too.
          </p>
        </div>

        <PodcastsContent />
      </div>
    </div>
  );
}
