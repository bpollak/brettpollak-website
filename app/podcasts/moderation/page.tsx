import type { Metadata } from 'next';
import ModerationConsole from './ModerationConsole';

export const metadata: Metadata = {
  title: 'Podcast Moderation | Brett Pollak',
  description: 'Internal moderation console for podcast submissions.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PodcastModerationPage() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            INTERNAL MODERATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-4 tracking-tight pb-1">
            Podcast Moderation Console
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Review pending podcast submissions, approve with edits, reject with reasons, and remove live community items from the public page.
          </p>
        </div>

        <ModerationConsole />
      </div>
    </div>
  );
}
