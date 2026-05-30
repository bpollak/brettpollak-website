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
    <div className="min-h-screen bg-paper" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="eyebrow mb-6">
            MEDIA & APPEARANCES
          </div>
          <h1 className="display-title display-title--xl mb-6">Media & Appearances</h1>
          <div className="divider-accent w-24 mb-8"></div>
          <p className="text-xl sm:text-2xl text-muted max-w-3xl leading-relaxed">
            Articles, interviews, speaking engagements, whitepapers, and awards covering AI strategy, institutional transformation, and technology leadership in higher education
          </p>
        </div>

        <MediaContent />
      </div>
    </div>
  );
}
