import type { Metadata } from 'next';
import PodcastsContent from './PodcastsContent';

export const metadata: Metadata = {
  title: "Podcast Discovery",
  description: "Brett's curated podcast picks and community recommendations on AI, technology, and economics.",
  alternates: {
    canonical: "https://brettcpollak.com/podcasts",
  },
  openGraph: {
    title: "Podcast Discovery | Brett Pollak",
    description: "Brett's curated podcast picks and community recommendations on AI, technology, and economics.",
    url: "https://brettcpollak.com/podcasts",
    siteName: "Brett Pollak",
    images: [
      {
        url: "/images/podcasts/ai-daily-brief.webp",
        width: 1200,
        height: 1200,
        alt: "Podcast discovery recommendations for AI, technology, and economics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Discovery | Brett Pollak",
    description: "Brett's curated podcast picks and community recommendations on AI, technology, and economics.",
    images: ["/images/podcasts/ai-daily-brief.webp"],
  },
};

export default function Podcasts() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Podcast Discovery</p>
          <h1 className="page-title mb-6">Podcast Discovery</h1>
          <p className="page-intro">
            My curated picks and community recommendations on AI, technology, and economics. Share yours too.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <PodcastsContent />
      </div>
    </main>
  );
}
