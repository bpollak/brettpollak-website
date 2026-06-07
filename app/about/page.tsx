import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brett Pollak | Work in Higher Education and AI",
  // Updated description to reflect Brett's preferred professional title
  description: "Chief Technology Officer (CTO) at UC San Diego – background and current work on AI, digital services, and institutional change in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/about",
  },
  openGraph: {
    title: "About Brett Pollak | Work in Higher Education and AI",
    description: "Background and current work on AI, digital services, and institutional change in higher education.",
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
    description: "Background and current work on AI, digital services, and institutional change in higher education.",
    images: ["/brett-pollak-about.jpg"],
  },
};

export default function About() {
  return (
    <div className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Background</p>
          <h1 className="page-title mb-6">About</h1>
          <p className="page-intro">
            Work rooted in practice, people, curiosity, and the institutional systems that make technology useful.
            I serve as the Chief Technology Officer (CTO) for UC San Diego, leading workplace technology and infrastructure services.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative">
            <div className="relative border border-[#d9dfd3] bg-[#fffef9] p-3 shadow-[12px_12px_0_rgba(201,119,18,0.16)]">
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
            <h2 className="text-4xl font-medium leading-tight text-[#17201b]">Work Rooted in Practice, People, and Curiosity</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              My career started in web and digital services, where I learned early that new tools only matter when they fit the real work people are trying to do.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              At UC San Diego, I&apos;ve spent more than 18 years working with colleagues across web, cloud, data, and workplace technology. Projects like TritonGPT have reinforced that implementation is as much about trust, governance, and listening as it is about architecture.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              This site is a place to share what we&apos;ve learned so far and connect with others in higher education who are working through similar questions. I&apos;m especially interested in hearing how other institutions are approaching adoption, policy, and practical use cases.
            </p>
          </div>
        </div>

        {/* Recent Work */}
        <div className="mb-20 editorial-panel p-8 md:p-12">
          <h2 className="text-4xl font-medium text-[#17201b] mb-12">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-slate-900 mb-3">TritonGPT in Practice</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Supporting campus access to institutional knowledge and reducing friction in workflows such as contract review for Procurement</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-blue-800 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Campus Technology Work</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Working with colleagues across service desk, infrastructure, analytics, web, and collaboration services</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-rose-700 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Recognition</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Named to the Constellation Research Business Transformation 150™ (2026–2027) and recognized through campus and industry channels for work connected to TritonAI and related initiatives</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-indigo-600 shadow-sm hover:shadow-md transition-shadow card-3d">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cross-Institution Sharing</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Lessons from TritonGPT have been shared with peer institutions exploring similar AI questions</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 border-l-4 border-l-slate-700 shadow-sm hover:shadow-md transition-shadow md:col-span-2 card-3d">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Daily Context</h3>
              <p className="text-lg text-slate-600 leading-relaxed">Supporting hybrid-cloud infrastructure and digital services for a campus community of more than 73,000 people</p>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Topics I Spend Time On</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Implementation</h3>
              <p className="text-lg text-slate-600">Governance, adoption, and the practical questions that show up once a pilot becomes real work</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Governance</h3>
              <p className="text-lg text-slate-600">Privacy, security, stewardship, and how institutions make data usable without losing context</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-lg text-slate-600">Hybrid-cloud architecture, operations, and what it takes to support dependable institutional services</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Organizational Change</h3>
              <p className="text-lg text-slate-600">Stakeholder engagement, service design, and learning how new tools actually fit campus workflows</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Experience</h3>
              <p className="text-lg text-slate-600">Web platforms, accessibility, and making institutional systems easier for people to navigate</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Informed Decisions</h3>
              <p className="text-lg text-slate-600">Analytics, reporting, and helping teams ask better questions about the work in front of them</p>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="mb-20 editorial-panel p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Career Journey</h2>
          <div className="space-y-12 max-w-4xl">
            {/* UC San Diego */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-900 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-2">
                <h3 className="text-2xl font-bold text-slate-900">University of California San Diego</h3>
                <span className="text-sm font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full w-fit whitespace-nowrap">2008 – Present</span>
              </div>

              <div className="space-y-8">
                {/* Executive Director */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-slate-800 text-blue-700">Executive Director, Workplace Technology & Infrastructure Services</h4>
                  <p className="text-sm text-slate-500 font-semibold mb-3">Oct 2024 – Present</p>
                  <p className="text-slate-600 leading-relaxed">
                    Working with teams across Data Warehouse, Analytics, Predictive Technologies, Email, Service Desk,
                    Field Support, Endpoint Management, Enterprise Content Management, Web Technologies, and Integrated
                    Collaboration Services. Part of the team behind the TritonAI program, which includes TritonGPT and other institutional AI efforts at UC San Diego.
                  </p>
                </div>

                {/* Senior Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-slate-800">Senior Director, Workplace Technology Services</h4>
                  <p className="text-sm text-slate-500 font-medium mb-2">Jan 2016 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
                    <li>Directed strategy for campus-wide workplace services, emerging technologies, and business intelligence (BI) for data-driven decision making.</li>
                    <li>Oversaw Customer Engagement Group (Service Desk, Field Support) and strategic platforms including ServiceNow, Microsoft 365, and Google Apps.</li>
                  </ul>
                </div>

                {/* Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-slate-800">Director, Cloud and Web Services</h4>
                  <p className="text-sm text-slate-500 font-medium mb-2">Aug 2010 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
                    <li>Managed UC San Diego&apos;s top-level digital channels (ucsd.edu, Blink, TritonLink) and 160+ websites via the campus CMS.</li>
                    <li>Led cloud strategy (SaaS/PaaS/IaaS) and mobile presence, including the Mobile Web Framework (MWF) adopted by 5 UC campuses.</li>
                    <li>Managed a $1M+ budget and a cross-functional web team delivering responsive frameworks and campus-wide applications.</li>
                  </ul>
                </div>

                {/* Campus Web Manager */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-slate-800">Campus Web Manager</h4>
                  <p className="text-sm text-slate-500 font-medium mb-2">Apr 2008 – Aug 2010</p>
                  <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2 leading-relaxed">
                    <li>Led the selection, implementation, and operations of the campus-wide Content Management System (CMS), serving 150+ users.</li>
                    <li>Established ITIL-based best practices and Agile methodologies for web development, content migration, and system architecture.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SAIC */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-amber-500 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-slate-900">SAIC (Science Applications International Corporation)</h3>
                <span className="text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full w-fit whitespace-nowrap">2001 – 2008</span>
              </div>
              
              <div className="text-xl font-medium text-amber-600 mb-4">Corporate Web Team Manager</div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Managed a department of 40 professionals including web content developers, user interface designers,
                programmers, project managers, and team leads. It was an early lesson in how large organizations adopt
                technology through people, process, and collaboration.
              </p>
            </div>

            {/* Education */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-700 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-slate-900">University of San Diego</h3>
                <span className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full w-fit whitespace-nowrap">1995</span>
              </div>
              
              <div className="text-xl font-medium text-slate-600 mb-4">Education</div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">BBA in Marketing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Talks and Writing */}
        <div className="border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Talks, Writing, and Shared Learning</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Conference Presentations</h3>
              <ul className="space-y-2 text-slate-700">
                {/* Verified speaking engagements */}
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">ASU+GSV Summit 2026:</span> Shared AI at Scale — Developed by Universities for Universities</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">NACUBO 2026:</span> The AI Investment Decision: Build, Buy, or Shared Services?</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Published Work</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EDUCAUSE Review — &ldquo;Ushering in a New Era of AI-Driven Data Insights at UC San Diego&rdquo; (Feb 2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>CIO.com — &ldquo;How poor data foundations can undermine AI success&rdquo; (Apr 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ithaka S+R, The Journal of Higher Education Web Professionals, Eduniverse, and others</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Featured in Forbes, CIO.com, EdTech Magazine, and 30+ other outlets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
