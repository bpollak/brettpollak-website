import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import type { ReactNode } from 'react';
import { projectWalkthroughs } from '@/lib/projectWalkthroughs';
import { SITE_URL } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of software projects and prototypes built by Brett Pollak for education, productivity, and family use.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Projects | Brett Pollak",
    description: "A selection of software projects and prototypes for education, productivity, and family use.",
    url: "https://brettcpollak.com/products",
    images: [
      {
        url: "/products-og.png",
        width: 1200,
        height: 630,
        alt: "Projects by Brett Pollak — campus services to family apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Brett Pollak",
    description: "A selection of software projects and prototypes for education, productivity, and family use.",
    images: ["/products-og.png"],
  },
};

const products = [
  ...projectWalkthroughs.map(project => ({
    group: project.group, status: project.status, category: project.category, title: project.title,
    href: `/products/${project.slug}`, internal: true,
    image: project.image, imageAlt: project.imageAlt, imageCaption: project.imageCaption,
    width: project.imageWidth, height: project.imageHeight, description: project.description, features: project.features, cta: "See how it works",
  })),
  {
    group: "personal-apps",
    status: "Public web app",
    category: "Housing research",
    title: "Rock Hill Property Radar",
    href: "https://bpollak.github.io/rock-hill-property-radar/",
    secondaryHref: "https://github.com/bpollak/rock-hill-property-radar",
    image: "/property-radar.png",
    imageAlt: "Rock Hill Property Radar dashboard with housing research and comparison controls",
    width: 1280,
    height: 800,
    description:
      "A web app for comparing housing options in Rock Hill, South Carolina. It brings listing sources, rental evidence, and adjustable planning assumptions into one place, with dated research and explicit gaps where facts still need checking.",
    features: [
      "Source-linked property comparisons",
      "Adjustable cost and rental scenarios",
      "Dated research snapshots",
      "Unknowns kept visible for follow-up",
    ],
    cta: "Explore Property Radar",
    secondaryCta: "View source",
  },
  {
    group: "personal-apps",
    status: "Public website",
    category: "College recruiting",
    title: "Cason Pollak. Track & Field Recruiting Profile",
    href: "https://casonpollak.com/",
    image: "/cason-recruiting.png",
    imageAlt: "Cason Pollak recruiting profile homepage showing hero section with athlete photo, personal bests, and navigation",
    width: 1280,
    height: 800,
    description:
      "A collegiate athletic recruiting website for Cason Pollak (Class of 2027), a track and field athlete from Del Norte High School. It includes personal bests, race film, season progression charts, a conference points projector, and a college fit matrix for six programs.",
    features: [
      "Personal bests & athletic résumé",
      "Race film with meet-by-meet context",
      "Season progression charts (100m, HJ, LJ, 4x100)",
      "Conference Points Projector tool",
      "College Fit Matrix (6 target programs)",
      "Academic profile (4.02 W GPA)",
    ],
    cta: "Visit Recruiting Profile",
  },
  {
    group: "personal-apps",
    status: "Private · walkthrough",
    category: "College recruiting",
    title: "Cason Recruiting CRM",
    href: "/products/cason-recruiting-crm",
    internal: true,
    image: "/crm-recruiting-workspace.png",
    imageAlt: "Cason Recruiting CRM dashboard showing follow-ups, priority programs, and recruiting activity",
    imageCaption: "Actual dashboard captured locally on September 7, 2026, with an empty database. No coach contacts or recruiting conversations are loaded.",
    width: 1036,
    height: 1342,
    description:
      "The private operations backend behind Cason's public recruiting profile. A separate family workspace for running the outreach itself. Every target school, coach contact, conversation, and next step lives in one Google-authenticated place, organized from first email to commitment. Because it is invite-only, here is a walkthrough of what it does.",
    features: [
      "Private, family-only access (Google sign-in)",
      "School & coach outreach pipeline",
      "Conversation & questionnaire tracking",
      "Next-step task management",
    ],
    cta: "See how it works",
  },
  {
    group: "personal-apps",
    status: "Private · walkthrough",
    category: "College funding",
    title: "Scholarship Agent",
    href: "/products/cason-scholarship-agent",
    internal: true,
    image: "/scholarship-agent-workspace.png",
    imageAlt: "Scholarship Agent parent console showing application totals and action queues",
    imageCaption: "Actual console captured locally on September 7, 2026, with an empty database and the background worker disconnected. No private applications are loaded.",
    width: 1280,
    height: 900,
    description:
      "A private family workspace with a background agent. It checks a registry of sponsors and foundations each day, reads each program's page, and compares the requirements with a stored student profile. It retains requirements only when it can quote the source. The walkthrough shows the workflow without exposing private account data.",
    features: [
      "Private, family-only access (passkey or Google)",
      "Daily autonomous discovery across 65 sources",
      "Evidence-backed eligibility screening",
      "Inbox-driven status updates",
      "Profile-grounded essay drafts, never auto-submitted",
    ],
    cta: "See how it works",
  },
  {
    group: "experiments",
    status: "Personal setup · documentation",
    category: "AI agent system",
    title: "Henry. Personal AI Operating System",
    href: "/ai-agent-architecture",
    internal: true,
    image: "/products-og.png",
    imageAlt: "AI agent architecture diagram showing knowledge layer, model routing, and agent actions",
    width: 1200,
    height: 675,
    description:
      "A personal AI setup built on Hermes Agent, with scheduled automations, a knowledge graph, vector search, model routing, and institutional integrations.",
    features: [
      "92 scheduled automations (September 2026 snapshot)",
      "Multiple model routes",
      "Software blueprint pipeline",
      "Persistent working context",
    ],
    cta: "See the Architecture",
  },
  {
    group: "experiments",
    status: "Available online",
    category: "Media authenticity",
    title: "Is This AI?",
    href: "https://isthisai.brettcpollak.com/",
    image: "/is-this-ai.svg",
    imageAlt: "Is This AI media authenticity checker interface",
    width: 1600,
    height: 900,
    description:
      "A lightweight media provenance triage app for uploaded images, uploaded videos, and media links. It separates deterministic watermark or provenance checks from heuristic AI-likelihood scoring so uncertain results are labeled honestly.",
    features: [
      "Image and video upload flow",
      "Media link scoring",
      "C2PA and generator metadata scan",
      "Transparent evidence breakdown",
    ],
    cta: "Try Is This AI?",
  },
  {
    group: "campus-tools",
    status: "Public web app · planning model",
    category: "AI usage planning",
    title: "TritonAI Token Budget Planner",
    href: "https://bpollak.github.io/tritonai-token-budget-planner/",
    secondaryHref: "https://github.com/bpollak/tritonai-token-budget-planner",
    image: "/token-budget-planner.png",
    imageAlt: "TritonAI Token Budget Planner dashboard with forecast controls and monthly projections",
    width: 1280,
    height: 800,
    description:
      "An interactive web app for exploring staff AI usage and cost scenarios. Adjust cloud and on-premises routing, growth, onboarding, and contingency assumptions to see how they affect a fiscal-year forecast. The model uses a July 2026 baseline; projections are planning estimates.",
    features: [
      "Cloud and on-premises routing scenarios",
      "Growth and staff onboarding controls",
      "Monthly usage and cost forecasts",
      "Adjustable contingency assumptions",
    ],
    cta: "Explore Budget Planner",
    secondaryCta: "View source",
  },
  {
    group: "campus-tools",
    status: "Available online",
    category: "Accessibility and compliance",
    title: "PDF Accessibility Remediator",
    href: "https://pdf-remediator-codex.vercel.app",
    image: "/pdf-remediator.png",
    imageAlt: "PDF Remediator",
    width: 1600,
    height: 900,
    description:
      "Automated accessibility checks and remediation for UC San Diego PDFs. Runs 17+ checks across 9 compliance categories and reduces remediation time from hours to minutes with built-in evidence packs.",
    features: [
      "17+ automated checks",
      "WCAG 2.1 AA validation",
      "Evidence packs",
      "TritonAI Developer API foundation",
    ],
    cta: "Visit PDF Remediator",
  },
  {
    group: "campus-tools",
    status: "Available online",
    category: "Academic workflow",
    title: "Dissertation Formatting Agent",
    href: "https://dissertation-formatter.vercel.app",
    image: "/dissertation-agent.png",
    imageAlt: "Dissertation Formatting Agent",
    width: 1600,
    height: 900,
    description:
      "Validates doctoral dissertations and master's theses against 84 UC San Diego GEPA formatting rules across 13 categories. Auto-corrects common issues and separates results into Fixed For You, Action Required, and Please Verify.",
    features: [
      "84 GEPA rules checked",
      "13 formatting categories",
      "17+ auto-corrections",
      "Accessibility checks",
    ],
    cta: "Try Dissertation Formatter",
  },
  {
    group: "campus-tools",
    status: "Available online",
    category: "Academic workflow",
    title: "BioBib Formatter",
    href: "https://biobib-formatter.vercel.app/",
    image: "/biobib-formatter.png",
    imageAlt: "BioBib Formatter",
    width: 1280,
    height: 800,
    description:
      "Turns a faculty CV into a draft UC San Diego Academic Biography and Bibliography document. Breaks CVs into review parts, routes section work through TritonAI, and produces a downloadable Word file.",
    features: [
      "20-part section review",
      "Model-routed UC San Diego TritonAI review",
      "BioBib-compliant Word output",
      "Conversion recovery links",
    ],
    cta: "Try BioBib Formatter",
  },
  {
    group: "campus-tools",
    status: "Available online",
    category: "Campus community",
    title: "AI Use Case Meeting",
    href: "https://ai-use-case-meeting.vercel.app/",
    image: "/ai-use-case-meeting.png",
    imageAlt: "AI Use Case Meeting",
    width: 1280,
    height: 800,
    description:
      "A full-stack session management platform for a biweekly AI knowledge-sharing forum at UC San Diego. Handles presenter submissions, agenda generation, calendar sync, and recording archives.",
    features: [
      "Automated session scheduling",
      "Presenter submission workflow",
      "MediaSpace recording archive",
      "Admin dashboard",
    ],
    cta: "Visit AI Use Case Meeting",
  },
];

