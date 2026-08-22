import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { currentNow } from '@/lib/nowData';
import HomeHeroSystemMap from '@/components/home/HomeHeroSystemMap';

export const metadata: Metadata = {
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
    title: 'Brett Pollak | Technology Leadership in Higher Education',
    description:
      'Running the technology behind a campus of 73,000 people at UC San Diego. Infrastructure, data, service desk, collaboration, and AI.',
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
    title: 'Brett Pollak | Technology Leadership in Higher Education',
    description:
      'Running the technology behind a campus of 73,000 people at UC San Diego.',
    images: ['/brett-pollak-og-card.png'],
  },
};

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

const portfolioAreas = [
  { label: 'Hybrid cloud infrastructure', body: 'Servers, storage, and on-prem compute, including the AI platform at SDSC.' },
  { label: 'Data & analytics', body: 'Enterprise data warehouse, BI tools, and predictive analytics.' },
  { label: 'Service desk & field support', body: 'Tier 1–2 support for the entire campus community.' },
  { label: 'Endpoint management', body: 'Device lifecycle, enrollment, and security compliance.' },
  { label: 'Enterprise collaboration', body: 'M365, Google Workspace, Zoom, Qualtrics.' },
  { label: 'AI platforms', body: 'TritonGPT, the Developer API, and the agentic tools being built on top of them.' },
];

const lessons = [
  {
    tone: 'blue',
    label: 'Lesson 01',
    title: 'Start with a real problem.',
    body: 'Our contract reviewer cut NDA turnaround time by 91%. That worked because it solved a specific bottleneck, not because it was clever AI.',
  },
  {
    tone: 'gold',
    label: 'Lesson 02',
    title: 'Make the path easier than the workaround.',
    body: 'We gave campus developers governed API access with free credits and real guardrails. A staff member with no engineering background built a PDF accessibility tool. That\u2019s the flywheel working.',
  },
  {
    tone: 'green',
    label: 'Lesson 03',
    title: 'The platform has to travel.',
    body: 'BearGPT at Berkeley, UC ANR, UC Merced \u2014 same architecture, different campus. If it only works for us, it\u2019s a project. If it works for them, it\u2019s infrastructure.',
  },
];

const questions = [
  'The technical challenge is tapering. The human side is harder. How do you get past the early adopters and reach people who aren\u2019t volunteering?',
  'Students pushed back on AI they could see. Does responsible adoption mean keeping AI invisible in the solution layer?',
  'Lightweight governance worked for experimentation. What does the version look like when the stakes are real?',
];

const writingLinks = [
  {
    outlet: 'Forbes',
    topic: 'Faculty and AI',
    href: 'https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/',
  },
  {
    outlet: 'CIO.com',
    topic: 'Knowledge access',
    href: 'https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html',
  },
  {
    outlet: 'EdTech Magazine',
    topic: 'Campus implementation',
    href: 'https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool',
  },
  {
    outlet: 'EDUCAUSE Review',
    topic: 'Data and AI insights',
    href: 'https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego',
  },
];

const routes = [
  { href: '/tritongpt', label: 'TritonAI', note: 'Program overview, examples, metrics' },
  { href: '/ai-agent-architecture', label: 'Agent Architecture', note: 'How the platform is being wired' },
  { href: '/media', label: 'Media', note: 'Articles, interviews, speaking' },
  { href: '/ai-digest', label: 'AI Digest', note: 'Weekly headlines and signals' },
  { href: '/products', label: 'Products', note: 'Built tools and experiments' },
  { href: '/now', label: 'Now', note: 'Current focus areas' },
];

