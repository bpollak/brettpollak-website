import { mediaItems } from '@/lib/mediaData';
import type { Metadata } from 'next';

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
  // Sort by date (most recent first)
  const sortedItems = [...mediaItems].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Create ItemList schema for all media items
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

  // Group by year
  const itemsByYear = sortedItems.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<number, typeof mediaItems>);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full mb-6">
            PUBLICATIONS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">Media & Publications</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Featured in 30+ publications including Forbes, CIO.com, EdTech Magazine, and EDUCAUSE Review
          </p>
        </div>

        {Object.keys(itemsByYear)
          .sort((a, b) => Number(b) - Number(a))
          .map(year => (
            <div key={year} className="mb-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="text-5xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">{year}</div>
                <div className="flex-1 h-px bg-gradient-to-r from-rose-600 via-pink-500 to-transparent"></div>
              </div>
              <div className="grid gap-8">
                {itemsByYear[Number(year)].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-rose-500 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                      {item.url !== '#' ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {item.title}
                          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium mb-2">{item.publication}</p>
                    <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        <div className="relative bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 rounded-2xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-100 via-purple-100 to-rose-100 bg-clip-text text-transparent mb-6">Speaking Engagements</h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Available for keynotes, panels, and workshops on AI in higher education, digital transformation, and technology leadership.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-50 text-rose-600 px-10 py-4 font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl rounded-lg group"
            >
              Inquire About Speaking
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
