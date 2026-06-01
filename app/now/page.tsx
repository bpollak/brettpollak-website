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
    images: [
      {
        url: '/brett-pollak-headshot-sit-center.png',
        width: 500,
        height: 650,
        alt: 'Brett Pollak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Now | Brett Pollak',
    description: "What Brett Pollak is focused on right now — refreshed weekly.",
    images: ['/brett-pollak-headshot-sit-center.png'],
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
    <main className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
        <p className="rule-label mb-6">Now</p>
        <h1 className="page-title mb-6">
          What I&rsquo;m focused on right now
        </h1>
        {currentNow.intro && (
          <p className="page-intro mb-6">
            {currentNow.intro}
          </p>
        )}
        <div className="text-sm text-[#485248] flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Last updated: {formatDate(currentNow.lastUpdated)}</span>
          {currentNow.location && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{currentNow.location}</span>
            </>
          )}
        </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <ul className="space-y-10">
          {currentNow.items.map((item) => (
            <li key={item.label} className="border-l-4 border-[#1f5a8a] bg-[#fffef9] px-6 py-5">
              <h2 className="rule-label mb-3">
                {item.label}
              </h2>
              <p className="text-[#485248] text-lg leading-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
