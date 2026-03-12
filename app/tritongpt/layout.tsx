import type { Metadata } from 'next';
import ReadingProgress from '@/components/ReadingProgress';

export const metadata: Metadata = {
  title: "TritonAI | Brett Pollak",
  description: "A closer look at TritonAI at UC San Diego: secure infrastructure, embedded AI support, instructional tools, developer APIs, and the shift toward agent-ready workflows.",
  alternates: {
    canonical: "https://brettcpollak.com/tritongpt",
  },
  openGraph: {
    title: "TritonAI | Brett Pollak",
    description: "Notes on how UC San Diego is building shared AI infrastructure through TritonAI, with TritonGPT as a secure platform foundation.",
    url: "https://brettcpollak.com/tritongpt",
  },
};

export default function TritonGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
