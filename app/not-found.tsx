import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Brett Pollak' },
  description: 'That page does not exist. Links to the main sections of the site.',
  robots: { index: false, follow: true },
};

/**
 * Static export serves this as out/404.html, which GitHub Pages uses for any
 * unmatched path. Without it visitors got the unbranded Next.js 404 with no way
 * back into the site.
 */
const DESTINATIONS = [
  { href: '/tritongpt', label: 'TritonAI', body: 'The institutional AI program at UC San Diego.' },
  { href: '/speaking', label: 'Speaking', body: 'Topics, recent engagements, and how to get in touch.' },
  { href: '/media', label: 'Media & Publications', body: 'The full index of articles, interviews, and talks.' },
  { href: '/products', label: 'Products', body: 'Things built, shipped, and in progress.' },
  { href: '/ai-digest', label: 'AI Digest', body: 'A weekly roundup of AI developments worth knowing.' },
  { href: '/now', label: 'Now', body: 'What the current focus actually is.' },
];

export default function NotFound() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">404</p>
          <h1 className="page-title mb-6">This page doesn&rsquo;t exist</h1>
          <p className="page-intro">
            The link may be out of date, or the address may have a typo. Everything
            below still works.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map(({ href, label, body }) => (
            <Link
              key={href}
              href={href}
              className="editorial-panel p-7 transition-colors hover:border-signal-blue group"
            >
              <h2 className="text-lg font-semibold text-ink mb-2 transition-colors group-hover:text-signal-blue">
                {label}
              </h2>
              <p className="text-sm leading-relaxed text-body">{body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 font-bold rounded-sm hover:bg-signal-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-signal-gold"
          >
            Back to the home page
          </Link>
        </div>
      </div>
    </main>
  );
}
