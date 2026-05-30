import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Self-hosted fonts (next/font/local) — no build-time network dependency.
// Display face for oversized headers (single weight 400).
const displayFont = localFont({
  src: "./fonts/Anton-Regular.woff2",
  weight: "400",
  variable: "--font-montserrat",
  display: "swap",
});

// Body face (variable weight).
const bodyFont = localFont({
  src: "./fonts/Inter-Variable.woff2",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});

// Mono face for eyebrows, labels, and stats (variable weight).
const monoFont = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  weight: "100 800",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brettcpollak.com'),
  alternates: {
    canonical: '/',
  },
  title: "Brett Pollak | AI in Higher Education — Speaker, Author, Executive",
  description: "Brett Pollak builds and governs institutional AI at UC San Diego. Keynote speaker on AI in higher education, agentic workflows, and vertical AI deployment. Creator of TritonAI and TritonGPT.",
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Brett Pollak | AI in Higher Education",
    description: "Notes and conversations about building useful, responsible AI in higher education, informed by work at UC San Diego and TritonGPT.",
    url: "https://brettcpollak.com",
    siteName: "Brett Pollak",
    type: "profile",
    images: [
      {
        url: "/brett-pollak-headshot-sit-center.png",
        width: 500,
        height: 650,
        alt: "Brett Pollak - Technology Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brett Pollak | AI in Higher Education",
    description: "Notes and conversations about building useful, responsible AI in higher education, informed by work at UC San Diego and TritonGPT.",
    images: ["/brett-pollak-headshot-sit-center.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
