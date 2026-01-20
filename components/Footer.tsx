import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-slate-900 via-blue-900 to-amber-500 opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-slate-900 mb-4">
              Brett Pollak
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Technology executive specializing in AI implementation, digital transformation, and data governance in higher education.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/bpollak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-200 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@brettcpollak.com"
                className="w-10 h-10 bg-slate-200 hover:bg-amber-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tritongpt" className="text-slate-600 hover:text-blue-700 transition-colors">
                  TritonGPT
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Media & Publications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Featured Work</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tritongpt" className="text-slate-600 hover:text-blue-700 transition-colors">
                  TritonGPT Case Study
                </Link>
              </li>
              <li>
                <a href="https://resolutioncompanion.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                  Resolution Companion
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <Link href="/media" className="text-slate-600 hover:text-blue-700 transition-colors">
                  Publications & Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Brett Pollak. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            UC San Diego • La Jolla, California
          </p>
        </div>
      </div>
    </footer>
  );
}
