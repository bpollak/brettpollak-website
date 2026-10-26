import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { currentNow } from '@/lib/nowData';
import { updatesByArea } from '@/lib/homeUpdatesData';
import { mediaItems } from '@/lib/mediaData';
import mediaIconManifest from '@/lib/mediaIconManifest.json';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import { publicationInitials } from '@/lib/publicationInitials';
import { ucsdAiNewsletterData } from '@/lib/ucsdAiNewsletterData';

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
        alt: 'Brett Pollak, Executive Director, IT Services at UC San Diego',
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
    tone: 'green',
    status: 'Supported',
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
    latest: 'Version 1.6.0 now available in the App Store — set a reminder for each habit, at the time that suits it.',
    image: '/resolution-companion-social.webp',
    imageAlt: 'Resolution Companion: a real app screen showing a reading habit and its two-minute alternative, with the app name and tagline.',
    href: '/products/resolution-companion',
    appStoreUrl: 'https://apps.apple.com/us/app/resolution-companion-ai-coach/id6757996708',
  },
  {
    title: 'Horse Racing Companion',
    category: 'Race-day analysis',
    description: 'An iOS app for independent Del Mar race-day analysis, with live odds, plain-language picks, and a record of results.',
    latest: 'Version 1.0.2 now available in the App Store — Bing Crosby fall meet (Nov 6–29) ready and included in the summer pass, plus a new Pool money card.',
    image: '/horse-racing-companion-social.jpg',
    imageAlt: 'Horse Racing Companion app screen showing a Del Mar race pick.',
    href: '/products/horse-racing-companion',
    appStoreUrl: 'https://apps.apple.com/us/app/horse-racing-companion/id6802113749',
  },
  {
    title: 'Steel City Gameday',
    category: 'Game-day app',
    description: 'Turns football group texts into live game picks: private Crews, timed Flash Picks, and season-long receipts.',
    latest: 'Version 1.0.8 now live in the App Store — a public Crew for fan chat and picks, weekly matchup cards, and rotating pregame questions; free to download for the 2026 season.',
    image: '/steel-city-gameday.png',
    imageAlt: 'Steel City Gameday with a private Crew room and live Flash Pick',
    href: '/products/steel-city-gameday',
    appStoreUrl: 'https://apps.apple.com/us/app/steel-city-gameday/id6806732803',
  },
];

// Split an app's `latest` line ("Version 1.6.0 now available in the App Store —
// what changed") into a short version tag and the change note, so the card can
// show the version as metadata instead of a full release-note callout. Lines
// that don't match the pattern fall back to showing the whole text as the note.
function splitReleaseNote(latest: string): { version: string | null; note: string } {
  const version = latest.match(/Version\s+([\d.]+)/i)?.[1] ?? null;
  const dash = latest.indexOf('—');
  const note = dash >= 0 ? latest.slice(dash + 1).trim() : latest;
  return { version, note: note.charAt(0).toUpperCase() + note.slice(1) };
}

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

// Newest UCSD AI Weekly edition for the homepage module — same honest-staleness
// pattern as the digest module: merged+sorted copy, shows the last successful
// edition with its date visible.
const latestNewsletterEdition = [...ucsdAiNewsletterData.editions, ...(ucsdAiNewsletterData.archive ?? [])]
  .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1))[0];

// Parse the newsletter's raw markdown bullets into { headline, summary, url }
// triples. Bullet format (stable): "- **[Headline](url)** — summary text."
function parseNewsletterItems(raw: string): { headline: string; summary: string; url: string }[] {
  const items: { headline: string; summary: string; url: string }[] = [];
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*-\s+\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\s+—\s+(.*)$/);
    if (m) {
      const summaryText = m[3].trim();
      const sentenceEnd = summaryText.indexOf('. ', 80);
      items.push({
        headline: m[1].trim(),
        summary: (sentenceEnd >= 0 ? summaryText.slice(0, sentenceEnd + 1) : summaryText).trim(),
        url: m[2].trim(),
      });
    }
  }
  return items;
}

