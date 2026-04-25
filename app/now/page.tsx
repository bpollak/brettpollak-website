import type { Metadata } from 'next';
import Link from 'next/link';
import { currentNow } from '@/lib/nowData';

export const metadata: Metadata = {
  title: 'Now | Brett Pollak',
  description:
    "What Brett Pollak is focused on right now — work, projects, and what's on his mind. Refreshed weekly.",
  alternates: {
    canonical: '/now',
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
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40"
      id="main-content"
    >
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-8">
          NOW
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent tracking-tight pb-1 mb-6">
          What I&rsquo;m focused on right now
        </h1>
        {currentNow.intro && (
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            {currentNow.intro}
          </p>
        )}
        <div className="text-sm text-slate-500 mb-12 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Last updated: {formatDate(currentNow.lastUpdated)}</span>
          {currentNow.location && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{currentNow.location}</span>
            </>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="space-y-10">
          {currentNow.items.map((item) => (
            <li key={item.label} className="border-l-2 border-blue-200 pl-6">
              <h2 className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-3">
                {item.label}
              </h2>
              <p className="text-slate-700 text-lg leading-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div className="border-t border-slate-200 pt-8 text-sm text-slate-500 leading-6">
          <p className="mb-2">
            This is a{' '}
            <Link
              href="https://nownownow.com/about"
              className="underline hover:text-slate-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              now page
            </Link>
            , inspired by Derek Sivers. The convention: a single page on a
            personal site that says what someone is focused on at this point in
            their life.
          </p>
          <p>
            Refreshed weekly by an automated review job; manual edits also
            stick. If something here is materially out of date, it&rsquo;s
            because nothing has shifted enough to warrant a new entry.
          </p>
        </div>
      </section>
    </main>
  );
}
