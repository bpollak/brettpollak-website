'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface StaticRedirectProps {
  to: string;
  label: string;
}

export default function StaticRedirect({ to, label }: StaticRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <main className="page-shell" id="main-content" tabIndex={-1}>
        <section className="page-hero">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="rule-label mb-4">Redirecting</p>
            <h1 className="page-title mb-4">Moving to {label}</h1>
            <p className="page-intro mb-8">
              If you are not redirected automatically, continue to the {label} page.
            </p>
            <Link href={to} className="button-primary">
              Go to {label} →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
