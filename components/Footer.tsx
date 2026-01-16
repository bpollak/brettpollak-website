import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-900 via-green-700 to-emerald-500 opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-xl font-bold text-gray-900 mb-4">
              Brett Pollak
            </div>
            <p className="text-gray-600 leading-relaxed">
              Executive Director, Workplace Technology & Infrastructure Services at UC San Diego
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tritongpt" className="text-gray-600 hover:text-green-700 transition-colors">
                  TritonGPT
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-green-700 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-600 hover:text-green-700 transition-colors">
                  Media & Publications
                </Link>
              </li>
              <li>
                <Link href="/linkedin" className="text-gray-600 hover:text-green-700 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Brett Pollak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
