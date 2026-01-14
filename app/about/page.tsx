'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-6">
            PROFILE
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">About</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        </div>

        {/* Main Bio Section */}
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2 relative animate-slide-in-left">
            <div className="hidden md:block absolute -inset-6 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-2xl transform -rotate-3 opacity-20 blur-2xl animate-pulse-glow"></div>
            <div className="hidden md:block absolute -inset-5 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-2xl transform -rotate-2 opacity-40 blur-xl"></div>
            <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-1 shadow-2xl"></div>
            <div className="hidden md:block absolute -inset-3 bg-gradient-to-tl from-purple-100 to-blue-50 rounded-2xl transform -rotate-1 opacity-70"></div>
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Transforming Organizations Through Strategic AI Leadership</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
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
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-cyan-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-100 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">TritonGPT Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Reduced contract review time by 91% and democratized access to institutional knowledge for 73,000+ users</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-200 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Leadership</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Manage 80+ technology professionals and oversee multi-million-dollar budgets</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-amber-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-300 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Awards</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Larry L. Sautter Gold and Silver Awards for Innovation in Information Technology</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-rose-600 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-400 card-3d">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Institutional Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">TritonGPT technology licensed by multiple leading universities nationwide</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-emerald-600 shadow-sm hover:shadow-md transition-shadow md:col-span-2 animate-slide-up delay-500 card-3d">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Journey</h2>
          <div className="space-y-8 max-w-4xl">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">University of California San Diego</h3>
              <p className="text-md text-gray-500 mb-3">Executive Director, Workplace Technology & Infrastructure Services | 2008–Present</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-3">
                Leading comprehensive technology portfolio including Data Warehouse, Analytics, Predictive Technologies,
                Email, Service Desk, Field Support, Endpoint Management, Enterprise Content Management, Web Technologies,
                and Integrated Collaboration Services. Spearheaded the TritonGPT initiative, establishing UC San Diego as a
                leader in institutional AI implementation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prior role as Manager of the Campus Web Office focused on mobile strategy, responsive design, and
                user experience optimization across university digital properties.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SAIC (Science Applications International Corporation)</h3>
              <p className="text-md text-gray-500 mb-3">Corporate Web Team Manager | 2001–2008</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Managed a department of 40 professionals including web content developers, user interface designers,
                programmers, project managers, and team leads. Developed expertise in large-scale enterprise web
                implementations and cross-functional team leadership in a Fortune 500 environment.
              </p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold">BBA in Marketing</span>, University of San Diego (1995)
              </p>
            </div>
          </div>
        </div>

        {/* Thought Leadership */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Speaking & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Conference Presentations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">EDUCAUSE:</span> Data governance and AI implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">AXIES 2025:</span> Keynote on EDUCAUSE Top 10 (Sapporo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">ASU GSV Summit:</span> AI in higher education</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><span className="font-semibold">High Ed Web & EduWeb:</span> Mobile design and UX</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Published Work</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>EDUCAUSE Review case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The Journal of Higher Education Web Professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Eduniverse articles</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
