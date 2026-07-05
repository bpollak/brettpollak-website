import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { SITE_URL } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
  description: "Explore AI-driven products built by Brett Pollak, including Is This AI?, Resolution Companion, BioBib Formatter, AI Use Case Meeting, PDF Remediator, Dissertation Agent, and the Henry AI Operating System.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products built by Brett Pollak.",
    url: "https://brettcpollak.com/products",
    images: [
      {
        url: "/resolution-companion.png",
        width: 400,
        height: 800,
        alt: "Resolution Companion App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products built by Brett Pollak.",
    images: ["/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg"],
  },
};

const products = [
  {
    category: "AI agent system",
    title: "Henry — Personal AI Operating System",
    href: "https://bpollak.github.io/openclaw-ai-usecase-deck/",
    image: "/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg",
    imageAlt: "Mission Control Build / Campus App Pipeline view",
    width: 590,
    height: 1280,
    description:
      "A production AI agent stack built on OpenClaw: 24/7 Mac mini operations, autonomous automations, knowledge graph memory, vector search, multi-model routing, and deep institutional integrations.",
    features: [
      "25+ autonomous automations",
      "Multi-model intelligence",
      "Software blueprint pipeline",
      "Persistent executive operating layer",
    ],
    cta: "View the Full Use Case Deck",
  },
  {
    category: "AI-powered habit building",
    title: "Resolution Companion",
    href: "https://resolutioncompanion.com/",
    image: "/resolution-companion.webp",
    imageAlt: "Resolution Companion App",
    width: 400,
    height: 800,
    description:
      "An AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.",
    features: [
      "AI-guided persona definition",
      "Momentum calendar",
      "Identity-first habit system",
      "120-second kickstart activities",
    ],
    cta: "Visit Resolution Companion",
  },
  {
    category: "Media authenticity",
    title: "Is This AI?",
    href: "https://bpollak.github.io/is-this-ai/",
    image: "/is-this-ai.svg",
    imageAlt: "Is This AI media authenticity checker interface",
    width: 1600,
    height: 900,
    description:
      "A lightweight media provenance triage app for uploaded images, uploaded videos, and media links. It separates deterministic watermark or provenance checks from heuristic AI-likelihood scoring so uncertain results are labeled honestly.",
    features: [
      "Image and video upload flow",
      "Media link scoring",
      "Watermark and provenance status",
      "Transparent evidence breakdown",
    ],
    cta: "Try Is This AI?",
  },
  {
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
    category: "Academic workflow",
    title: "Dissertation Formatting Agent",
    href: "https://dissertation-formatter.vercel.app",
    image: "/dissertation-agent.png",
    imageAlt: "Dissertation Formatting Agent",
    width: 1600,
    height: 900,
    description:
      "Validates doctoral dissertations and master's theses against 84 UCSD GEPA formatting rules across 13 categories. Auto-corrects common issues and separates results into Fixed For You, Action Required, and Please Verify.",
    features: [
      "84 GEPA rules checked",
      "13 formatting categories",
      "17+ auto-corrections",
      "Accessibility checks",
    ],
    cta: "Try Dissertation Formatter",
  },
  {
    category: "Academic workflow",
    title: "BioBib Formatter",
    href: "https://biobib-formatter.vercel.app/",
    image: "/biobib-formatter.png",
    imageAlt: "BioBib Formatter",
    width: 1280,
    height: 800,
    description:
      "Turns a faculty CV into a draft UCSD Academic Biography and Bibliography document. Breaks CVs into review parts, routes section work through TritonAI, and produces a downloadable Word file.",
    features: [
      "20-part section review",
      "Model-routed UCSD TritonAI review",
      "BioBib-compliant Word output",
      "Conversion recovery links",
    ],
    cta: "Try BioBib Formatter",
  },
  {
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
  {
    category: "College recruiting",
    title: "Cason Pollak — Track & Field Recruiting Profile",
    href: "https://casonpollak.com/",
    image: "/cason-recruiting.png",
    imageAlt: "Cason Pollak recruiting profile homepage showing hero section with athlete photo, personal bests, and navigation",
    width: 1280,
    height: 800,
    description:
      "A collegiate athletic recruiting profile built for Cason Pollak (C/O 2027), a track & field athlete from Del Norte HS. Combines personal bests, race film, season progression charts, a conference points projector tool, and a college fit matrix across six target programs into a single polished landing page for coach outreach.",
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
];

const frameColors = [
  "bg-[#1f5a8a]",
  "bg-[#366c5a]",
  "bg-[#b8503f]",
  "bg-[#c97712]",
  "bg-[#17201b]",
  "bg-[#5b4a86]",
  "bg-[#2e6b6b]",
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

export default function Products() {
  return (
    <div className="min-h-screen bg-[#f7f9f5] text-[#17201b]" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-12 grid gap-8 border-y border-[#d9dfd3] bg-[#edf5f7] p-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="rule-label mb-5">Product laboratory</p>
            <h1 className="text-5xl md:text-6xl leading-none font-medium text-[#17201b]">Built Work</h1>
          </div>
          <p className="text-2xl text-[#485248] mb-6 max-w-3xl leading-9">
            AI-powered products and prototypes that solve real problems, from personal productivity to institutional transformation.
          </p>
        </div>

        <div className="border-y border-[#d9dfd3]">
          {products.map((product, index) => (
            <a
              key={product.title}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-[#d9dfd3] py-10 last:border-b-0 transition-colors hover:bg-[#fffef9]"
            >
              <article className="grid gap-8 lg:grid-cols-[0.42fr_0.72fr] lg:items-center">
                <div className={`border border-[#d9dfd3] p-4 ${frameColors[index % frameColors.length]}`}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={product.width}
                    height={product.height}
                    className="h-auto w-full border border-white/15 object-cover"
                    sizes="(min-width: 1024px) 28vw, 100vw"
                  />
                </div>
                <div>
                  <p className="rule-label mb-4 text-[#c97712]">{product.category}</p>
                  <h2 className="text-3xl md:text-5xl leading-tight font-medium text-[#17201b] transition-colors group-hover:text-[#1f5a8a]">
                    {product.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-[#485248]">{product.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 border-t border-[#d9dfd3] pt-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 bg-[#c97712]" aria-hidden="true" />
                        <span className="text-sm font-semibold leading-6 text-[#17201b]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1f5a8a]">
                    {product.cta}
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <div className="mt-14 border border-dashed border-[#9fa89d] bg-[#fffef9] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.55fr_1fr] md:items-center">
            <div>
              <p className="rule-label mb-4">In progress</p>
              <h3 className="text-3xl md:text-4xl leading-tight font-medium text-[#17201b]">More built work is moving through the lab.</h3>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#485248]">
                I am continuing to develop new software products across education, productivity, and enterprise domains, with updates shared as the tools become concrete enough to inspect.
              </p>
              <Link
                href="/linkedin"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
              >
                Follow on LinkedIn
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
