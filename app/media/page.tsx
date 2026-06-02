import { mediaItems } from '@/lib/mediaData';
import type { Metadata } from 'next';
import MediaContent from './MediaContent';

export const metadata: Metadata = {
  title: "Media & Appearances | Brett Pollak — AI in Higher Education",
  description: "Brett Pollak's published articles, interviews, speaking engagements, whitepapers, and awards on AI strategy, institutional transformation, and technology leadership in higher education — Forbes, CIO.com, EdTech Magazine, EDUCAUSE, Ithaka S+R, NACUBO, and more.",
  keywords: [
    "Brett Pollak articles",
    "Brett Pollak interviews",
    "Brett Pollak publications",
    "AI in higher education articles",
    "TritonAI press",
    "TritonGPT coverage",
    "AI governance publications",
    "agentic AI higher education",
    "institutional AI press",
    "Forbes AI higher education",
    "CIO.com AI university",
    "EDUCAUSE AI",
  ],
  alternates: {
    canonical: "https://brettcpollak.com/media",
  },
  openGraph: {
    title: "Media & Appearances | Brett Pollak — AI in Higher Education",
    description: "Brett Pollak's articles, interviews, speaking engagements, whitepapers, and awards on AI strategy, institutional transformation, and technology leadership in higher education.",
    url: "https://brettcpollak.com/media",
    images: [
      {
        url: "/brett-pollak-headshot-sit-center.png",
        width: 500,
        height: 650,
        alt: "Brett Pollak — AI in Higher Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Appearances | Brett Pollak — AI in Higher Education",
    description: "Articles, interviews, speaking engagements, whitepapers, and awards on AI in higher education — Brett Pollak.",
    images: ["/brett-pollak-headshot-sit-center.png"],
  },
};

function MediaCornerMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 130"
      className="h-auto w-full"
      fill="none"
    >
      <rect x="28" y="20" width="78" height="90" rx="7" fill="#fffef9" stroke="#d9dfd3" strokeWidth="2" />
      <rect x="38" y="34" width="48" height="5" rx="2.5" fill="#1f5a8a" />
      <rect x="38" y="50" width="58" height="4" rx="2" fill="#9eb7aa" />
      <rect x="38" y="64" width="44" height="4" rx="2" fill="#9eb7aa" />
      <rect x="38" y="78" width="52" height="4" rx="2" fill="#d9dfd3" />
      <path d="M108 55 C123 55 130 66 139 75" stroke="#485248" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 8" />
      <path d="M108 86 C122 86 129 79 139 72" stroke="#485248" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 8" />
      <circle cx="141" cy="55" r="15" fill="#f7f9f5" stroke="#d9dfd3" strokeWidth="2" />
      <path d="M141 47 v12" stroke="#366c5a" strokeWidth="4" strokeLinecap="round" />
      <path d="M133 59 c2 7 14 7 16 0" stroke="#366c5a" strokeWidth="3" strokeLinecap="round" />
      <path d="M141 66 v8" stroke="#366c5a" strokeWidth="3" strokeLinecap="round" />
      <path d="M134 74 h14" stroke="#366c5a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="143" cy="92" r="14" fill="#fff5e7" stroke="#dfbf8b" strokeWidth="2" />
      <path
        d="M143 82.5 l2.7 5.4 6 .9 -4.3 4.2 1 5.9 -5.4-2.8 -5.4 2.8 1-5.9 -4.3-4.2 6-.9z"
        fill="#c97712"
      />
      <path d="M129 103 l-4 12 10 -5 8 7 4 -14" stroke="#c05643" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Media() {
  // Sort by date (most recent first) for schema
  const sortedItems = [...mediaItems].sort((a, b) => b.date.localeCompare(a.date));
  const speakingCount = sortedItems.filter((item) => item.category === 'speaking').length;
  const firstYear = Math.min(...sortedItems.map((item) => Number(item.date.slice(0, 4))));
  const latestYear = Math.max(...sortedItems.map((item) => Number(item.date.slice(0, 4))));

  // Create ItemList schema for all media items (for SEO)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": sortedItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": item.category === 'article' || item.category === 'interview' ? "NewsArticle" : "CreativeWork",
        "headline": item.title,
        "url": item.url,
        "datePublished": item.date,
        "author": {
          "@type": "Person",
          "name": "Brett Pollak",
          "url": "https://brettcpollak.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": item.publication
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": item.url
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://brettcpollak.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Media & Appearances",
        "item": "https://brettcpollak.com/media"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f7f9f5] text-[#17201b]" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative mb-12 overflow-hidden border-y border-[#d9dfd3] bg-white/75 p-6 shadow-[10px_10px_0_rgba(31,90,138,0.08)]">
          <div className="pointer-events-none absolute right-6 top-6 hidden w-40 opacity-90 lg:block xl:w-48">
            <MediaCornerMark />
          </div>
          <div className="space-y-8">
            <div>
              <p className="rule-label mb-5">Media and appearances</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl leading-none font-medium text-[#17201b]">Publication Index</h1>
            </div>
            <p className="text-xl sm:text-2xl text-[#485248] max-w-3xl leading-9">
              Articles, interviews, speaking engagements, whitepapers, and awards covering AI strategy, institutional transformation, and technology leadership in higher education.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Indexed items', value: sortedItems.length },
                { label: 'Talks and sessions', value: speakingCount },
                { label: 'Coverage span', value: `${firstYear}-${latestYear}` },
              ].map((stat) => (
                <div key={stat.label} className="border border-[#d9dfd3] bg-[#fffef9] p-4">
                  <p className="font-mono text-2xl text-[#17201b]">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8479]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MediaContent />
      </div>
    </div>
  );
}
