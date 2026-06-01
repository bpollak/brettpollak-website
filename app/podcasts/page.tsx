import type { Metadata } from 'next';
import PodcastsContent from './PodcastsContent';

export const metadata: Metadata = {
  title: "Podcast Discovery | Brett Pollak",
  description: "Discover and share your favorite podcasts on AI, technology, economics, and more. Featuring Brett's curated picks and community recommendations.",
  alternates: {
    canonical: "https://brettcpollak.com/podcasts",
  },
  openGraph: {
    title: "Podcast Discovery | Brett Pollak",
    description: "Discover and share your favorite podcasts on AI, technology, economics, and more.",
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
    description: "Discover and share your favorite podcasts on AI, technology, economics, and more.",
    images: ["/images/podcasts/ai-daily-brief.webp"],
  },
};

export default function Podcasts() {
  return (
    <div className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Podcast Discovery</p>
          <h1 className="page-title mb-6">Podcast Discovery</h1>
          <p className="page-intro">
            My curated picks and community recommendations on AI, technology, and the forces shaping our world. Share yours too.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <PodcastsContent />
      </div>
    </div>
  );
}
