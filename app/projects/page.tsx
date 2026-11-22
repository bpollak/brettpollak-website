import type { Metadata } from 'next';
import StaticRedirect from '@/components/StaticRedirect';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Redirecting to Projects.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://brettcpollak.com/products',
  },
};

export default function ProjectsRedirectPage() {
  return <StaticRedirect to="/products" label="Projects" />;
}
