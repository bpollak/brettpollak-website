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
    type: "profile",
  },
};

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
