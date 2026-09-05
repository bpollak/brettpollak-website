import EditionIndexSchema from '@/components/EditionIndexSchema';
import type { Metadata } from 'next';
import Link from 'next/link';
import { newsletterEditions, editionDate } from '@/lib/editions';
import { ucsdAiNewsletterData } from '@/lib/ucsdAiNewsletterData';

// Intentionally NOT using sanitizePublicDigest or linkDigestHeadlines here.
// Those utilities were built for the /ai-digest page (Brett's personal daily
// digest archive) and rewrite second-person pronouns ("you" → "organizations",
// "your" → "institutional") to scrub personal references before publication.
// This newsletter is written directly TO UCSD staff in second person, so that
// scrubbing would corrupt the voice. The agent's draft is already audience-safe.

export const metadata: Metadata = {
  title: 'UC San Diego AI Weekly Update',
  description:
    'A weekly roundup of what’s new with UC San Diego’s supported AI services. Tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
  alternates: {
    canonical: 'https://brettcpollak.com/ucsd-ai-news',
    types: {
      'application/rss+xml': '/ucsd-ai-news/feed.xml',
    },
  },
  openGraph: {
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services. Tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
    url: 'https://brettcpollak.com/ucsd-ai-news',
    siteName: 'Brett Pollak',
    type: 'article',
    images: [
      {
        url: '/tritongpt-uc-san-diego-assistant.png',
        width: 1200,
        height: 800,
        alt: 'UC San Diego AI weekly updates and TritonAI platform notes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services. Tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
    images: ['/tritongpt-uc-san-diego-assistant.png'],
  },
};

export default function UcsdAiNewsPage() {
  return <main className="page-shell" id="main-content" tabIndex={-1}>
    <EditionIndexSchema path="ucsd-ai-news" title="UC San Diego AI Weekly" dates={newsletterEditions.map(edition => edition.isoDate)} />
    <section className="page-hero ucsd-news-hero">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="rule-label mb-5">UC San Diego AI Weekly</p>
        <h1 className="page-title mb-6">UC San Diego AI Weekly Update</h1>
        <p className="page-intro">A weekly roundup of supported AI tools, TritonAI updates, and campus training opportunities. Dates and availability reflect each edition&apos;s publication date.</p>
        <p className="mt-6 text-sm text-body">Published through {ucsdAiNewsletterData.publishedThrough} · {newsletterEditions.length} editions</p>
        <nav aria-label="Campus AI resources" className="reading-links mt-6">
          <a href="https://tritonai.ucsd.edu/">TritonAI platform ↗</a>
          <a href="https://tritonai.ucsd.edu/tritongpt/release-notes/">TritonGPT release notes ↗</a>
        </nav>
      </div>
    </section>
    <section id="ai-updates" className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="mb-6 text-3xl font-medium">Browse editions</h2>
      <div className="grid gap-5 md:grid-cols-2">{newsletterEditions.map(edition => <article id={edition.isoDate} key={edition.isoDate} className="editorial-panel p-6">
        <h3 className="text-2xl font-medium"><Link href={`/ucsd-ai-news/${edition.isoDate}`} className="text-signal-blue underline underline-offset-4">{editionDate(edition.isoDate)}</Link></h3>
        <p className="mt-4 leading-7 text-body">Tool updates: {edition.toolUpdatesCount} · TritonAI news: {edition.tritonAiNewsCount} · Training opportunities: {edition.upcomingTrainingsCount}</p>
        <Link href={`/ucsd-ai-news/${edition.isoDate}`} className="button-secondary mt-5">Read edition<span className="sr-only"> for {editionDate(edition.isoDate)}</span></Link>
      </article>)}</div>
      {newsletterEditions.length === 0 && <p className="text-body">The first edition is not yet available.</p>}
    </section>
  </main>;
}
