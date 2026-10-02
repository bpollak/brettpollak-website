import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What \"Sent using TritonAI\" Means",
  description:
    "Some emails from Brett Pollak carry a footer that says Sent using TritonAI. Here is what that means: AI drafts the wording, Brett reviews and edits every message before it goes out.",
  alternates: {
    canonical: "https://brettcpollak.com/sent-using-tritonai",
  },
  openGraph: {
    title: "What \"Sent using TritonAI\" Means | Brett Pollak",
    description:
      "AI drafts the wording. Brett reviews and edits every message before it goes out.",
    url: "https://brettcpollak.com/sent-using-tritonai",
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
    title: "What \"Sent using TritonAI\" Means | Brett Pollak",
    description:
      "AI drafts the wording. Brett reviews and edits every message before it goes out.",
    images: ["/brett-pollak-og-card.png"],
  },
};

const steps = [
  {
    number: "1",
    title: "I decide what to say",
    body: "Every message starts with the concepts I want to convey. The ideas, the positions, the decisions. Those are mine.",
  },
  {
    number: "2",
    title: "TritonAI drafts the wording",
    body: "TritonAI, the AI platform I lead at UC San Diego, drafts the language around those concepts. It turns my intent into prose, fast.",
  },
  {
    number: "3",
    title: "I review every message",
    body: "Nothing goes out unread. Every draft comes back to me, either through the TritonAI harness interface or as an Outlook draft I review and edit. I revise, cut, and correct until the message says what I actually mean.",
  },
  {
    number: "4",
    title: "I send it",
    body: "The message ships only after I have read it and signed off. If it went out under my name, it reflects my judgment.",
  },
];

export default function SentUsingTritonAI() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="rule-label mb-6">A note on the footer</p>
          <h1 className="page-title mb-6">
            What &ldquo;Sent using TritonAI&rdquo; means
          </h1>
          <p className="page-intro">
            Some of my emails carry a short footer:{" "}
            <span className="font-mono text-sm">-- Sent using TritonAI</span>.
            If you received one and wondered what it means, here is the short
            version: TritonAI drafts the wording. I decide the substance, and I
            review and edit every message before it goes out.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-medium text-ink mb-4">
            AI-assisted, human-reviewed
          </h2>
          <p className="text-body mb-6">
            I use AI to help draft my email, the same way busy people have
            always used assistants and templates. The difference is that
            TritonAI is the platform my team built and runs at UC San Diego, so
            I am using our own tooling for the work it was built for.
          </p>
          <p className="text-body mb-6">
            Here is the honest division of labor. The concepts in every message
            are mine. TritonAI is fast at turning those concepts into clean
            prose, which means I can respond to more people, more thoughtfully,
            in less time. But a draft is not a send. Every message comes back
            to me before it leaves my outbox. I read it, edit it, and take
            responsibility for it.
          </p>
          <p className="text-body mb-6">
            That last part matters because delegating to AI is not like
            delegating to a person. Hand a project to a person and they own it.
            Hand work to AI and you still own the outcome. The oversight and
            the accountability stay with you, which is exactly why the review
            step never gets skipped.
          </p>
          <p className="text-body">
            No unread AI text goes out under my name. That is the rule.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-medium text-ink mb-2">
            How a message actually gets sent
          </h2>
          <p className="text-muted mb-10">
            The same four steps, every time.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="editorial-panel p-8 border-l-4 border-signal-blue"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-sm text-signal-blue">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-medium text-ink mb-4">
            Why I mark it
          </h2>
          <p className="text-body mb-6">
            I could leave the footer off and nobody would know. I keep it on
            because transparency about AI use should be normal, not
            embarrassing. We are rolling out TritonAI for personal productivity
            across the university, and I would rather show how I actually use
            it than tell people to adopt something they have not seen working.
            There is also a line worth drawing out loud: some work should stay
            human. The goal is not to hand everything to AI, and saying so
            makes the adoption message easier to trust, not harder.
          </p>
          <p className="text-body">
            If the footer made you curious enough to click, that is the point.
            Ask me about it. Most days it is the most interesting part of my
            job.
          </p>
        </section>

        <section className="mb-20">
          <div className="editorial-panel p-8 border-l-4 border-signal-green">
            <h3 className="text-xl font-semibold text-ink mb-3">
              Questions
            </h3>
            <p className="text-body text-sm leading-relaxed">
              Want to know more about TritonAI, the harness, or how we are
              approaching AI-assisted productivity at UC San Diego?{" "}
              <Link
                href="/contact"
                className="text-signal-blue underline underline-offset-4 hover:text-ink"
              >
                Get in touch
              </Link>{" "}
              or read about the{" "}
              <Link
                href="/tritongpt"
                className="text-signal-blue underline underline-offset-4 hover:text-ink"
              >
                TritonAI platform
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
