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
        url: "/brett-pollak-headshot-sit-center.png",
        width: 500,
        height: 650,
        alt: "Brett Pollak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Brett Pollak",
    description: "Reach out to compare notes on AI, digital services, and institutional learning in higher education.",
    images: ["/brett-pollak-headshot-sit-center.png"],
  },
};

export default function Contact() {
  return <ContactContent />;
}
