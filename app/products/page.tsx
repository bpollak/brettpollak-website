import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";
import { SITE_URL } from '@/lib/seoDates';

export const metadata: Metadata = {
  title: "Products & Innovation. Built Work",
  description: "Explore AI products built by Brett Pollak, including Is This AI?, Resolution Companion, BioBib Formatter, AI Use Case Meeting, PDF Remediator, Dissertation Agent, and the Henry AI Operating System.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Products & Innovation | Built Work by Brett Pollak",
    description: "AI products and prototypes built by Brett Pollak.",
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
    title: "Products & Innovation | Built Work by Brett Pollak",
    description: "AI products and prototypes built by Brett Pollak.",
    images: ["/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg"],
  },
};

const products = [
  {
    category: "AI-powered habit building",
    title: "Resolution Companion",
    href: "https://resolutioncompanion.com/",
    secondaryHref: "https://apps.apple.com/us/app/resolution-companion-ai/id6757996708",
    image: "/resolution-companion.webp",
    imageAlt: "Resolution Companion landing page screenshots",
    width: 900,
    height: 1280,
    description:
      "Now live in the App Store, Resolution Companion is an AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.",
    features: [
      "Live in the App Store",
      "AI-guided persona definition",
      "Momentum calendar",
      "Identity-first habit system",
      "120-second kickstart activities",
    ],
    cta: "Learn More",
    secondaryCta: "Download for iOS",
  },
  {
    category: "College recruiting",
    title: "Cason Pollak. Track & Field Recruiting Profile",
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
  {
    category: "College recruiting",
    title: "Cason Recruiting CRM",
    href: "/products/cason-recruiting-crm",
    internal: true,
    image: "/crm-recruiting.png",
    imageAlt: "Cason Recruiting CRM sign-in page with the tagline \"Recruiting, organized\" and a Class of 2027 panel",
    width: 1280,
    height: 800,
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
    category: "College funding",
    title: "Scholarship Agent",
    href: "/products/cason-scholarship-agent",
    internal: true,
    image: "/scholarship-agent.png",
    imageAlt: "Scholarship Agent sign-in page showing passkey and Google sign-in options",
    width: 1520,
    height: 1040,
    description:
      "A private family workspace with an autonomous agent behind it. It sweeps a registry of sponsors and foundations daily, reads each program's own page, and screens eligibility against a stored student profile. It keeps a requirement only when it can quote the page text that proves it. The result is a short list of things that genuinely need a human decision, instead of a folder of tabs. Because it is invite-only, here is a walkthrough of what it does.",
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
    category: "AI agent system",
    title: "Henry. Personal AI Operating System",
    href: "https://bpollak.github.io/openclaw-ai-usecase-deck/",
    image: "/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg",
    imageAlt: "Mission Control Build / Campus App Pipeline view",
    width: 590,
    height: 1280,
    description:
      "A production AI agent stack built on OpenClaw: 24/7 Mac mini operations, autonomous automations, knowledge graph memory, vector search, multi-model routing, and institutional integrations.",
    features: [
      "25+ autonomous automations",
      "Multi-model intelligence",
      "Software blueprint pipeline",
      "Persistent executive operating layer",
    ],
    cta: "View the Full Use Case Deck",
  },
  {
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
    <main className="min-h-screen bg-paper text-ink" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-12 grid gap-8 border-y border-line bg-wash-blue p-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="rule-label mb-5">Product laboratory</p>
            <h1 className="text-5xl md:text-6xl leading-none font-medium text-ink">Built Work</h1>
          </div>
          <p className="text-2xl text-body mb-6 max-w-3xl leading-9">
            AI products and prototypes that solve real problems. Personal productivity, campus operations, family tools.
          </p>
        </div>

        <div className="border-y border-line">
          {products.map((product, index) => {
            const isInternal = "internal" in product && product.internal === true;
            const frameClass = `block border border-line p-4 ${frameColors[index % frameColors.length]}`;
            const thumbnail = (
              <Image
                src={product.image}
                alt={product.imageAlt}
                width={product.width}
                height={product.height}
                className="h-auto w-full border border-white/15 object-cover"
                sizes="(min-width: 1024px) 28vw, 100vw"
              />
            );
            const ctaLabel = (
              <>
                {product.cta}
                <svg aria-hidden="true" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            );
            const ctaClass = "inline-flex items-center gap-2 font-semibold text-signal-blue";
            return (
            <article
              key={product.title}
              className="group grid gap-8 border-b border-line py-10 last:border-b-0 transition-colors hover:bg-[#fffef9] lg:grid-cols-[0.42fr_0.72fr] lg:items-center"
            >
              {isInternal ? (
                <Link href={product.href} className={frameClass}>
                  {thumbnail}
                </Link>
              ) : (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={frameClass}
                >
                  {thumbnail}
                </a>
              )}
              <div>
                <p className="rule-label mb-4 text-signal-gold-ink">{product.category}</p>
                <h2 className="text-3xl md:text-5xl leading-tight font-medium text-ink transition-colors group-hover:text-[#1f5a8a]">
                  {product.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-body">{product.description}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 border-t border-line pt-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 bg-[#c97712]" aria-hidden="true" />
                      <span className="text-sm font-semibold leading-6 text-ink">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {isInternal ? (
                    <Link href={product.href} className={ctaClass}>
                      {ctaLabel}
                    </Link>
                  ) : (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ctaClass}
                    >
                      {ctaLabel}
                    </a>
                  )}
                  {'secondaryHref' in product && product.secondaryHref ? (
                    <a
                      href={product.secondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                    >
                      {product.secondaryCta}
                      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
            );
          })}
        </div>

        <div className="mt-14 border border-dashed border-[#9fa89d] bg-paper-strong p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.55fr_1fr] md:items-center">
            <div>
              <p className="rule-label mb-4">In progress</p>
              <h3 className="text-3xl md:text-4xl leading-tight font-medium text-ink">More built work is moving through the lab.</h3>
            </div>
            <div>
              <p className="text-lg leading-8 text-body">
                I'm building more software across education, productivity, and enterprise tools. I'll post updates as things get concrete enough to show.
              </p>
              <Link
                href="/linkedin"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
              >
                Follow on LinkedIn
                <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
