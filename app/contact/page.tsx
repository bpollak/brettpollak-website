import ContactContent from './ContactContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Brett Pollak",
  description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/contact",
  },
  openGraph: {
    title: "Connect with Brett Pollak",
    description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
    url: "https://brettcpollak.com/contact",
    siteName: "Brett Pollak",
    images: [
      {
        url: "/brett-pollak-og-card.png",
        width: 1200,
        height: 630,
        alt: "Brett Pollak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Brett Pollak",
    description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
    images: ["/brett-pollak-og-card.png"],
  },
};

export default function Contact() {
  return <ContactContent />;
}
