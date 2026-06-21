import ContactForm from '@/components/ContactForm';

export default function ContactContent() {
  return (
    <div className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Connect</p>
          <h1 className="page-title mb-6">Connect</h1>
          <p className="page-intro mb-6">
            I&apos;m glad to connect with people across higher education who are thinking through similar questions around AI, governance, digital services, and change.
          </p>
          <p className="max-w-3xl text-xl leading-relaxed text-[#485248]">
            If you&apos;re building something, comparing approaches, or want to share what your institution is learning, feel free to reach out.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="flex">
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Conversation Topics */}
            <div className="editorial-panel p-8 md:p-10 border-l-4 border-l-[#1f5a8a] flex flex-col card-3d">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">What I&apos;d Love to Talk About</h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-blue-800 mb-4">Topics I Keep Returning To</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Some conversations I especially value:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">AI implementation in higher education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Data governance, privacy, and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Institutional knowledge, workflows, and support models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Adoption, training, and organizational change</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-8">
                <h4 className="text-xl font-bold text-amber-600 mb-4">Helpful Context When You Reach Out</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  It&apos;s helpful to know a bit about what your institution is working through, especially around:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Cross-institution collaboration or shared learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Research, writing, or panels with a learning focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Practical challenges from campus pilots or production systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">What has and hasn&apos;t worked at your institution</span>
                  </li>
                </ul>
              </div>

              {/* Online / Social */}
              <div className="border-t border-slate-200 pt-8">
                <h4 className="text-xl font-bold text-slate-900 mb-4">Online</h4>
                <p className="text-slate-600 leading-relaxed">
                  I share ongoing thoughts and updates on{" "}
                  <a href="https://www.linkedin.com/in/brettpollak/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900 transition-colors">
                    LinkedIn
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Role */}
        <div className="editorial-panel editorial-dark p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6">Current Role</h3>
          <p className="text-2xl font-semibold mb-3 text-amber-400">
            Executive Director, Workplace Technology & Infrastructure Services
          </p>
          <p className="text-xl text-slate-200">
            University of California San Diego
          </p>
        </div>
      </div>
    </div>
  );
}
