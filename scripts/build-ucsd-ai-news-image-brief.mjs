import fs from 'node:fs';
import path from 'node:path';

function getArg(name, fallback = null) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function parseIsoFromFilename(filename) {
  const match = filename.match(/^ucsd-ai-newsletter-(\d{4}-\d{2}-\d{2})\.md$/);
  return match ? match[1] : null;
}

function sectionSlice(markdown, heading) {
  const lines = markdown.split('\n');
  const startIdx = lines.findIndex((line) => line.trim() === heading);
  if (startIdx === -1) return '';
  const out = [];
  for (let i = startIdx + 1; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('## ')) break;
    out.push(lines[i]);
  }
  return out.join('\n').trim();
}

function bulletsFromSection(sectionText) {
  return sectionText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^(•|📅|📼)\s+\*\*/.test(line));
}

function cleanBulletLabel(line) {
  return line
    .replace(/^([•📅📼])\s+\*\*/, '')
    .replace(/\*\*\s+—.*$/, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*/g, '')
    .trim();
}

function rankThemes(raw) {
  const text = raw.toLowerCase();
  const themeRules = [
    {
      key: 'institutional ai governance',
      score: ['governance', 'guardrail', 'trust', 'oversharing', 'policy', 'security', 'protection', 'resilien', 'readiness'],
      visual: 'transparent governance layers, structured oversight pathways, calm authoritative institutional setting',
    },
    {
      key: 'higher-ed data infrastructure',
      score: ['data', 'sharepoint', 'backup', 'archive', 'search', 'context', 'knowledge', 'spreadsheet', 'workflow'],
      visual: 'photorealistic modern campus-tech operations center with luminous data surfaces and structured information flows',
    },
    {
      key: 'operational ai adoption',
      score: ['copilot', 'gemini', 'tritongpt', 'assistant', 'ai companion', 'mac', 'word', 'excel', 'tool'],
      visual: 'photorealistic professionals using modern AI-enabled workflows, screens and collaborative work surfaces without readable UI text',
    },
    {
      key: 'research innovation',
      score: ['microscopy', 'research', 'live cells', 'ocean', 'currents', 'science', 'chip', 'gpu'],
      visual: 'photorealistic scientific imagery blended with elegant research instrumentation, ocean/coastal light, and microscopic detail',
    },
  ];

  return themeRules
    .map((rule) => ({
      ...rule,
      weight: rule.score.reduce((sum, token) => sum + (text.includes(token) ? 1 : 0), 0),
    }))
    .filter((rule) => rule.weight > 0)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3);
}

function buildPrompt({ isoDate, raw }) {
  const toolUpdates = bulletsFromSection(sectionSlice(raw, "## What's New in Your AI Tools"));
  const tritonNews = bulletsFromSection(sectionSlice(raw, '## TritonAI News'));
  const themes = rankThemes(raw);

  const topThemes = themes.length > 0 ? themes : [
    {
      key: 'institutional AI adoption',
      visual: 'photorealistic campus technology environment with intelligent systems and premium editorial lighting',
    },
  ];

  const storySignals = [...toolUpdates.slice(0, 4), ...tritonNews.slice(0, 2)]
    .map((line) => cleanBulletLabel(line))
    .filter(Boolean)
    .slice(0, 5);

  const visualAnchors = topThemes.map((theme) => theme.visual).join('; ');
  const themeList = topThemes.map((theme) => theme.key).join(', ');
  const signalList = storySignals.join('; ');

  const prompt = [
    'Create a photorealistic editorial hero image for the UC San Diego AI Weekly Update.',
    `This specific edition is dated ${isoDate} and the dominant content themes are: ${themeList}.`,
    `Story signals to reflect indirectly in the scene: ${signalList}.`,
    `Visual direction: ${visualAnchors}.`,
    'Use a premium magazine-cover aesthetic with realistic lighting, believable materials, high-end photographic composition, and sophisticated depth.',
    'Blend campus technology, institutional operations, and research innovation in a way that feels grounded and real rather than generic AI art.',
    'Triton-inspired palette: deep blues, cyan, clean whites, and restrained gold accents.',
    'No text, no letters, no numbers, no logos, no watermarks, no robot faces, no humanoid androids, no cheesy sci-fi interfaces, no floating hologram clichés.',
    'Wide horizontal composition suitable for a website hero image and social preview.',
  ].join(' ');

  return {
    isoDate,
    themes: topThemes.map((t) => t.key),
    storySignals,
    prompt,
  };
}

const sourceDir = getArg('source-dir', '/Users/brettpollak/.openclaw/workspace/docs');
const output = getArg('output', null);
const explicitIso = getArg('iso-date', null);

const files = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir) : [];
const candidates = files
  .map((filename) => ({ filename, isoDate: parseIsoFromFilename(filename) }))
  .filter((item) => item.isoDate)
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

const selected = explicitIso
  ? candidates.find((item) => item.isoDate === explicitIso)
  : candidates[0];

if (!selected) {
  throw new Error('No newsletter source file found.');
}

const raw = fs.readFileSync(path.join(sourceDir, selected.filename), 'utf8');
const brief = buildPrompt({ isoDate: selected.isoDate, raw });

const json = JSON.stringify(brief, null, 2);
if (output) {
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${json}\n`);
  console.log(`Wrote ${output}`);
} else {
  console.log(json);
}
