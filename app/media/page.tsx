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

        {/* Timeline visualization */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-600 via-pink-500 to-purple-600 transform md:-translate-x-1/2 hidden sm:block"></div>

          {Object.keys(itemsByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year, yearIndex) => (
              <div key={year} className="mb-16 relative">
                {/* Year marker on timeline */}
                <div className="flex items-center justify-center mb-12">
                  <div className="relative z-10">
                    <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
                    <div className="relative bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl">
                      <div className="text-4xl font-bold">{year}</div>
                      <div className="text-sm opacity-90">{itemsByYear[Number(year)].length} publication{itemsByYear[Number(year)].length !== 1 ? 's' : ''}</div>
                    </div>
                  </div>
                </div>

                {/* Publications for this year */}
                <div className="space-y-8">
                  {itemsByYear[Number(year)].map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                      <div
                        key={index}
                        className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                      >
                        {/* Timeline dot */}
                        <div className="hidden sm:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                          <div className="relative">
                            <div className="w-4 h-4 bg-gradient-to-br from-rose-600 to-purple-600 rounded-full ring-4 ring-white shadow-lg"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
                          </div>
                        </div>

                        {/* Content card */}
                        <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                          <div className="group relative bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-rose-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            {/* Connector line to timeline */}
                            <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-8 h-0.5 bg-gradient-to-r ${isLeft ? 'from-rose-500 to-transparent' : 'from-transparent to-rose-500'}`}></div>

                            {/* Category badge */}
                            <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-100 to-purple-100 text-rose-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                              {item.category}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                              {item.url !== '#' ? (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  {item.title}
                                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              ) : (
                                item.title
                              )}
                            </h3>

                            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                              <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="font-medium">{formatDate(item.date)}</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                              </svg>
                              <span className="font-semibold">{item.publication}</span>
                            </div>
                          </div>
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>

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
