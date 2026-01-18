'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/tritongpt', label: 'TritonGPT' },
    { href: '/products', label: 'Products' },
    { href: '/media', label: 'Media' },
    { href: '/linkedin', label: 'LinkedIn' },
    { href: '/contact', label: 'Contact' },
  ];

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
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent hover:from-slate-800 hover:via-blue-800 hover:to-amber-600 transition-all font-[family-name:var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 rounded" style={{ letterSpacing: '-0.005em' }}>
            Brett Pollak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 ${
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
              {navLinks.map(({ href, label }) => (
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
