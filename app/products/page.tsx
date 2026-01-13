import type { Metadata } from 'next';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/brettpollak-website' : '';

export const metadata: Metadata = {
  title: "Products | Brett Pollak - AI-Powered Solutions",
  description: "Discover products built by Brett Pollak, including Resolution Companion - an AI-powered mobile app for identity-based habit building and personal growth.",
  openGraph: {
    title: "Products | Brett Pollak - AI-Powered Solutions",
    description: "AI-powered solutions for personal growth and productivity.",
  },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-full mb-6">
            PRODUCTS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">Built for Impact</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>
          <p className="text-2xl text-gray-600 mb-6 max-w-3xl leading-relaxed">
            Creating AI-powered solutions that transform how people build habits and achieve their goals.
          </p>
        </div>

        {/* Resolution Companion */}
        <div className="mb-24">
          <a
            href="https://resolutioncompanion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <Image
                  src={`${basePath}/resolution-companion.png`}
                  alt="Resolution Companion App"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 text-xs font-bold rounded-full mb-4 w-fit">
                  AI-POWERED HABIT BUILDING
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
                  Resolution Companion
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  An AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900 block">AI-Guided Persona Definition</span>
                        <span className="text-gray-600">Define your ideal self through AI-guided interviews and coaching</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900 block">Momentum Calendar</span>
                        <span className="text-gray-600">Visual progress tracking with color-coded streaks and patterns</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900 block">Identity-First System</span>
                        <span className="text-gray-600">Build habits based on who you want to become, not just what you want to do</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-gray-900 block">120-Second Kickstart</span>
                        <span className="text-gray-600">Abbreviated activities for high-friction days to maintain momentum</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-cyan-600 font-bold text-lg group-hover:gap-3 transition-all">
                  Visit Resolution Companion
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
