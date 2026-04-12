'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

type NavLink = { href: string; label: string };

// Primary nav items — everything EXCEPT the AI projects (which go in the dropdown)
const PRIMARY_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/tritongpt', label: 'TritonAI' },
  { href: '/products', label: 'Products' },
  { href: '/media', label: 'Media' },
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
    <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-slate-900 via-blue-900 to-amber-500 opacity-50"></div>
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
            className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent hover:from-slate-800 hover:via-blue-800 hover:to-amber-600 transition-all font-[family-name:var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 rounded whitespace-nowrap flex-none"
            style={{ letterSpacing: '-0.005em' }}
          >
            Brett Pollak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {PRIMARY_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-4 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 whitespace-nowrap ${
                  isActive(href)
                    ? 'text-slate-900 bg-slate-200/50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                className={`px-3 lg:px-4 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 whitespace-nowrap inline-flex items-center gap-1 ${
                  isActiveInGroup(AI_LINKS)
                    ? 'text-slate-900 bg-slate-200/50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-slate-200 shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
                >
                  <div className="px-3 py-2 text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold border-b border-slate-100">
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
                          ? 'text-slate-900 bg-slate-100 font-semibold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
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
                className={`px-3 lg:px-4 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 whitespace-nowrap ${
                  isActive(href)
                    ? 'text-slate-900 bg-slate-200/50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
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
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2">
              {PRIMARY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* AI subsection — flat list with a subheader */}
              <div className="pt-3 pb-1 px-4 text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold">
                AI Projects
              </div>
              {AI_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="pt-3 pb-1 px-4 text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold">
                Connect
              </div>
              {SECONDARY_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
