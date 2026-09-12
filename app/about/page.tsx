import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { SITE_URL, staticPageDates } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "About — Work in Higher Education and AI",
  description: "Eighteen years at UC San Diego, from campus web manager to the executive director running workplace technology, infrastructure, and the campus AI program.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Eighteen years at UC San Diego, from campus web manager to the executive director running workplace technology, infrastructure, and the campus AI program.",
    url: "https://brettcpollak.com/about",
    images: [
      {
        url: "/about-og.png",
        width: 1200,
        height: 630,
        alt: "About Brett Pollak — technology leadership at UC San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Eighteen years at UC San Diego, from campus web manager to the executive director running workplace technology, infrastructure, and the campus AI program.",
    images: ["/about-og.png"],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Brett Pollak",
  description:
    "Executive Director, Workplace Technology & Infrastructure Services at UC San Diego. Service owner for the TritonAI program. Eighteen years across web, cloud, workplace technology, and AI.",
  dateModified: staticPageDates["/about"],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

const eras = [
  {
    years: "2001 – 2008",
    org: "SAIC",
    role: "Corporate web team manager",
    body: "I started in web and digital services, managing a team of 40 developers, designers, and project managers. The early lesson that still runs my work: large organizations adopt technology through people and process, not the other way around.",
    tone: "gold" as const,
  },
  {
    years: "2008 – 2016",
    org: "UC San Diego",
    role: "Campus web manager, then Director of Cloud and Web Services",
    body: "I came to UC San Diego to run the campus web manager office, and it grew into leading cloud and web services. Those years covered ucsd.edu, Blink, TritonLink, 160+ sites on the campus CMS, the move to SaaS, and a mobile framework five UC campuses adopted.",
    tone: "blue" as const,
  },
  {
    years: "2016 – 2024",
    org: "UC San Diego",
    role: "Senior Director, Workplace Technology Services",
    body: "Eight years running the services everyone touches: service desk and field support, ServiceNow, Microsoft 365, Google Workspace, endpoint management, and business intelligence. The continuing question was always whether a tool fits real work, and what it takes to keep it running.",
    tone: "green" as const,
  },
  {
    years: "2024 – now",
    org: "UC San Diego",
    role: "Executive Director, Workplace Technology & Infrastructure Services",
    body: "Now the full infrastructure portfolio, plus the AI program that grew out of a late-2023 pilot. TritonGPT runs campus-wide, mostly on university infrastructure, and peer institutions have adapted it. My current questions are adoption, governance, and how agent workflows fit campus operations.",
    tone: "coral" as const,
  },
];

const toneDot: Record<string, string> = {
  blue: "bg-signal-blue",
  gold: "bg-signal-gold",
  green: "bg-signal-green",
  coral: "bg-signal-coral",
};

const atAGlance = [
  "Executive Director, Workplace Technology & Infrastructure Services",
  "Service owner, TritonAI program",
  "Seven teams, from service desk to AI platforms",
];

export default function About() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      {/* HERO — the person and the arc in one glance */}
      <section className="page-hero paper-grid border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <p className="rule-label mb-6">About</p>
              <h1 className="page-title mb-6">
                Eighteen years at UC San Diego. From the campus web to campus AI.
              </h1>
              <p className="page-intro mb-8">
                I joined as campus web manager in 2008. Today I lead workplace
                technology and infrastructure services, and the campus AI
                program built on top of them. This page is the path between
                those two jobs.
              </p>
              <ul className="space-y-2">
                {atAGlance.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm leading-6 text-body">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-signal-gold flex-shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="relative border border-line bg-paper-strong p-3 shadow-[12px_12px_0_rgba(201,119,18,0.16)]">
                <Image
                  src="/brett-pollak-about-seated.jpg"
                  alt="Brett Pollak seated outdoors on the UC San Diego campus"
                  width={850}
                  height={1280}
                  className="w-full"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PATH — four eras, one story */}
      <section className="border-b border-line bg-paper-strong" aria-labelledby="path-heading">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="rule-label mb-3">The path</p>
          <h2 id="path-heading" className="text-3xl font-medium text-ink mb-12">
            Four eras, one throughline.
          </h2>
          <div className="max-w-4xl">
            {eras.map((era, i) => (
              <div
                key={era.years}
                className={`relative pl-8 border-l-2 border-line ${i === 0 ? '' : 'mt-12'}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute top-1 left-[-9px] h-4 w-4 rounded-full ring-4 ring-paper-strong shadow-sm ${toneDot[era.tone]}`}
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h3 className="text-2xl font-bold text-ink">{era.org}</h3>
                  <span className="font-mono text-sm text-muted">{era.years}</span>
                </div>
                <p className="text-sm font-semibold text-signal-blue mb-3">{era.role}</p>
                <p className="text-lg leading-8 text-body">{era.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION — the record, condensed */}
      <section className="border-b border-line" aria-labelledby="record-heading">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="rule-label mb-3">The record</p>
          <h2 id="record-heading" className="text-3xl font-medium text-ink mb-10">
            Recognition, writing, and talks.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-line bg-paper p-6">
              <h3 className="text-lg font-bold text-ink mb-4">Recognition</h3>
              <p className="text-base leading-7 text-body">
                Named to the 2026–2027 Constellation Research Business
                Transformation 150. Coverage in Forbes, CIO.com, EdTech
                Magazine, EDUCAUSE Review, and 30+ other outlets.
              </p>
              <Link href="/media" className="mt-4 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Full media index
              </Link>
            </div>
            <div className="border border-line bg-paper p-6">
              <h3 className="text-lg font-bold text-ink mb-4">Writing</h3>
              <p className="text-base leading-7 text-body">
                EDUCAUSE Review on AI-driven data insights at UC San Diego
                (2025), CIO.com on data foundations and AI success (2026),
                plus Ithaka S+R, the Journal of Higher Education Web
                Professionals, and others.
              </p>
            </div>
            <div className="border border-line bg-paper p-6">
              <h3 className="text-lg font-bold text-ink mb-4">Talks</h3>
              <p className="text-base leading-7 text-body">
                ASU+GSV Summit 2026 on shared AI at scale, TechTalk Summits on
                governed enterprise AI, NACUBO 2026 on the build, buy, or
                shared-services decision.
              </p>
              <Link href="/speaking" className="mt-4 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
                Speaking page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND THE DAY JOB */}
      <section className="border-b border-line tint-gold" aria-labelledby="beyond-heading">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
          <p className="rule-label mb-3">Beyond the day job</p>
          <h2 id="beyond-heading" className="text-3xl font-medium text-ink mb-4">
            Pittsburgh native. San Diego transplant. Ships his own apps.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-body">
            Nights and weekends I build independent iOS apps. Three are in the
            App Store, including Resolution Companion and a Steelers gameday
            app my family&apos;s group chat runs on every Sunday. The same
            instinct as the day job, smaller blast radius: build it, ship it,
            keep it honest.
          </p>
          <Link href="/products" className="mt-5 inline-block text-sm font-semibold text-signal-blue underline underline-offset-4">
            The project case studies
          </Link>
        </div>
      </section>

      {/* CLOSER — dark band */}
      <section className="bg-[#17201b] text-white accent-strip">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p className="rule-label mb-3 text-signal-gold">Bring this to your campus</p>
          <h2 className="text-3xl font-medium mb-4">
            I speak on campus AI, agentic workflows, and what actually ships.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/70 mb-8">
            Keynotes, conference sessions, and working sessions with leadership
            teams. Or write about anything else.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/speaking" className="inline-flex items-center border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors">
              Speaking
            </Link>
            <Link href="/contact" className="inline-flex items-center bg-white text-[#17201b] px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
