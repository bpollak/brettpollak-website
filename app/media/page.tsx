import { mediaItems } from '@/lib/mediaData';
import type { Metadata } from 'next';
import MediaContent from './MediaContent';

export const metadata: Metadata = {
  title: "Media & Publications | Brett Pollak",
  description: "Featured in 30+ publications including Forbes, CIO.com, EdTech Magazine, and EDUCAUSE Review. Insights on AI implementation, digital transformation, and technology leadership in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/media",
  },
  openGraph: {
    title: "Media & Publications | Brett Pollak",
    description: "Featured in Forbes, CIO.com, EdTech Magazine, EDUCAUSE Review, and 30+ other publications on AI and digital transformation.",
    url: "https://brettcpollak.com/media",
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

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PUBLICATIONS
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Media & Publications</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            Featured in 30+ publications including Forbes, CIO.com, EdTech Magazine, and EDUCAUSE Review
          </p>
        </div>

        <MediaContent />
      </div>
    </div>
  );
}
