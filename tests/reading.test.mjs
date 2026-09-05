import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';
import { readGeneratedData } from '../scripts/edition-archive.mjs';

const source = fs.readFileSync(new URL('../lib/markdown.ts', import.meta.url), 'utf8');
const moduleCode = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { renderMarkdown, newsletterForWeb, inlineFormat } = await import(`data:text/javascript;base64,${Buffer.from(moduleCode).toString('base64')}`);

test('newsletter presentation renders common Markdown and replaces the email-only footer', () => {
  const raw = "# Weekly news\n\n## Training\n* Take the [course](https://example.edu/course).\n* Watch the recording.\n\n* * *\n\n_Want to share feedback? Reply to this email._\n\nYour access is unchanged.";
  const html = renderMarkdown(newsletterForWeb(raw));
  assert.match(html, /<ul>\s*<li>Take/);
  assert.equal((html.match(/<li>/g) ?? []).length, 2);
  assert.match(html, /<hr>/);
  assert.match(html, /href="https:\/\/brettcpollak.com\/contact"/);
  assert.doesNotMatch(html, /Reply to this email|\* \* \*|_Want/);
  assert.match(html, /Your access is unchanged/);
  assert.equal(inlineFormat('_A note_ and `file_name`'), '<em>A note</em> and <code>file_name</code>');
});

test('untrusted Markdown cannot create executable markup or nested URL anchors', () => {
  const html = renderMarkdown('<img src=x onerror=alert(1)>\n\n[unsafe](javascript:alert(1))\n\n[https://example.edu](https://example.edu)');
  assert.doesNotMatch(html, /<img|href="javascript:/);
  assert.match(html, /&lt;img/);
  assert.equal((html.match(/<a /g) ?? []).length, 1);
  assert.match(inlineFormat('https://example.edu/a_b?q=one_two.'), /href="https:\/\/example.edu\/a_b\?q=one_two"/);
});

function scratch(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'site-edition-test-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const inputs = path.join(dir, 'inputs'); fs.mkdirSync(inputs);
  return { dir, inputs, output: path.join(dir, 'data.ts') };
}
function writeModule(output, data) { fs.writeFileSync(output, `export const testData: TestData = ${JSON.stringify(data)};\n`); }
function runGenerator(script, inputs, output, today) {
  execFileSync(process.execPath, [path.resolve('scripts', script), `--source-dir=${inputs}`, `--output=${output}`, `--today=${today}`], { env: { ...process.env, TZ: 'America/Los_Angeles' }, stdio: 'pipe' });
  return readGeneratedData(output);
}

test('a weekly rollover preserves earlier digest URLs and accepts corrections without duplicates', t => {
  const { inputs, output } = scratch(t);
  const old = { isoDate: '2026-09-05', displayDate: 'Saturday', sourceFile: 'old.md', headlines: ['Earlier story'], raw: 'Earlier source' };
  writeModule(output, { days: [old], archive: [] });
  const filename = path.join(inputs, 'ai-news-digest-2026-09-07.md');
  fs.writeFileSync(filename, '# Briefing\n• **New story** — Summary\n  📰 https://example.edu/new\n');
  let data = runGenerator('update-weekly-ai-digest-data.mjs', inputs, output, '2026-09-07');
  assert.deepEqual(data.archive, [old]);
  assert.equal(data.days[0].isoDate, '2026-09-07');
  fs.writeFileSync(filename, '# Briefing\n• **Corrected story** — Summary\n');
  data = runGenerator('update-weekly-ai-digest-data.mjs', inputs, output, '2026-09-07');
  assert.equal(data.days[0].headlines[0], 'Corrected story');
  assert.equal(data.archive.length, 1);
  fs.unlinkSync(filename);
  data = runGenerator('update-weekly-ai-digest-data.mjs', inputs, output, '2026-09-14');
  assert.equal(data.archive.length, 2);
  assert.equal(data.publishedThrough, 'September 7, 2026');
});

test('newsletter updates retain an edition even when its source file is no longer in the input directory', t => {
  const { inputs, output } = scratch(t);
  const old = { isoDate: '2026-08-31', displayDate: 'Monday', sourceFile: 'old.md', toolUpdatesCount: 1, tritonAiNewsCount: 0, upcomingTrainingsCount: 0, heroImage: null, raw: 'Earlier newsletter' };
  writeModule(output, { editions: [old] });
  fs.writeFileSync(path.join(inputs, 'ucsd-ai-newsletter-2026-09-07.md'), "# Weekly\n## What's New in Your AI Tools\n• **A tool update** — Details.\n");
  let data = runGenerator('update-weekly-ucsd-ai-newsletter-data.mjs', inputs, output, '2026-09-07');
  assert.deepEqual(data.archive, [old]);
  assert.equal(data.editions[0].isoDate, '2026-09-07');
  fs.unlinkSync(path.join(inputs, 'ucsd-ai-newsletter-2026-09-07.md'));
  data = runGenerator('update-weekly-ucsd-ai-newsletter-data.mjs', inputs, output, '2026-09-14');
  assert.equal(data.archive.length, 2);
  assert.equal(data.publishedThrough, 'September 7, 2026');
  assert.equal(data.weekOf, '2026-09-07');
});

test('an unexpected previous data format fails safely instead of discarding the archive', t => {
  const { output } = scratch(t);
  fs.writeFileSync(output, 'invalid generated data');
  assert.throws(() => readGeneratedData(output), /Cannot preserve editions/);
  assert.equal(fs.readFileSync(output, 'utf8'), 'invalid generated data');
});
