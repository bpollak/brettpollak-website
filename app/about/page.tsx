import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brett Pollak | Work in Higher Education and AI",
  description: "Background and current work on AI, digital services, and institutional change in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Background and current work on AI, digital services, and institutional change in higher education.",
    url: "https://brettcpollak.com/about",
    images: [
      {
        url: "/brettpollak-headshot-lean.png",
        width: 300,
        height: 400,
        alt: "Brett Pollak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Background and current work on AI, digital services, and institutional change in higher education.",
    images: ["/brettpollak-headshot-lean.png"],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-paper" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="eyebrow mb-6">
            BACKGROUND
          </div>
          <h1 className="display-title display-title--xl mb-6">About</h1>
          <div className="divider-accent w-24"></div>
        </div>

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative animate-slide-in-left">
            <div className="hidden md:block absolute -bottom-4 -left-4 w-full h-full bg-accent -z-10"></div>
            <div className="relative">
              <Image
                src="/brettpollak-headshot-lean.png"
                alt="Brett Pollak"
                width={300}
                height={400}
                className="w-full border-2 border-ink relative z-10"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 animate-slide-in-right">
            <h2 className="display-title display-title--lg">Work Rooted in Practice, People, and Curiosity</h2>
            <div className="divider-accent w-24"></div>
            <p className="text-xl text-muted leading-relaxed">
              My career started in web and digital services, where I learned early that new tools only matter when they fit the real work people are trying to do.
            </p>
            <p className="text-xl text-muted leading-relaxed">
              At UC San Diego, I&apos;ve spent more than 17 years working with colleagues across web, cloud, data, and workplace technology. Projects like TritonGPT have reinforced that implementation is as much about trust, governance, and listening as it is about architecture.
            </p>
            <p className="text-xl text-muted leading-relaxed">
              This site is a place to share what we&apos;ve learned so far and connect with others in higher education who are working through similar questions. I&apos;m especially interested in hearing how other institutions are approaching adoption, policy, and practical use cases.
            </p>
          </div>
        </div>

        {/* Recent Work */}
        <div className="mb-20">
          <h2 className="display-title display-title--lg mb-12">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hard p-6 border-l-4 border-accent animate-slide-up delay-100">
              <h3 className="text-xl font-bold text-ink mb-3">TritonGPT in Practice</h3>
              <p className="text-lg text-muted leading-relaxed">Supporting campus access to institutional knowledge and reducing friction in workflows such as contract review for Procurement</p>
            </div>
            <div className="card-hard p-6 border-l-4 border-accent animate-slide-up delay-200">
              <h3 className="text-xl font-bold text-ink mb-3">Campus Technology Work</h3>
              <p className="text-lg text-muted leading-relaxed">Working with colleagues across service desk, infrastructure, analytics, web, and collaboration services</p>
            </div>
            <div className="card-hard p-6 border-l-4 border-accent animate-slide-up delay-300">
              <h3 className="text-xl font-bold text-ink mb-3">Recognition</h3>
              <p className="text-lg text-muted leading-relaxed">Work connected to TritonGPT and related initiatives has received campus and industry recognition</p>
            </div>
            <div className="card-hard p-6 border-l-4 border-accent animate-slide-up delay-400">
              <h3 className="text-xl font-bold text-ink mb-3">Cross-Institution Sharing</h3>
              <p className="text-lg text-muted leading-relaxed">Lessons from TritonGPT have been shared with peer institutions exploring similar AI questions</p>
            </div>
            <div className="card-hard p-6 border-l-4 border-accent md:col-span-2 animate-slide-up delay-500">
              <h3 className="text-xl font-bold text-ink mb-3">Daily Context</h3>
              <p className="text-lg text-muted leading-relaxed">Supporting hybrid-cloud infrastructure and digital services for a campus community of more than 73,000 people</p>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-20">
          <h2 className="display-title display-title--lg mb-12">Topics I Spend Time On</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">AI Implementation</h3>
              <p className="text-lg text-muted">Governance, adoption, and the practical questions that show up once a pilot becomes real work</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Data Governance</h3>
              <p className="text-lg text-muted">Privacy, security, stewardship, and how institutions make data usable without losing context</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Cloud Infrastructure</h3>
              <p className="text-lg text-muted">Hybrid-cloud architecture, operations, and what it takes to support dependable institutional services</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Organizational Change</h3>
              <p className="text-lg text-muted">Stakeholder engagement, service design, and learning how new tools actually fit campus workflows</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Digital Experience</h3>
              <p className="text-lg text-muted">Web platforms, accessibility, and making institutional systems easier for people to navigate</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink mb-3">Data-Informed Decisions</h3>
              <p className="text-lg text-muted">Analytics, reporting, and helping teams ask better questions about the work in front of them</p>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="mb-20">
          <h2 className="display-title display-title--lg mb-12">Career Journey</h2>
          <div className="space-y-12 max-w-4xl">
            {/* UC San Diego */}
            <div className="relative pl-8 border-l-4 border-accent">
              <div className="absolute top-0 left-[-11px] w-4 h-4 bg-accent border-2 border-ink"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-2">
                <h3 className="text-2xl font-bold text-ink">University of California San Diego</h3>
                <span className="border-2 border-ink bg-paper text-ink text-xs uppercase tracking-wide font-[family-name:var(--font-geist-mono)] px-3 py-1 w-fit whitespace-nowrap">2008 – Present</span>
              </div>

              <div className="space-y-8">
                {/* Executive Director */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-accent">Executive Director, Workplace Technology & Infrastructure Services (WTIS)</h4>
                  <p className="text-sm text-muted font-semibold mb-3">Oct 2024 – Present</p>
                  <p className="text-muted leading-relaxed">
                    Working with teams across Data Warehouse, Analytics, Predictive Technologies, Email, Service Desk,
                    Field Support, Endpoint Management, Enterprise Content Management, Web Technologies, and Integrated
                    Collaboration Services. Part of the team behind the **TritonAI program**, which includes TritonGPT and other institutional AI efforts at UC San Diego.
                  </p>
                </div>

                {/* Senior Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Senior Director, Workplace Technology Services</h4>
                  <p className="text-sm text-muted font-medium mb-2">Jan 2016 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-muted space-y-2 leading-relaxed">
                    <li>Directed strategy for campus-wide workplace services, emerging technologies, and business intelligence (BI) for data-driven decision making.</li>
                    <li>Oversaw Customer Engagement Group (Service Desk, Field Support) and strategic platforms including ServiceNow, Microsoft 365, and Google Apps.</li>
                  </ul>
                </div>

                {/* Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Director, Cloud and Web Services</h4>
                  <p className="text-sm text-muted font-medium mb-2">Aug 2010 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-muted space-y-2 leading-relaxed">
                    <li>Managed UC San Diego&apos;s top-level digital channels (ucsd.edu, Blink, TritonLink) and 160+ websites via the campus CMS.</li>
                    <li>Led cloud strategy (SaaS/PaaS/IaaS) and mobile presence, including the Mobile Web Framework (MWF) adopted by 5 UC campuses.</li>
                    <li>Managed a $1M+ budget and a cross-functional web team delivering responsive frameworks and campus-wide applications.</li>
                  </ul>
                </div>

                {/* Campus Web Manager */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-ink">Campus Web Manager</h4>
                  <p className="text-sm text-muted font-medium mb-2">Apr 2008 – Aug 2010</p>
                  <ul className="list-disc list-outside ml-5 text-muted space-y-2 leading-relaxed">
                    <li>Led the selection, implementation, and operations of the campus-wide Content Management System (CMS), serving 150+ users.</li>
                    <li>Established ITIL-based best practices and Agile methodologies for web development, content migration, and system architecture.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SAIC */}
            <div className="relative pl-8 border-l-4 border-accent">
              <div className="absolute top-0 left-[-11px] w-4 h-4 bg-accent border-2 border-ink"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-ink">SAIC (Science Applications International Corporation)</h3>
                <span className="border-2 border-ink bg-paper text-ink text-xs uppercase tracking-wide font-[family-name:var(--font-geist-mono)] px-3 py-1 w-fit whitespace-nowrap">2001 – 2008</span>
              </div>

              <div className="text-xl font-medium text-accent mb-4">Corporate Web Team Manager</div>

              <p className="text-lg text-muted leading-relaxed">
                Managed a department of 40 professionals including web content developers, user interface designers,
                programmers, project managers, and team leads. It was an early lesson in how large organizations adopt
                technology through people, process, and collaboration.
              </p>
            </div>

            {/* Education */}
            <div className="relative pl-8 border-l-4 border-accent">
              <div className="absolute top-0 left-[-11px] w-4 h-4 bg-accent border-2 border-ink"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-ink">University of San Diego</h3>
                <span className="border-2 border-ink bg-paper text-ink text-xs uppercase tracking-wide font-[family-name:var(--font-geist-mono)] px-3 py-1 w-fit whitespace-nowrap">1995</span>
              </div>

              <div className="text-xl font-medium text-muted mb-4">Education</div>

              <p className="text-lg text-muted leading-relaxed">
                <span className="font-semibold text-ink">BBA in Marketing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Talks and Writing */}
        <div className="border-t-2 border-ink pt-16">
          <h2 className="display-title display-title--lg mb-8">Talks, Writing, and Shared Learning</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card-hard p-6">
              <h3 className="text-lg font-bold text-ink mb-4">Conference Presentations</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold text-ink">EDUCAUSE:</span> Data governance and AI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold text-ink">AXIES 2025:</span> Keynote on EDUCAUSE Top 10 (Sapporo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold text-ink">ASU GSV Summit:</span> AI in higher education</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold text-ink">High Ed Web & EduWeb:</span> Mobile design and UX</span>
                </li>
              </ul>
            </div>

            <div className="card-hard p-6">
              <h3 className="text-lg font-bold text-ink mb-4">Published Work</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EDUCAUSE Review case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The Journal of Higher Education Web Professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Eduniverse articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Featured in Forbes, CIO.com, EdTech Magazine (30+ publications)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
