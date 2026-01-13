import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn | Brett Pollak - Insights & Updates",
  description: "Recent insights and updates from Brett Pollak on AI implementation, digital transformation, and technology leadership in higher education. Connect on LinkedIn for more.",
  alternates: {
    canonical: "https://bpollak.github.io/brettpollak-website/linkedin",
  },
  openGraph: {
    title: "LinkedIn | Brett Pollak - Insights & Updates",
    description: "Recent insights and updates from Brett Pollak on AI implementation, digital transformation, and technology leadership in higher education.",
    url: "https://bpollak.github.io/brettpollak-website/linkedin",
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
