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
        <div className="mb-12 border-y border-[#d9dfd3] bg-white/75 p-6 shadow-[10px_10px_0_rgba(31,90,138,0.08)]">
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
