import type { Metadata } from 'next';
import { ucsdAiNewsletterData } from '@/lib/ucsdAiNewsletterData';
import { renderMarkdown } from '@/lib/markdown';

// Intentionally NOT using sanitizePublicDigest or linkDigestHeadlines here.
// Those utilities were built for the /ai-digest page (Brett's personal daily
// digest archive) and rewrite second-person pronouns ("you" → "organizations",
// "your" → "institutional") to scrub personal references before publication.
// This newsletter is written directly TO UCSD staff in second person, so that
// scrubbing would corrupt the voice. The agent's draft is already audience-safe.

export const metadata: Metadata = {
  title: 'UC San Diego AI Weekly Update | Brett Pollak',
  description:
    'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
  alternates: {
    canonical: '/ucsd-ai-news',
  },
  openGraph: {
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
    url: 'https://brettcpollak.com/ucsd-ai-news',
    siteName: 'Brett Pollak',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
  },
};

export default function UcsdAiNewsPage() {
  const { weekLabel, publishedThrough, editionCount, itemCount, editions } = ucsdAiNewsletterData;
  const editionsNewestFirst = [...editions].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40" id="main-content">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-8">
          UC SAN DIEGO AI WEEKLY
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent tracking-tight pb-1 mb-6">
          UC San Diego AI Weekly Update
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-4">
          A weekly roundup of what&rsquo;s new with UC San Diego&rsquo;s supported AI services. Each edition
          covers release notes from your supported tools, updates from TritonAI, and trainings
          coming up in the next two weeks.
        </p>
        <p className="text-base text-slate-500 leading-relaxed max-w-3xl mb-10">
          Curated for UCSD staff. For the official TritonAI platform, visit{' '}
          <a
            href="https://tritonai.ucsd.edu/"
            className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950 hover:decoration-blue-900"
          >
            tritonai.ucsd.edu
          </a>
          .
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Latest edition</div>
            <div className="text-2xl font-bold text-slate-900">{weekLabel}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Editions in archive</div>
            <div className="text-2xl font-bold text-slate-900">{editionCount}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Items included</div>
            <div className="text-2xl font-bold text-slate-900">{itemCount}</div>
          </div>
        </div>

        {editionCount > 0 ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 px-5 py-4 text-sm text-amber-900">
            Published through <span className="font-semibold">{publishedThrough}</span>. New editions
            publish every Monday morning.
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm text-slate-700">
            The first edition publishes Monday morning. Check back soon — or bookmark this page to
            see it automatically.
          </div>
        )}
      </section>

      {editionCount > 0 && (
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="space-y-12 md:space-y-14">
            {editionsNewestFirst.map((edition) => {
              const totalItems =
                edition.toolUpdatesCount + edition.tritonAiNewsCount + edition.upcomingTrainingsCount;
              return (
                <article
                  key={edition.isoDate}
                  className="rounded-3xl border border-slate-200 bg-white/95 shadow-sm overflow-hidden"
                >
                  <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 to-blue-900">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{edition.displayDate}</h2>
                        <p className="text-blue-100 text-sm mt-1">Source: {edition.sourceFile}</p>
                      </div>
                      <div className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/15">
                        {totalItems} item{totalItems === 1 ? '' : 's'}
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <div
                      className="prose prose-slate max-w-none
                        prose-p:text-[1.06rem] prose-p:leading-9 prose-p:my-5
                        prose-li:text-[1.06rem] prose-li:leading-9 prose-li:my-4
                        prose-ul:my-6 prose-ol:my-6
                        prose-strong:text-slate-900
                        prose-h2:text-slate-900
                        prose-h2:text-2xl md:prose-h2:text-3xl
                        prose-h2:font-bold
                        prose-h2:tracking-tight
                        prose-h2:mt-14 prose-h2:mb-6
                        prose-h2:pb-3
                        prose-h2:border-b-2 prose-h2:border-blue-900/20
                        prose-h3:text-sm prose-h3:uppercase prose-h3:tracking-[0.18em]
                        prose-h3:text-slate-500 prose-h3:font-semibold
                        prose-h3:mt-16 prose-h3:mb-5
                        prose-h3:pb-2 prose-h3:border-b prose-h3:border-slate-200
                        prose-hr:border-slate-200 prose-hr:my-10
                        [&_ul>li]:mb-8 [&_ol>li]:mb-8
                        [&_ul]:pl-0 [&_ul>li]:pl-0 [&_ul>li]:list-none
                        [&_ul>li]:border-l-2 [&_ul>li]:border-slate-100 [&_ul>li]:pl-5
                        [&_a]:font-semibold [&_a]:text-blue-800
                        [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-blue-600
                        [&_a]:transition-colors
                        hover:[&_a]:text-blue-950 hover:[&_a]:decoration-blue-900
                        [&_em]:text-slate-500 [&_em]:text-[0.95rem]"
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(edition.raw),
                      }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
