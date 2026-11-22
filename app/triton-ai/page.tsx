import type { Metadata } from 'next';
import StaticRedirect from '@/components/StaticRedirect';

export const metadata: Metadata = {
  title: 'TritonAI',
  description: 'Redirecting to TritonAI.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://brettcpollak.com/tritongpt',
  },
};

export default function TritonAIHyphenRedirectPage() {
  return <StaticRedirect to="/tritongpt" label="TritonAI" />;
}
