import type { Metadata } from 'next';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import { linkDigestHeadlines, renderMarkdown, sanitizePublicDigest } from '@/lib/markdown';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';

export const metadata: Metadata = {
  title: 'AI Digest',
  description: 'A rolling weekly view of curated daily AI digests, updated daily and reset each Monday.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-digest',
  },
  openGraph: {
    title: 'AI Digest',
    description: 'A rolling weekly view of curated daily AI digests, updated daily and reset each Monday.',
    url: 'https://brettcpollak.com/ai-digest',
    siteName: 'brettcpollak.com',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digest',
    description: 'A rolling weekly view of curated daily AI digests, updated daily and reset each Monday.',
  },
};

export default function AiDigestPage() {
  const { weekLabel, publishedThrough, digestCount, headlineCount, days } = weeklyAiDigestData;
  const daysNewestFirst = [...days].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <main className="min-h-screen bg-paper" id="main-content">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="eyebrow mb-8">
          AI DIGEST
        </div>
        <h1 className="display-title display-title--xl mb-6">
          This Week in AI Digest
        </h1>
        <div className="divider-accent w-24 mb-8"></div>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-10">
          A rolling weekly archive of curated daily AI briefings focused on major developments, product launches, enterprise shifts, and higher education implications. This page updates as new digests are published and automatically resets to a new week every Monday.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Current window</div>
            <div className="stat-number text-3xl md:text-4xl">{weekLabel}</div>
          </div>
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Daily digests posted</div>
            <div className="stat-number text-3xl md:text-4xl">{digestCount}</div>
          </div>
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Headlines included</div>
            <div className="stat-number text-3xl md:text-4xl">{headlineCount}</div>
          </div>
        </div>

        <div className="border-2 border-ink bg-paper-2 px-5 py-4 text-sm text-ink">
          Published through <span className="font-semibold">{publishedThrough}</span>. Days without an available digest are omitted rather than backfilled.
        </div>

        <div className="mt-8">
          <SubscribeForm />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-12 md:space-y-14">
          {daysNewestFirst.map((day) => (
            <article
              key={day.isoDate}
              className="card-hard overflow-hidden"
            >
              <div className="px-8 py-6 border-b-2 border-ink section-dark">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-paper">{day.displayDate}</h2>
                    <p className="text-paper/70 text-sm mt-1 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">Source: {day.sourceFile}</p>
                  </div>
                  <div className="inline-flex w-fit items-center bg-accent px-4 py-2 text-sm font-semibold text-ink border-2 border-paper">
                    {day.headlines.length} article{day.headlines.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>
              <div className="px-8 py-7">
                <div
                  className="prose prose-slate max-w-none prose-p:text-[1.06rem] prose-p:leading-9 prose-p:my-5 prose-li:text-[1.06rem] prose-li:leading-9 prose-li:my-4 prose-ul:my-6 prose-ol:my-6 prose-strong:text-ink prose-h2:text-ink prose-h3:text-ink prose-h2:mb-4 prose-h3:mb-3 prose-hr:border-ink/20 prose-hr:my-8 [&_ul>li]:mb-8 [&_ol>li]:mb-8 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-accent [&_a]:transition-colors hover:[&_a]:text-accent hover:[&_a]:decoration-accent"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(sanitizePublicDigest(linkDigestHeadlines(day.raw))) }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
