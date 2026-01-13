import type { Metadata } from "next";
import { Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '700', '800', '900'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bpollak.github.io/brettpollak-website'),
  title: "Brett Pollak | Technology Executive - AI, Data & Digital Transformation",
  description: "Technology Executive at UC San Diego specializing in Artificial Intelligence, Data, and Digital Transformation. Creator of TritonGPT serving 100,000+ users. Featured in Forbes, CIO.com, and EDUCAUSE Review.",
  keywords: ["Brett Pollak", "AI in Higher Education", "Digital Transformation", "TritonGPT", "UC San Diego", "Data Governance", "Technology Leadership", "Artificial Intelligence"],
  authors: [{ name: "Brett Pollak" }],
  openGraph: {
    title: "Brett Pollak | Technology Executive - AI, Data & Digital Transformation",
    description: "Leading AI implementation and digital transformation in higher education. Creator of TritonGPT serving 100,000+ users.",
    url: "https://bpollak.github.io/brettpollak-website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable} ${plusJakarta.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
