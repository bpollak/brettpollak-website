import TritonGPTContent from './TritonGPTContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TritonGPT Case Study | Implementing Vertical AI in Higher Education",
  description: "Discover how UC San Diego built TritonGPT, a secure, locally-hosted AI platform serving 73,000+ users. Explore the architecture, governance, and ROI of institutional AI.",
  alternates: {
    canonical: "https://brettcpollak.com/tritongpt",
  },
  openGraph: {
    title: "TritonGPT Case Study | Implementing Vertical AI in Higher Education",
    description: "Learn about the implementation of TritonGPT at UC San Diego, a secure AI platform for higher education serving over 73,000 users.",
    url: "https://brettcpollak.com/tritongpt",
    images: [
      {
        url: "/tritongpt-uc-san-diego-assistant.png",
        width: 1200,
        height: 800,
        alt: "TritonGPT Interface",
      },
    ],
  },
};

export default function TritonGPT() {
  return <TritonGPTContent />;
}