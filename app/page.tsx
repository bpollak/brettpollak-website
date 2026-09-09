import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { currentNow } from '@/lib/nowData';
import { updatesByArea } from '@/lib/homeUpdatesData';
import { mediaItems } from '@/lib/mediaData';
import mediaIconManifest from '@/lib/mediaIconManifest.json';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';

// Favicon tile for a row's destination, using the same manifest the media
// page uses (public/media-icons/, fetched by scripts/fetch-media-icons.mjs).
// Falls back to null so callers can render a monogram instead.
function iconForUrl(url: string): string | null {
  if (!url.startsWith('http')) return null;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    const file = (mediaIconManifest as Record<string, string>)[host];
    return file ? `/media-icons/${file}` : null;
  } catch {
    return null;
  }
}

export const metadata: Metadata = {
  title: {
    absolute: 'Technology leadership at UC San Diego, and the apps I build outside it',
  },
  alternates: {
    canonical: 'https://brettcpollak.com/',
    // Repeated here because this page's `alternates` replaces the root
    // layout's in Next's metadata merge — without it the home page loses
    // the site-wide feed autodiscovery links.
    types: {
      'application/rss+xml': [
        { url: '/media/feed.xml', title: 'Media & Appearances — Brett Pollak' },
        { url: '/ai-digest/feed.xml', title: 'AI Digest — Brett Pollak' },
        { url: '/ucsd-ai-news/feed.xml', title: 'UC San Diego AI Weekly Update' },
      ],
    },
  },
  openGraph: {
    title: 'Technology leadership at UC San Diego, and the apps I build outside it',
    description:
      'Technology leadership at UC San Diego, and the apps I build outside it — from institutional AI to independent iPhone apps.',
    url: 'https://brettcpollak.com/',
    siteName: 'Brett Pollak',
    type: 'profile',
    images: [
      {
        url: '/brett-pollak-og-card.png',
        width: 1200,
        height: 630,
        alt: 'Brett Pollak, Executive Director, Workplace Technology and Infrastructure Services at UC San Diego',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology leadership at UC San Diego, and the apps I build outside it',
    description:
      'Technology leadership at UC San Diego, and the apps I build outside it — from institutional AI to independent iPhone apps.',
    images: ['/brett-pollak-og-card.png'],
  },
};

// Feature current TritonAI work; historical case studies remain in the archive.
const featuredWork = [
  {
    id: 'tritongpt',
    category: 'Campus assistants',
    tone: 'blue',
    title: 'TritonGPT',
    summary: 'AI assistants for students, faculty, and staff to work with documents, ask campus questions, and get help with everyday tasks.',
    href: '/tritongpt',
    linkLabel: 'Explore the TritonAI program',
  },
  {
    id: 'tritonai-api',
    category: 'Developer access',
    tone: 'gold',
    title: 'TritonAI API Gateway',
    summary: 'One API connects campus applications and workflows to approved UC-hosted and cloud models, with shared access and usage controls.',
    href: 'https://tritonai.ucsd.edu/developer-apis/index.html',
    linkLabel: 'Explore the API program',
  },
  {
    id: 'tritonai-harness',
    category: 'Agent workspace',
    tone: 'green',
    title: 'TritonAI Harness',
    summary: 'A desktop agent workspace for working with files, code, and connected campus services under human supervision. Currently in pilot.',
    href: 'https://tritonai.ucsd.edu/developer-apis/harness.html',
    linkLabel: 'Explore TritonAI Harness',
  },
];

const featuredApps = [
  {
    title: 'Resolution Companion',
    category: 'Mobile app',
    description: 'An iOS app that turns a personal goal into short daily activities, with AI coaching and progress tracking.',
    latest: 'Version 1.4.0 now available in the App Store — new coach check-ins and progress view.',
    image: '/resolution-companion-social.webp',
    imageAlt: 'Resolution Companion: a real app screen showing a reading habit and its two-minute alternative, with the app name and tagline.',
    href: '/products/resolution-companion',
    cta: 'Read the case study',
  },
  {
    title: 'Horse Racing Companion',
    category: 'Race-day analysis',
    description: 'An iOS app for independent Del Mar race-day analysis, with live odds, plain-language picks, and a record of results.',
    latest: 'Summer meet complete: 47 of 105 final picks matched (44.8%), every pick saved before post. Fall Bing Crosby meet included in the pass.',
    image: '/horse-racing-companion-social.jpg',
    imageAlt: 'Horse Racing Companion app screen showing a Del Mar race pick.',
    href: '/products/horse-racing-companion',
    cta: 'Read the case study',
  },
  {
    title: 'Steel City Gameday',
    category: 'Game-day app',
    description: 'Turns football group texts into live game picks: private Crews, timed Flash Picks, and season-long receipts.',
    latest: 'Submitted for App Store review — built for the fall 2026 football season.',
    image: '/steel-city-gameday.png',
    imageAlt: 'Steel City Gameday with a private Crew room and live Flash Pick',
    href: '/products/steel-city-gameday',
    cta: 'Read the case study',
  },
];

const recentMedia = [...mediaItems]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 4);

// Newest digest edition for the homepage module. Both `days` and `archive`
// carry editions; sort a merged copy by date so the module is robust to
// whichever array the daily sync cron appended to. If a run ever fails, the
// module shows the last successful edition with its date visible — honest
// staleness, never a fabricated "today".
const latestDigestEdition = [...weeklyAiDigestData.days, ...(weeklyAiDigestData.archive ?? [])]
  .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1))[0];

function formatNowDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const heroBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAIAAABSnclZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3ElEQVR4nAHRAS7+AJm26pm37Jq47py68J278Z688Z+98p++86O966a84wCftNmhueSjvu6lwfGnw/KoxPOoxvaoxvWnvuSmttMAo6qyqbfNrsLhsMTlsMPiscTis8npr8Hapa+8m5ybAJ+ZgairprC4w7O4x7W0urKwqbO1qaank5uUepGBXQCUhU+cknCmn46qnZaznYytlm6pmmOUh0mMej+GbjMAf28vhHVBiXtXjXhhnHtfl3ZAlHovf20hhG4uh3A6AHFeK3NgMW5cOG1XQXtfS31jQIdvO4FsM492QY91SACDbEOAaUFnVDZURDFXRTtdSjxzX0B9aTuZg0ebhkkAhnBSfmlPX04+RjkxRDg2SDs4Xk89cmI1koM7log2AHJgR2xbRlNFNzswKT4xLlA9NmJNOGhYK3JqJnVxHwBDOi1BOC45LyotJSIyJyRINSxTPS1SQCRJQhlGRhAAMSohMiolMCcmLCMhMCUhSTUrTDYoQjEhLyoTKSsLACsmGC4nHy8mJDMoJDUpIzwvJDImGicfEyAeCiIkCAAhHBIoIBkqIR00KSM8LyU/MiQvJRggGw0fHwgpKgcAFhAJHxcPIxoUMCUdPS4iQTEhMCQWIBoLISAILS0ILv2zdpLJpOwAAAAASUVORK5CYII=";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Executive Director, Workplace Technology & Infrastructure Services",
    "description": "Executive Director at UC San Diego responsible for teams working across infrastructure, data, service desk, collaboration, endpoint management, and AI platforms.",
    "url": "https://brettcpollak.com/",
    "image": "https://brettcpollak.com/brett-pollak-headshot-sit-center.png",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of San Diego"
    },
    "knowsAbout": [
      "AI in Higher Education",
      "Institutional AI Deployment",
      "Vertical AI",
      "Agentic AI Workflows",
      "AI Governance",
      "Data Governance",
      "Citizen Developer Programs",
      "AI Infrastructure",
      "Digital Transformation",
      "TritonGPT",
      "TritonAI",
      "LiteLLM",
      "AI Agent Orchestration",
      "Higher Education Technology",
      "Technology Leadership",
      "AI Keynote Speaking",
      "AI Interviews and Publications"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Higher Education Technology Executive",
        "occupationLocation": { "@type": "City", "name": "San Diego, CA" }
      },
      {
        "@type": "Occupation",
        "name": "Conference Speaker",
        "description": "Speaks about AI in higher education, agentic workflows, institutional AI governance, and campus AI implementation.",
        "occupationLocation": { "@type": "Country", "name": "United States" }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/brettpollak/",
      "https://github.com/bpollak",
      "https://members.educause.edu/brett-pollak",
      "https://asugsvsummit.com/speakers/brett-pollak",
      "https://www.slideshare.net/bpollak"
    ]
  };

  const tritonAISchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TritonAI",
    "alternateName": "TritonAI Program at UC San Diego",
    "url": "https://brettcpollak.com/tritongpt",
    "description":
      "UC San Diego's institutional AI program, including TritonGPT, developer APIs, and tools for supervised agent workflows. Available to students, faculty, and staff.",
    "foundingDate": "2024",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego",
      "url": "https://ucsd.edu/"
    }
  };

  return (
    <main className="min-h-screen bg-paper text-ink" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tritonAISchema) }}
      />

      {/* HERO */}
      <section className="paper-grid border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="rule-label mb-5">Day job, side projects</p>
              <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] text-ink sm:text-5xl xl:text-6xl">
                Technology leadership at UC San Diego, and the apps I build outside it.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-body md:text-xl">
                By day I&rsquo;m the Executive Director of Workplace Technology and
                Infrastructure Services, where my teams support infrastructure,
                data, campus services, and AI. Nights and weekends I design and
                ship my own products.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#selected-work" className="button-primary">Explore TritonAI</a>
                <Link href="/products" className="button-secondary">My apps</Link>
              </div>
              <p className="mt-6 max-w-xl text-base leading-7 text-body">
                New tools have to fit the way people actually work, with support that lasts beyond the pilot.
              </p>
              <Link href="/now" className="mt-5 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Current focus · Updated {formatNowDate(currentNow.lastUpdated)}
              </Link>
            </div>
            <div className="home-portrait-panel">
              <Image src="/brettpollak-headshot-lean.webp" alt="Brett Pollak on the UC San Diego campus" fill
                className="object-cover object-[center_36%]" placeholder="blur" blurDataURL={heroBlurDataURL}
                priority sizes="(min-width: 1024px) 480px, (min-width: 640px) 600px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-b border-line bg-paper-strong">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <p className="rule-label mb-3">Featured work</p>
          <h2 className="text-3xl font-medium md:text-4xl">TritonAI at UC San Diego.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-body">My work in AI centers on helping build and support TritonAI with colleagues across campus.</p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {featuredWork.map(study => <article key={study.id} className="field-note flex flex-col p-6" data-tone={study.tone}>
              <p className="rule-label mb-3">{study.category}</p>
              <h3 className="text-2xl leading-7 font-medium">{study.title}</h3>
              <p className="mt-4 text-base leading-7 text-body">{study.summary}</p>
              <Link href={study.href} className="mt-auto inline-block pt-5 text-sm font-semibold text-signal-blue underline underline-offset-4">{study.linkLabel}<span className="sr-only">: {study.title}</span></Link>
            </article>)}
          </div>
        </div>
      </section>

      {/* WORKING ON NOW — three horizontal modules */}
      <section className="border-b border-line tint-gold" aria-labelledby="working-on-now-heading">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="rule-label mb-3">Working on now</p>
              <h2 id="working-on-now-heading" className="text-3xl font-medium md:text-4xl">What UC San Diego is working on.</h2>
            </div>
            <Link href="/now" className="text-sm font-semibold text-signal-blue underline underline-offset-4">Full current focus</Link>
          </div>

          <div className="mt-10 space-y-12">
            {/* UCSD work module */}
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-body">
                <span className="home-update-dot inline-block h-2 w-2 rounded-full" data-tone="blue" />
                UC San Diego
              </h3>
              <div className="border-y border-line">
                {updatesByArea('work').map(update => (
                  <a key={update.text} href={update.href} target="_blank" rel="noopener noreferrer"
                    className="home-update-row index-row group grid gap-1 py-5 sm:grid-cols-[auto_7.5rem_1fr_auto] sm:items-center sm:gap-4">
                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line bg-white/70">
                      {iconForUrl(update.href) ? (
                        <Image src={iconForUrl(update.href) as string} alt="" width={24} height={24} className="h-6 w-6" unoptimized />
                      ) : (
                        <span className="font-mono text-xs font-bold text-body">UC</span>
                      )}
                    </span>
                    <span className="font-mono text-xs text-body">{update.date}</span>
                    <span className="min-w-0">
                      <span className="block text-lg font-medium leading-7 text-ink group-hover:text-signal-blue">{update.text}</span>
                      {update.note && <span className="mt-0.5 block text-sm leading-6 text-body">{update.note}</span>}
                    </span>
                    <span className="font-mono text-xs text-signal-blue opacity-0 transition-opacity group-hover:opacity-100">open ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-strong" aria-labelledby="featured-apps-heading">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="rule-label mb-3">Projects</p>
              <h2 id="featured-apps-heading" className="text-3xl font-medium md:text-4xl">Apps I&apos;ve built.</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-signal-blue underline underline-offset-4">View all projects</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredApps.map(app => (
              <article key={app.title} className="flex flex-col border border-line bg-paper">
                <div className="relative aspect-[1200/630] border-b border-line bg-white/70">
                  <Image src={app.image} alt={app.imageAlt} fill
                    className="object-cover" sizes="(min-width: 1280px) 395px, (min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="rule-label mb-3">{app.category}</p>
                  <h3 className="text-2xl font-medium leading-8">{app.title}</h3>
                  <p className="mt-4 text-base leading-7 text-body">{app.description}</p>
                  <p className="mt-3 border-l-2 border-signal-gold pl-3 text-sm font-medium leading-6 text-ink">{app.latest}</p>
                  <Link href={app.href}
                    className="mt-auto inline-block pt-6 text-sm font-semibold text-signal-blue underline underline-offset-4">
                    {app.cta}<span className="sr-only">: {app.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI DIGEST — daily briefing + sign-up */}
      <section className="border-b border-line tint-green" aria-labelledby="ai-digest-heading">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="rule-label mb-3">Daily briefing</p>
              <h2 id="ai-digest-heading" className="text-3xl font-medium md:text-4xl">The AI Digest.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-body">
                A daily AI briefing for people who run technology in higher education — the
                launches, enterprise moves, and campus policy shifts that matter, with key
                takeaways and source links.
              </p>
              <div className="mt-8">
                <SubscribeForm />
              </div>
              <Link href="/ai-digest" className="mt-6 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Browse past editions<span className="sr-only"> of the AI Digest</span>
              </Link>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-body">
                <span className="home-update-dot inline-block h-2 w-2 rounded-full" data-tone="green" />
                Latest — {latestDigestEdition.displayDate}
              </h3>
              <div className="border-y border-line">
                {latestDigestEdition.headlines.slice(0, 4).map(headline => (
                  <Link key={headline} href={`/ai-digest/${latestDigestEdition.isoDate}`}
                    className="home-update-row index-row group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4">
                    <span className="min-w-0">
                      <span className="block text-lg font-medium leading-7 text-ink group-hover:text-signal-blue">{headline}</span>
                    </span>
                    <span className="font-mono text-xs text-signal-blue opacity-0 transition-opacity group-hover:opacity-100">open ↗</span>
                  </Link>
                ))}
              </div>
              <Link href={`/ai-digest/${latestDigestEdition.isoDate}`} className="mt-5 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Read {latestDigestEdition.displayDate}&rsquo;s full digest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="bg-[#17201b] text-white accent-strip" data-tone="gold">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
            <div>
              <p className="rule-label mb-4 text-white/55">Writing &amp; press</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium">
                Recent writing and speaking.
              </h2>
              <p className="mt-6 text-white/70 leading-7">
                The newest articles, interviews, and talks. The full list is on the media page.
              </p>
              <Link href="/media" className="mt-6 inline-block text-sm font-semibold text-[#f2b84b] underline underline-offset-4">All media and appearances</Link>
            </div>
            <div className="divide-y divide-white/12 border-y border-white/12">
              {recentMedia.map((item) => {
                const icon = iconForUrl(item.url);
                return (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-2 py-5 transition-colors hover:bg-white/[0.04] sm:grid-cols-[auto_8rem_1fr_auto] sm:items-center sm:gap-4 sm:px-3"
                >
                  <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/[0.06]">
                    {icon ? (
                      <Image src={icon} alt="" width={24} height={24} className="h-6 w-6" unoptimized />
                    ) : (
                      <span className="font-mono text-xs font-bold text-white/60">{item.publication.slice(0, 2).toUpperCase()}</span>
                    )}
                  </span>
                  <span className="font-mono text-xs text-[#f2b84b]">{item.date}</span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-white">{item.publication}</span>
                    <span className="mt-0.5 block text-sm leading-6 text-white/72">{item.title}</span>
                  </span>
                  <span className="font-mono text-xs text-white/45">{item.category}</span>
                </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
