import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = "https://brettcpollak.com";
const siteDescription =
  "Brett Pollak builds and governs institutional AI at UC San Diego. Field notes, talks, and practical architecture for AI in higher education, TritonAI, TritonGPT, agentic workflows, and AI governance.";
const siteImage = `${siteUrl}/brett-pollak-headshot-sit-center.png`;
// 1200x630 share card (scripts/generate-og-card.mjs) — link previews crop
// portrait images, so the Person schema keeps the headshot while OG/Twitter
// use the landscape card.
const siteCardImage = `${siteUrl}/brett-pollak-og-card.png`;

// Public profiles that corroborate the Person entity for knowledge-graph
// reconciliation. Only verified profiles belong here.
const sameAsProfiles = [
  "https://www.linkedin.com/in/brettpollak/",
  "https://github.com/bpollak",
  "https://members.educause.edu/brett-pollak",
  "https://asugsvsummit.com/speakers/brett-pollak",
  "https://www.slideshare.net/bpollak",
];

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": `${siteUrl}/`,
      "name": "Brett Pollak",
      "alternateName": "Brett C. Pollak",
      "description": siteDescription,
      "inLanguage": "en-US",
      "publisher": {
        "@id": `${siteUrl}/#person`
      },
      "about": [
        { "@id": `${siteUrl}/#person` },
        { "@id": `${siteUrl}/#tritonai` }
      ],
      "hasPart": [
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/tritongpt#webpage`,
          "url": `${siteUrl}/tritongpt`,
          "name": "TritonAI",
          "description": "Shared AI infrastructure in higher education, including TritonGPT, developer APIs, embedded assistants, and agent-ready workflows."
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/speaking#webpage`,
          "url": `${siteUrl}/speaking`,
          "name": "Speaking",
          "description": "Keynotes, panels, and conference sessions on AI in higher education, institutional AI governance, and agentic workflows."
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/media#webpage`,
          "url": `${siteUrl}/media`,
          "name": "Media and Appearances",
          "description": "Published articles, interviews, awards, whitepapers, and external coverage."
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/ai-agent-architecture#webpage`,
          "url": `${siteUrl}/ai-agent-architecture`,
          "name": "AI Agent Architecture",
          "description": "A practical personal AI architecture using memory, automation, model routing, and institutional context."
        },
        {
          "@type": "WebPage",
          "@id": `${siteUrl}/products#webpage`,
          "url": `${siteUrl}/products`,
          "name": "Products and Innovation",
          "description": "AI-enabled tools and experiments built by Brett Pollak."
        }
      ],
      "sameAs": sameAsProfiles
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Brett Pollak",
      "url": `${siteUrl}/`,
      "image": siteImage,
      "description": "Technology executive at UC San Diego focused on institutional AI, digital services, AI governance, and practical higher education technology adoption.",
      "jobTitle": "Executive Director, Workplace Technology & Infrastructure Services",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "University of California San Diego",
        "url": "https://ucsd.edu/"
      },
      "sameAs": sameAsProfiles,
      "knowsAbout": [
        "AI in higher education",
        "Institutional AI",
        "TritonAI",
        "TritonGPT",
        "Agentic AI workflows",
        "AI governance",
        "Data governance",
        "Higher education technology",
        "Digital transformation",
        "Cloud and web services"
      ]
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#tritonai`,
      "name": "TritonAI",
      "alternateName": "TritonAI Program at UC San Diego",
      "url": `${siteUrl}/tritongpt`,
      "description":
        "UC San Diego's shared AI infrastructure and practice ecosystem, including TritonGPT, developer APIs, embedded assistants, governance, and agent-ready workflows.",
      "parentOrganization": {
        "@type": "EducationalOrganization",
        "name": "University of California San Diego",
        "url": "https://ucsd.edu/"
      }
    }
  ]
};

const interfaceFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-interface",
});

const displayFont = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/media/feed.xml', title: 'Media & Appearances — Brett Pollak' },
        { url: '/ai-digest/feed.xml', title: 'AI Digest — Brett Pollak' },
        { url: '/ucsd-ai-news/feed.xml', title: 'UC San Diego AI Weekly Update' },
      ],
    },
  },
  title: "Brett Pollak | AI in Higher Education",
  description: siteDescription,
  applicationName: "Brett Pollak",
  creator: "Brett Pollak",
  publisher: "Brett Pollak",
  category: "Technology",
  keywords: [
    "Brett Pollak",
    "AI in Higher Education",
    "AI keynote speaker",
    "AI speaker higher education",
    "TritonAI",
    "TritonGPT",
    "agentic AI workflows",
    "institutional AI",
    "vertical AI",
    "AI governance",
    "AI digital transformation",
    "higher education technology",
    "UC San Diego AI",
    "AI infrastructure",
    "citizen developer AI",
    "AI interviews",
    "technology leadership",
  ],
  authors: [{ name: "Brett Pollak" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Brett Pollak | AI in Higher Education",
    description: siteDescription,
    url: siteUrl,
    siteName: "Brett Pollak",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: siteCardImage,
        width: 1200,
        height: 630,
        alt: "Brett Pollak, technology executive focused on AI in higher education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brett Pollak | AI in Higher Education",
    description: siteDescription,
    images: [siteCardImage],
  },
  other: {
    "llms.txt": `${siteUrl}/llms.txt`,
    "ai-content-policy": "Public pages may be indexed, summarized, cited, and used for answer grounding when attribution includes the source URL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interfaceFont.variable} ${displayFont.variable} antialiased`}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
