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
    { href: '/products', label: 'Products' },
    { href: '/media', label: 'Media' },
    { href: '/linkedin', label: 'LinkedIn' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"></div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-all font-[family-name:var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded" style={{ letterSpacing: '-0.005em' }}>
            Brett Pollak
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 lg:px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                  isActive(href)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50/50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
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
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                    isActive(href)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
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
