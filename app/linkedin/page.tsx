'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function LinkedIn() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      {/* Hide SociableKit's Follow button */}
      <style jsx global>{`
        .sk-ww-linkedin-profile-post a[href*="linkedin.com"][target="_blank"] {
          display: none !important;
        }
      `}</style>

      <Script
        src="https://widgets.sociablekit.com/linkedin-profile-posts/widget.js"
        strategy="lazyOnload"
        onLoad={() => setWidgetLoaded(true)}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            SOCIAL
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight">LinkedIn</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
        </div>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl">
          Recent updates and insights from my LinkedIn profile
        </p>

        <div className="mb-12 relative min-h-[400px]">
          {/* Loading placeholder */}
          {!widgetLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl border border-slate-200">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-500">Loading LinkedIn posts...</p>
              </div>
            </div>
          )}
          {/* LinkedIn widget embed */}
          <div className="sk-ww-linkedin-profile-post" data-embed-id="25642101"></div>
        </div>

        {/* Custom Follow Me Button */}
        <div className="border-t border-slate-200 pt-12 text-center">
          <a
            href="https://www.linkedin.com/in/brettpollak/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-10 py-4 font-bold rounded-lg hover:from-slate-800 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow Me on LinkedIn
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
