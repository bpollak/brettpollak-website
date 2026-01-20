import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
});

// Montserrat for brand name and hero headings
// 300 (light) - hero heading
// 600 (semibold) - brand name in header
// 700 (bold) - occasional emphasis
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brettcpollak.com'),
  alternates: {
    canonical: '/',
  },
  title: "Brett Pollak | Technology Executive - AI, Data & Digital Transformation",
  description: "Technology Executive at UC San Diego specializing in Artificial Intelligence, Data, and Digital Transformation. Leading the TritonGPT initiative serving 73,000+ users. Featured in Forbes, CIO.com, and EDUCAUSE Review.",
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
    title: "Brett Pollak | Technology Executive - AI, Data & Digital Transformation",
    description: "Leading AI implementation and digital transformation in higher education. Leading the TritonGPT initiative serving 73,000+ users.",
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
    title: "Brett Pollak | Technology Executive - AI, Data & Digital Transformation",
    description: "Leading AI implementation and digital transformation in higher education. Spearheaded the implementation of TritonGPT serving 73,000+ users.",
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
      <body className={`${inter.className} ${montserrat.variable} antialiased`}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
