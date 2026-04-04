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
    const next = lines[i + 1]?.trim() ?? '';

    const headlineMatch = trimmed.match(/^• \*\*(.+?)\*\*(.*)$/);
    const urlMatch = next.match(/^📰\s+(https?:\/\/\S+)$/);

    if (headlineMatch && urlMatch) {
      const [, headline, rest] = headlineMatch;
      out.push(`• [${headline}](${urlMatch[1]})${rest}`);
      i += 1;
      continue;
    }

    out.push(current);
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