const projectGroups = [
  { id: 'app-store', title: 'App Store', description: 'Independently built and shipped iOS apps. Three are live on the App Store right now.' },
  { id: 'campus-tools', title: 'Campus tools', description: 'Applications and prototypes for campus workflows, student and visitor services, document preparation, and AI planning.' },
  { id: 'personal-apps', title: 'Personal apps', description: 'Apps and websites for everyday interests and family use. Private projects have public walkthroughs.' },
  { id: 'experiments', title: 'Experiments', description: 'Projects exploring personal AI systems, drafting workflows, and media authenticity.' },
];

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/products#itemlist`,
  name: "AI-enabled tools and experiments built by Brett Pollak",
  url: `${SITE_URL}/products`,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.title,
      url: product.href,
      description: product.description,
      applicationCategory: product.category,
      author: { "@id": `${SITE_URL}/#person` },
    },
  })),
};

type Product = (typeof products)[number];

function isInternalProduct(product: Product) {
  return "internal" in product && product.internal === true;
}

// Internal walkthroughs route through next/link; external apps open in a new tab.
function ProductLink({ product, className, children, hidden }: { product: Product; className: string; children: ReactNode; hidden?: boolean }) {
  const a11y = hidden ? { tabIndex: -1, 'aria-hidden': true as const } : {};
  return isInternalProduct(product) ? (
    <Link href={product.href} className={className} {...a11y}>{children}</Link>
  ) : (
    <a href={product.href} target="_blank" rel="noopener noreferrer" className={className} {...a11y}>{children}</a>
  );
}

