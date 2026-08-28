import Image from 'next/image';
import type { Metadata } from "next";
import { SITE_URL, staticPageDates } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "About — Work in Higher Education and AI",
  description: "18 years working across web, cloud, workplace technology, infrastructure, and AI at UC San Diego.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "18 years working across web, cloud, workplace technology, infrastructure, and AI at UC San Diego.",
    url: "https://brettcpollak.com/about",
    images: [
      {
        url: "/brett-pollak-about.jpg",
        width: 850,
        height: 1280,
        alt: "Brett Pollak seated outdoors on the UC San Diego campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "18 years working across web, cloud, workplace technology, infrastructure, and AI at UC San Diego.",
    images: ["/brett-pollak-about.jpg"],
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Brett Pollak",
  description:
    "Executive Director, Workplace Technology & Infrastructure Services at UC San Diego. 18 years across web, cloud, and workplace technology.",
  dateModified: staticPageDates["/about"],
  mainEntity: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function About() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Background</p>
          <h1 className="page-title mb-6">About</h1>
          <p className="page-intro">
            I joined UC San Diego as campus web manager in 2008. Since then, my
            work has moved through web, cloud, workplace technology, infrastructure,
            and AI. This page covers that path.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Personal Narrative */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative">
            <div className="relative border border-line bg-paper-strong p-3 shadow-[12px_12px_0_rgba(201,119,18,0.16)]">
              <Image
                src="/brett-pollak-about.jpg"
                alt="Brett Pollak seated outdoors on the UC San Diego campus"
                width={850}
                height={1280}
                className="w-full"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl font-medium leading-tight text-ink">How I got here</h2>
            <p className="text-xl text-body leading-relaxed">
              My career started in web and digital services at SAIC, managing a
              team of 40. Early lesson: large organizations adopt technology
              through people and process, not the other way around.
            </p>
            <p className="text-xl text-body leading-relaxed">
              I came to UC San Diego in 2008 to run the campus web manager
              office. Over 18 years that turned into leading cloud and web
              services, then workplace technology, and now the full
              infrastructure portfolio. The continuing question has been whether a
              tool fits real work and what infrastructure it needs if people keep using it.
            </p>
            <p className="text-xl text-body leading-relaxed">
              The AI work started as a pilot in 2024. TritonGPT is now available
              across campus, runs mostly on university infrastructure, and has been
              adapted by peer institutions. My current questions are mostly about
              adoption, governance, and how agent workflows fit campus operations.
            </p>
          </div>
        </div>

        {/* Selected mentions */}
        <div className="mb-20">
          <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-rose-700 shadow-sm max-w-2xl">
            <h3 className="text-xl font-bold text-ink mb-3">Selected mentions</h3>
            <p className="text-lg text-body leading-relaxed">
              Included in the 2026&ndash;2027 Constellation Research Business
              Transformation 150. The work has also been covered by Forbes,
              CIO.com, EdTech Magazine, EDUCAUSE Review, and other publications.
            </p>
          </div>
        </div>

        {/* Career Journey */}
        <div className="mb-20 editorial-panel p-8 md:p-12">
          <h2 className="text-3xl font-bold text-ink mb-12">Career Journey</h2>
          <div className="space-y-12 max-w-4xl">
            {/* UC San Diego */}
            <div className="relative pl-8 border-l-2 border-line">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-signal-blue rounded-full ring-4 ring-white shadow-sm"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-2">
                <h3 className="text-2xl font-bold text-ink">University of California San Diego</h3>
                <span className="text-sm font-bold text-signal-blue bg-wash-blue px-3 py-1 rounded-full w-fit whitespace-nowrap">2008 – Present</span>
              </div>

              <div className="space-y-8">
                {/* Executive Director */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-ink text-signal-blue">Executive Director, Workplace Technology & Infrastructure Services</h4>
                  <p className="text-sm text-muted font-semibold mb-3">Oct 2024 – Present</p>
                  <p className="text-body leading-relaxed">
                    Seven teams covering hybrid cloud infrastructure, data and
                    analytics, service desk, endpoint management, enterprise
                    collaboration, and AI platforms. Service owner for the
                    TritonAI program, which includes TritonGPT, the Developer
                    API, and the agentic tools being built on top of them.
                  </p>
                </div>

                {/* Senior Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Senior Director, Workplace Technology Services</h4>
                  <p className="text-sm text-muted font-medium mb-2">Jan 2016 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-body space-y-2 leading-relaxed">
                    <li>Directed strategy for campus workplace services, emerging technologies, and business intelligence.</li>
                    <li>Oversaw Customer Engagement Group (Service Desk, Field Support) and strategic platforms including ServiceNow, Microsoft 365, and Google Apps.</li>
                  </ul>
                </div>

                {/* Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Director, Cloud and Web Services</h4>
                  <p className="text-sm text-muted font-medium mb-2">Aug 2010 – Jan 2016</p>
                  <ul className="list-disc list-outside ml-5 text-body space-y-2 leading-relaxed">
                    <li>Managed UC San Diego&apos;s top-level digital channels (ucsd.edu, Blink, TritonLink) and 160+ websites via the campus CMS.</li>
                    <li>Led cloud strategy (SaaS/PaaS/IaaS) and mobile presence, including the Mobile Web Framework (MWF) that 5 UC campuses adopted.</li>
                    <li>Managed a $1M+ budget and a cross-functional web team delivering responsive frameworks and campus-wide applications.</li>
                  </ul>
                </div>

                {/* Campus Web Manager */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Campus Web Manager</h4>
                  <p className="text-sm text-muted font-medium mb-2">Apr 2008 – Aug 2010</p>
                  <ul className="list-disc list-outside ml-5 text-body space-y-2 leading-relaxed">
                    <li>Led selection and operations of the campus-wide Content Management System (CMS), serving 150+ users.</li>
                    <li>Established ITIL-based practices and Agile methods for web development and system architecture.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SAIC */}
            <div className="relative pl-8 border-l-2 border-line">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-signal-gold rounded-full ring-4 ring-white shadow-sm"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-ink">SAIC (Science Applications International Corporation)</h3>
                <span className="text-sm font-bold text-signal-gold-ink bg-wash-gold px-3 py-1 rounded-full w-fit whitespace-nowrap">2001 – 2008</span>
              </div>

              <div className="text-xl font-medium text-signal-gold-ink mb-4">Corporate Web Team Manager</div>

              <p className="text-lg text-body leading-relaxed">
                Managed a department of 40 professionals including web developers, UI designers,
                programmers, project managers, and team leads. Early lesson: large organizations adopt
                technology through people and process.
              </p>
            </div>

            {/* Education */}
            <div className="relative pl-8 border-l-2 border-line">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-ink rounded-full ring-4 ring-white shadow-sm"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-ink">University of San Diego</h3>
                <span className="text-sm font-bold text-body bg-wash-green px-3 py-1 rounded-full w-fit whitespace-nowrap">1995</span>
              </div>

              <div className="text-xl font-medium text-body mb-4">Education</div>

              <p className="text-lg text-body leading-relaxed">
                <span className="font-semibold text-ink">BBA in Marketing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Talks and Writing */}
        <div className="border-t border-line pt-16">
          <h2 className="text-3xl font-bold text-ink mb-8">Talks and Writing</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-paper-strong p-6 rounded-xl border border-line shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-4">Conference Presentations</h3>
              <ul className="space-y-2 text-body">
                {/* Verified speaking engagements */}
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">ASU+GSV Summit 2026:</span> Shared AI at Scale — Developed by Universities for Universities</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">TechTalk Summits (2026):</span> From AI Pilots to Enterprise Platforms — Building Secure, Governed AI at Scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">NACUBO 2026:</span> The AI Investment Decision: Building, Buy, or Shared Services?</span>
                </li>
              </ul>
            </div>

            <div className="bg-paper-strong p-6 rounded-xl border border-line shadow-sm">
              <h3 className="text-lg font-bold text-ink mb-4">Published Work</h3>
              <ul className="space-y-2 text-body">
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-gold-ink mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EDUCAUSE Review — &ldquo;Ushering in a New Era of AI-Driven Data Insights at UC San Diego&rdquo; (Feb 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-gold-ink mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CIO.com — &ldquo;How poor data foundations can undermine AI success&rdquo; (Apr 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-gold-ink mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ithaka S+R, The Journal of Higher Education Web Professionals, Eduniverse, and others</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg aria-hidden="true" className="w-5 h-5 text-signal-gold-ink mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Featured in Forbes, CIO.com, EdTech Magazine, and 30+ other outlets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
