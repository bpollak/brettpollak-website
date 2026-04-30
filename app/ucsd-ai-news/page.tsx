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
    canonical: 'https://brettcpollak.com/ucsd-ai-news',
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
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
          A weekly roundup of what&rsquo;s new with UC San Diego&rsquo;s supported AI services. Each edition
          covers release notes from your supported tools, updates from TritonAI, and trainings
          coming up in the next two weeks.
        </p>

        <a
          href="https://tritonai.ucsd.edu/"
          className="group block max-w-3xl mb-12 rounded-2xl border border-blue-200/70 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/40 p-5 sm:p-6 shadow-sm hover:border-blue-300 hover:shadow-md hover:from-blue-50 hover:to-blue-50/60 transition-all focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:ring-offset-2"
        >
          <div className="flex items-start gap-4">
            <div className="flex-none rounded-xl bg-white/80 border border-blue-200/60 p-3 shadow-sm group-hover:border-blue-300 transition-colors">
              <svg
                className="w-6 h-6 text-blue-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-1.5">
                Official UCSD AI Platform
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                This newsletter is curated for UCSD staff. For the full TritonAI platform &mdash;
                supported tools, trainings, documentation, and support &mdash; visit{' '}
                <span className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 group-hover:text-blue-950 group-hover:decoration-blue-900 transition-colors whitespace-nowrap">
                  tritonai.ucsd.edu
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </p>
            </div>
          </div>
        </a>

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
        <section id="ai-updates" className="max-w-6xl mx-auto px-6 pb-24">
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
                      className="max-w-none text-slate-700
                        [&_p]:text-[1.06rem] [&_p]:leading-9 [&_p]:my-5 [&_p]:text-slate-700
                        [&_ul]:my-6 [&_ul]:pl-0
                        [&_ul>li]:list-none [&_ul>li]:pl-5 [&_ul>li]:mb-8
                        [&_ul>li]:border-l-2 [&_ul>li]:border-slate-100
                        [&_ul>li]:text-[1.06rem] [&_ul>li]:leading-9 [&_ul>li]:text-slate-700
                        [&_strong]:text-slate-900 [&_strong]:font-bold
                        [&_h2]:text-2xl md:[&_h2]:text-3xl
                        [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
                        [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pb-3
                        [&_h2]:border-b-2 [&_h2]:border-blue-900/20
                        [&_h3]:text-sm [&_h3]:uppercase [&_h3]:tracking-[0.18em]
                        [&_h3]:text-slate-500 [&_h3]:font-semibold
                        [&_h3]:mt-16 [&_h3]:mb-5 [&_h3]:pb-2
                        [&_h3]:border-b [&_h3]:border-slate-200
                        [&_hr]:border-slate-200 [&_hr]:my-10
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