function HomePortfolioMark() {
  return (
    <svg
      aria-hidden="true"
      className="diagram h-24 w-32 shrink-0"
      viewBox="0 0 160 120"
      fill="none"
    >
      <path d="M20 100h120" stroke="#d9dfd3" strokeWidth="2" />
      <path d="M30 84v16M80 56v44M130 32v68" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="4 5" />
      <path
        className="flow-path"
        d="M30 84 80 56 130 32"
        stroke="#485248"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="84" r="7" fill="#1f5a8a" />
      <circle cx="80" cy="56" r="7" fill="#c97712" />
      <circle cx="130" cy="32" r="7" fill="#366c5a" />
    </svg>
  );
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Executive Director, Workplace Technology & Infrastructure Services",
    "description": "Technology leader at UC San Diego running infrastructure, data, service desk, collaboration, and AI platforms for a campus of 73,000.",
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
        "name": "Technology Executive",
        "occupationLocation": { "@type": "City", "name": "San Diego, CA" }
      },
      {
        "@type": "Occupation",
        "name": "Keynote Speaker",
        "description": "Keynote speaker on AI in higher education, agentic workflows, institutional AI governance, and vertical AI deployment.",
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
      "UC San Diego's institutional AI program, including TritonGPT, the TritonAI Developer API Program, and the Citizen Agentic Development Framework. Serves 73,000+ campus users.",
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
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-start">
            <div>
              <p className="rule-label mb-8">Technology leadership at UC San Diego</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] sm:leading-[1.02] lg:leading-[0.98] font-medium text-ink max-w-[20rem] sm:max-w-4xl">
                Running the technology behind a campus of 73,000 people.
              </h1>
              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-9 text-body">
                I lead Workplace Technology and Infrastructure Services at UC San
                Diego. My teams run the infrastructure, data platforms, service desk,
                collaboration tools, and endpoint management that keep the university
                working. Lately that means building the AI layer on top of all of it.
                {' '}
                <Link href="/tritongpt" className="font-semibold text-signal-blue underline underline-offset-4 decoration-[#1f5a8a]/30">
                  TritonAI
                </Link>
                {' '}started as a pilot and now serves the entire campus community.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/now"
                  className="inline-flex items-center justify-center rounded-sm bg-[#17201b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  What I work on
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center rounded-sm border border-[#9eb7aa] px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-[#1f5a8a] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  Media &amp; writing
                </Link>
              </div>
              <div className="mt-12 flex max-w-2xl flex-col gap-5 border border-line bg-white/75 p-5 shadow-[8px_8px_0_rgba(54,108,90,0.08)] sm:flex-row sm:items-center">
                <HomePortfolioMark />
                <div>
                  <p className="rule-label mb-3">Operating idea</p>
                  <p className="text-base leading-7 text-body">
                    Most new tools don&rsquo;t survive contact with real work. The job
                    is figuring out which ones do, and building the infrastructure to
                    support them when they do.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:self-stretch">
              <div className="home-portrait-panel">
                <Image
                  src="/brettpollak-headshot-lean.webp"
                  alt="Brett Pollak"
                  fill
                  className="z-0 object-cover object-[center_36%]"
                  placeholder="blur"
                  blurDataURL={heroBlurDataURL}
                  priority
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#17201b]/70 via-[#17201b]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 text-white">
                  <p className="rule-label mb-3 text-white/70">UC San Diego</p>
                  <p className="max-w-sm text-xl md:text-2xl leading-8 font-medium">
                    Seven teams. One campus. Technology that has to work.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] gap-5">
                <div className="home-support-card p-5" data-tone="gold">
                  <p className="rule-label mb-4">Current focus</p>
                  <p className="text-lg leading-7">
                    <span className="font-semibold">{currentNow.items[0].label}:</span> {currentNow.items[0].body}
                  </p>
                  <Link href="/now" className="mt-5 inline-block text-sm font-semibold text-[#f2b84b] underline underline-offset-4">
                    Updated {formatNowDate(currentNow.lastUpdated)}
                  </Link>
                </div>
                <div className="home-support-card home-support-card-dark p-5 text-white" data-tone="green">
                  <p className="rule-label mb-4 text-white/60">Team</p>
                  <p className="text-lg leading-7">
                    A lean group running infrastructure, data, service desk,
                    endpoint, collaboration, and AI for the entire campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="border-b border-line tint-gold">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="rule-label mb-4">The portfolio</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-ink">
                The systems a campus depends on.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-body">
                Seven teams covering the technology that 73,000 students, faculty,
                and staff rely on every day.
              </p>
              <div className="mt-8 space-y-4">
                {portfolioAreas.map((area, index) => (
                  <div key={area.label} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="font-mono text-xs text-signal-gold-ink pt-1">0{index + 1}</span>
                    <div>
                      <h3 className="font-semibold text-ink">{area.label}</h3>
                      <p className="text-sm leading-6 text-body">{area.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-line bg-white/70 p-4 shadow-[8px_8px_0_rgba(201,119,18,0.10)]">
              <HomeHeroSystemMap />
            </div>
          </div>
        </div>
      </section>

      {/* AI FOCUS + LESSONS */}
      <section className="border-b border-line tint-blue">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="rule-label mb-4">Current focus</p>
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-ink">
              Building AI that fits the institution.
            </h2>
            <p className="mt-6 text-lg leading-8 text-body">
              We started TritonGPT in 2024 as a pilot. Two years later it serves the
              entire campus, runs mostly on our own infrastructure, and a few peer
              institutions have adopted the model. The work now is moving from chat
              to agents &mdash; tools that actually do things for people.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {lessons.map((lesson) => (
              <article key={lesson.title} className="field-note p-6" data-tone={lesson.tone}>
                <p className="rule-label mb-5">{lesson.label}</p>
                <h3 className="text-2xl leading-8 font-medium text-ink">{lesson.title}</h3>
                <p className="mt-5 text-sm leading-7 text-body">{lesson.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING QUESTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
          <div>
            <p className="rule-label mb-4">Working questions</p>
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-ink">
              Things I don&rsquo;t have answers to yet.
            </h2>
          </div>
          <div>
            <ol className="space-y-6">
              {questions.map((question, index) => (
                <li key={question} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line pb-6">
                  <span className="font-mono text-sm text-signal-gold-ink pt-1">0{index + 1}</span>
                  <p className="text-lg leading-8 text-ink">{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="bg-[#17201b] text-white accent-strip" data-tone="gold">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
            <div>
              <p className="rule-label mb-4 text-white/55">Evidence and conversation</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium">
                A publication index, not a logo wall.
              </h2>
              <p className="mt-6 text-white/70 leading-7">
                The media page keeps the longer record. These are a few entry points.
              </p>
            </div>
            <div className="divide-y divide-white/12 border-y border-white/12">
              {writingLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr_auto] sm:items-center text-white/78 transition-colors hover:text-white"
                >
                  <span className="font-semibold text-white">{item.outlet}</span>
                  <span>{item.topic}</span>
                  <span className="font-mono text-xs text-[#f2b84b]">external</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SITE INDEX */}
      <section className="tint-green">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
            <div>
              <p className="rule-label mb-4">Site index</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-ink">
                Routes into the work.
              </h2>
            </div>
            <div className="border-y border-line">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="index-row grid gap-2 py-5 sm:grid-cols-[13rem_1fr_auto] sm:items-center"
                >
                  <span className="text-xl font-medium text-ink">{route.label}</span>
                  <span className="text-body">{route.note}</span>
                  <span className="font-mono text-xs text-signal-blue">open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
