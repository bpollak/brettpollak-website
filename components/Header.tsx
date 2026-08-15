'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavLink = { href: string; label: string };
type NavGroup = { heading: string; links: NavLink[] };

// The six routes that carry the site's core narrative and its call to action.
// Agent Architecture is promoted to primary nav (it's a differentiator); Products
// stays accessible via footer and the Products card on the homepage.
const PRIMARY_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/tritongpt', label: 'TritonAI' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/ai-agent-architecture', label: 'Architecture' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];

// Grouped under a single "Writing" dropdown on desktop; the same groups render as
// flat labelled subsections within the mobile menu.
const WRITING_GROUPS: NavGroup[] = [
  {
    heading: 'AI Projects',
    links: [
      { href: '/ai-digest', label: 'AI Digest' },
      { href: '/ai-agent-architecture', label: 'Agent Architecture' },
      { href: '/ucsd-ai-news', label: 'UCSD AI Weekly' },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { href: '/products', label: 'Products' },
      { href: '/podcasts', label: 'Podcasts' },
      { href: '/now', label: 'Now' },
      { href: '/linkedin', label: 'LinkedIn' },
    ],
  },
];

const WRITING_LINKS: NavLink[] = WRITING_GROUPS.flatMap((group) => group.links);

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [writingMenuOpen, setWritingMenuOpen] = useState(false);
  const writingMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;
  const isActiveInGroup = (links: NavLink[]) => links.some((l) => pathname === l.href);

  // Close the Writing dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!writingMenuOpen) return;

    function handleClick(e: MouseEvent) {
      if (writingMenuRef.current && !writingMenuRef.current.contains(e.target as Node)) {
        setWritingMenuOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setWritingMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [writingMenuOpen]);

  // Close the Writing menu when navigating (pathname change).
  // This is a legitimate menu-close-on-route-change pattern; the React 19
  // lint rule is too strict for this specific use case.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setWritingMenuOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f9f5]/92 backdrop-blur-xl border-b border-line">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#17201b]/10"></div>
      <nav aria-label="Main" className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#17201b] focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-xl sm:text-2xl font-semibold text-ink transition-colors font-[family-name:var(--font-display)] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 rounded-sm whitespace-nowrap flex-none"
          >
            <span
              aria-hidden="true"
              className="flex h-6 sm:h-7 w-[5px] flex-col overflow-hidden rounded-full"
            >
              <span className="flex-1 bg-[#b8503f]" />
              <span className="flex-1 bg-[#c97712]" />
              <span className="flex-1 bg-[#366c5a]" />
            </span>
            <span>Brett Pollak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {PRIMARY_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-4 py-2 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 whitespace-nowrap border-b-2 ${
                  isActive(href)
                    ? 'text-ink border-[#c97712] font-semibold'
                    : 'text-body border-transparent hover:text-[#17201b] hover:border-[#9eb7aa]'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* "Writing" dropdown */}
            <div className="relative" ref={writingMenuRef}>
              <button
                type="button"
                onClick={() => setWritingMenuOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={writingMenuOpen}
                className={`px-3 lg:px-4 py-2 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 whitespace-nowrap inline-flex items-center gap-1 border-b-2 ${
                  isActiveInGroup(WRITING_LINKS)
                    ? 'text-ink border-[#c97712] font-semibold'
                    : 'text-body border-transparent hover:text-[#17201b] hover:border-[#9eb7aa]'
                }`}
              >
                Writing
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${writingMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
                </svg>
              </button>
              {writingMenuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-60 rounded-sm bg-paper-strong border border-line shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
                >
                  {WRITING_GROUPS.map((group) => (
                    <div key={group.heading} className="border-b border-line last:border-b-0">
                      <div className="px-3 py-2 rule-label">{group.heading}</div>
                      {group.links.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          role="menuitem"
                          onClick={() => setWritingMenuOpen(false)}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
                            isActive(href)
                              ? 'text-ink bg-[#eef3ea] font-semibold'
                              : 'text-body hover:text-[#17201b] hover:bg-[#f1f5ee]'
                          }`}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-ink hover:bg-[#eef3ea] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg aria-hidden="true"
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-line">
            <div className="flex flex-col space-y-2">
              {PRIMARY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-ink bg-[#eef3ea]'
                      : 'text-body hover:text-[#17201b] hover:bg-[#f1f5ee]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Same groups as the desktop dropdown, flattened with subheaders */}
              {WRITING_GROUPS.map((group) => (
                <div key={group.heading} className="contents">
                  <div className="pt-3 pb-1 px-4 rule-label">{group.heading}</div>
                  {group.links.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                        isActive(href)
                          ? 'text-ink bg-[#eef3ea]'
                          : 'text-body hover:text-[#17201b] hover:bg-[#f1f5ee]'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