const latestNewsletterItems = parseNewsletterItems(latestNewsletterEdition.raw).slice(0, 3);

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
    "jobTitle": "Executive Director, IT Services",
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
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-6 py-10 md:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-signal-blue sm:text-[13px]">
              Executive Director, IT Services · UC San Diego
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-normal leading-[1.06] text-ink sm:text-5xl xl:text-6xl">
              Technology leadership at UC San Diego, and the apps I build outside it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body md:text-xl md:leading-9">
              By day I&rsquo;m the Executive Director of IT Services at UC San
              Diego, where my teams support infrastructure, data, campus services,
              and AI. Nights and weekends I design and ship my own products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="button-primary">See the work</Link>
              <Link href="/ai-digest" className="button-secondary bg-paper-strong">Read the digest</Link>
            </div>
            <p className="mt-8 text-sm text-body">
              <Link href="/speaking" className="hover:text-ink">
                Recent talks: <span className="font-semibold text-ink">EDUCAUSE · ASU+GSV · UC AI Council</span>
              </Link>
            </p>
          </div>
          {/* On phones the portrait leads (shorter crop) so the first screen isn't all text. */}
          <figure className="order-first lg:order-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-wash-blue lg:aspect-[4/5]">
              <Image src="/brettpollak-portrait-golden-hour.webp" alt="Brett Pollak on the UC San Diego campus" fill
                className="object-cover object-[center_30%]" placeholder="blur" blurDataURL={heroBlurDataURL}
                priority sizes="(min-width: 1024px) 440px, (min-width: 640px) 600px, 100vw" />
            </div>
            <figcaption className="mt-3 text-sm text-muted">
              Current focus · updated {formatNowDate(currentNow.lastUpdated)} ·{' '}
              <Link href="/now" className="font-semibold text-signal-blue underline underline-offset-4">see /now</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* TRITONAI & CAMPUS WORK */}
      <section id="selected-work" className="border-b border-line bg-paper-strong" aria-labelledby="tritonai-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-[4.5rem]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
            <h2 id="tritonai-heading" className="text-3xl font-normal md:text-[2.5rem]">TritonAI at UC San Diego</h2>
            <a href="https://tritonai.ucsd.edu" target="_blank" rel="noopener noreferrer"
              className="text-[15px] font-semibold text-signal-blue underline-offset-4 hover:underline">
              tritonai.ucsd.edu ↗
            </a>
          </div>
          <p className="mt-3 max-w-2xl text-base leading-7 text-body">
            My work in AI centers on helping build and support TritonAI with colleagues across campus.
            New tools have to fit the way people actually work, with support that lasts beyond the pilot.
          </p>

          <ol className="mt-8 grid border-t-2 border-ink md:grid-cols-3">
            {featuredWork.map((study, index) => {
              const external = study.href.startsWith('http');
              return (
                <li key={study.id}
                  className="flex flex-col border-b border-line py-7 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-signal-blue">
                    {String(index + 1).padStart(2, '0')} · {study.stepLabel}
                    <span className="ml-2 font-normal normal-case tracking-normal text-muted">{study.status}</span>
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.75rem] font-medium leading-tight">{study.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-body">{study.summary}</p>
                  {external ? (
                    <a href={study.href} target="_blank" rel="noopener noreferrer"
                      className="mt-auto inline-flex pt-5 text-sm font-semibold text-signal-blue underline underline-offset-4">
                      {study.linkLabel} ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={study.href} className="mt-auto inline-flex pt-5 text-sm font-semibold text-signal-blue underline underline-offset-4">
                      {study.linkLabel} →
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Campus dispatches, from lib/homeUpdatesData */}
          <div className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink pb-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">Recent campus dispatches</h3>
              <Link href="/now" className="text-sm font-semibold text-signal-blue underline underline-offset-4">Full current focus →</Link>
            </div>
            <ul className="divide-y divide-line border-b border-line">
              {updatesByArea('work').slice(0, 3).map(update => (
                <li key={update.text}>
                  <a href={update.href} target="_blank" rel="noopener noreferrer"
                    className="group grid gap-1 py-4 sm:grid-cols-[auto_7.5rem_1fr_auto] sm:items-center sm:gap-4">
                    <span aria-hidden="true" className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-line bg-white sm:flex">
                      {iconForUrl(update.href) ? (
                        <Image src={iconForUrl(update.href) as string} alt="" width={20} height={20} className="h-5 w-5" unoptimized />
                      ) : (
                        <span className="font-mono text-xs font-bold text-body">UC</span>
                      )}
                    </span>
                    <span className="font-mono text-xs text-muted">{update.date}</span>
                    <span className="min-w-0">
                      <span className="block text-base font-medium leading-6 text-ink group-hover:text-signal-blue">{update.text}</span>
                      {update.note && <span className="mt-0.5 block text-sm leading-6 text-body">{update.note}</span>}
                    </span>
                    <span aria-hidden="true" className="hidden font-mono text-xs text-signal-blue sm:inline">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="border-b border-line bg-paper" aria-labelledby="featured-apps-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-[4.5rem]">
          <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
            <h2 id="featured-apps-heading" className="text-3xl font-normal md:text-[2.5rem]">Apps I&apos;ve built</h2>
            <Link href="/products" className="text-[15px] font-semibold text-signal-blue underline-offset-4 hover:underline">All 22 projects →</Link>
          </div>
          <p className="mt-3 max-w-2xl text-base leading-7 text-body">
            Nights and weekends I build independent mobile apps, campus prototypes, and automated personal agent systems.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredApps.map(app => {
              const release = splitReleaseNote(app.latest);
              return (
                <article key={app.title} className="flex flex-col overflow-hidden rounded-md border border-line bg-paper-strong">
                  <div className="relative aspect-[1200/630] border-b border-line bg-white">
                    <Image src={app.image} alt={app.imageAlt} fill
                      className="object-cover" sizes="(min-width: 1280px) 395px, (min-width: 768px) 33vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[13px] font-semibold text-signal-blue">
                      {app.category}
                      {release.version && <> · <span className="font-mono text-xs">v{release.version}</span></>}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.625rem] font-medium leading-tight">{app.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">{app.description}</p>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
                      <span className="font-semibold text-body">New:</span> {release.note}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
                      <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                        Get it on the App Store<span className="sr-only">: {app.title} (opens in a new tab)</span>
                      </a>
                      <Link href={app.href} className="text-sm font-semibold text-signal-blue underline underline-offset-4">
                        Case study<span className="sr-only">: {app.title}</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WRITING — the two newsletters, side by side, headlines only */}
      <section className="border-b border-line bg-paper-strong" aria-labelledby="writing-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:py-[4.5rem] lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <div>
            <h2 id="writing-heading" className="text-3xl font-normal md:text-[2.5rem]">What I publish</h2>
            <p className="mt-4 text-base leading-7 text-body">
              Two newsletters: a daily AI briefing for people who run technology in higher education,
              and a Monday update on UC San Diego&rsquo;s own AI tools and programs.
            </p>
            <p className="mt-4 text-sm leading-6 text-body">
              Both are produced with an agent I built and run on-premises.{' '}
              <Link href="/ai-agent-architecture" className="font-semibold text-signal-blue underline underline-offset-4">How it works →</Link>
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-ink pb-2.5">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                  <Link href="/ai-digest" className="hover:text-signal-blue">The AI Digest</Link>
                </h3>
                <span className="text-xs text-muted">Daily · <span className="font-mono">{latestDigestEdition.isoDate}</span></span>
              </div>
              <ul className="divide-y divide-line border-b border-line">
                {latestDigestArticles.slice(0, 3).map(article => (
                  <li key={article.headline}>
                    <Link href={`/ai-digest/${latestDigestEdition.isoDate}`} className="group block py-3.5">
                      <span className="block text-base font-medium leading-6 text-ink group-hover:text-signal-blue">{article.headline}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href={`/ai-digest/${latestDigestEdition.isoDate}`} className="text-signal-blue underline underline-offset-4">
                  Read the full edition<span className="sr-only"> of the AI Digest</span> →
                </Link>
                <Link href="/ai-digest" className="text-signal-blue underline underline-offset-4">
                  Past editions<span className="sr-only"> of the AI Digest</span>
                </Link>
              </div>
              <div className="mt-8">
                <SubscribeForm headingLevel="h4" compact />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-ink pb-2.5">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                  <Link href="/ucsd-ai-news" className="hover:text-signal-blue">UCSD AI Weekly</Link>
                </h3>
                <span className="text-xs text-muted">Mondays · <span className="font-mono">{latestNewsletterEdition.isoDate}</span></span>
              </div>
              <ul className="divide-y divide-line border-b border-line">
                {latestNewsletterItems.map(item => (
                  <li key={item.headline}>
                    <a href={item.url} className="group block py-3.5">
                      <span className="block text-base font-medium leading-6 text-ink group-hover:text-signal-blue">{item.headline}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href={`/ucsd-ai-news/${latestNewsletterEdition.isoDate}`} className="text-signal-blue underline underline-offset-4">
                  Read the full edition<span className="sr-only"> of UC San Diego AI Weekly</span> →
                </Link>
                <Link href="/ucsd-ai-news" className="text-signal-blue underline underline-offset-4">
                  Past editions<span className="sr-only"> of UC San Diego AI Weekly</span>
                </Link>
              </div>
              <p className="mt-8 text-sm leading-6 text-body">
                Also published on{' '}
                <a href="https://tritonai.ucsd.edu" target="_blank" rel="noopener noreferrer" className="font-semibold text-signal-blue underline underline-offset-4">tritonai.ucsd.edu ↗</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING & PRESS */}
      <section className="bg-ink text-white" aria-labelledby="speaking-heading">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          <div>
            <h2 id="speaking-heading" className="text-3xl font-normal leading-tight sm:text-4xl md:text-[2.75rem]">
              Talks on AI in higher education
            </h2>
            <p className="mt-5 text-base leading-7 text-on-dark">
              I speak to institutional leaders, IT conferences, and campus communities on
              moving AI from experimental pilots to production infrastructure, governed agent workflows,
              and citizen developer models.
            </p>
            <ol className="mt-7 border-t border-white/15">
              {[
                { title: 'Institutional AI: From Pilot to Service', note: 'Architecture, governance, and on-premises hosting at university scale' },
                { title: 'Agentic AI Workflows in Higher Ed', note: 'Supervised agents, administrative bottlenecks, and guardrails' },
                { title: 'The Citizen Developer Program', note: 'Empowering campus staff with governed APIs and compute credits' },
              ].map((talk, index) => (
                <li key={talk.title} className="grid grid-cols-[2.25rem_1fr] border-b border-white/15 py-3.5">
                  <span className="font-mono text-xs text-on-dark-muted">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{talk.title}</span>
                    <span className="block text-sm leading-6 text-on-dark-muted">{talk.note}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Link href="/speaking" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-wash-blue">
              Speaking topics &amp; booking →
            </Link>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="rule-label text-on-dark-muted">Writing &amp; Press</p>
              <Link href="/media" className="text-sm font-semibold text-white underline underline-offset-4">All {mediaItems.length} appearances →</Link>
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
                        <span className="font-mono text-xs font-bold text-white/60">{publicationInitials(item.publication)}</span>
                      )}
                    </span>
                    <span className="font-mono text-xs text-on-dark-muted">{item.date}</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{item.publication}</span>
                      <span className="mt-0.5 block text-sm leading-6 text-on-dark">{item.title}</span>
                    </span>
                    <span className="font-mono text-xs text-on-dark-muted">{item.category}</span>
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
