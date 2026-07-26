'use client';

import Script from 'next/script';

/**
 * A GA4 measurement ID is public by design. Declared once here so the tag URL
 * and the config call cannot drift apart; override with
 * NEXT_PUBLIC_GA_MEASUREMENT_ID to point at a different property.
 */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-380433232';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
