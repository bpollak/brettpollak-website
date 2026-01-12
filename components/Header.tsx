'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50"></div>
      <nav className="max-w-7xl mx-auto px-6">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700 transition-all font-[family-name:var(--font-montserrat)] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded" style={{ letterSpacing: '-0.005em' }}>
            Brett Pollak
          </Link>
          <div className="flex items-center space-x-2">
            <Link
              href="/about"
              className={`px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                isActive('/about')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              About
            </Link>
            <Link
              href="/products"
              className={`px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                isActive('/products')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              Products
            </Link>
            <Link
              href="/media"
              className={`px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                isActive('/media')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              Media
            </Link>
            <Link
              href="/linkedin"
              className={`px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                isActive('/linkedin')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              LinkedIn
            </Link>
            <Link
              href="/contact"
              className={`px-5 py-2 font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
                isActive('/contact')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50/50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
