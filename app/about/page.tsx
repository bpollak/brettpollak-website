import Image from 'next/image';
import type { Metadata } from "next";
import { SITE_URL, staticPageDates } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "About — Work in Higher Education and AI",
  // Updated description to reflect Brett's preferred professional title
  description: "Executive Director, Workplace Technology & Infrastructure Services at UC San Diego. Background and current work on AI and digital services in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Background and current work on AI and digital services in higher education.",
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
    description: "Background and current work on AI and digital services in higher education.",
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
    "Executive Director, Workplace Technology & Infrastructure Services at UC San Diego – background and current work on AI, digital services, and institutional change in higher education.",
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
            Work rooted in practice and the systems that make technology useful.
            I serve as Executive Director, Workplace Technology & Infrastructure Services at UC San Diego. My teams deliver hybrid-cloud infrastructure, data analytics, and digital services across the university.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Bio Section */}
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
            <h2 className="text-4xl font-medium leading-tight text-ink">Work Rooted in Practice</h2>
            <p className="text-xl text-body leading-relaxed">
              My career started in web and digital services. I learned early that new tools only matter when they fit the real work people are trying to do.
            </p>
            <p className="text-xl text-body leading-relaxed">
              At UC San Diego, I&apos;ve spent more than 18 years working across web, cloud, and workplace technology. Projects like TritonGPT reinforced that implementation is as much about trust and governance as it is about architecture.
            </p>
            <p className="text-xl text-body leading-relaxed">
              This site is a place to share what we&apos;ve learned so far and connect with others in higher education working through similar questions. I&apos;m especially interested in how other institutions are approaching adoption and practical use.
            </p>
          </div>
        </div>

        {/* Recent Work */}
        <div className="mb-20 editorial-panel p-8 md:p-12">
          <h2 className="text-4xl font-medium text-ink mb-12">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-ink mb-3">TritonGPT in Practice</h3>
              <p className="text-lg text-body leading-relaxed">Bringing institutional knowledge to students, faculty, and staff through the UC San Diego Assistant on the campus mobile app. Live features include course scheduling assistance and contract review for Procurement.</p>
            </div>
            <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-blue-800 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-ink mb-3">Campus Technology Work</h3>
              <p className="text-lg text-body leading-relaxed">Leading teams that deliver service desk, hybrid-cloud infrastructure, data analytics, web platforms, and enterprise collaboration services across the university</p>
            </div>
            <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-rose-700 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-ink mb-3">Recognition</h3>
              <p className="text-lg text-body leading-relaxed">Named to the Constellation Research Business Transformation 150 (2026-2027). Campus and industry outlets have covered the work on TritonAI and related initiatives.</p>
            </div>
            <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-indigo-600 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-ink mb-3">Cross-Institution Sharing</h3>
              <p className="text-lg text-body leading-relaxed">Peer institutions have adopted the TritonAI platform, including BearGPT at UC Berkeley, UC Agriculture and Natural Resources, Fairleigh Dickinson University, and UC Merced. Additional campuses are exploring the model.</p>
            </div>
            <div className="bg-paper-strong p-6 rounded-xl border border-line border-l-4 border-l-slate-700 shadow-sm hover:shadow-md transition-shadow md:col-span-2 card-3d">
              <h3 className="text-xl font-bold text-ink mb-3">Daily Context</h3>
              <p className="text-lg text-body leading-relaxed">Supporting hybrid-cloud infrastructure and digital services for a campus community of more than 73,000 people</p>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-ink mb-12">Topics I Spend Time On</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">AI Implementation</h3>
              <p className="text-lg text-body">Governance, adoption, and the practical questions that show up once a pilot becomes real work</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Data Governance</h3>
              <p className="text-lg text-body">Privacy, security, and how institutions make data usable without losing context</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Cloud Infrastructure</h3>
              <p className="text-lg text-body">Hybrid-cloud architecture and what it takes to support dependable institutional services</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Organizational Change</h3>
              <p className="text-lg text-body">Service design and learning how new tools actually fit campus workflows</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Digital Experience</h3>
              <p className="text-lg text-body">Web platforms, accessibility, and making institutional systems easier for people to use</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Data-Informed Decisions</h3>
              <p className="text-lg text-body">Analytics and helping teams ask better questions about the work in front of them</p>
            </div>
          </div>
        </div>

        {/* Professional Background */}
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
                    Working with teams across Data Warehouse, Analytics, Predictive Technologies, Email, Service Desk,
                    Field Support, Endpoint Management, Enterprise Content Management, Web Technologies, and Integrated
                    Collaboration Services. Part of the team behind the TritonAI program, which includes TritonGPT and other institutional AI efforts at UC San Diego.
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
                  <p className="text-sm text-muted font-medium mb-2">Aug 2010 – Oct 2024</p>
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
