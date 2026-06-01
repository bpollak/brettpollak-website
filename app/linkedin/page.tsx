import LinkedInContent from './LinkedInContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Notes | Brett Pollak",
  description: "Recent notes and updates on AI, digital services, and institutional learning in higher education.",
  alternates: {
    canonical: "https://brettcpollak.com/linkedin",
  },
  openGraph: {
    title: "LinkedIn Notes | Brett Pollak",
    description: "Recent notes and updates on AI, digital services, and institutional learning in higher education.",
    url: "https://brettcpollak.com/linkedin",
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
    title: "LinkedIn Notes | Brett Pollak",
    description: "Recent notes and updates on AI, digital services, and institutional learning in higher education.",
    images: ["/brett-pollak-headshot-sit-center.png"],
  },
};

export default function LinkedIn() {
  return <LinkedInContent />;
}
