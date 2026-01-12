export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/media" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Media & Publications
                </a>
              </li>
              <li>
                <a href="/linkedin" className="text-gray-600 hover:text-gray-900 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/brettpollak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:brettcpollak@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Email
                </a>
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
