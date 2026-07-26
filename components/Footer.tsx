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
    <footer className="bg-[#fffef9] border-t border-[#d9dfd3] mt-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#17201b]/12"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-semibold text-[#17201b] mb-4 font-[family-name:var(--font-display)]">
              Brett Pollak
            </div>
            <p className="text-[#485248] leading-relaxed mb-6">
              Field notes on institutional AI, platform governance, digital services, and the practical work of higher education transformation.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/brettpollak/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#d9dfd3] bg-[#f7f9f5] hover:bg-[#17201b] text-[#485248] hover:text-white rounded-sm flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
                        className="text-[#485248] hover:text-[#1f5a8a] transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[#485248] hover:text-[#1f5a8a] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-[#d9dfd3] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#7a8479] text-sm">
            &copy; {new Date().getFullYear()} Brett Pollak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
