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
  },
  twitter: {
    card: "summary",
    title: "LinkedIn Notes | Brett Pollak",
    description: "Recent notes and updates on AI, digital services, and institutional learning in higher education.",
  },
};

export default function LinkedIn() {
  return <LinkedInContent />;
}
