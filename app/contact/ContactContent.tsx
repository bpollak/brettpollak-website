import ContactForm from '@/components/ContactForm';

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-paper" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="eyebrow mb-6">
            CONNECT
          </div>
          <h1 className="display-title display-title--xl mb-6">Connect</h1>
          <div className="divider-accent w-24 mb-8"></div>
          <p className="text-2xl text-muted mb-6 max-w-3xl leading-relaxed">
            I&apos;m glad to connect with people across higher education who are thinking through similar questions around AI, governance, digital services, and change.
          </p>
          <p className="text-xl text-muted max-w-3xl leading-relaxed">
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
            <div className="card-hard p-10 flex flex-col animate-slide-in-right">
              <h3 className="text-3xl font-bold text-ink mb-6">What I&apos;d Love to Talk About</h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-accent mb-4">Topics I Keep Returning To</h4>
                <p className="text-muted mb-4 leading-relaxed">
                  Some conversations I especially value:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">AI implementation in higher education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Data governance, privacy, and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Institutional knowledge, workflows, and support models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Adoption, training, and organizational change</span>
                  </li>
                </ul>
              </div>

              <div className="border-t-2 border-ink pt-8">
                <h4 className="text-xl font-bold text-accent mb-4">Helpful Context When You Reach Out</h4>
                <p className="text-muted mb-4 leading-relaxed">
                  It&apos;s helpful to know a bit about what your institution is working through, especially around:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Cross-institution collaboration or shared learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Research, writing, or panels with a learning focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">Practical challenges from campus pilots or production systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-ink">What has and hasn&apos;t worked at your institution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Current Role */}
        <div className="section-dark p-12">
          <h3 className="text-3xl font-bold text-paper mb-6">Current Role</h3>
          <p className="text-2xl font-semibold mb-3 text-accent">
            Executive Director, Workplace Technology & Infrastructure Services
          </p>
          <p className="text-xl text-paper/70">
            University of California San Diego
          </p>
        </div>
      </div>
    </div>
  );
}
