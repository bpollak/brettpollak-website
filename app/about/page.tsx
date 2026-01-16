import Image from 'next/image';

// Since this is a client component, we can't export metadata directly. 
// However, in Next.js 13+, page.tsx should ideally be a Server Component for metadata to work efficiently.
// But refactoring the whole component to be server-side might break the animations if not done carefully.
// A common pattern is to keep the page.tsx as a Server Component and move the interactive parts to a client component.
// BUT, for simplicity and minimizing risk of breaking changes, we will ignore the 'use client' directive conflict 
// because Next.js allows exporting metadata from a layout or a server page. 
// Wait, 'use client' pages CANNOT export metadata. 
// I need to wrap the content or remove 'use client' if possible.
// Looking at the code, it uses `animate-fade-in` and `card-3d` which are CSS classes, but does it use hooks? 
// No hooks are used in the visible code of About page.
// Let's check imports. `import Image from 'next/image';`.
// There are no useState, useEffect.
// So I can remove 'use client'.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brett Pollak | AI & Digital Transformation Leader in Higher Ed",
  description: "Brett Pollak is a Technology Executive at UC San Diego, leading 80+ professionals in AI implementation, data governance, and digital transformation serving 73,000+ users.",
  openGraph: {
    title: "About Brett Pollak | AI & Digital Transformation Leader in Higher Ed",
    description: "Technology Executive at UC San Diego specializing in Artificial Intelligence, Data, and Digital Transformation.",
    url: "https://brettcpollak.com/about",
    images: [
      {
        url: "/brettpollak-headshot-lean.png",
        width: 300,
        height: 400,
        alt: "Brett Pollak - Technology Executive",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-full mb-6">
            PROFILE
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-900 via-green-700 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">About</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-800 to-emerald-600"></div>
        </div>

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative animate-slide-in-left">
            <div className="hidden md:block absolute -inset-6 bg-gradient-to-br from-green-300 via-emerald-300 to-teal-300 rounded-2xl transform -rotate-3 opacity-20 blur-2xl"></div>
            <div className="hidden md:block absolute -inset-5 bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 rounded-2xl transform -rotate-2 opacity-40 blur-xl"></div>
            <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl transform rotate-1 shadow-2xl"></div>
            <div className="hidden md:block absolute -inset-3 bg-gradient-to-tl from-emerald-100 to-green-50 rounded-2xl transform -rotate-1 opacity-70"></div>
            <div className="relative">
              <Image
                src="/brettpollak-headshot-lean.png"
                alt="Brett Pollak"
                width={300}
                height={400}
                className="w-full rounded-xl shadow-2xl ring-4 ring-white/50"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6 animate-slide-in-right">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">Transforming Organizations Through Strategic AI Leadership</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-800 to-emerald-700"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I partner with organizations to unlock transformative value through AI and digital innovation. My approach combines
              rapid prototyping with enterprise-scale deployment, turning ambitious visions into measurable outcomes. By building
              robust governance frameworks and fostering stakeholder engagement, I enable institutions to confidently adopt emerging
              technologies while managing risk and ensuring ethical implementation.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              My work in AI implementation demonstrates that well-designed solutions can move from concept to
              production in weeks, not years—scaling to serve 73,000+ users while achieving significant efficiency gains. I focus on
              creating institutional knowledge platforms that democratize access to information and accelerate decision-making.
              My approach balances innovation velocity with sustainable, scalable architecture that organizations can adopt with confidence.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-20 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-100 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">TritonGPT Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Reduced contract review time by 91% and democratized access to institutional knowledge for 73,000+ users</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-200 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Leadership</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Manage 80+ technology professionals and oversee multi-million-dollar budgets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-300 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Awards</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Larry L. Sautter Gold and Silver Awards for Innovation in Information Technology</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-400 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Institutional Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">TritonGPT technology licensed by multiple leading universities nationwide</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-teal-600 shadow-sm hover:shadow-md transition-shadow md:col-span-2 animate-slide-up delay-500 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure Scale</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Support hybrid-cloud infrastructure serving campus community of 73,000+ users</p>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-lg text-gray-600">Implementation, governance, and ethical frameworks for AI in higher education</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Governance</h3>
              <p className="text-lg text-gray-600">Enterprise data warehousing, security, privacy, and analytics</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-lg text-gray-600">Hybrid-cloud architecture and enterprise-scale deployments</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-lg text-gray-600">Change management, stakeholder engagement, and innovation at scale</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Technologies</h3>
              <p className="text-lg text-gray-600">Mobile strategy, responsive design, accessibility, and UX</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-lg text-gray-600">Data-driven insights and decision-making frameworks</p>
            </div>
          </div>
        </div>

        {/* Professional Background */}
        <div className="mb-20 bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Career Journey</h2>
          <div className="space-y-12 max-w-4xl">
            {/* UC San Diego */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-green-700 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-2">
                <h3 className="text-2xl font-bold text-gray-900">University of California San Diego</h3>
                <span className="text-sm font-bold text-green-800 bg-green-50 px-3 py-1 rounded-full w-fit whitespace-nowrap">2008 – Present</span>
              </div>

              <div className="space-y-8">
                {/* Executive Director */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-gray-800 text-green-700">Executive Director, Workplace Technology & Infrastructure Services (WTIS)</h4>
                  <p className="text-sm text-gray-500 font-semibold mb-3">Oct 2024 – Present</p>
                  <p className="text-gray-600 leading-relaxed">
                    Leading comprehensive technology portfolio including Data Warehouse, Analytics, Predictive Technologies,
                    Email, Service Desk, Field Support, Endpoint Management, Enterprise Content Management, Web Technologies,
                    and Integrated Collaboration Services. Spearheaded the <span className="font-semibold text-gray-800">TritonGPT</span> initiative.
                  </p>
                </div>

                {/* Senior Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-gray-800">Senior Director, Workplace Technology Services</h4>
                  <p className="text-sm text-gray-500 font-medium mb-2">Jan 2016 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 leading-relaxed">
                    <li>Directed strategy for campus-wide workplace services, emerging technologies, and business intelligence (BI) for data-driven decision making.</li>
                    <li>Oversaw Customer Engagement Group (Service Desk, Field Support) and strategic platforms including ServiceNow, Microsoft 365, and Google Apps.</li>
                  </ul>
                </div>

                {/* Director */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-gray-800">Director, Cloud and Web Services</h4>
                  <p className="text-sm text-gray-500 font-medium mb-2">Aug 2010 – Oct 2024</p>
                  <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 leading-relaxed">
                    <li>Managed UC San Diego&apos;s top-level digital channels (ucsd.edu, Blink, TritonLink) and 160+ websites via the campus CMS.</li>
                    <li>Led cloud strategy (SaaS/PaaS/IaaS) and mobile presence, including the Mobile Web Framework (MWF) adopted by 5 UC campuses.</li>
                    <li>Managed a $1M+ budget and a cross-functional web team delivering responsive frameworks and campus-wide applications.</li>
                  </ul>
                </div>

                {/* Campus Web Manager */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-gray-800">Campus Web Manager</h4>
                  <p className="text-sm text-gray-500 font-medium mb-2">Apr 2008 – Aug 2010</p>
                  <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 leading-relaxed">
                    <li>Led the selection, implementation, and operations of the campus-wide Content Management System (CMS), serving 150+ users.</li>
                    <li>Established ITIL-based best practices and Agile methodologies for web development, content migration, and system architecture.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SAIC */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-emerald-700 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-gray-900">SAIC (Science Applications International Corporation)</h3>
                <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full w-fit whitespace-nowrap">2001 – 2008</span>
              </div>
              
              <div className="text-xl font-medium text-emerald-700 mb-4">Corporate Web Team Manager</div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Managed a department of 40 professionals including web content developers, user interface designers,
                programmers, project managers, and team leads. Developed expertise in large-scale enterprise web
                implementations and cross-functional team leadership in a Fortune 500 environment.
              </p>
            </div>

            {/* Education */}
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute top-0 left-[-9px] w-4 h-4 bg-green-700 rounded-full ring-4 ring-white shadow-sm"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                <h3 className="text-2xl font-bold text-gray-900">University of San Diego</h3>
                <span className="text-sm font-bold text-green-800 bg-green-50 px-3 py-1 rounded-full w-fit whitespace-nowrap">1995</span>
              </div>
              
              <div className="text-xl font-medium text-green-700 mb-4">Education</div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-900">BBA in Marketing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Speaking & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Conference Presentations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">EDUCAUSE:</span> Data governance and AI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">AXIES 2025:</span> Keynote on EDUCAUSE Top 10 (Sapporo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">ASU GSV Summit:</span> AI in higher education</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">High Ed Web & EduWeb:</span> Mobile design and UX</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Published Work</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EDUCAUSE Review case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The Journal of Higher Education Web Professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Eduniverse articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Featured in Forbes, CIO.com, EdTech Magazine (30+ publications)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Focus Areas</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              My speaking and writing emphasize practical, implementation-focused insights: faculty engagement strategies,
              data governance frameworks, ethical AI adoption, and change management in complex organizations. Rather than
              theoretical approaches, I share battle-tested methods from real deployments serving tens of thousands of users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
