import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://brettcpollak.com'),
  alternates: {
    canonical: '/',
  },
  title: "Brett Pollak | AI in Higher Education",
  description: "Notes and conversations about building useful, responsible AI in higher education, informed by work at UC San Diego and TritonGPT.",
  keywords: ["Brett Pollak", "AI in Higher Education", "Digital Transformation", "TritonGPT", "UC San Diego", "Data Governance", "Technology Leadership", "Artificial Intelligence"],
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
    <html lang="en">
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
