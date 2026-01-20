import LinkedInContent from './LinkedInContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Updates | Brett Pollak",
  description: "Stay updated with the latest insights on AI implementation, technology leadership, and higher education digital transformation from Brett Pollak's LinkedIn.",
  alternates: {
    canonical: "https://brettcpollak.com/linkedin",
  },
  openGraph: {
    title: "LinkedIn Updates | Brett Pollak",
    description: "Insights on AI leadership and digital transformation in higher education.",
    url: "https://brettcpollak.com/linkedin",
  },
};

export default function LinkedIn() {
  return <LinkedInContent />;
}