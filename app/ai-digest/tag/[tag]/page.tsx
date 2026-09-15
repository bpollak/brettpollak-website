import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DIGEST_TAGS, editionsForTag, tagBySlug } from '@/lib/digestTags';
import { editionDate } from '@/lib/editions';

export const dynamicParams = false;

export function generateStaticParams() {
  return DIGEST_TAGS.map(tag => ({ tag: tag.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: slug } = await params;
  const tag = tagBySlug(slug);
  if (!tag) return {};
  return {
    title: `${tag.label} — AI Digest Archive`,
    description: `AI Digest editions about ${tag.label.toLowerCase()}: ${tag.description}`,
    alternates: { canonical: `https://brettcpollak.com/ai-digest/tag/${tag.slug}` },
    openGraph: {
      title: `${tag.label} — AI Digest | Brett Pollak`,
      description: tag.description,
      url: `https://brettcpollak.com/ai-digest/tag/${tag.slug}`,
      siteName: 'Brett Pollak',
      type: 'article',
      images: [{ url: '/ai-digest-og.png', width: 1200, height: 630, alt: `AI Digest editions tagged ${tag.label}` }],
    },
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: slug } = await params;
  const tag = tagBySlug(slug);
  if (!tag) notFound();
  const editions = editionsForTag(tag.slug);
  const others = DIGEST_TAGS.filter(t => t.slug !== tag.slug);

  return <main className="page-shell" id="main-content" tabIndex={-1}>
    <section className="page-hero">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="rule-label mb-5"><Link href="/ai-digest" className="text-signal-blue underline underline-offset-4">AI Digest</Link> · Topic</p>
        <h1 className="page-title mb-6">{tag.label}</h1>
        <p className="page-intro">{tag.description}</p>
        <p className="mt-6 text-sm text-muted">
          {editions.length} edition{editions.length === 1 ? '' : 's'}
          {editions.length >= 30 ? ' (showing the most recent 30)' : ''}
        </p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-10">
      {editions.length === 0 && (
        <p className="text-body">No editions carry this tag yet. Check back as the digest publishes daily.</p>
      )}
      <div className="space-y-5">
        {editions.map(edition => (
          <article key={edition.isoDate} className="editorial-panel p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-2xl font-medium">
                <Link href={`/ai-digest/${edition.isoDate}`} className="text-signal-blue underline underline-offset-4">{editionDate(edition.isoDate)}</Link>
              </h2>
              <p className="text-sm text-muted">Headlines: {edition.headlines.length}</p>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-body">
              {edition.headlines.slice(0, 3).map(headline => <li key={headline} className="leading-7">{headline}</li>)}
            </ul>
            {edition.headlines.length > 3 && (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-semibold text-signal-blue">More headlines ({edition.headlines.length - 3})</summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-body">{edition.headlines.slice(3).map(headline => <li key={headline}>{headline}</li>)}</ul>
              </details>
            )}
            <Link href={`/ai-digest/${edition.isoDate}`} className="button-secondary mt-5">Read edition<span className="sr-only"> for {editionDate(edition.isoDate)}</span></Link>
          </article>
        ))}
      </div>
    </section>
    <section aria-label="Other topics" className="mx-auto max-w-6xl px-6 pb-16">
      <h2 className="mb-4 text-xl font-medium">Browse other topics</h2>
      <div className="flex flex-wrap gap-2">
        {others.map(t => (
          <Link key={t.slug} href={`/ai-digest/tag/${t.slug}`} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-body transition-colors hover:border-signal-blue hover:text-ink">{t.label}</Link>
        ))}
      </div>
    </section>
  </main>;
}
