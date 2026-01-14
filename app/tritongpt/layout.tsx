import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TritonGPT Case Study | Brett Pollak",
  description: "UC San Diego's enterprise AI platform serving 87,000+ users. Learn about the strategic architecture, implementation, and impact of TritonGPT - a locally-hosted vertical AI solution.",
  alternates: {
    canonical: "https://brettcpollak.com/tritongpt",
  },
  openGraph: {
    title: "TritonGPT Case Study | Brett Pollak",
    description: "Enterprise AI strategy and implementation at UC San Diego. 91% time savings, 87,000+ users, and institutional digital sovereignty.",
    url: "https://brettcpollak.com/tritongpt",
  },
};

export default function TritonGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
