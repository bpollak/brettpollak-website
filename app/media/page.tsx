import { mediaItems, type MediaItem } from '@/lib/mediaData';
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

const FORMAT_META: { key: MediaItem['category']; label: string; color: string }[] = [
  { key: 'article', label: 'Articles', color: '#1f5a8a' },
  { key: 'speaking', label: 'Speaking', color: '#b8503f' },
  { key: 'whitepaper', label: 'Whitepapers', color: '#366c5a' },
  { key: 'interview', label: 'Interviews', color: '#c97712' },
  { key: 'award', label: 'Awards', color: '#5b4a86' },
];

// Data-driven archive graphic: format breakdown (bars) + activity-by-year
// timeline (columns), computed from mediaItems so it stays accurate as the
// record grows. Nothing here is hand-tuned — add an item to mediaData and the
// chart recomputes on the next build.
function MediaArchiveChart() {
  const total = mediaItems.length;

  const formats = FORMAT_META.map((meta) => ({
    ...meta,
    count: mediaItems.filter((item) => item.category === meta.key).length,
  })).filter((f) => f.count > 0);
  const maxFormat = Math.max(...formats.map((f) => f.count), 1);

  const years = mediaItems.map((item) => Number(item.date.slice(0, 4)));
  const firstYear = Math.min(...years);
  const lastYear = Math.max(...years);
  const yearSpan: { year: number; count: number }[] = [];
  for (let y = firstYear; y <= lastYear; y += 1) {
    yearSpan.push({ year: y, count: years.filter((v) => v === y).length });
  }
  const maxYear = Math.max(...yearSpan.map((y) => y.count), 1);

  // layout — derive the timeline position from the format bars so the two
  // sections never overlap, no matter how many format rows are present.
  const W = 520;
  const barX = 132;
  const barMaxW = 312;
  const barTop = 78;
  const barStep = 34;
  const barH = 20;
  const formatsEnd = barTop + (formats.length - 1) * barStep + barH;
  const colTop = formatsEnd + 54;
  const colArea = 70;
  const colBottom = colTop + colArea;
  const colGap = 4;
  const colW = (444 - (yearSpan.length - 1) * colGap) / yearSpan.length;
  const svgH = colBottom + 28;

  return (
    <svg
      role="img"
      aria-labelledby="media-chart-title media-chart-desc"
      viewBox={`0 0 ${W} ${svgH}`}
      className="h-auto w-full"
      fill="none"
    >
      <title id="media-chart-title">Publication record by format and year</title>
      <desc id="media-chart-desc">
        {`${total} indexed items from ${firstYear} to ${lastYear}: `}
        {formats.map((f) => `${f.count} ${f.label.toLowerCase()}`).join(', ')}.
      </desc>
      <rect x="1" y="1" width={W - 2} height={svgH - 2} rx="16" fill="#fffef9" stroke="#d9dfd3" strokeWidth="2" />

      {/* header */}
      <text x="28" y="38" fill="#7a8479" fontSize="11" fontWeight="700" letterSpacing="2">
        THE RECORD BY FORMAT
      </text>
      <line x1="28" y1="52" x2={W - 28} y2="52" stroke="#d9dfd3" strokeWidth="1.5" />

      {/* format bars */}
      {formats.map((f, i) => {
        const y = barTop + i * barStep;
        const w = Math.max(6, Math.round((barMaxW * f.count) / maxFormat));
        return (
          <g key={f.key}>
            <text x={barX - 12} y={y + 15} textAnchor="end" fill="#17201b" fontSize="12.5" fontWeight="600">
              {f.label}
            </text>
            <rect x={barX} y={y} width={barMaxW} height="20" rx="4" fill="#eef1ec" />
            <rect className="grow-bar" x={barX} y={y} width={w} height="20" rx="4" fill={f.color} />
            <text x={barX + w + 9} y={y + 15} fill="#17201b" fontSize="12.5" fontWeight="700" fontFamily="monospace">
              {f.count}
            </text>
          </g>
        );
      })}

      {/* timeline header */}
      <text x="28" y={colTop - 24} fill="#7a8479" fontSize="11" fontWeight="700" letterSpacing="2">
        ACTIVITY BY YEAR
      </text>
      <line x1="28" y1={colTop - 12} x2={W - 28} y2={colTop - 12} stroke="#d9dfd3" strokeWidth="1.5" />

      {/* year columns */}
      <line x1="38" y1={colBottom} x2={W - 38} y2={colBottom} stroke="#d9dfd3" strokeWidth="1.5" />
      {yearSpan.map((yr, i) => {
        const h = Math.max(3, Math.round((colArea * yr.count) / maxYear));
        const x = 38 + i * (colW + colGap);
        const isEdge = yr.year === firstYear || yr.year === lastYear;
        return (
          <g key={yr.year}>
            <rect x={x} y={colBottom - h} width={colW} height={h} rx="2" fill={isEdge ? '#17201b' : '#9eb7aa'} />
            {isEdge && (
              <text x={x + colW / 2} y={colBottom + 16} textAnchor="middle" fill="#7a8479" fontSize="10" fontWeight="600" fontFamily="monospace">
                {`'${String(yr.year).slice(2)}`}
              </text>
            )}
          </g>
        );
      })}
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
          <div className="diagram border border-[#d9dfd3] bg-[#f7f9f5] p-3">
            <MediaArchiveChart />
          </div>
        </div>

        <MediaContent />
      </div>
    </div>
  );
}
