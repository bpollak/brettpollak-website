import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { digestEditions, editionDate } from '@/lib/editions';
import { linkDigestHeadlines, renderMarkdown, sanitizePublicDigest } from '@/lib/markdown';
import EditionPage from '@/components/EditionPage';

export const dynamicParams = false;
export function generateStaticParams() { return digestEditions.map(day => ({ date: day.isoDate })); }
export async function generateMetadata({ params }: { params: Promise<{ date: string }> }): Promise<Metadata> {
  const { date } = await params;
  const day = digestEditions.find(day => day.isoDate === date);
  if (!day) notFound();
  return { title: `AI Digest · ${editionDate(date)}`, description: day.headlines.slice(0, 3).join('; '), alternates: { canonical: `https://brettcpollak.com/ai-digest/${date}` } };
}
export default async function DigestEdition({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const day = digestEditions.find(day => day.isoDate === date);
  if (!day) notFound();
  return <EditionPage kind="ai-digest" date={date} dates={digestEditions.map(day => day.isoDate)} html={renderMarkdown(sanitizePublicDigest(linkDigestHeadlines(day.raw)))} />;
}