function ProductCard({ product, priority }: { product: Product; priority: boolean }) {
  return (
    <article className="group flex flex-col">
      <ProductLink product={product} hidden
        className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-sm border border-line bg-wash-blue p-3 transition-colors group-hover:border-signal-blue">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={product.width}
          height={product.height}
          className="h-full w-auto max-w-full object-contain"
          priority={priority}
          sizes="(min-width: 1024px) 26vw, (min-width: 640px) 45vw, 100vw"
        />
      </ProductLink>
      <p className="mt-4 text-[13px] font-semibold text-signal-blue">{product.category}</p>
      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-medium leading-tight text-ink">
        <ProductLink product={product} className="group-hover:text-signal-blue">{product.title}</ProductLink>
      </h3>
      <p className="mt-1 text-xs text-muted">{product.status}</p>
      <p className="mt-2.5 text-[15px] leading-relaxed text-body">{product.description}</p>
      {"imageCaption" in product && product.imageCaption && <p className="mt-2 text-xs leading-5 text-muted">{product.imageCaption}</p>}
      <p className="mt-3 text-sm leading-6 text-muted">{product.features.join(' · ')}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-sm font-semibold">
        <ProductLink product={product} className="text-signal-blue underline underline-offset-4">
          {product.cta} {isInternalProduct(product) ? '→' : '↗'}
        </ProductLink>
        {'secondaryHref' in product && product.secondaryHref ? (
          <a href={product.secondaryHref} target="_blank" rel="noopener noreferrer" className="text-body underline underline-offset-4 hover:text-ink">
            {product.secondaryCta}
          </a>
        ) : null}
      </div>
    </article>
  );
}

