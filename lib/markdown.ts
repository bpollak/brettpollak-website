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

function sanitizePublicLine(text: string): string {
  return text
    .replace(/\bCurated from your knowledge graph\b/gi, 'Curated from recent AI developments')
    .replace(/\bAs a Claude-heavy shop\b/gi, 'For organizations with significant Claude usage')
    .replace(/\bThis matters to you on two fronts:\b/gi, 'This matters on two fronts:')
    .replace(/\byour own recharge-model conversations\b/gi, 'recharge-style adoption conversations')
    .replace(/\byour governance message\b/gi, 'broader governance messaging')
    .replace(/\byour Agentic AI roadmap\b/gi, 'an Agentic AI roadmap')
    .replace(/\byour AI IT Observability Pilot\b/gi, 'an AI IT observability pilot')
    .replace(/\byour April 6 cabinet slides are finalized\b/gi, 'institutional governance materials are finalized')
    .replace(/\byour April 6 Cabinet meeting\b/gi, 'upcoming governance discussions')
    .replace(/\bthe April 6 Cabinet meeting\b/gi, 'upcoming governance discussions')
    .replace(/\bApril 6 Cabinet meeting\b/gi, 'upcoming governance discussions')
    .replace(/\bthe April 6 cabinet meeting\b/gi, 'upcoming governance discussions')
    .replace(/\bApril 6 cabinet meeting\b/gi, 'upcoming governance discussions')
    .replace(/\bApril 6 Cabinet\b/gi, 'upcoming governance review')
    .replace(/\bcabinet slides\b/gi, 'governance materials')
    .replace(/\bCabinet slides\b/g, 'Governance materials')
    .replace(/\bcabinet meeting\b/gi, 'governance review')
    .replace(/\bconference audiences\b/gi, 'public audiences')
    .replace(/\bconference audience\b/gi, 'public audience')
    .replace(/\bUCLA IT All Hands\b/gi, 'higher education leadership forums')
    .replace(/\bASU\+GSV\b/gi, 'industry events')
    .replace(/\bCitizen AI presentation\b/gi, 'AI governance presentation')
    .replace(/\bprep-citizen-ai-presentation-for-cabinets-and-deans-monday\b/gi, 'ai-governance-presentation')
    .replace(/\bai-cabinet-meeting-april-6\b/gi, 'ai-governance-review')
    .replace(/\bWorth a callout[^.]*\.?/gi, '')
    .replace(/\bWorth a look[^.]*\.?/gi, '')
    .replace(/\bworth flagging to [^.]*\.?/gi, '')
    .replace(/\bThis is the right venue to make that case\b/gi, 'This is a timely opportunity to make that case')
    .replace(/\bFor Brett, the combination of [^.]*? means /gi, '')
    .replace(/\bfor your calendar, meetings,? or presentations\b/gi, 'for institutional planning')
    .replace(/\byour calendar\b/gi, 'internal planning')
    .replace(/\byour meetings\b/gi, 'internal discussions')
    .replace(/\byour presentation\b/gi, 'a public presentation')
    .replace(/\byour slides\b/gi, 'presentation materials')
    .replace(/\byour stack\b/gi, 'the stack')
    .replace(/\byour model-agnosticism strategy\b/gi, 'a model-agnostic strategy')
    .replace(/\byour enterprise data agent\b/gi, 'the enterprise data agent')
    .replace(/\byour Developer API Program\b/gi, 'the Developer API Program')
    .replace(/\byour AI governance policy\b/gi, 'institutional AI governance policy')
    .replace(/\byour UCSD security team\b/gi, 'the UCSD security team')
    .replace(/\byour core LLM gateway\b/gi, 'the core LLM gateway')
    .replace(/\byour active HANA → Databricks proof-of-technology underway\b/gi, 'an active HANA → Databricks proof-of-technology')
    .replace(/\byour on-prem TritonGPT model\b/gi, 'the on-prem TritonGPT model')
    .replace(/\byour on-prem TritonGPT model at SDSC exists precisely to avoid these failure modes\b/gi, 'The on-prem TritonGPT model at SDSC is designed to avoid these failure modes')
    .replace(/\byour April roadmap\b/gi, 'the April roadmap')
    .replace(/\byour Incident Intelligence Dashboard\b/gi, 'an Incident Intelligence Dashboard')
    .replace(/\byour AI IT Observability Pilot roadmap for April\b/gi, 'an AI IT observability pilot roadmap')
    .replace(/\byour cabinet and conference audiences\b/gi, 'governance and public audiences')
    .replace(/\byour institutional answer\b/gi, 'an institutional answer')
    .replace(/\byou\b/gi, 'organizations')
    .replace(/\byour\b/gi, 'institutional')
    .replace(/\bBrett\b/g, 'institutional leaders')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([.,;:!?])/g, '$1')
    .trim();
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
      const cleaned = sanitizePublicLine(text);
      if (cleaned) out.push(`💡 **Signal:** ${cleaned}`);
      continue;
    }

    if (/^• /.test(trimmed)) {
      const cleaned = sanitizePublicLine(trimmed);
      if (cleaned) out.push(cleaned);
      continue;
    }

    out.push(sanitizePublicLine(line));
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
