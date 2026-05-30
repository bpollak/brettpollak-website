import type { Metadata } from 'next';
import { currentNow } from '@/lib/nowData';

export const metadata: Metadata = {
  title: 'Now | Brett Pollak',
  description:
    "What Brett Pollak is focused on right now — work, projects, and what's on his mind. Refreshed weekly.",
  alternates: {
    canonical: 'https://brettcpollak.com/now',
  },
  openGraph: {
    title: 'Now | Brett Pollak',
    description: "What Brett Pollak is focused on right now — refreshed weekly.",
    url: 'https://brettcpollak.com/now',
    siteName: 'Brett Pollak',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Now | Brett Pollak',
    description: "What Brett Pollak is focused on right now — refreshed weekly.",
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function NowPage() {
  return (
    <main
      className="min-h-screen bg-paper"
      id="main-content"
    >
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="eyebrow eyebrow--accent">
            NOW
          </span>
        </div>
        <h1 className="display-title display-title--xl mb-6">
          What I&rsquo;m focused on right now
        </h1>
        <div className="divider-accent w-24 mb-8"></div>
        {currentNow.intro && (
          <p className="text-xl text-muted leading-relaxed mb-6">
            {currentNow.intro}
          </p>
        )}
        <div className="text-sm text-muted mb-12 flex flex-wrap items-center gap-x-4 gap-y-1 font-[family-name:var(--font-geist-mono)]">
          <span>Last updated: {formatDate(currentNow.lastUpdated)}</span>
          {currentNow.location && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{currentNow.location}</span>
            </>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <ul className="space-y-10">
          {currentNow.items.map((item) => (
            <li key={item.label} className="border-l-4 border-accent pl-6">
              <h2 className="eyebrow mb-3">
                {item.label}
              </h2>
              <p className="text-ink text-lg leading-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
