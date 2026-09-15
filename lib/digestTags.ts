import { digestEditions } from './editions';
import type { WeeklyDigestDay } from './weeklyAiDigestData';

/**
 * Evergreen topic tags for the AI Digest archive, derived from the "🔗 Graph:"
 * topic lines each edition's raw markdown already carries (authored by the
 * digest pipeline through an institutional lens). A tag page exists at
 * /ai-digest/tag/<slug> listing matching editions (newest first, capped).
 *
 * When adding a tag: extend TAG_RULES with its match list. Matching is
 * case-insensitive substring against the Graph line tokens.
 */

export type DigestTag = {
  slug: string;
  label: string;
  description: string;
};

export type TaggedEdition = {
  isoDate: string;
  headlines: string[];
  matchedTopic: string;
};

export const DIGEST_TAGS: DigestTag[] = [
  {
    slug: 'ai-governance',
    label: 'AI Governance & Policy',
    description: 'Acceptable-use frameworks, compliance, state and federal AI policy, and how institutions govern AI use.',
  },
  {
    slug: 'higher-education',
    label: 'Higher Education',
    description: 'Campus deployments, surveys, student-success uses, and what colleges and universities are actually doing with AI.',
  },
  {
    slug: 'ai-adoption',
    label: 'AI Adoption',
    description: 'Usage trends, adoption gaps between leaders and users, training demands, and workforce readiness.',
  },
  {
    slug: 'agentic-ai',
    label: 'Agentic AI',
    description: 'Agent platforms, multi-agent systems, harnesses, and the orchestration layer between models and work.',
  },
  {
    slug: 'ai-security',
    label: 'AI Security',
    description: 'Model safety thresholds, data retention, identity, and the security questions AI raises for enterprise IT.',
  },
  {
    slug: 'model-strategy',
    label: 'Model Strategy',
    description: 'Model agnosticism, LLM gateways, model routing, context protocols, and the build-vs-buy decision.',
  },
  {
    slug: 'vendor-moves',
    label: 'Vendor & Enterprise Moves',
    description: 'Launches, pricing, partnerships, and strategy shifts from OpenAI, Anthropic, Google, Microsoft, and the rest.',
  },
  {
    slug: 'infrastructure',
    label: 'Infrastructure & Data',
    description: 'Compute, cloud migrations, data analytics, and the plumbing AI runs on.',
  },
];

const TAG_RULES: Record<string, string[]> = {
  'ai-governance': ['ai governance', 'ai compliance', 'governance', 'compliance', 'policy', 'acceptable use'],
  'higher-education': ['higher ed', 'higher-ed', 'campus', 'education', 'student', 'university', 'college', 'faculty'],
  'ai-adoption': ['adoption', 'workforce', 'training'],
  'agentic-ai': ['agentic', 'agent', 'harness', 'orchestration'],
  'ai-security': ['security', 'safety', 'retention', 'identity', 'cyber'],
  'model-strategy': ['model agnostic', 'llm gateway', 'gateway', 'model context protocol', 'routing', 'model agnosticism'],
  'vendor-moves': ['openai', 'anthropic', 'claude', 'google', 'gemini', 'microsoft', 'mistral', 'meta', 'aws', 'bedrock', 'azure', 'vendor'],
  'infrastructure': ['infrastructure', 'migration', 'data analytics', 'compute', 'cloud', 'kubernetes', 'storage'],
};

function editionTopics(day: WeeklyDigestDay): string[] {
  const topics: string[] = [];
  const graphMatches = day.raw.match(/🔗 Graph: ([^\n]+)/g) ?? [];
  for (const line of graphMatches) {
    for (const token of line.replace('🔗 Graph:', '').split(',')) {
      const clean = token.trim();
      if (clean) topics.push(clean);
    }
  }
  // Fall back to headlines when an edition carries no Graph lines.
  if (topics.length === 0) {
    topics.push(...day.headlines.map(h => h.toLowerCase()));
  }
  return topics;
}

export function editionsForTag(slug: string, cap = 30): TaggedEdition[] {
  const rules = TAG_RULES[slug];
  if (!rules) return [];
  const results: TaggedEdition[] = [];
  for (const day of digestEditions) {
    if (results.length >= cap) break;
    const topics = editionTopics(day);
    const matched = topics.find(topic => {
      const t = topic.toLowerCase();
      return rules.some(rule => t.includes(rule));
    });
    if (matched) {
      results.push({ isoDate: day.isoDate, headlines: day.headlines, matchedTopic: matched });
    }
  }
  return results;
}

export function tagBySlug(slug: string): DigestTag | undefined {
  return DIGEST_TAGS.find(tag => tag.slug === slug);
}
