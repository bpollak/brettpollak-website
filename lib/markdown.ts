/**
 * Shared markdown rendering for the public AI digest page.
 * Intentionally mirrors Mission Control formatting so digest content stays identical.
 */

/** Convert inline markdown to HTML: bold, italic, markdown links, and bare URLs */
export function inlineFormat(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/(?<!href="|">)(https?:\/\/[^\s<)"]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
}

export function linkDigestHeadlines(raw: string): string {
  const lines = raw.split('\n');
  const out: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const current = lines[i];
    const trimmed = current.trim();
    const headlineMatch = trimmed.match(/^• \*\*(.+?)\*\*(.*)$/);

    if (!headlineMatch) {
      out.push(current);
      continue;
    }

    let url: string | null = null;
    let urlIndex = -1;

    for (let j = i + 1; j < lines.length; j++) {
      const lookahead = lines[j].trim();

      if (!lookahead) {
        break;
      }

      const nextHeadline = lookahead.match(/^• \*\*(.+?)\*\*(.*)$/);
      if (nextHeadline) {
        break;
      }

      const urlMatch = lookahead.match(/^📰\s+(https?:\/\/\S+)$/);
      if (urlMatch) {
        url = urlMatch[1];
        urlIndex = j;
        break;
      }
    }

    const [, headline, rest] = headlineMatch;
    out.push(url ? `• [${headline}](${url})${rest}` : current);

    if (urlIndex !== -1) {
      for (let j = i + 1; j < urlIndex; j++) {
        out.push(lines[j]);
      }
      i = urlIndex;
      continue;
    }
  }

  return out.join('\n');
}

function sanitizeSentence(sentence: string): string {
  const trimmed = sentence.trim();
  if (!trimmed) return '';

  const removeIfContains = [
    /\bBrett\b/i,
    /\byour\b/i,
    /\byou\b/i,
    /\bmeeting\b/i,
    /\bcabinet\b/i,
    /\bslides\b/i,
    /\bpresentation\b/i,
    /\bconference audiences?\b/i,
    /\bUCLA IT All Hands\b/i,
    /\bMonday\b/i,
    /\bWorth a callout\b/i,
    /\bWorth a look\b/i,
    /\bflagging to\b/i,
  ];

  if (removeIfContains.some((pattern) => pattern.test(trimmed))) {
    return '';
  }

  return trimmed
    .replace(/\bCurated from your knowledge graph\b/gi, 'Curated from recent AI developments')
    .replace(/\bAs a Claude-heavy shop\b/gi, 'For organizations with significant Claude usage')
    .replace(/\bFor UC San Diego, this is a useful market proof point for your own recharge-model conversations\b/gi, 'For higher education and enterprise teams, this is a useful market proof point for recharge-style adoption models')
    .replace(/\bThis matters to you on two fronts:\b/gi, 'This matters on two fronts:')
    .replace(/\bFor TritonGPT — which already uses both ServiceNow and MCP — this is the missing control-plane layer\b/gi, 'For TritonGPT and similar enterprise AI platforms, this is the missing control-plane layer')
    .replace(/\bFor TritonGPT's model-agnostic architecture — already using MCP — this convergence validates the bet\b/gi, 'For model-agnostic enterprise AI architectures already using MCP, this convergence validates the approach')
    .replace(/\bThis maps directly to TritonAI adoption strategy, Gemini-in-gateway decisions, and your governance message\b/gi, 'This maps directly to TritonAI adoption strategy, Gemini-in-gateway decisions, and broader governance messaging')
    .replace(/\bThat reinforces your Agentic AI roadmap\b/gi, 'That reinforces an Agentic AI roadmap')
    .replace(/\bThis is the production blueprint for your AI IT Observability Pilot launching in April\b/gi, 'This is a production blueprint for an AI IT observability pilot')
    .replace(/\bWith TritonGPT already running LiteLLM as its unifying gateway across GPT-4, Claude, and Gemini, UC San Diego is ahead of the curve — but this is a clear mandate to document and evangelize that architecture\b/gi, 'With TritonGPT already running LiteLLM as its unifying gateway across GPT-4, Claude, and Gemini, UC San Diego is ahead of the curve, and this is a clear mandate to document and evangelize that architecture')
    .replace(/\bThis is directly relevant to TritonAI's governance framework: as you build out agentic tools and the Developer API Program enables campus builders, establishing guardrails against indirect prompt injection needs to be part of the AI governance policy before agents proliferate\b/gi, 'This is directly relevant to TritonAI\'s governance framework: as agentic tools expand and developer programs enable more builders, guardrails against indirect prompt injection need to be part of institutional AI governance policy before agents proliferate')
    .replace(/\bFor organizations standardizing on Claude-heavy stacks, this signals Anthropic is positioning itself as the responsible enterprise AI partner\b/gi, 'This signals Anthropic is positioning itself as a responsible enterprise AI partner')
    .replace(/\bFor higher education and enterprise teams, this is a useful market proof point for recharge-style adoption models: enterprise buyers want controllable spend, lighter pilot entry, and clearer paths from experimentation to scaled adoption\b/gi, 'This is a useful market proof point for recharge-style adoption models: enterprise buyers want controllable spend, lighter pilot entry, and clearer paths from experimentation to scaled adoption');
}

export function sanitizePublicDigest(raw: string): string {
  const lines = raw.split('\n');
  const out: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^\*Curated from knowledge graph/i.test(trimmed)) continue;
    if (/^Curated from your knowledge graph/i.test(trimmed)) continue;
    if (/^🔗\s+Graph:/i.test(trimmed)) continue;

    if (/^💡\s+\*\*Signal:\*\*/i.test(trimmed)) {
      const text = trimmed.replace(/^💡\s+\*\*Signal:\*\*\s*/i, '');
      const cleaned = text
        .split(/(?<=[.!?])\s+/)
        .map(sanitizeSentence)
        .filter(Boolean)
        .join(' ');
      if (cleaned) {
        out.push(`💡 **Signal:** ${cleaned}`);
      }
      continue;
    }

    if (/^• /.test(trimmed)) {
      const cleaned = trimmed
        .split(/(?<=[.!?])\s+/)
        .map(sanitizeSentence)
        .filter(Boolean)
        .join(' ');
      if (cleaned) {
        out.push(cleaned);
      }
      continue;
    }

    out.push(line);
  }

  return out.join('\n');
}

