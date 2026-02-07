import type { Metadata } from 'next';
import PodcastsContent from './PodcastsContent';

export const metadata: Metadata = {
  title: "Podcasts | Brett Pollak",
  description: "Podcasts I listen to on AI, technology, economics, and more. Featuring The AI Daily Brief, Hard Fork, Dwarkesh Podcast, Freakonomics Radio, and others.",
  alternates: {
    canonical: "https://brettcpollak.com/podcasts",
  },
  openGraph: {
    title: "Podcasts | Brett Pollak",
    description: "Podcasts I listen to on AI, technology, economics, and more.",
    url: "https://brettcpollak.com/podcasts",
  },
};

export default function Podcasts() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PODCASTS
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">What I&apos;m Listening To</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            A selection of podcasts that keep me informed on AI, technology, and the forces shaping our world
          </p>
        </div>

        <PodcastsContent />
      </div>
    </div>
  );
}
