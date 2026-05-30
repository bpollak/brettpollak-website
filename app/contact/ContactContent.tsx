import ContactForm from '@/components/ContactForm';

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            CONNECT
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight">Connect</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 to-blue-800 mb-8"></div>
          <p className="text-2xl text-slate-600 mb-6 max-w-3xl leading-relaxed">
            I&apos;m glad to connect with people across higher education who are thinking through similar questions around AI, governance, digital services, and change.
          </p>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            If you&apos;re building something, comparing approaches, or want to share what your institution is learning, feel free to reach out.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="flex animate-slide-in-left">
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Conversation Topics */}
            <div className="bg-white p-10 rounded-xl border-l-4 border-blue-800 shadow-lg flex flex-col animate-slide-in-right card-3d">
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
            </div>
          </div>
        </div>

        {/* Current Role */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-12 text-white shadow-xl">
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
