import EditionIndexSchema from '@/components/EditionIndexSchema';
import type { Metadata } from 'next';
import Link from 'next/link';
import { digestEditions, editionDate } from '@/lib/editions';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';

export const metadata: Metadata = {
  title: 'AI Digest — Curated AI Developments',
  description: 'An archive of daily AI briefings covering product launches, enterprise developments, and implications for higher education.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-digest',
    types: {
      'application/rss+xml': '/ai-digest/feed.xml',
    },
  },
  openGraph: {
    title: 'AI Digest | Curated AI Developments',
    description: 'Daily AI briefings covering product launches, enterprise developments, and implications for higher education.',
    url: 'https://brettcpollak.com/ai-digest',
    siteName: 'Brett Pollak',
    type: 'article',
    images: [
      {
        url: '/ai-use-case-meeting.png',
        width: 1280,
        height: 800,
        alt: 'AI digest and higher education signal tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digest | Curated AI Developments',
    description: 'Daily AI briefings covering product launches, enterprise developments, and implications for higher education.',
    images: ['/ai-use-case-meeting.png'],
  },
};

export default function AiDigestPage() {
  return <main className="page-shell" id="main-content" tabIndex={-1}>
    <EditionIndexSchema path="ai-digest" title="AI Digest" dates={digestEditions.map(edition => edition.isoDate)} />
    <section className="page-hero">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="rule-label mb-5">AI Digest</p>
        <h1 className="page-title mb-6">Daily AI briefings</h1>
        <p className="page-intro">Product launches, enterprise developments, and implications for higher education. Each edition links to the source material.</p>
        <p className="mt-6 text-sm text-body">{weeklyAiDigestData.weekLabel} · Published through {weeklyAiDigestData.publishedThrough}</p>
        <div className="mt-8"><SubscribeForm /></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="mb-6 text-3xl font-medium">Browse editions</h2>
      <div className="space-y-5">{digestEditions.map(day => <article id={day.isoDate} key={day.isoDate} className="editorial-panel p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-2xl font-medium"><Link href={`/ai-digest/${day.isoDate}`} className="text-signal-blue underline underline-offset-4">{editionDate(day.isoDate)}</Link></h3>
          <p className="text-sm text-muted">Headlines: {day.headlines.length}</p>
        </div>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-body">{day.headlines.slice(0, 3).map(headline => <li key={headline} className="leading-7">{headline}</li>)}</ul>
        {day.headlines.length > 3 && <details className="mt-4"><summary className="cursor-pointer text-sm font-semibold text-signal-blue">More headlines ({day.headlines.length - 3})</summary><ul className="mt-3 list-disc space-y-2 pl-5 text-body">{day.headlines.slice(3).map(headline => <li key={headline}>{headline}</li>)}</ul></details>}
        <Link href={`/ai-digest/${day.isoDate}`} className="button-secondary mt-5">Read edition<span className="sr-only"> for {editionDate(day.isoDate)}</span></Link>
      </article>)}</div>
    </section>
  </main>;
}
