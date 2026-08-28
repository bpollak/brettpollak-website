'use client';

import { useEffect } from 'react';

const SITE_ORIGIN = 'https://brettcpollak.com';

type SitePage = {
  path: string;
  title: string;
  description: string;
  topics: string[];
};

const sitePages: SitePage[] = [
  {
    path: '/',
    title: 'Brett Pollak',
    description:
      'Field notes on institutional AI, platform governance, digital services, agentic workflows, and practical higher education technology work.',
    topics: ['Brett Pollak', 'AI in higher education', 'institutional AI', 'UC San Diego'],
  },
  {
    path: '/about',
    title: 'About Brett Pollak',
    description:
      'Background, current work, and professional focus areas for Brett Pollak.',
    topics: ['biography', 'technology leadership', 'UC San Diego', 'digital services'],
  },
  {
    path: '/tritongpt',
    title: 'TritonAI',
    description:
      'UC San Diego shared AI infrastructure and practice ecosystem, including TritonGPT, developer APIs, embedded assistants, governance, and agent-ready workflows.',
    topics: ['TritonAI', 'TritonGPT', 'AI infrastructure', 'developer APIs', 'AI governance'],
  },
  {
    path: '/ai-agent-architecture',
    title: 'AI Agent Architecture',
    description:
      'A practical personal AI architecture using memory, automation, model routing, and institutional context.',
    topics: ['AI agents', 'agent architecture', 'memory', 'automation', 'model routing'],
  },
  {
    path: '/speaking',
    title: 'Speaking',
    description:
      'Speaking topics, keynote themes, and session framing around AI in higher education, institutional AI governance, and agentic workflows.',
    topics: ['keynote speaker', 'conference sessions', 'AI governance', 'higher education'],
  },
  {
    path: '/media',
    title: 'Media and Appearances',
    description: 'Published articles, interviews, awards, whitepapers, and external coverage.',
    topics: ['articles', 'interviews', 'press', 'awards', 'media'],
  },
  {
    path: '/ai-digest',
    title: 'AI Digest',
    description: 'Weekly rolling archive of curated AI developments and higher education implications.',
    topics: ['AI news', 'AI digest', 'higher education AI', 'weekly updates'],
  },
  {
    path: '/ucsd-ai-news',
    title: 'UC San Diego AI Weekly',
    description:
      'Weekly roundup for UC San Diego staff covering supported AI services, TritonAI updates, and trainings.',
    topics: ['UC San Diego AI', 'TritonAI updates', 'AI training', 'staff newsletter'],
  },
  {
    path: '/products',
    title: 'Products and Prototypes',
    description: 'Product experiments and AI-enabled tools built by Brett Pollak.',
    topics: ['products', 'AI tools', 'experiments', 'software'],
  },
  {
    path: '/products/cason-recruiting-crm',
    title: 'Cason Recruiting CRM',
    description:
      'A private, family-only college athletic recruiting workspace walkthrough illustrated with sample data.',
    topics: ['products', 'CRM', 'athletic recruiting', 'pipeline', 'sample data'],
  },
  {
    path: '/products/cason-scholarship-agent',
    title: 'Scholarship Agent',
    description:
      'A private scholarship CRM with an autonomous agent for discovery, eligibility screening, application tracking, and inbox-driven status updates.',
    topics: ['products', 'AI agent', 'scholarships', 'CRM', 'automation', 'sample data'],
  },
  {
    path: '/now',
    title: 'Now',
    description: 'Current focus areas and active work themes.',
    topics: ['current focus', 'now page', 'active work'],
  },
  {
    path: '/podcasts',
    title: 'Podcasts',
    description: 'Curated podcast recommendations on AI, technology, economics, and related topics.',
    topics: ['podcasts', 'recommendations', 'AI podcasts', 'technology podcasts'],
  },
  {
    path: '/linkedin',
    title: 'LinkedIn Notes',
    description: 'Recent notes and updates from Brett Pollak on LinkedIn.',
    topics: ['LinkedIn', 'social posts', 'updates'],
  },
  {
    path: '/contact',
    title: 'Contact',
    description: 'Contact Brett Pollak for speaking, collaboration, advisory, media, or other inquiries.',
    topics: ['contact', 'speaking inquiry', 'collaboration', 'advisory', 'media request'],
  },
];

const feeds = [
  {
    title: 'Media and Appearances',
    type: 'application/rss+xml',
    url: `${SITE_ORIGIN}/media/feed.xml`,
  },
  {
    title: 'AI Digest',
    type: 'application/rss+xml',
    url: `${SITE_ORIGIN}/ai-digest/feed.xml`,
  },
  {
    title: 'UC San Diego AI Weekly',
    type: 'application/rss+xml',
    url: `${SITE_ORIGIN}/ucsd-ai-news/feed.xml`,
  },
];

function absoluteUrl(path: string) {
  return new URL(path, SITE_ORIGIN).toString();
}

function normalizePath(value: unknown) {
  if (typeof value !== 'string') return '/';
  const trimmed = value.trim();
  if (!trimmed) return '/';

  try {
    const url = new URL(trimmed, SITE_ORIGIN);
    const match = sitePages.find((page) => page.path === url.pathname);
    return match?.path ?? '/';
  } catch {
    const path = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    const match = sitePages.find((page) => page.path === path);
    return match?.path ?? '/';
  }
}

function textResult(text: string) {
  return {
    content: [
      {
        type: 'text',
        text,
      },
    ],
  };
}

