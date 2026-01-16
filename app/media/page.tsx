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
          <div className="inline-block px-4 py-1.5 bg-green-50 text-green-800 text-sm font-semibold rounded-full mb-6">
            PUBLICATIONS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-900 via-green-700 to-emerald-600 bg-clip-text text-transparent mb-6 tracking-tight">Media & Publications</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
            Featured in 30+ publications including Forbes, CIO.com, EdTech Magazine, and EDUCAUSE Review
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform md:-translate-x-1/2 hidden sm:block"></div>

          {Object.keys(itemsByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year, yearIdx) => {
              const yearGradients = [
                'from-emerald-600 to-green-700',
                'from-blue-600 to-indigo-700',
                'from-purple-600 to-fuchsia-700',
                'from-orange-500 to-rose-600',
                'from-cyan-500 to-blue-600'
              ];
              const yearGradient = yearGradients[yearIdx % yearGradients.length];

              return (
                <div key={year} className="mb-16 relative">
                  {/* Year marker on timeline */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="relative z-10">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${yearGradient} rounded-full opacity-20 blur-xl animate-pulse-glow`}></div>
                      <div className={`relative bg-gradient-to-r ${yearGradient} text-white px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-transform cursor-default`}>
                        <h2 className="text-4xl font-bold tracking-tight">{year}</h2>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80 mt-1">{itemsByYear[Number(year)].length} publication{itemsByYear[Number(year)].length !== 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </div>

                  {/* Publications for this year */}
                  <div className="space-y-12">
                    {itemsByYear[Number(year)].map((item, index) => {
                      const isLeft = index % 2 === 0;
                      
                      // Vibrant color cycle for items
                      const colorCycle = [
                        { from: 'from-green-600', to: 'to-emerald-500', text: 'text-green-600', border: 'hover:border-green-500', badge: 'bg-green-100 text-green-800', hoverBg: 'hover:bg-green-50/30' },
                        { from: 'from-blue-600', to: 'to-cyan-500', text: 'text-blue-600', border: 'hover:border-blue-500', badge: 'bg-blue-100 text-blue-800', hoverBg: 'hover:bg-blue-50/30' },
                        { from: 'from-purple-600', to: 'to-pink-500', text: 'text-purple-600', border: 'hover:border-purple-500', badge: 'bg-purple-100 text-purple-800', hoverBg: 'hover:bg-purple-50/30' },
                        { from: 'from-orange-500', to: 'to-amber-400', text: 'text-orange-600', border: 'hover:border-orange-500', badge: 'bg-orange-100 text-orange-800', hoverBg: 'hover:bg-orange-50/30' },
                        { from: 'from-rose-500', to: 'to-pink-500', text: 'text-rose-600', border: 'hover:border-rose-500', badge: 'bg-rose-100 text-rose-800', hoverBg: 'hover:bg-rose-50/30' },
                        { from: 'from-indigo-600', to: 'to-blue-500', text: 'text-indigo-600', border: 'hover:border-indigo-500', badge: 'bg-indigo-100 text-indigo-800', hoverBg: 'hover:bg-indigo-50/30' },
                      ];
                      const color = colorCycle[(index + yearIdx) % colorCycle.length];

                      return (
                        <div
                          key={index}
                          className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 group/item`}
                        >
                          {/* Timeline dot */}
                          <div className="hidden sm:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                            <div className="relative">
                              <div className={`w-5 h-5 bg-gradient-to-br ${color.from} ${color.to} rounded-full ring-4 ring-white shadow-lg group-hover/item:scale-125 transition-transform duration-300`}></div>
                              <div className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to} rounded-full animate-ping opacity-20`}></div>
                            </div>
                          </div>

                          {/* Content card */}
                          <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                            <div className={`group relative bg-white p-8 rounded-2xl border-2 border-gray-100 ${color.border} ${color.hoverBg} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d`}>
                              {/* Connector line to timeline */}
                              <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-10 h-0.5 bg-gradient-to-r ${isLeft ? `${color.from.replace('from-', 'to-')} to-transparent` : `from-transparent ${color.to.replace('to-', 'from-')}`} opacity-30 group-hover/item:opacity-100 transition-opacity`}></div>

                              {/* Category badge */}
                              <div className={`inline-block px-4 py-1 ${color.badge} text-[10px] font-black rounded-full mb-4 uppercase tracking-widest`}>
                                {item.category}
                              </div>

                              <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${color.text} transition-colors leading-tight`}>
                                {item.url !== '#' ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 group/link"
                                  >
                                    <span className="relative">
                                      {item.title}
                                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full opacity-30`}></span>
                                    </span>
                                    <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                ) : (
                                  item.title
                                )}
                              </h3>

                              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <div className={`p-1.5 rounded-lg ${color.badge.split(' ')[0]} bg-opacity-50`}>
                                    <svg className={`w-4 h-4 ${color.text}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="font-semibold tracking-wide uppercase text-[11px] text-gray-400">{formatDate(item.date)}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <div className={`p-1.5 rounded-lg ${color.badge.split(' ')[0]} bg-opacity-50`}>
                                    <svg className={`w-4 h-4 ${color.text}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                    </svg>
                                  </div>
                                  <span className="font-bold text-gray-700">{item.publication}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Spacer for alternating layout */}
                          <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 rounded-2xl p-12 text-center overflow-hidden mt-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 bg-clip-text text-transparent mb-6">Speaking Engagements</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Available for keynotes, panels, and workshops on AI in higher education, digital transformation, and technology leadership.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-50 text-blue-800 px-10 py-4 font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
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