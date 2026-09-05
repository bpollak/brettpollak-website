import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { newsletterEditions, editionDate } from '@/lib/editions';
import { newsletterForWeb, renderMarkdown } from '@/lib/markdown';
import EditionPage from '@/components/EditionPage';

export const dynamicParams = false;
export function generateStaticParams() { return newsletterEditions.map(edition => ({ date: edition.isoDate })); }
export async function generateMetadata({ params }: { params: Promise<{ date: string }> }): Promise<Metadata> {
  const { date } = await params;
  if (!newsletterEditions.some(edition => edition.isoDate === date)) notFound();
  return { title: `UC San Diego AI Weekly · ${editionDate(date)}`, description: 'Campus AI tool updates, TritonAI news, and training opportunities for this edition.', alternates: { canonical: `https://brettcpollak.com/ucsd-ai-news/${date}` } };
}
export default async function NewsletterEdition({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const edition = newsletterEditions.find(edition => edition.isoDate === date);
  if (!edition) notFound();
  return <EditionPage kind="ucsd-ai-news" date={date} dates={newsletterEditions.map(edition => edition.isoDate)} html={renderMarkdown(newsletterForWeb(edition.raw))} />;
}