// The lead App Store app gets a real phone screen when its walkthrough has a gallery.
function FeaturedApp({ product }: { product: Product }) {
  const slug = product.href.replace('/products/', '');
  const screen = projectWalkthroughs.find(project => project.slug === slug)?.gallery?.[0];
  return (
    <article className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
      {screen ? (
        <div className="mx-auto w-[200px] overflow-hidden rounded-[2.25rem] border-[8px] border-ink bg-ink md:w-[220px]">
          <Image src={screen.image} alt={screen.alt} width={screen.width} height={screen.height}
            className="block h-auto w-full rounded-[1.75rem]" priority sizes="220px" />
        </div>
      ) : (
        <div className="relative aspect-[1200/630] overflow-hidden rounded-sm border border-line md:w-[420px]">
          <Image src={product.image} alt={product.imageAlt} fill className="object-cover" priority sizes="420px" />
        </div>
      )}
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-signal-blue">Featured · {product.category}</p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-normal leading-tight md:text-5xl">{product.title}</h3>
        <p className="mt-2 text-sm text-muted">{product.status}</p>
        <p className="mt-4 max-w-xl text-lg leading-8 text-body">{product.description}</p>
        <ul className="mt-5 grid max-w-xl gap-x-6 gap-y-1.5 border-t border-line pt-4 sm:grid-cols-2">
          {product.features.map(feature => (
            <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-ink">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-blue" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-7">
          <ProductLink product={product} className="button-primary">{product.cta} →</ProductLink>
        </div>
      </div>
    </article>
  );
}

function AppStoreCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-line bg-paper">
      <ProductLink product={product} hidden className="relative block aspect-[1200/630] border-b border-line">
        <Image src={product.image} alt={product.imageAlt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </ProductLink>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[13px] font-semibold text-signal-blue">{product.category}</p>
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-[1.75rem] font-medium leading-tight">
          <ProductLink product={product} className="group-hover:text-signal-blue">{product.title}</ProductLink>
        </h3>
        <p className="mt-1 text-xs text-muted">{product.status}</p>
        <p className="mt-2.5 text-[15px] leading-relaxed text-body">{product.description}</p>
        <div className="mt-auto pt-5">
          <ProductLink product={product} className="text-sm font-semibold text-signal-blue underline underline-offset-4">{product.cta} →</ProductLink>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <main className="min-h-screen bg-paper text-ink" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 md:pt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-signal-blue sm:text-[13px]">Work · {products.length} projects</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
            <h1 className="text-5xl font-normal leading-none text-ink md:text-6xl">Projects</h1>
            <p className="max-w-2xl text-lg leading-8 text-body lg:justify-self-end">
              Web and mobile apps I have built for campus workflows, everyday interests, and family use. Project links lead to the application or a walkthrough.
            </p>
          </div>
          <nav className="mt-9 flex flex-wrap gap-2" aria-label="Project categories">
            {projectGroups.map(group => (
              <a key={group.id} href={`#${group.id}`}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#b9c2b3] bg-paper-strong px-[18px] text-[15px] font-medium text-ink transition-colors hover:border-ink">
                {group.title} <span className="text-muted">{products.filter(product => product.group === group.id).length}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {projectGroups.map((group, groupIndex) => {
        const groupProducts = products.filter(product => product.group === group.id);
        const appStore = group.id === 'app-store';
        return (
          <section key={group.id} id={group.id} className={`scroll-mt-24 border-b border-line ${groupIndex % 2 === 0 ? 'bg-paper-strong' : 'bg-paper'}`}>
            <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b-2 border-ink pb-3">
                <h2 className="text-3xl font-normal md:text-4xl">{appStore ? 'On the App Store' : group.title}</h2>
                <p className="max-w-2xl text-sm leading-6 text-body">{group.description}</p>
              </div>
              {appStore ? (
                <>
                  <div className="mt-10">
                    <FeaturedApp product={groupProducts[0]} />
                  </div>
                  <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {groupProducts.slice(1).map(product => <AppStoreCard key={product.title} product={product} />)}
                  </div>
                </>
              ) : (
                <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {groupProducts.map((product, index) => (
                    <ProductCard key={product.title} product={product} priority={groupIndex === 0 && index < 3} />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-[0.55fr_1fr] md:items-center">
          <h2 className="text-3xl font-normal leading-tight text-ink md:text-4xl">Other projects are in progress.</h2>
          <div>
            <p className="text-lg leading-8 text-body">
              I&apos;m also working on software for education, productivity, and enterprise use. I&apos;ll add projects here when there is enough to document.
            </p>
            <Link href="/linkedin" className="button-primary mt-6">Follow on LinkedIn →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
