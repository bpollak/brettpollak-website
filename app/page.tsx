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

// Feature current TritonAI work; campus services mature along one path: Ask -> Embed -> Automate.
const featuredWork = [
  {
    id: 'tritongpt',
    step: '1',
    stepLabel: 'Ask',
    principle: 'Start in TritonGPT — chat, documents, approved models.',
    category: 'Campus assistants',
    tone: 'blue',
    status: 'Production',
    title: 'TritonGPT',
    summary: 'AI assistants for students, faculty, and staff to work with documents, ask campus questions, and get help with everyday tasks.',
    href: '/tritongpt',
    linkLabel: 'Explore TritonGPT',
  },
  {
    id: 'tritonai-api',
    step: '2',
    stepLabel: 'Embed',
    principle: 'Add approved AI to a system campus teams already use.',
    category: 'Developer access',
    tone: 'gold',
    status: 'Production',
    title: 'TritonAI API Gateway',
    summary: 'One API connects campus applications and workflows to approved UC-hosted and cloud models, with shared access and usage controls.',
    href: 'https://tritonai.ucsd.edu/developer-apis/index.html',
    linkLabel: 'Explore the API program',
  },
  {
    id: 'tritonai-harness',
    step: '3',
    stepLabel: 'Automate',
    principle: 'Automate what repeats, with a person reviewing the result.',
    category: 'Agent workspace',
    tone: 'green',
    status: 'Pilot',
    title: 'TritonAI Harness',
    summary: 'A desktop agent workspace for working with files, code, and connected campus services under human supervision.',
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
    latest: 'Version 1.0.2 now available in the App Store — Bing Crosby fall meet (Nov 6–29) ready and included in the summer pass, plus a new Pool money card.',
    image: '/horse-racing-companion-social.jpg',
    imageAlt: 'Horse Racing Companion app screen showing a Del Mar race pick.',
    href: '/products/horse-racing-companion',
    cta: 'Read the case study',
  },
  {
    title: 'Steel City Gameday',
    category: 'Game-day app',
    description: 'Turns football group texts into live game picks: private Crews, timed Flash Picks, and season-long receipts.',
    latest: 'Version 1.0 now live in the App Store — free to download for the 2026 season.',
    image: '/steel-city-gameday.png',
    imageAlt: 'Steel City Gameday with a private Crew room and live Flash Pick',
    href: '/products/steel-city-gameday',
    cta: 'Read the case study',
  },
];

// Input/output summary for the architecture module. Mirrors the categories in
// HeroPipelineDiagram (Sources → Knowledge → Actions) so the homepage graphic
// and the architecture page stay in agreement. Keep these high-level; the
// architecture page owns the detail.
const ARCH_INPUTS = [
  { label: 'Calendar & email', note: 'MS Graph' },
  { label: 'Meetings', note: 'transcripts' },
  { label: 'Documents', note: 'Drive sync' },
  { label: 'Campus sources', note: 'Confluence · RSS' },
];

