import type { Metadata } from "next";
import Link from "next/link";

const title = "TritonAI Meeting Scheduler";
const description =
  "Brett Pollak's scheduling assistant coordinates meeting times by email, checks his calendar, and sends the invitation once everyone agrees.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://brettcpollak.com/tritonai-meeting-scheduler" },
  openGraph: {
    title: `${title} | Brett Pollak`,
    description,
    url: "https://brettcpollak.com/tritonai-meeting-scheduler",
    siteName: "Brett Pollak",
    images: [{ url: "/brett-pollak-og-card.png", width: 1200, height: 630, alt: "Brett Pollak" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/brett-pollak-og-card.png"] },
};

const steps = [
  {
    title: "Brett starts the conversation",
    body: "Brett adds the assistant to an email thread with the meeting length and a preferred date range. It includes everyone on that thread unless he names a different group.",
  },
  {
    title: "You choose what works",
    body: "The assistant checks Brett’s Exchange calendar and emails available times to the attendees. Reply with all the options that work for you, or suggest another day and time. Include your time zone if it differs from Pacific.",
  },
  {
    title: "The invitation follows",
    body: "Once everyone required agrees, the assistant checks availability again and sends a calendar invitation with the attendees, a short agenda, and the meeting details. It also lets Brett know the scheduling is complete.",
  },
];

export default function TritonAIMeetingScheduler() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="rule-label mb-6">An assistant for the back-and-forth</p>
          <h1 className="page-title mb-6">TritonAI Meeting Scheduler</h1>
          <p className="page-intro">
            If you received an email from my scheduling assistant, you can reply
            to it as you would to a person helping arrange a meeting. It finds a
            time that works for everyone and puts the meeting on my calendar.
          </p>
          <p className="text-body mt-6 max-w-3xl">
            I built it using TritonAI to handle the routine coordination. It
            sends its own scheduling messages within the rules I set, without
            waiting for me to review each reply.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <section className="mb-14" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-3xl font-medium text-ink mb-8">How it works</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="editorial-panel p-6 border-l-4 border-signal-blue">
                <p className="font-mono text-sm text-signal-blue mb-3">Step {index + 1}</p>
                <h3 className="text-xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 max-w-3xl" aria-labelledby="what-to-expect">
          <h2 id="what-to-expect" className="text-3xl font-medium text-ink mb-6">What to expect</h2>
          <ul className="list-disc pl-5 space-y-4 text-body">
            <li>Meetings fit within Monday through Friday, 8 AM to 5 PM Pacific. Existing meetings and tentative holds count as unavailable.</li>
            <li>Initial scheduling goes directly to the attendees without copying me on every exchange.</li>
            <li>Meetings are remote unless I specify otherwise. The invitation includes a Zoom link; it may use my personal meeting link.</li>
            <li>If a detail is missing or a reply is unclear, the assistant asks me before proceeding. If it cannot find agreement after three unsuccessful rounds, it brings me back in.</li>
          </ul>
        </section>

        <section className="mb-14 max-w-3xl" aria-labelledby="change-plans">
          <h2 id="change-plans" className="text-3xl font-medium text-ink mb-4">Need to change the plans?</h2>
          <p className="text-body mb-5">
            Reply to the scheduling email to ask for a different time. The
            assistant will coordinate the change and keep me copied. A request
            to cancel comes to me for approval before it cancels the meeting.
          </p>
          <p className="text-body">
            You can also contact me directly if you would rather work out the
            details with me. The calendar invitation is your confirmation;
            proposed times in an email are still options.
          </p>
        </section>

        <section className="mb-14 max-w-3xl" aria-labelledby="built-with-tritonai">
          <h2 id="built-with-tritonai" className="text-3xl font-medium text-ink mb-4">Built with TritonAI</h2>
          <p className="text-body mb-5">
            This is my own scheduling assistant, built with the{" "}
            <a href="https://tritonai.ucsd.edu/developer-apis/harness.html" className="text-signal-blue underline underline-offset-4 hover:text-ink">TritonAI Harness</a>{" "}
            and TritonAI&apos;s n8n workflow automation. An AI model hosted on UC
            San Diego infrastructure interprets the conversation. The workflow
            connects that interpretation to email and my Exchange calendar,
            with checks for availability, agreement, and permission before it
            takes action.
          </p>
          <p className="text-body mb-5">
            Email, calendar, and meeting services still handle the information
            needed to arrange the meeting. The assistant uses the scheduling
            conversation and my calendar availability; you do not need to give
            it access to your calendar or create an account.
          </p>
          <p className="text-body">
            It is one practical example of using{" "}
            <a href="https://tritonai.ucsd.edu/" className="text-signal-blue underline underline-offset-4 hover:text-ink">TritonAI</a>{" "}
            for a specific task with clear limits. I remain responsible for
            how it works and for resolving anything it cannot handle.
          </p>
        </section>

        <div className="editorial-panel p-6 md:p-8 border-l-4 border-signal-green max-w-3xl">
          <h2 className="text-xl font-semibold text-ink mb-3">Questions or something looks wrong?</h2>
          <p className="text-body">
            Reply to me on the original conversation or{" "}
            <Link href="/contact" className="text-signal-blue underline underline-offset-4 hover:text-ink">get in touch</Link>.
            I would like to know if the assistant has misunderstood a request.
          </p>
        </div>
      </div>
    </main>
  );
}
