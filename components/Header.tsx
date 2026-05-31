'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavLink = { href: string; label: string };

// Primary nav items — everything EXCEPT the AI projects (which go in the dropdown)
const PRIMARY_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/tritongpt', label: 'TritonAI' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/media', label: 'Media' },
  { href: '/products', label: 'Products' },
];

// AI project pages grouped under a single "AI" dropdown on desktop.
// On mobile, these render as a flat subsection within the main menu.
const AI_LINKS: NavLink[] = [
  { href: '/ai-digest', label: 'AI Digest' },
  { href: '/ai-agent-architecture', label: 'Agent Architecture' },
  { href: '/ucsd-ai-news', label: 'UCSD AI Weekly' },
];

const SECONDARY_LINKS: NavLink[] = [
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/linkedin', label: 'LinkedIn' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const aiMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;
  const isActiveInGroup = (links: NavLink[]) => links.some((l) => pathname === l.href);

  // Close AI dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!aiMenuOpen) return;

    function handleClick(e: MouseEvent) {
      if (aiMenuRef.current && !aiMenuRef.current.contains(e.target as Node)) {
        setAiMenuOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setAiMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [aiMenuOpen]);

  // Close AI menu when navigating (pathname change).
  // This is a legitimate menu-close-on-route-change pattern; the React 19
  // lint rule is too strict for this specific use case.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setAiMenuOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f9f5]/92 backdrop-blur-xl border-b border-[#d9dfd3]">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#17201b]/10"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-semibold text-[#17201b] transition-colors font-[family-name:var(--font-display)] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 rounded-sm whitespace-nowrap flex-none"
          >
            Brett Pollak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {PRIMARY_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-4 py-2 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 whitespace-nowrap border-b-2 ${
                  isActive(href)
                    ? 'text-[#17201b] border-[#c97712] font-semibold'
                    : 'text-[#485248] border-transparent hover:text-[#17201b] hover:border-[#9eb7aa]'
                }`}
              >
                {label}
              </Link>
            ))}

            {/* AI Dropdown */}
            <div className="relative" ref={aiMenuRef}>
              <button
                type="button"
                onClick={() => setAiMenuOpen((v) => !v)}
                aria-haspopup="true"
                aria-expanded={aiMenuOpen}
                className={`px-3 lg:px-4 py-2 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 whitespace-nowrap inline-flex items-center gap-1 border-b-2 ${
                  isActiveInGroup(AI_LINKS)
                    ? 'text-[#17201b] border-[#c97712] font-semibold'
                    : 'text-[#485248] border-transparent hover:text-[#17201b] hover:border-[#9eb7aa]'
                }`}
              >
                AI
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${aiMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
                </svg>
              </button>
              {aiMenuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-60 rounded-sm bg-[#fffef9] border border-[#d9dfd3] shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
                >
                  <div className="px-3 py-2 rule-label border-b border-[#d9dfd3]">
                    AI Projects
                  </div>
                  {AI_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      role="menuitem"
                      onClick={() => setAiMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive(href)
                          ? 'text-[#17201b] bg-[#eef3ea] font-semibold'
                          : 'text-[#485248] hover:text-[#17201b] hover:bg-[#f1f5ee]'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {SECONDARY_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-4 py-2 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 whitespace-nowrap border-b-2 ${
                  isActive(href)
                    ? 'text-[#17201b] border-[#c97712] font-semibold'
                    : 'text-[#485248] border-transparent hover:text-[#17201b] hover:border-[#9eb7aa]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm text-[#17201b] hover:bg-[#eef3ea] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
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
          <div className="md:hidden py-4 border-t border-[#d9dfd3]">
            <div className="flex flex-col space-y-2">
              {PRIMARY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-[#17201b] bg-[#eef3ea]'
                      : 'text-[#485248] hover:text-[#17201b] hover:bg-[#f1f5ee]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* AI subsection — flat list with a subheader */}
              <div className="pt-3 pb-1 px-4 rule-label">
                AI Projects
              </div>
              {AI_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-[#17201b] bg-[#eef3ea]'
                      : 'text-[#485248] hover:text-[#17201b] hover:bg-[#f1f5ee]'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-3 pb-1 px-4 rule-label">
                Connect
              </div>
              {SECONDARY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-[#17201b] bg-[#eef3ea]'
                      : 'text-[#485248] hover:text-[#17201b] hover:bg-[#f1f5ee]'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
