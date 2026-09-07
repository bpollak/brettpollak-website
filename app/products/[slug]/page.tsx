import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectWalkthroughs } from '@/lib/projectWalkthroughs';
import { SITE_URL } from '@/lib/seoDates';

export const dynamicParams = false;
export function generateStaticParams() {
  return projectWalkthroughs.map(project => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectWalkthroughs.find(item => item.slug === slug);
  if (!project) notFound();
  const url = `${SITE_URL}/products/${slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: { title: `${project.title} | Brett Pollak`, description: project.description, url, type: 'article' },
  };
}

export default async function ProjectWalkthrough({ params }: Props) {
  const { slug } = await params;
  const project = projectWalkthroughs.find(item => item.slug === slug);
  if (!project) notFound();
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Link href="/products" className="text-sm font-semibold text-signal-blue underline underline-offset-4">All projects</Link>
        <header className="mt-8 border-y border-line py-10">
          <p className="rule-label mb-5">{project.category}</p>
          <h1 className="max-w-4xl text-4xl font-medium leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 inline-block border border-line bg-wash-green px-3 py-2 text-sm font-semibold text-signal-green">{project.status}</p>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-body">{project.description}</p>
        </header>
        <section aria-labelledby="purpose-heading" className="grid gap-8 border-b border-line py-10 md:grid-cols-[0.5fr_1fr]">
          <h2 id="purpose-heading" className="text-3xl font-medium">Why I built it</h2>
          <p className="text-lg leading-8 text-body">{project.purpose}</p>
        </section>
        <section aria-labelledby="workflow-heading" className="py-10">
          <p className="rule-label mb-4">Walkthrough</p>
          <h2 id="workflow-heading" className="text-3xl font-medium">How the workflow fits together</h2>
          <p className="mt-4 text-body">A process overview, illustrated below with a fictional scenario.</p>
          <ol className="mt-7 grid gap-5 md:grid-cols-3">
            {project.steps.map(([title, body], index) => (
              <li key={title} className="border border-line bg-paper-strong p-6">
                <span className="font-mono text-sm text-signal-gold-ink">Step {index + 1}</span>
                <h3 className="mt-4 text-2xl font-medium leading-8">{title}</h3>
                <p className="mt-4 leading-7 text-body">{body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 border-l-4 border-[#366c5a] bg-wash-green p-6">
            <h3 className="font-semibold">Illustrative example</h3>
            <p className="mt-3 text-lg leading-8 text-body">{project.example}</p>
          </div>
        </section>
        <section aria-labelledby="status-heading" className="border-y border-line py-10">
          <h2 id="status-heading" className="text-3xl font-medium">Project status and access</h2>
          <p className="mt-5 max-w-4xl leading-8 text-body">{project.boundary}</p>
          {project.publicUrl && <a href={project.publicUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-signal-blue underline underline-offset-4">{project.publicLabel}<span className="sr-only"> (opens in a new tab)</span></a>}
          {project.creditUrl && <p className="mt-5"><a href={project.creditUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-signal-blue underline underline-offset-4">{project.creditLabel}<span className="sr-only"> (opens in a new tab)</span></a></p>}
        </section>
        <Link href="/products" className="mt-10 inline-block font-semibold text-signal-blue underline underline-offset-4">Explore all projects</Link>
      </div>
    </main>
  );
}
