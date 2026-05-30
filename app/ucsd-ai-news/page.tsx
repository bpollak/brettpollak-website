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
    <main className="min-h-screen bg-paper" id="main-content">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="eyebrow mb-8">
          UC SAN DIEGO AI WEEKLY
        </div>
        <h1 className="display-title display-title--xl mb-6">
          UC San Diego AI Weekly Update
        </h1>
        <div className="divider-accent w-24 mb-8"></div>
        <p className="text-xl text-muted leading-relaxed max-w-3xl mb-8">
          A weekly roundup of what&rsquo;s new with UC San Diego&rsquo;s supported AI services. Each edition
          covers release notes from your supported tools, updates from TritonAI, and trainings
          coming up in the next two weeks.
        </p>

        <a
          href="https://tritonai.ucsd.edu/"
          className="group card-hard block max-w-3xl mb-12 p-5 sm:p-6 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
        >
          <div className="flex items-start gap-4">
            <div className="flex-none bg-paper-2 border-2 border-ink p-3 group-hover:bg-paper transition-colors">
              <svg
                className="w-6 h-6 text-ink"
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
              <div className="mono-label text-xs text-ink font-semibold mb-1.5">
                Official UCSD AI Platform
              </div>
              <p className="text-base text-ink leading-relaxed">
                This newsletter is curated for UCSD staff. For the full TritonAI platform &mdash;
                supported tools, trainings, documentation, and support &mdash; visit{' '}
                <span className="font-semibold text-ink underline decoration-2 underline-offset-4 decoration-accent transition-colors whitespace-nowrap">
                  tritonai.ucsd.edu
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://tritonai.ucsd.edu/tritongpt/release-notes/"
          className="group card-hard block max-w-3xl mb-6 p-5 sm:p-6 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
        >
          <div className="flex items-start gap-4">
            <div className="flex-none bg-paper-2 border-2 border-ink p-3 group-hover:bg-paper transition-colors">
              <svg
                className="w-6 h-6 text-ink"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="mono-label text-xs text-ink font-semibold mb-1.5">
                TritonGPT Release Notes
              </div>
              <p className="text-base text-ink leading-relaxed">
                See what&rsquo;s new in TritonGPT &mdash; feature releases, updates, and fixes &mdash; at{' '}
                <span className="font-semibold text-ink underline decoration-2 underline-offset-4 decoration-accent transition-colors whitespace-nowrap">
                  tritonai.ucsd.edu/tritongpt/release-notes
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </p>
            </div>
          </div>
        </a>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Latest edition</div>
            <div className="stat-number text-3xl md:text-4xl">{weekLabel}</div>
          </div>
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Editions in archive</div>
            <div className="stat-number text-3xl md:text-4xl">{editionCount}</div>
          </div>
          <div className="card-hard p-6">
            <div className="stat-label text-muted mb-3">Items included</div>
            <div className="stat-number text-3xl md:text-4xl">{itemCount}</div>
          </div>
        </div>

        {editionCount > 0 ? (
          <div className="border-2 border-ink bg-paper-2 px-5 py-4 text-sm text-ink">
            Published through <span className="font-semibold">{publishedThrough}</span>. New editions
            publish every Monday morning.
          </div>
        ) : (
          <div className="border-2 border-ink bg-paper-2 px-5 py-4 text-sm text-ink">
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
                  className="card-hard overflow-hidden"
                >
                  <div className="px-8 py-6 border-b-2 border-ink section-dark">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-paper">{edition.displayDate}</h2>
                        <p className="text-paper/70 text-sm mt-1 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">Source: {edition.sourceFile}</p>
                      </div>
                      <div className="inline-flex w-fit items-center bg-accent px-4 py-2 text-sm font-semibold text-ink border-2 border-paper">
                        {totalItems} item{totalItems === 1 ? '' : 's'}
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <div
                      className="max-w-none text-muted
                        [&_p]:text-[1.06rem] [&_p]:leading-9 [&_p]:my-5 [&_p]:text-muted
                        [&_ul]:my-6 [&_ul]:pl-0
                        [&_ul>li]:list-none [&_ul>li]:pl-5 [&_ul>li]:mb-8
                        [&_ul>li]:border-l-2 [&_ul>li]:border-accent
                        [&_ul>li]:text-[1.06rem] [&_ul>li]:leading-9 [&_ul>li]:text-muted
                        [&_strong]:text-ink [&_strong]:font-bold
                        [&_h2]:text-2xl md:[&_h2]:text-3xl
                        [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink
                        [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pb-3
                        [&_h2]:border-b-2 [&_h2]:border-ink
                        [&_h3]:text-sm [&_h3]:uppercase [&_h3]:tracking-[0.18em]
                        [&_h3]:text-muted [&_h3]:font-semibold
                        [&_h3]:mt-16 [&_h3]:mb-5 [&_h3]:pb-2
                        [&_h3]:border-b [&_h3]:border-ink
                        [&_hr]:border-ink [&_hr]:my-10
                        [&_a]:font-semibold [&_a]:text-ink
                        [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-accent
                        [&_a]:transition-colors
                        hover:[&_a]:text-accent hover:[&_a]:decoration-accent
                        [&_em]:text-muted [&_em]:text-[0.95rem]"
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
