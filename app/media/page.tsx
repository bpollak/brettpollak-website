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

function MediaSignalMark() {
  return (
    <svg
      role="img"
      aria-labelledby="media-signal-title media-signal-desc"
      viewBox="0 0 520 320"
      className="h-auto w-full"
      fill="none"
    >
      <title id="media-signal-title">Media signal archive</title>
      <desc id="media-signal-desc">
        A stylized archive showing public writing, speaking, interviews, whitepapers, and recognition.
      </desc>
      <rect x="1" y="1" width="518" height="318" rx="18" fill="#fffef9" stroke="#d9dfd3" strokeWidth="2" />
      {/* dotted connectors route to the core chip edges without crossing labels */}
      {[
        'M170 88 C236 88 232 150 256 150',
        'M170 130 C226 130 232 156 256 156',
        'M350 190 C300 190 288 162 264 162',
        'M350 232 C296 232 288 168 264 168',
      ].map((d) => (
        <path
          key={d}
          className="flow-path"
          d={d}
          stroke="#485248"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {[
        { x: 60, y: 70, color: '#1f5a8a', label: 'Articles' },
        { x: 60, y: 112, color: '#366c5a', label: 'Speaking' },
        { x: 340, y: 172, color: '#c97712', label: 'Interviews' },
        { x: 340, y: 214, color: '#c05643', label: 'Recognition' },
      ].map((item) => (
        <g key={item.label}>
          <rect x={item.x} y={item.y} width="120" height="36" rx="7" fill="white" stroke="#d9dfd3" strokeWidth="2" />
          <rect x={item.x} y={item.y} width="7" height="36" rx="3.5" fill={item.color} />
          <text x={item.x + 22} y={item.y + 23} fill="#17201b" fontSize="13" fontWeight="700">
            {item.label}
          </text>
        </g>
      ))}
      {/* opaque core chip, drawn last so no connector crosses its text */}
      <circle cx="260" cy="159" r="62" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="5 8" />
      <rect x="220" y="141" width="80" height="36" rx="8" fill="#17201b" />
      <text x="260" y="164" fill="#f2b84b" fontSize="13" fontWeight="700" textAnchor="middle">
        Index
      </text>
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
        <div className="mb-12 grid gap-8 border-y border-[#d9dfd3] bg-white/75 p-6 shadow-[10px_10px_0_rgba(31,90,138,0.08)] lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
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
          <div className="border border-[#d9dfd3] bg-[#f7f9f5] p-3">
            <MediaSignalMark />
          </div>
        </div>

        <MediaContent />
      </div>
    </div>
  );
}
