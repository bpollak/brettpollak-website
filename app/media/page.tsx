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
      <path d="M68 72h384M68 124h384M68 176h384M68 228h384" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="4 9" />
      {[
        { x: 84, y: 54, w: 178, color: '#1f5a8a', label: 'Articles' },
        { x: 294, y: 106, w: 126, color: '#c97712', label: 'Interviews' },
        { x: 104, y: 158, w: 210, color: '#366c5a', label: 'Speaking' },
        { x: 250, y: 210, w: 156, color: '#c05643', label: 'Recognition' },
      ].map((item) => (
        <g key={item.label}>
          <rect x={item.x} y={item.y} width={item.w} height="36" rx="7" fill="white" stroke="#d9dfd3" strokeWidth="2" />
          <rect x={item.x} y={item.y} width="7" height="36" rx="3.5" fill={item.color} />
          <text x={item.x + 22} y={item.y + 23} fill="#17201b" fontSize="13" fontWeight="700">
            {item.label}
          </text>
        </g>
      ))}
      <circle cx="260" cy="160" r="46" fill="#17201b" />
      <path d="M239 160h42M260 139v42" stroke="#f2b84b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="260" cy="160" r="64" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="5 8" />
      <path d="M262 72c58 6 95 24 112 54M259 248c-62-5-103-25-123-60" stroke="#485248" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10" />
      <circle cx="84" cy="72" r="7" fill="#1f5a8a" />
      <circle cx="420" cy="124" r="7" fill="#c97712" />
      <circle cx="104" cy="176" r="7" fill="#366c5a" />
      <circle cx="406" cy="228" r="7" fill="#c05643" />
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
              <h1 className="text-5xl sm:text-6xl md:text-7xl leading-none font-medium text-[#17201b]">Publication Index</h1>
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
