import type { Metadata } from "next";
import Link from "next/link";
import { linkedInProfile } from "@/lib/linkedInHighlights";
import { mediaItems } from "@/lib/mediaData";
import { SITE_URL, staticPageDates } from "@/lib/seoDates";

export const metadata: Metadata = {
  title: "LinkedIn Notes",
  description:
    "What Brett Pollak writes about on LinkedIn. Institutional AI at UC San Diego, AI governance, agentic workflows, and citizen developer enablement. Plus his published articles and posts.",
  alternates: {
    canonical: "https://brettcpollak.com/linkedin",
  },
  openGraph: {
    title: "LinkedIn Notes | Brett Pollak",
    description:
      "Institutional AI, governance, and agentic workflows in higher education. The topics behind the posts, and where to read the long versions.",
    url: "https://brettcpollak.com/linkedin",
    siteName: "Brett Pollak",
    images: [
      {
        url: "/brett-pollak-og-card.png",
        width: 1200,
        height: 630,
        alt: "Brett Pollak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Notes | Brett Pollak",
    description:
      "Institutional AI, governance, and agentic workflows in higher education. The topics behind the posts.",
    images: ["/brett-pollak-og-card.png"],
  },
};

const BUILD_DATE_ISO = new Date().toISOString().slice(0, 10);

/** Posts and articles Brett published on LinkedIn itself. */
const linkedInPosts = mediaItems
  .filter((item) => item.url.includes("linkedin.com"))
  .sort((a, b) => b.date.localeCompare(a.date));

/**
 * Recent writing published elsewhere — the long versions of what shows up as
 * posts. Future-dated entries are scheduled talks, so they are excluded here.
 */
const recentElsewhere = mediaItems
  .filter(
    (item) =>
      !item.url.includes("linkedin.com") &&
      item.date <= BUILD_DATE_ISO &&
      (item.category === "article" ||
        item.category === "interview" ||
        item.category === "whitepaper"),
  )
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 6);

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function LinkedIn() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE_URL}/linkedin`,
    dateModified: staticPageDates["/linkedin"],
    mainEntity: {
      "@type": "Person",
      name: "Brett Pollak",
      url: `${SITE_URL}/`,
      jobTitle:
        "Executive Director, Workplace Technology & Infrastructure Services",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "University of California San Diego",
        url: "https://ucsd.edu/",
      },
      knowsAbout: linkedInProfile.themes.map((theme) => theme.label),
      sameAs: [linkedInProfile.profileUrl, `${SITE_URL}/`],
    },
  };

  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">Social</p>
          <h1 className="page-title mb-6">LinkedIn</h1>
          <p className="page-intro">{linkedInProfile.intro}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-medium text-ink mb-2">What I post about</h2>
          <p className="text-muted mb-10">
            Four threads that most of it falls into.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {linkedInProfile.themes.map((theme) => (
              <div key={theme.label} className="editorial-panel p-8">
                <h3 className="text-xl font-semibold text-ink mb-3">
                  {theme.label}
                </h3>
                <p className="text-body text-sm leading-relaxed">{theme.body}</p>
              </div>
            ))}
          </div>
        </section>

        {linkedInPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-medium text-ink mb-2">
              Published on LinkedIn
            </h2>
            <p className="text-muted mb-10">
              Longer pieces posted to the platform directly.
            </p>
            <ul className="space-y-4">
              {linkedInPosts.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-6 bg-paper-strong px-7 py-5 border border-line rounded-sm shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="text-sm text-muted font-mono pt-0.5 whitespace-nowrap min-w-[110px]">
                      {formatDate(item.date)}
                    </span>
                    <span className="flex-1 text-ink font-medium transition-colors group-hover:text-signal-blue">
                      {item.title}
                    </span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-line group-hover:text-signal-blue mt-1 flex-shrink-0 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-20">
          <h2 className="text-3xl font-medium text-ink mb-2">
            The long versions
          </h2>
          <p className="text-muted mb-10">
            Recent writing and interviews published elsewhere.{" "}
            <Link href="/media" className="text-signal-blue hover:text-ink underline">
              The full index is on the media page
            </Link>
            .
          </p>
          <ul className="space-y-4">
            {recentElsewhere.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 bg-paper-strong px-7 py-5 border border-line rounded-sm shadow-sm hover:shadow-md transition-shadow group"
                >
                  <span className="text-sm text-muted font-mono pt-0.5 whitespace-nowrap min-w-[110px]">
                    {formatDate(item.date)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold text-signal-blue uppercase tracking-wide mb-1">
                      {item.publication}
                    </span>
                    <span className="block text-ink font-medium transition-colors group-hover:text-signal-blue">
                      {item.title}
                    </span>
                  </span>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-line group-hover:text-signal-blue mt-1 flex-shrink-0 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-line pt-12 text-center">
          <p className="text-body mb-8 max-w-xl mx-auto">
            The current posts live on LinkedIn. You can also reach me there if
            you don&apos;t want to use the contact form.
          </p>
          <a
            href={linkedInProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-white px-10 py-4 font-bold rounded-sm hover:bg-signal-blue transition-colors group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-signal-gold"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Visit on LinkedIn
            <svg
              aria-hidden="true"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
