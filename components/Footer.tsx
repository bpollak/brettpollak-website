import Link from 'next/link';

type FooterLink = { href: string; label: string; external?: boolean };
type FooterGroup = { heading: string; links: FooterLink[] };

/**
 * Two columns with no overlap. The previous "Featured Work" column repeated
 * three of its four links from "Navigation" under different labels, and the
 * footer omitted /speaking entirely — the highest-priority route in the sitemap.
 */
const FOOTER_GROUPS: FooterGroup[] = [
  {
    heading: 'The Work',
    links: [
      { href: '/about', label: 'About' },
      { href: '/tritongpt', label: 'TritonAI' },
      { href: '/speaking', label: 'Speaking' },
      { href: '/media', label: 'Media & Publications' },
      { href: '/products', label: 'Products' },
      { href: 'https://resolutioncompanion.com/', label: 'Resolution Companion', external: true },
    ],
  },
  {
    heading: 'Notes & Elsewhere',
    links: [
      { href: '/ai-digest', label: 'AI Digest' },
      { href: '/ai-agent-architecture', label: 'Agent Architecture' },
      { href: '/ucsd-ai-news', label: 'UCSD AI Weekly' },
      { href: '/podcasts', label: 'Podcasts' },
      { href: '/now', label: 'Now' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper-strong border-t border-line mt-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#17201b]/12"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-semibold text-ink mb-4 font-[family-name:var(--font-display)]">
              Brett Pollak
            </div>
            <p className="text-body leading-relaxed mb-6">
              Notes on institutional AI, platform governance, digital services, and day-to-day technology work in higher education.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/brettpollak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-line bg-paper hover:bg-[#17201b] text-body hover:text-white rounded-sm flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/bpollak"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-line bg-paper hover:bg-[#17201b] text-body hover:text-white rounded-sm flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          {FOOTER_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="rule-label mb-4">{group.heading}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body hover:text-[#1f5a8a] transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link href={link.href} className="text-body hover:text-[#1f5a8a] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-line pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Brett Pollak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
