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
};

export default function Podcasts() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PODCAST DISCOVERY
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Podcast Discovery</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            My curated picks and community recommendations on AI, technology, and the forces shaping our world. Share yours too.
          </p>
        </div>

        <PodcastsContent />
      </div>
    </div>
  );
}
