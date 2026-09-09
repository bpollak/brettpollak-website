import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectWalkthroughs } from '@/lib/projectWalkthroughs';
import { SITE_URL, staticPageDates } from '@/lib/seoDates';

export const dynamicParams = false;
export function generateStaticParams() {
  return projectWalkthroughs.map(project => ({ slug: project.slug }));
}

type Props = { params: Promise<{ slug: string }> };
// OG-grade card (1200x630) per flagship app; smaller project screenshots
// fall back to the site OG card. These are the apps' own social cards,
// served locally.
const OG_IMAGES: Record<string, { url: string; alt: string }> = {
  'resolution-companion': { url: '/resolution-companion-social.webp', alt: 'Resolution Companion app social card: a real app screen showing a reading habit and its two-minute alternative, with the app name and tagline.' },
  'horse-racing-companion': { url: '/horse-racing-companion-social.jpg', alt: 'Horse Racing Companion app social card: race entries and analysis on a phone, with the app name and tagline.' },
  'steel-city-gameday': { url: '/steel-city-gameday.png', alt: 'Steel City Gameday app social card: Pittsburgh Steelers gameday app with crews, picks, and season coverage.' },
};
const OG_IMAGE_FALLBACK = { url: '/brett-pollak-og-card.png', alt: 'Brett Pollak, technology leader at UC San Diego and independent app developer' };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectWalkthroughs.find(item => item.slug === slug);
  if (!project) notFound();
  const url = `${SITE_URL}/products/${slug}`;
  const og = OG_IMAGES[slug] ?? OG_IMAGE_FALLBACK;
  const title = `${project.title} — a case study by Brett Pollak`;
  const description = project.description;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'article', images: [{ url: og.url, width: 1200, height: 630, alt: og.alt }] },
    twitter: { card: 'summary_large_image', title, description, images: [og.url] },
  };
}

export default async function ProjectWalkthrough({ params }: Props) {
  const { slug } = await params;
  const project = projectWalkthroughs.find(item => item.slug === slug);
  if (!project) notFound();
  const og = OG_IMAGES[slug] ?? OG_IMAGE_FALLBACK;
  // Structured data: the three shippable apps are CreativeWork case studies
  // referencing a SoftwareApplication; internal prototypes get plain
  // CreativeWork. Author/publisher point at the site-wide Person.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${project.title} — case study`,
    headline: project.title,
    description: project.description,
    url: `${SITE_URL}/products/${slug}`,
    image: `${SITE_URL}${og.url}`,
    inLanguage: 'en',
    dateModified: staticPageDates[`/products/${slug}`],
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    ...(OG_IMAGES[slug] ? { about: { '@type': 'SoftwareApplication', name: project.title, applicationCategory: 'MobileApplication', operatingSystem: 'iOS', ...(project.publicUrl ? { url: project.publicUrl } : {}) } } : {}),
  };
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-20">
        <Link href="/products" className="text-sm font-semibold text-signal-blue underline underline-offset-4">All projects</Link>
        <header className="mt-8 border-y border-line py-10">
          <p className="rule-label mb-5">{project.category}</p>
          <h1 className="max-w-4xl text-4xl font-medium leading-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 inline-block border border-line bg-wash-green px-3 py-2 text-sm font-semibold text-signal-green">{project.status}</p>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-body">{project.description}</p>
        </header>
        <figure className="border-b border-line py-10">
          <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size capture of ${project.title}`}>
            <Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} className="mx-auto h-auto max-h-[640px] w-auto max-w-full border border-line object-contain" sizes="(min-width: 1024px) 1000px, 100vw" />
          </a>
          <figcaption className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-body">{project.imageCaption}</figcaption>
        </figure>
        {project.gallery && project.gallery.length > 0 && (
          <section aria-label={`${project.title} app screens`} className="border-b border-line py-10">
            <p className="rule-label mb-4">The app today</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.gallery.map(shot => (
                <figure key={shot.image} className="border border-line bg-paper-strong p-3">
                  <a href={shot.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${shot.caption}`}>
                    <Image src={shot.image} alt={shot.alt} width={shot.width} height={shot.height} className="mx-auto h-auto max-h-80 w-auto max-w-full object-contain" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw" />
                  </a>
                  <figcaption className="mt-3 text-sm leading-6 text-body">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <section aria-labelledby="purpose-heading" className="grid gap-8 border-b border-line py-10 md:grid-cols-[0.5fr_1fr]">
          <h2 id="purpose-heading" className="text-3xl font-medium">Why I built it</h2>
          <p className="text-lg leading-8 text-body">{project.purpose}</p>
        </section>
        <section aria-labelledby="workflow-heading" className="py-10">
          <p className="rule-label mb-4">Walkthrough</p>
          <h2 id="workflow-heading" className="text-3xl font-medium">How the workflow fits together</h2>
          <p className="mt-4 text-body">A short guide to the application’s workflow.</p>
          <ol className="mt-7 grid gap-5 md:grid-cols-3">
            {project.steps.map(([title, body], index) => (
              <li key={title} className="border border-line bg-paper-strong p-6">
                <span className="font-mono text-sm text-signal-gold-ink">Step {index + 1}</span>
                <h3 className="mt-4 text-2xl font-medium leading-8">{title}</h3>
                <p className="mt-4 leading-7 text-body">{body}</p>
              </li>
            ))}
          </ol>

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
