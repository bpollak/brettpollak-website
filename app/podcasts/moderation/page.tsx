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
    <div className="min-h-screen bg-paper" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="eyebrow mb-6">
            INTERNAL MODERATION
          </div>
          <h1 className="display-title display-title--xl mb-6">
            Podcast Moderation Console
          </h1>
          <div className="divider-accent w-24 mb-8"></div>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            Review pending podcast submissions, approve with edits, reject with reasons, and remove live community items from the public page.
          </p>
        </div>

        <ModerationConsole />
      </div>
    </div>
  );
}