/** Convert a block of markdown text to simple HTML */
export function renderMarkdown(raw: string): string {
  const lines = raw.split('\n');
  const out: string[] = [];
  let inList = false;
  let inOrderedList = false;

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();

    if (/^# /.test(t)) continue;

    if (!t) {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        out.push('</ol>');
        inOrderedList = false;
      }
      continue;
    }

    if (/^---+$/.test(t) || /^━+$/.test(t)) {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        out.push('</ol>');
        inOrderedList = false;
      }
      out.push('<hr>');
      continue;
    }

    if (/^### /.test(t)) {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        out.push('</ol>');
        inOrderedList = false;
      }
      out.push(`<h3>${inlineFormat(t.replace(/^### /, ''))}</h3>`);
      continue;
    }

    if (/^## /.test(t)) {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (inOrderedList) {
        out.push('</ol>');
        inOrderedList = false;
      }
      out.push(`<h2>${inlineFormat(t.replace(/^## /, ''))}</h2>`);
      continue;
    }

    if (/^[-•] /.test(t)) {
      if (inOrderedList) {
        out.push('</ol>');
        inOrderedList = false;
      }
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      out.push(`<li>${inlineFormat(t.replace(/^[-•] /, ''))}</li>`);
      continue;
    }

    if (/^\d+\. /.test(t)) {
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (!inOrderedList) {
        out.push('<ol>');
        inOrderedList = true;
      }
      out.push(`<li>${inlineFormat(t.replace(/^\d+\. /, ''))}</li>`);
      continue;
    }

    if (inList) {
      out.push('</ul>');
      inList = false;
    }
    if (inOrderedList) {
      out.push('</ol>');
      inOrderedList = false;
    }
    out.push(`<p>${inlineFormat(t)}</p>`);
  }

  if (inList) out.push('</ul>');
  if (inOrderedList) out.push('</ol>');
  return out.join('\n');
}