function jsonResult(data: unknown) {
  return textResult(JSON.stringify(data, null, 2));
}

function findSitePages(query: unknown) {
  if (typeof query !== 'string' || !query.trim()) {
    return sitePages.map((page) => ({
      ...page,
      url: absoluteUrl(page.path),
    }));
  }

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return sitePages
    .map((page) => {
      const haystack = [
        page.title,
        page.description,
        ...page.topics,
      ]
        .join(' ')
        .toLowerCase();

      const score = terms.reduce(
        (sum, term) => sum + (haystack.includes(term) ? 1 : 0),
        0
      );

      return {
        ...page,
        url: absoluteUrl(page.path),
        score,
      };
    })
    .filter((page) => page.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

export default function WebMCPProvider() {
  useEffect(() => {
    const modelContext = document.modelContext;
    if (!modelContext?.registerTool) return;

    const registerTool = modelContext.registerTool.bind(modelContext);
    const controller = new AbortController();
    const registerOptions = { signal: controller.signal };

    async function registerTools() {
      try {
        await Promise.all([
          registerTool(
            {
              name: 'get-site-index',
              description:
                'Returns the public Brett Pollak website pages, RSS feeds, sitemap, and machine-readable LLM briefing URLs.',
              execute() {
                return jsonResult({
                  site: {
                    name: 'Brett Pollak',
                    url: `${SITE_ORIGIN}/`,
                    description:
                      'Public writing and reference site for Brett Pollak on institutional AI, AI in higher education, TritonAI, governance, and agentic workflows.',
                  },
                  pages: sitePages.map((page) => ({
                    ...page,
                    url: absoluteUrl(page.path),
                  })),
                  feeds,
                  machineReadable: {
                    llms: `${SITE_ORIGIN}/llms.txt`,
                    llmsFull: `${SITE_ORIGIN}/llms-full.txt`,
                    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
                  },
                });
              },
            },
            registerOptions
          ),
          registerTool(
            {
              name: 'find-site-content',
              description:
                'Finds the best public page on brettcpollak.com for a topic or user intent.',
              inputSchema: {
                type: 'object',
                properties: {
                  query: {
                    type: 'string',
                    description:
                      'Topic or intent, such as TritonAI, AI governance, speaking, products, media, podcasts, or contact.',
                  },
                },
                required: ['query'],
                additionalProperties: false,
              },
              execute({ query }) {
                return jsonResult({
                  query,
                  matches: findSitePages(query),
                });
              },
            },
            registerOptions
          ),
          registerTool(
            {
              name: 'open-site-page',
              description:
                'Navigates this browser tab to a public Brett Pollak website page after resolving a known page path.',
              inputSchema: {
                type: 'object',
                properties: {
                  path: {
                    type: 'string',
                    enum: sitePages.map((page) => page.path),
                    description: 'Public page path to open.',
                  },
                },
                required: ['path'],
                additionalProperties: false,
              },
              execute({ path }) {
                const targetPath = normalizePath(path);
                const targetUrl = absoluteUrl(targetPath);

                window.setTimeout(() => {
                  window.location.assign(targetUrl);
                }, 0);

                return jsonResult({
                  opened: targetUrl,
                });
              },
            },
            registerOptions
          ),
          registerTool(
            {
              name: 'get-llms-brief',
              description:
                'Fetches the short or full machine-readable LLM briefing for this site.',
              inputSchema: {
                type: 'object',
                properties: {
                  version: {
                    type: 'string',
                    enum: ['short', 'full'],
                    default: 'short',
                    description:
                      'Use short for llms.txt or full for the expanded briefing.',
                  },
                },
                additionalProperties: false,
              },
              async execute({ version }, options) {
                const path = version === 'full' ? '/llms-full.txt' : '/llms.txt';
                const response = await fetch(path, {
                  signal: options?.signal,
                  headers: { Accept: 'text/plain' },
                });

                if (!response.ok) {
                  return jsonResult({
                    error: `Failed to fetch ${path}`,
                    status: response.status,
                  });
                }

                return textResult(await response.text());
              },
            },
            registerOptions
          ),
          registerTool(
            {
              name: 'get-current-page-context',
              description:
                'Returns the current page URL, title, meta description, canonical link, and visible headings.',
              execute() {
                const headings = Array.from(
                  document.querySelectorAll('h1, h2, h3')
                )
                  .map((heading) => ({
                    level: heading.tagName.toLowerCase(),
                    text: heading.textContent?.replace(/\s+/g, ' ').trim() ?? '',
                  }))
                  .filter((heading) => heading.text);

                return jsonResult({
                  url: window.location.href,
                  title: document.title,
                  description:
                    document
                      .querySelector('meta[name="description"]')
                      ?.getAttribute('content') ?? '',
                  canonical:
                    document
                      .querySelector('link[rel="canonical"]')
                      ?.getAttribute('href') ?? '',
                  headings,
                });
              },
            },
            registerOptions
          ),
          registerTool(
            {
              name: 'open-contact-page',
              description:
                'Navigates to the contact page for speaking, collaboration, advisory, media, or general inquiries.',
              execute() {
                const targetUrl = absoluteUrl('/contact');

                window.setTimeout(() => {
                  window.location.assign(targetUrl);
                }, 0);

                return jsonResult({
                  opened: targetUrl,
                });
              },
            },
            registerOptions
          ),
        ]);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.warn('WebMCP tool registration failed.', error);
        }
      }
    }

    void registerTools();

    return () => controller.abort();
  }, []);

  return null;
}
