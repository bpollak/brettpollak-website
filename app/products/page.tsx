import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
  description: "Explore AI-driven products built by Brett Pollak, including Resolution Companion, an identity-based habit building app.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products including the Resolution Companion app.",
    url: "https://brettcpollak.com/products",
    images: [
      {
        url: "/resolution-companion.png",
        width: 400,
        height: 800,
        alt: "Resolution Companion App",
      },
    ],
  },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PRODUCTS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Innovation Portfolio</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-2xl text-slate-600 mb-6 max-w-3xl leading-relaxed">
            Beyond my executive leadership roles, I build AI-powered products that solve real problems for individuals.
          </p>
        </div>

        {/* Resolution Companion */}
        <div className="mb-16">
          <a
            href="https://resolutioncompanion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <Image
                  src="/resolution-companion.png"
                  alt="Resolution Companion App"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full mb-4 w-fit border border-slate-200">
                  AI-POWERED HABIT BUILDING
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-blue-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                  Resolution Companion
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  An AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">AI-Guided Persona Definition</span>
                        <span className="text-slate-600">Define your ideal self through AI-guided interviews and coaching</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">Momentum Calendar</span>
                        <span className="text-gray-600">Visual progress tracking with color-coded streaks and patterns</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">Identity-First System</span>
                        <span className="text-slate-600">Build habits based on who you want to become, not just what you want to do</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">120-Second Kickstart</span>
                        <span className="text-slate-600">Abbreviated activities for busy days to maintain momentum</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                  Visit Resolution Companion
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* More Coming Soon */}
        <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-slate-300">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">More Innovations Coming</h3>
            <p className="text-lg text-slate-600 mb-8">
              Leveraging the power of AI coding tools, I am continuing to develop new software products across education, productivity, and enterprise domains that I will feature on this page.
              Follow my journey on LinkedIn for updates on upcoming launches.
            </p>
            <Link
              href="/linkedin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Follow on LinkedIn
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
