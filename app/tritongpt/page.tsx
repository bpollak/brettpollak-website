import TritonGPTContent from './TritonGPTContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TritonAI | Shared AI Infrastructure in Higher Education",
  description: "How UC San Diego is building TritonAI: a shared ecosystem of secure infrastructure, assistants, APIs, tools, and agent-ready workflows grounded in everyday campus work.",
  alternates: {
    canonical: "https://brettcpollak.com/tritongpt",
  },
  openGraph: {
    title: "TritonAI | Shared AI Infrastructure in Higher Education",
    description: "How UC San Diego is building TritonAI through TritonGPT, embedded support, instructional tools, developer APIs, and agent-ready workflows.",
    url: "https://brettcpollak.com/tritongpt",
    images: [
      {
        url: "/tritongpt-uc-san-diego-assistant.png",
        width: 1200,
        height: 800,
        alt: "TritonAI and TritonGPT interface",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "TritonAI | Shared AI Infrastructure in Higher Education",
    description: "How UC San Diego is building TritonAI through TritonGPT, embedded support, instructional tools, developer APIs, and agent-ready workflows.",
    images: ["/tritongpt-uc-san-diego-assistant.png"],
  },
};

export default function TritonGPT() {
  return <TritonGPTContent />;
}
