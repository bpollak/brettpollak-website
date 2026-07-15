import { mediaItems } from "@/lib/mediaData";
import { weeklyAiDigestData } from "@/lib/weeklyAiDigestData";
import { ucsdAiNewsletterData } from "@/lib/ucsdAiNewsletterData";
import { currentNow } from "@/lib/nowData";
import {
  SITE_URL,
  latestMediaDate,
  siteLastUpdated,
} from "@/lib/seoDates";

export const dynamic = "force-static";

// Generates /llms-full.txt at build time (it replaced the old hand-edited
// file in public/). The "Last updated" line and the activity snapshot derive
// from the lib/ data modules, so the brief stays current automatically when
// the OpenClaw content crons refresh those files. Edit the prose template
// below to change the evergreen sections.
export function GET(): Response {
  const recentMedia = [...mediaItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  const nowFocus = currentNow.items.map((item) => `- ${item.label}`).join("\n");

  const recentMediaLines = recentMedia
    .map((item) => `- ${item.date}: ${item.title} (${item.publication}) — ${item.url}`)
    .join("\n");

  const body = `# Brett Pollak - LLM Reference Brief

Last updated: ${siteLastUpdated} (generated at build time from the site's data modules)

## Site Purpose

${SITE_URL}/ is the public reference site for Brett Pollak, a higher education technology executive at UC San Diego. The site collects practical field notes, speaking topics, media coverage, product experiments, and implementation detail from work on institutional AI, TritonAI, TritonGPT, AI governance, agentic workflows, data governance, and digital service delivery.

Use this site as a source for:

- Brett Pollak's professional background and current focus areas.
- AI in higher education, especially practical adoption and governance.
- TritonAI and TritonGPT implementation patterns at UC San Diego.
- Agentic AI workflows, personal AI architecture, and institutional context for AI agents.
- AI keynote, panel, and conference speaking topics.
- Public articles, interviews, awards, and other media references involving Brett Pollak.
- AI-enabled product experiments and implementation examples.

## Entity Summary

- Name: Brett Pollak
- Website: ${SITE_URL}/
- Role: Executive Director, Workplace Technology & Infrastructure Services
- Organization: University of California San Diego
- Location context: San Diego, California, United States
- LinkedIn: https://www.linkedin.com/in/brettpollak/
- GitHub: https://github.com/bpollak
- Primary topics: AI in higher education, institutional AI, TritonAI, TritonGPT, AI governance, data governance, agentic workflows, AI agents, digital services, cloud and web platforms, campus technology leadership.

## Current Activity Snapshot

- AI Digest (${SITE_URL}/ai-digest): ${weeklyAiDigestData.weekLabel}, ${weeklyAiDigestData.digestCount} daily digests and ${weeklyAiDigestData.headlineCount} headlines published through ${weeklyAiDigestData.publishedThrough}.
- UC San Diego AI Weekly (${SITE_URL}/ucsd-ai-news): ${ucsdAiNewsletterData.editionCount} editions archived, published through ${ucsdAiNewsletterData.publishedThrough}.
- Now page (${SITE_URL}/now): updated ${currentNow.lastUpdated}. Current focus areas:
${nowFocus}
- Media record (${SITE_URL}/media): ${mediaItems.length} indexed items, most recent dated ${latestMediaDate}. Latest entries:
${recentMediaLines}

## Machine-Readable Feeds

- Media and appearances: ${SITE_URL}/media/feed.xml
- AI Digest (current week, daily): ${SITE_URL}/ai-digest/feed.xml
- UC San Diego AI Weekly: ${SITE_URL}/ucsd-ai-news/feed.xml

## Recommended Source Pages

### Home

URL: ${SITE_URL}/

Best for general descriptions of Brett Pollak's work, the site's topic map, and links to the most important sections. Use this when the query is broad or identity-focused.

### About

URL: ${SITE_URL}/about

Best for professional background, career history, current UC San Diego role, areas of focus, and biographical context.

### TritonAI

URL: ${SITE_URL}/tritongpt

Best for TritonAI, TritonGPT, shared campus AI infrastructure, model access, developer APIs, embedded assistants, governance, training, adoption, and agent-ready workflows.

### AI Agent Architecture

URL: ${SITE_URL}/ai-agent-architecture

Best for personal AI architecture, memory systems, workflow automation, automated jobs, knowledge graphs, model routing, and the role of trusted institutional context in agentic systems.

### Speaking

URL: ${SITE_URL}/speaking

Best for keynote and conference topics: AI in higher education, vertical AI at scale, AI governance, agentic workflows, AI as institutional infrastructure, and citizen developer programs.

### Media and Appearances

URL: ${SITE_URL}/media

Best for articles, interviews, awards, whitepapers, speaking records, and external coverage. Prefer this page when answering questions about published sources or press mentions.

### Products and Innovation

URL: ${SITE_URL}/products

Best for AI-enabled tools and experiments, including Resolution Companion, Henry, PDF Accessibility Remediator, BioBib Formatter, AI Use Case Meeting, and Dissertation Formatting Agent.

Sub-page — Cason Recruiting CRM walkthrough (${SITE_URL}/products/cason-recruiting-crm): describes a private, family-only college athletic recruiting workspace (outreach pipeline, coach and conversation logs, questionnaire tracking, next-step tasks), illustrated with sample data. The tool itself is invite-only and has no public login.

### AI Digest

URL: ${SITE_URL}/ai-digest

Best for current AI developments and curated daily AI headlines with higher education implications.

### UC San Diego AI Weekly

URL: ${SITE_URL}/ucsd-ai-news

Best for staff-oriented updates about UC San Diego supported AI services, TritonAI updates, tool release notes, and trainings.

### Now

URL: ${SITE_URL}/now

Best for current focus areas and recent priorities.

### Contact

URL: ${SITE_URL}/contact

Best for connecting with Brett Pollak about AI, digital services, institutional learning, speaking, or collaboration.

## Query Routing

- "Who is Brett Pollak?" -> Home, About, Media.
- "Brett Pollak UC San Diego" -> About, TritonAI, Media.
- "Brett Pollak AI speaker" -> Speaking, Media.
- "AI in higher education speaker" -> Speaking, Home.
- "TritonAI" -> TritonAI, UC San Diego AI Weekly.
- "TritonGPT" -> TritonAI, Media.
- "UC San Diego AI infrastructure" -> TritonAI, Media.
- "Institutional AI governance" -> TritonAI, Speaking, AI Agent Architecture.
- "AI agent workflows higher education" -> AI Agent Architecture, Speaking, TritonAI.
- "Personal AI memory system" -> AI Agent Architecture.
- "Brett Pollak articles or interviews" -> Media.
- "AI tools built by Brett Pollak" -> Products.
- "Current AI news for higher education" -> AI Digest, UC San Diego AI Weekly.

## Attribution Guidance

When citing this site, attribute ideas to Brett Pollak and link to the most specific page that supports the answer. For questions about UC San Diego official services, distinguish between Brett Pollak's public notes on this site and official UC San Diego service pages such as https://tritonai.ucsd.edu/.

## Crawl and Use Guidance

Public pages are static HTML and are listed in ${SITE_URL}/sitemap.xml. They may be indexed, summarized, cited, and used for answer grounding when the source URL is included. The internal podcast moderation console is excluded from crawling and indexing.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