const ARCH_OUTPUTS = [
  { label: 'Daily briefings', note: 'every morning' },
  { label: 'Meeting intelligence', note: 'commitments, follow-ups' },
  { label: 'Real-time answers', note: 'with full context' },
  { label: 'Published artifacts', note: 'newsletter, digest' },
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

// Parse the edition's raw markdown into per-article { headline, summary,
// higherEd } triples for the homepage module. The raw format (stable across
// editions): "• **headline** — summary ¶ 🔗 Graph: … ¶ 📌 Key takeaways: ¶ bullets".
// Summary = text between the em-dash and the 🔗 line (trimmed to one sentence);
// higherEd = the first takeaway bullet, which the digest pipeline writes
// through an institutional lens, so the higher-ed angle is authored content,
// not something this page invents.
function parseDigestArticles(raw: string): { headline: string; summary: string; higherEd: string }[] {
  return raw
    .split(/•\s+\*\*/)
    .slice(1)
    .map(block => {
      const headline = block.slice(0, block.indexOf('**')).trim();
      const afterHeadline = block.slice(block.indexOf('**') + 2);
      const graphIdx = afterHeadline.indexOf('🔗');
      const summaryText = afterHeadline
        .slice(0, graphIdx >= 0 ? graphIdx : undefined)
        .replace(/^\s*—\s*/, '')
        .trim();
      // one sentence: cut at the first ". " that follows at least 80 chars
      const sentenceEnd = summaryText.indexOf('. ', 80);
      const summary = (sentenceEnd >= 0 ? summaryText.slice(0, sentenceEnd + 1) : summaryText).trim();
      const takeawayIdx = afterHeadline.indexOf('Key takeaways:');
      const takeaways = takeawayIdx >= 0 ? afterHeadline.slice(takeawayIdx + 'Key takeaways:'.length) : '';
      const firstBullet = takeaways.split(/•\s+/).find(t => t.trim().length > 0);
      const higherEd = firstBullet ? firstBullet.replace(/\s+/g, ' ').trim() : '';
      return { headline, summary, higherEd };
    })
    .filter(a => a.headline.length > 0 && a.summary.length > 0);
}

const latestDigestArticles = parseDigestArticles(latestDigestEdition.raw).slice(0, 4);

function formatNowDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const heroBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAIAAAB8wupbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiklEQVQ4jR3P3U8aBwAA8PMDjs+DO+GO4/NAxK6CClVRQRTwkAMOuAOULwtqRSiKQjcVpVo/2jq0H+nWZZ3NmqUf2exLm21Ztuxl2VOTdcmW7GFblj3sfdne+rhkv//gBwwahCx78ea1463a9vtnvz757s1soRGd8u6sFtxOl806QPsD8Ug8GozGaGY6wgBuC2ozqUNUtHh5597TVy9fvckt1IqZ2K2tVZokHSNj2Vg8N5NmQtFEhE0xLNDXpWQob4QKJvKNxt2vvnn171yutFHKn9RXEoFANBBcms3OpzORYDQRiWVjcWAj5405kIiPJJ2juXjgxdmLfCqxUb60szIf9fniNF3KXbw4nQ5T4ViYybAx4NZKeDvdP2q1dOvwcszw9KA/x1rnkpnFmahzZMztmijns9lEMjRFs3Q0xcSAG4vW2yXzEm2JTTrK6d5He9ZiepKa9GdoX3B8ZNx+oZTLzEQTQV8wHmazbByop9F3i/Jne97bq+TmvOxWFV3Ouj2uybXw8OvjhWeVQJEhQwGGpuhklJ1lY0BjTrwxIzndJGvJgcNluFmVlrMuv4d8XPS/eb7/2/2VRnyUmqJDU4F4gJplGODOmu5KUroUQEJ2vJ43nTaMpYyTJv0PL5E/NRf/ebL1xc6cx0P5PV7G654JUsBeXv92UpF0S5aZ7qPL58+ajrU5VypMnyRHftzL/P3p7mFpdtxFUm4P63UngwFgO2tam0bWU3iBNqxO61fTwNaSq7qYP8hPvT4p/vmwVmL9tv6Bob7ecaslPDEGXFvo3Vk0VrPDgYnhiWF7xGU4qExvluZZv/dueuSPj7Yr2dSAbWh40O6w9vlG7UDaPzRDeTN0MBelarPMvVr669P99aX8hR7z1bnkg+tHvZ2Gc1pN//me0YFB2uMB1tNTlZiveXn6+WHph4+v/vWy+fkHDUyOW8zDzd0jj91uUMhNKmWfkeg1GpyDg8CXJ0u/nNV/f1n/+bOV7z/JfPshXWAdECTfrO7XChUt1mFQKggMtXUZTSq829AJPG6Q968M3a931lfaGmXpzSoRniDM52y7G0cXLFaVDDZpVDpMbjYQZr1Wr1YDjw5M7+1q71xVnR5riin9QrLHadMkI9nypSsoAusUqJnQKTuQcxqVmdDqlUpgvSZbrSDVClxYEJE+rmu8TYXy0kwmRNISPkjgWA+hhUVCAkPPazU6BQbM5zi72+I7R/BeQ1DfAOOMUCqEvGMkodbIIJFeqehS4UIeKJNAb2nValQGPLgHH18XbK2D5RJnaxOcdAt5HKjbaEHEIhyBO3GFXoHyQI5EKNArMAUiBZaL3NJie7XCfacK7jb4XUYuh4MQKgISgApYalCgOlQOcjliAV+LyVEpBNw+lDT3oaN90fF1UWEe5LS3wLCmS2uQQaIOSKzHMUwKtbW2ivh8vEOKiIUARbU7nG191lZLP6BUcttbeQK+UIOiGCzFOxAMliAikeD/g4gPCnkggGAtMrylA2uV4y2QBOS083hcjhqTQUKhSoboULlEKBAL+BCfx21v43M5/wEMT0GoKgOSAQAAAABJRU5ErkJggg==";

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
              <Image src="/brettpollak-portrait-golden-hour.webp" alt="Brett Pollak on the UC San Diego campus" fill
                className="object-cover object-[center_36%]" placeholder="blur" blurDataURL={heroBlurDataURL}
                priority sizes="(min-width: 1024px) 480px, (min-width: 640px) 600px, 100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* TRITONAI & CAMPUS WORK */}
      <section id="selected-work" className="border-b border-line bg-paper-strong">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="rule-label mb-2">Featured work</p>
              <h2 className="text-3xl font-medium md:text-4xl">TritonAI at UC San Diego.</h2>
            </div>
            <a
              href="https://tritonai.ucsd.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-signal-blue underline underline-offset-4"
            >
              tritonai.ucsd.edu ↗
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 text-xs text-body">
            <p className="max-w-2xl text-sm leading-6">
              My work in AI centers on helping build and support TritonAI with colleagues across campus. Campus services mature along one path:
            </p>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
              <span className="font-bold text-signal-blue">1. Ask</span>
              <span className="text-line">→</span>
              <span className="font-bold text-signal-gold-ink">2. Embed</span>
              <span className="text-line">→</span>
              <span className="font-bold text-signal-green">3. Automate</span>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {featuredWork.map(study => (
              <article key={study.id} className="field-note flex flex-col p-6" data-tone={study.tone}>
                <div className="flex items-center justify-between gap-2 border-b border-line/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                        study.tone === 'blue'
                          ? 'bg-signal-blue'
                          : study.tone === 'gold'
                          ? 'bg-signal-gold'
                          : 'bg-signal-green'
                      }`}
                    >
                      {study.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink">
                      {study.stepLabel}
                    </span>
                  </div>
                  <span className="rounded-full border border-line bg-white px-2.5 py-0.5 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-body">
                    {study.status}
                  </span>
                </div>

                <div className="mt-3.5">
                  <p className="rule-label text-[0.68rem]">{study.category}</p>
                  <h3 className="mt-1 text-2xl font-medium leading-7 text-ink">{study.title}</h3>
                </div>

                <p
                  className={`mt-2.5 text-xs font-semibold leading-5 ${
                    study.tone === 'blue'
                      ? 'text-signal-blue'
                      : study.tone === 'gold'
                      ? 'text-signal-gold-ink'
                      : 'text-signal-green'
                  }`}
                >
                  {study.principle}
                </p>

                <p className="mt-3 text-sm leading-6 text-body">{study.summary}</p>

                {study.href.startsWith('http') ? (
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-signal-blue underline underline-offset-4"
                  >
                    {study.linkLabel}
                    <span aria-hidden="true" className="font-mono text-xs">↗</span>
                    <span className="sr-only">: {study.title}</span>
                  </a>
                ) : (
                  <Link
                    href={study.href}
                    className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-signal-blue underline underline-offset-4"
                  >
                    {study.linkLabel}
                    <span aria-hidden="true" className="font-mono text-xs">↗</span>
                    <span className="sr-only">: {study.title}</span>
                  </Link>
                )}
              </article>
            ))}
          </div>

          {/* Integrated Campus Updates Dispatch */}
          <div className="mt-12 pt-8 border-t border-line">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-body">
                <span className="home-update-dot inline-block h-2 w-2 rounded-full" data-tone="blue" />
                Recent Campus Dispatches
              </h3>
              <Link href="/now" className="text-xs font-semibold text-signal-blue underline underline-offset-4">Full current focus on /now →</Link>
            </div>
            <div className="border-y border-line">
              {updatesByArea('work').slice(0, 3).map(update => (
                <a key={update.text} href={update.href} target="_blank" rel="noopener noreferrer"
                  className="home-update-row index-row group grid gap-1 py-4 sm:grid-cols-[auto_7.5rem_1fr_auto] sm:items-center sm:gap-4">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-line bg-white/70">
                    {iconForUrl(update.href) ? (
                      <Image src={iconForUrl(update.href) as string} alt="" width={20} height={20} className="h-5 w-5" unoptimized />
                    ) : (
                      <span className="font-mono text-xs font-bold text-body">UC</span>
                    )}
                  </span>
                  <span className="font-mono text-xs text-body">{update.date}</span>
                  <span className="min-w-0">
                    <span className="block text-base font-medium leading-6 text-ink group-hover:text-signal-blue">{update.text}</span>
                    {update.note && <span className="mt-0.5 block text-xs leading-5 text-body">{update.note}</span>}
                  </span>
                  <span className="font-mono text-xs text-signal-blue opacity-0 transition-opacity group-hover:opacity-100">open ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="border-b border-line tint-gold" aria-labelledby="featured-apps-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="rule-label mb-3">Independent software</p>
              <h2 id="featured-apps-heading" className="text-3xl font-medium md:text-4xl">Apps I&apos;ve built.</h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-signal-blue underline underline-offset-4">View all 21 projects</Link>
          </div>
          <p className="mt-3 max-w-2xl text-base leading-7 text-body">
            Nights and weekends I build independent mobile apps, campus prototypes, and automated personal agent systems.
          </p>
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

          {/* Portfolio Breadth Directory */}
          <div className="mt-10 rounded-lg border border-line bg-white/70 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <p className="rule-label mb-1">Portfolio breadth</p>
                <h3 className="text-lg font-semibold text-ink">More projects across mobile, enterprise, and agents</h3>
              </div>
              <Link href="/products" className="button-secondary text-xs px-4 py-2">
                All 21 projects &amp; walkthroughs →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5 text-sm">
              <div className="border-l-2 border-signal-blue pl-3.5">
                <p className="font-semibold text-ink">Mobile &amp; Consumer</p>
                <p className="text-xs text-body mt-1 leading-5">Resolution Companion, Horse Racing Companion, Steel City Gameday, Rock Hill Property Radar</p>
              </div>
              <div className="border-l-2 border-signal-gold pl-3.5">
                <p className="font-semibold text-ink">Campus &amp; Enterprise</p>
                <p className="text-xs text-body mt-1 leading-5">Numbers Game HQ, Student Experience, Passports Visitor Management, TritonVerify, ReviewDraft, Process Discovery</p>
              </div>
              <div className="border-l-2 border-signal-green pl-3.5">
                <p className="font-semibold text-ink">Family &amp; Discovery Agents</p>
                <p className="text-xs text-body mt-1 leading-5">Scholarship Agent, Cason Recruiting Profile &amp; CRM, School Brief, Henry Personal AI OS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ARCHITECTURE — the system behind the work */}
      <section className="border-b border-line bg-paper-strong" aria-labelledby="ai-arch-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="rule-label mb-2">The system</p>
              <h2 id="ai-arch-heading" className="text-3xl font-medium md:text-4xl text-ink">
                The agent behind the output.
              </h2>
              <p className="mt-3 text-base leading-7 text-body">
                The daily briefings, research synthesis, and newsletters on this site are powered
                by an agent I built and operate myself: 86 automated jobs, an 860-node knowledge graph,
                and a 1,044-page wiki, running on-premises on open-weight models.
              </p>
            </div>
            <Link
              href="/ai-agent-architecture"
              className="text-sm font-semibold text-signal-blue underline underline-offset-4"
            >
              How the architecture works →
            </Link>
          </div>

          {/* 3-Stage Pipeline Card */}
          <div className="rounded-xl border border-line bg-paper p-6 shadow-sm">
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              
              {/* Stage 1: Inputs */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal-green text-[10px] font-bold text-white">1</span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal-green">What goes in</p>
                  <span className="ml-auto text-[11px] text-muted font-mono">Sources</span>
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  {ARCH_INPUTS.map(item => (
                    <a
                      key={item.label}
                      href="/ai-agent-architecture#context"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs transition-all hover:border-signal-blue hover:shadow-xs"
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink group-hover:text-signal-blue">{item.label}</span>
                        <span className="text-[11px] text-body">{item.note}</span>
                      </span>
                      <span aria-hidden="true" className="font-mono text-[11px] text-signal-green opacity-70 group-hover:opacity-100">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Stage 2: 3-Tier Context Loading */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal-gold text-[10px] font-bold text-white">2</span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal-gold-ink">Context loading</p>
                  <span className="ml-auto text-[11px] text-muted font-mono">3 Layers</span>
                </div>
                <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                  <a
                    href="/ai-agent-architecture#layers"
                    className="group block rounded-lg bg-signal-blue px-3.5 py-2.5 text-white shadow-xs transition-transform hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider">Layer 1 · Always Loaded</span>
                      <span className="font-mono text-[10px] text-white/75">~50 KB</span>
                    </div>
                    <p className="text-xs font-medium text-white/90 mt-0.5">Identity, memory, patterns</p>
                  </a>
                  <a
                    href="/ai-agent-architecture#layers"
                    className="group block rounded-lg border-2 border-signal-gold bg-[color-mix(in_srgb,var(--wash-gold)_55%,white)] px-3.5 py-2.5 transition-transform hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-signal-gold-ink">Layer 2 · On Trigger</span>
                      <span className="font-mono text-[10px] text-signal-gold-ink">1,044 pages</span>
                    </div>
                    <p className="text-xs font-medium text-ink mt-0.5">Curated wiki, pulled when mentioned</p>
                  </a>
                  <a
                    href="/ai-agent-architecture#layers"
                    className="group block rounded-lg border-2 border-dashed border-signal-coral bg-[color-mix(in_srgb,var(--wash-coral)_40%,white)] px-3.5 py-2.5 transition-transform hover:scale-[1.01]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-signal-coral-ink">Layer 3 · On Request</span>
                      <span className="font-mono text-[10px] text-signal-coral-ink">860 nodes</span>
                    </div>
                    <p className="text-xs font-medium text-ink mt-0.5">Dated memory, transcripts &amp; graph</p>
                  </a>
                </div>
              </div>

              {/* Stage 3: Outputs */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-line">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal-blue text-[10px] font-bold text-white">3</span>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-signal-blue">What comes out</p>
                  <span className="ml-auto text-[11px] text-muted font-mono">Outputs</span>
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  {ARCH_OUTPUTS.map(item => (
                    <a
                      key={item.label}
                      href="/ai-agent-architecture#outcomes"
                      className="group flex items-center justify-between gap-2 rounded-lg border border-line bg-white px-3 py-2 text-xs transition-all hover:border-signal-blue hover:shadow-xs"
                    >
                      <span className="min-w-0">
                        <span className="block font-semibold text-ink group-hover:text-signal-blue">{item.label}</span>
                        <span className="text-[11px] text-body">{item.note}</span>
                      </span>
                      <span aria-hidden="true" className="font-mono text-[11px] text-signal-blue opacity-70 group-hover:opacity-100">↗</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom telemetry strip */}
            <div className="mt-6 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4 text-xs text-body">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
                <span><strong className="text-ink font-mono font-semibold">86</strong> automated jobs</span>
                <span><strong className="text-ink font-mono font-semibold">860</strong> graph nodes</span>
                <span><strong className="text-ink font-mono font-semibold">1,044</strong> wiki pages</span>
                <span><strong className="text-ink font-semibold">On-prem</strong> open-weight inference</span>
              </div>
              <span className="text-muted">Context-grounded personal AI setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI DIGEST — daily briefing + sign-up */}
      <section className="border-b border-line tint-green" aria-labelledby="ai-digest-heading">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
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
                Browse past editions<span className="sr-only"> of the AI Digest</span> →
              </Link>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-body">
                <span className="home-update-dot inline-block h-2 w-2 rounded-full" data-tone="green" />
                Latest Edition — {latestDigestEdition.displayDate}
              </h3>
              <div className="border-y border-line divide-y divide-line">
                {/* Lead article with full context */}
                {latestDigestArticles[0] && (
                  <div className="py-5">
                    <Link href={`/ai-digest/${latestDigestEdition.isoDate}`} className="group block">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-signal-gold-ink">Lead Story</span>
                      <h4 className="mt-1 text-xl font-medium leading-7 text-ink group-hover:text-signal-blue">
                        {latestDigestArticles[0].headline}
                      </h4>
                      <p className="mt-1.5 text-sm leading-6 text-body">{latestDigestArticles[0].summary}</p>
                      {latestDigestArticles[0].higherEd && (
                        <p className="mt-2.5 border-l-2 border-signal-gold pl-3 text-sm font-medium leading-6 text-ink">
                          {latestDigestArticles[0].higherEd}
                        </p>
                      )}
                    </Link>
                  </div>
                )}
                {/* Subsequent articles in brief */}
                {latestDigestArticles.slice(1, 3).map(article => (
                  <Link key={article.headline} href={`/ai-digest/${latestDigestEdition.isoDate}`}
                    className="home-update-row index-row group grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-4">
                    <span className="min-w-0">
                      <span className="block text-base font-medium leading-6 text-ink group-hover:text-signal-blue">{article.headline}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-body">{article.summary}</span>
                    </span>
                    <span className="font-mono text-xs text-signal-blue opacity-0 transition-opacity group-hover:opacity-100">read ↗</span>
                  </Link>
                ))}
              </div>
              <Link href={`/ai-digest/${latestDigestEdition.isoDate}`} className="mt-5 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Read {latestDigestEdition.displayDate}&rsquo;s full digest →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING & PRESS */}
      <section className="bg-[#17201b] text-white accent-strip" data-tone="gold">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-16">
            <div>
              <p className="rule-label mb-4 text-white/55">Speaking &amp; Keynotes</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-medium">
                Talks on AI in higher education.
              </h2>
              <p className="mt-5 text-white/70 text-base leading-7">
                I speak to institutional leaders, IT conferences, and campus communities on
                moving AI from experimental pilots to production infrastructure, governed agent workflows,
                and citizen developer models.
              </p>
              <div className="mt-6 space-y-3">
                <div className="border-l-2 border-[#c97712] pl-3 py-0.5">
                  <p className="text-sm font-semibold text-white">Institutional AI: From Pilot to Service</p>
                  <p className="text-xs text-white/60">Architecture, governance, and on-premises hosting at university scale</p>
                </div>
                <div className="border-l-2 border-[#366c5a] pl-3 py-0.5">
                  <p className="text-sm font-semibold text-white">Agentic AI Workflows in Higher Ed</p>
                  <p className="text-xs text-white/60">Supervised agents, administrative bottlenecks, and guardrails</p>
                </div>
                <div className="border-l-2 border-[#1f5a8a] pl-3 py-0.5">
                  <p className="text-sm font-semibold text-white">The Citizen Developer Program</p>
                  <p className="text-xs text-white/60">Empowering campus staff with governed APIs and compute credits</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link href="/speaking" className="inline-flex items-center justify-center rounded-sm bg-[#c97712] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d98520]">
                  Speaking topics &amp; booking →
                </Link>
                <span className="text-xs text-white/50">Recent: EDUCAUSE, ASU+GSV, UC AI Council</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="rule-label text-white/55">Writing &amp; Press</p>
                <Link href="/media" className="text-xs font-semibold text-[#f2b84b] underline underline-offset-4">All 40+ appearances →</Link>
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
                      className="grid gap-2 py-4 transition-colors hover:bg-white/[0.04] sm:grid-cols-[auto_7.5rem_1fr_auto] sm:items-center sm:gap-4 sm:px-2"
                    >
                      <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/[0.06]">
                        {icon ? (
                          <Image src={icon} alt="" width={20} height={20} className="h-5 w-5" unoptimized />
                        ) : (
                          <span className="font-mono text-xs font-bold text-white/60">{item.publication.slice(0, 2).toUpperCase()}</span>
                        )}
                      </span>
                      <span className="font-mono text-xs text-[#f2b84b]">{item.date}</span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white">{item.publication}</span>
                        <span className="mt-0.5 block text-xs leading-5 text-white/72">{item.title}</span>
                      </span>
                      <span className="font-mono text-xs text-white/45">{item.category}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
