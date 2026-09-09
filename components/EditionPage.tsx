import Link from 'next/link';
import { editionDate } from '@/lib/editions';
import { SITE_URL } from '@/lib/seoDates';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';

export default function EditionPage({ kind, date, html, dates }: {
  kind: 'ai-digest' | 'ucsd-ai-news'; date: string; html: string; dates: string[];
}) {
  const title = kind === 'ai-digest' ? 'AI Digest' : 'UC San Diego AI Weekly';
  const index = dates.indexOf(date);
  const newer = dates[index - 1];
  const older = dates[index + 1];
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: `${title} · ${editionDate(date)}`,
    url: `${SITE_URL}/${kind}/${date}`, datePublished: date,
    author: { '@id': `${SITE_URL}/#person` }, publisher: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
  return <main id="main-content" tabIndex={-1} className="page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="page-hero">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href={`/${kind}`} className="text-sm font-semibold text-signal-blue underline underline-offset-4">← All {title} editions</Link>
        <p className="rule-label mt-8 mb-4">{title}</p>
        <h1 className="page-title">{editionDate(date)}</h1>
        <p className="mt-6 text-sm text-body">News and availability reflect this edition&apos;s publication date.</p>
      </div>
    </section>
    <article className="reading-copy mx-auto max-w-4xl px-6 py-8" aria-label={`${title} for ${editionDate(date)}`} dangerouslySetInnerHTML={{ __html: html }} />
    <nav aria-label="Edition navigation" className="mx-auto flex max-w-4xl flex-wrap gap-3 border-t border-line px-6 py-8">
      {newer && <Link className="button-secondary" href={`/${kind}/${newer}`}>← Newer: {editionDate(newer)}</Link>}
      {older && <Link className="button-secondary" href={`/${kind}/${older}`}>Older: {editionDate(older)} →</Link>}
    </nav>
    {kind === 'ai-digest' && (
      <section aria-label="Subscribe" className="mx-auto max-w-4xl px-6 pb-16">
        <p className="rule-label mb-4">Keep up with this</p>
        <SubscribeForm />
        <p className="mt-4 text-sm text-body">
          Reading the campus-internal side of this? The{' '}
          <Link href="/ucsd-ai-news" className="font-semibold text-signal-blue underline underline-offset-4">UC San Diego AI Weekly</Link>{' '}
          covers supported AI tools, TritonAI updates, and trainings for UCSD staff.
        </p>
      </section>
    )}
    {kind === 'ucsd-ai-news' && (
      <section aria-label="Subscribe" className="mx-auto max-w-4xl px-6 pb-16">
        <p className="rule-label mb-4">Beyond campus</p>
        <p className="leading-7 text-body">
          The{' '}
          <Link href="/ai-digest" className="font-semibold text-signal-blue underline underline-offset-4">AI Digest</Link>{' '}
          is the national-facing daily briefing that pairs with this weekly: product launches, enterprise developments, and AI policy across higher education, with key takeaways and source links.
        </p>
        <Link href="/ai-digest" className="button-secondary mt-5">Browse the AI Digest</Link>
      </section>
    )}
  </main>;
}
