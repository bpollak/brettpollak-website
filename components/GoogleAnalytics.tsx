/**
 * A GA4 measurement ID is public by design. Declared once here so the tag URL
 * and the config call cannot drift apart; override with
 * NEXT_PUBLIC_GA_MEASUREMENT_ID to point at a different property.
 *
 * Rendered as plain <script> tags (NOT next/script) on purpose: this site is
 * a static export, and next/script's afterInteractive strategy injects at
 * hydration — the gtag library ended up as a <link rel="preload"> with no
 * executing script and GA silently collected nothing (Jan–Sep 2026 outage,
 * diagnosed 2026-09-15). Plain synchronous script tags land in the static
 * HTML and always execute.
 */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-380433232';

export default function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
