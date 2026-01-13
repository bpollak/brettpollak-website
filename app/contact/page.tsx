import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Brett Pollak | Speaking Engagements & Collaboration",
  description: "Connect with Brett Pollak for speaking engagements, collaboration opportunities, and insights on AI implementation in higher education. Available for keynotes, panels, and workshops.",
  alternates: {
    canonical: "https://bpollak.github.io/brettpollak-website/contact",
  },
  openGraph: {
    title: "Contact Brett Pollak | Speaking Engagements & Collaboration",
    description: "Available for speaking engagements on AI in higher education, digital transformation, and technology leadership.",
    url: "https://bpollak.github.io/brettpollak-website/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">Contact</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 mb-8"></div>
          <p className="text-2xl text-gray-600 mb-6 max-w-3xl leading-relaxed">
            I'm always interested in connecting with fellow technology leaders, researchers, and innovators in higher education.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Whether you're looking for speaking engagements, collaboration opportunities, or insights on AI implementation,
            feel free to reach out.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Form */}
            <div className="flex">
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            {/* Speaking & Collaboration Info */}
            <div className="bg-white p-10 rounded-xl border-l-4 border-purple-600 shadow-lg flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Speaking & Collaboration</h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-purple-600 mb-4">Speaking Engagements</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Available for keynotes, panels, workshops, and webinars on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">AI implementation in higher education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Data governance and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Digital transformation strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Technology leadership and innovation</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl font-bold text-emerald-600 mb-4">Collaboration Opportunities</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Interested in collaborating on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Multi-institutional AI initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Research on AI in education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Technology consulting and advisory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Thought leadership publications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Position */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">Current Position</h3>
          <p className="text-2xl font-semibold mb-3 text-blue-400">
            Executive Director, Workplace Technology & Infrastructure Services
          </p>
          <p className="text-xl text-gray-300">
            University of California San Diego
          </p>
        </div>
      </div>
    </div>
  );
}
