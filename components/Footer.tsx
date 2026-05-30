import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-paper border-t-2 border-ink mt-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1.5 bg-accent"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-3xl uppercase text-ink mb-4 font-[family-name:var(--font-montserrat)]" style={{ letterSpacing: '-0.01em' }}>
              Brett Pollak
            </div>
            <p className="text-muted leading-relaxed mb-6">
              Technology executive specializing in AI implementation, digital transformation, and data governance in higher education.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/brettpollak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-ink hover:bg-accent text-paper hover:text-ink border-2 border-ink flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-[0.15em] mb-4 font-[family-name:var(--font-geist-mono)]">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tritongpt" className="text-muted hover:text-accent transition-colors">
                  TritonAI
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-muted hover:text-accent transition-colors">
                  Media & Publications
                </Link>
              </li>
              <li>
                <Link href="/ai-digest" className="text-muted hover:text-accent transition-colors">
                  AI Digest
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-muted hover:text-accent transition-colors">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink uppercase tracking-[0.15em] mb-4 font-[family-name:var(--font-geist-mono)]">Featured Work</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tritongpt" className="text-muted hover:text-accent transition-colors">
                  TritonAI Overview
                </Link>
              </li>
              <li>
                <a href="https://resolutioncompanion.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1">
                  Resolution Companion
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <Link href="/media" className="text-muted hover:text-accent transition-colors">
                  Publications & Press
                </Link>
              </li>
              <li>
                <Link href="/ai-digest" className="text-muted hover:text-accent transition-colors">
                  Weekly AI Digest
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-ink pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm font-[family-name:var(--font-geist-mono)]">
            &copy; {new Date().getFullYear()} Brett Pollak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
