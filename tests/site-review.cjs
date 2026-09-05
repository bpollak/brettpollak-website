/* Optional browser acceptance checks against the exported preview.
 * PLAYWRIGHT_MODULE may point to a bundled Playwright installation.
 * Never delivers contact messages: the endpoint is intercepted before navigation.
 */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.env.SITE_PREVIEW_URL || 'http://127.0.0.1:3017';
const output = process.env.SITE_REVIEW_OUTPUT;
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of [390, 768, 820, 1024, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
    await context.route(/google-analytics\.com|googletagmanager\.com/, route => route.abort());
    let submissions = 0;
    await context.route('https://api.web3forms.com/submit', async route => {
      const data = route.request().postDataJSON();
      assert.equal(data.subject, 'Speaking Engagement');
      assert.equal(data.email, 'review@example.invalid');
      submissions++;
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: submissions === 1 }) });
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').innerText(), 'Skip to main content');
    await page.keyboard.press('Enter');
    assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');
    const toggle = page.locator(width < 1024 ? 'button[aria-controls="mobile-navigation"]' : 'button[aria-controls="notes-navigation"]');
    await toggle.focus();
    const outline = await toggle.evaluate(el => ({ width: getComputedStyle(el).outlineWidth, style: getComputedStyle(el).outlineStyle }));
    assert.notEqual(outline.width, '0px'); assert.notEqual(outline.style, 'none');
    await page.keyboard.press('Enter');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    const panel = page.locator(width < 1024 ? '#mobile-navigation' : '#notes-navigation');
    assert.equal(await panel.getByRole('link').count(), width < 1024 ? 12 : 6);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator(':focus').innerText(), width < 1024 ? 'About' : 'Current focus');
    await page.keyboard.press('Escape');
    assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    assert.equal(await toggle.evaluate(el => el === document.activeElement), true);
    await toggle.click(); await page.locator('h1').click();
    assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
    await toggle.click();
    await panel.getByRole('link', { name: width < 1024 ? 'Projects' : 'Current focus', exact: true }).click();
    await page.waitForURL(width < 1024 ? /\/products\/?$/ : /\/now\/?$/);
    assert.equal(await page.locator('[aria-expanded="true"]').count(), 0);
    // Media filters keep the full 63-item archive and announce the visible count.
    await page.goto(base + '/media/', { waitUntil: 'networkidle' });
    for (const label of ['Articles', 'Interviews', 'Whitepapers', 'Speaking', 'Awards', 'All']) {
      const button = page.getByRole('button', { name: new RegExp('^' + label + '\\d*') });
      await button.click();
      assert.equal(await button.getAttribute('aria-pressed'), 'true');
      const count = Number((await button.innerText()).match(/\d+/)[0]);
      assert.match(await page.getByRole('status').innerText(), new RegExp('Showing ' + count + ' items?'));
      if (label === 'All') assert.equal(count, 63);
      assert.equal(await page.locator('button[aria-pressed="true"]').count(), 1);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    await page.goto(base + '/speaking/', { waitUntil: 'networkidle' });
    const archive = page.locator('details');
    assert.equal(await archive.evaluate(el => el.open), false);
    await archive.locator('summary').focus(); await page.keyboard.press('Enter');
    assert.equal(await archive.evaluate(el => el.open), true);
    await page.keyboard.press('Space'); assert.equal(await archive.evaluate(el => el.open), false);
    for (const [name, filename, minBytes] of [['Download bio (TXT)', 'brett-pollak-bio.txt', 100], ['Download headshot (PNG)', 'brett-pollak-headshot.png', 10000]]) {
      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('link', { name, exact: true }).click();
      const download = await downloadPromise;
      assert.equal(download.suggestedFilename(), filename);
      assert.ok(fs.statSync(await download.path()).size > minBytes);
    }
    assert.equal(await page.getByRole('link', { name: /Watch the webinar on YouTube/ }).getAttribute('href'), 'https://www.youtube.com/watch?v=0V8TmUXY-z4');
    await page.getByRole('link', { name: 'Ask about a talk', exact: true }).first().click();
    await page.waitForURL(/contact\/?\?topic=speaking#contact-form/);
    await page.waitForFunction(() => document.querySelector('#subject')?.value === 'Speaking Engagement');
    assert.equal(await page.locator('#subject').inputValue(), 'Speaking Engagement');
    for (let attempt = 0; attempt < 2; attempt++) {
      await page.goto(base + '/contact/?topic=speaking#contact-form', { waitUntil: 'networkidle' });
      await page.reload({ waitUntil: 'networkidle' });
      assert.equal(await page.locator('#subject').inputValue(), 'Speaking Engagement');
      await page.getByLabel('Name *', { exact: true }).fill('Local review');
      await page.getByLabel('Email *', { exact: true }).fill('review@example.invalid');
      await page.getByLabel('Message *', { exact: true }).fill('Intercepted browser acceptance check.');
      await page.getByRole('button', { name: 'Send Message', exact: true }).click();
      await page.waitForFunction(expected => document.querySelector('#contact-form [role="alert"]')?.textContent.includes(expected), attempt === 0 ? 'Thank you' : 'Failed to send message');
      assert.match(await page.locator('#contact-form').getByRole('alert').innerText(), attempt === 0 ? /Thank you/ : /Failed to send message/);
    }
    assert.equal(submissions, 2);
    await page.goto(base + '/contact/', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('#subject').inputValue(), '');
    await page.goto(base + '/ai-agent-architecture/', { waitUntil: 'networkidle' });
    const history = page.locator('#development-history');
    assert.equal(await history.evaluate(el => el.open), false);
    await page.getByRole('link', { name: 'Development history', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('#development-history').open);
    await page.goto(base + '/ai-agent-architecture/#development-history', { waitUntil: 'networkidle' });
    assert.equal(await history.evaluate(el => el.open), true);
    assert.ok(await history.evaluate(el => el.getBoundingClientRect().top < innerHeight));
    assert.deepEqual(errors, []);
    results.push({ width, checks: ['skip link and visible keyboard focus', 'menu keyboard, Escape, outside click and route closing', 'all media filters and counts', 'native speaking archive disclosure', 'bio and headshot downloads', 'speaking contact preselection', 'intercepted success and failure submissions', 'architecture direct and in-page deep links'], interceptedSubmissions: submissions });
    console.log(JSON.stringify({ width, interactionChecks: 'passed', interceptedSubmissions: submissions }));
    await context.close();
  }
  // Crawl sitemap pages and validate internal links, anchors, images and metadata.
  const context = await browser.newContext();
  await context.route(/google-analytics\.com|googletagmanager\.com/, route => route.abort());
  const sitemap = await (await context.request.get(base + '/sitemap.xml')).text();
  const paths = [...sitemap.matchAll(/<loc>https:\/\/brettcpollak\.com([^<]*)<\/loc>/g)].map(match => match[1] || '/');
  const destinations = new Set(); const anchors = new Map(); const pages = [];
  for (const pathname of paths) {
    const page = await context.newPage();
    const response = await page.goto(base + pathname, { waitUntil: 'load' });
    assert.equal(response.status(), 200, pathname);
    const info = await page.evaluate(() => ({ title: document.title, h1s: document.querySelectorAll('h1').length, canonical: document.querySelector('link[rel="canonical"]')?.href, ids: [...document.querySelectorAll('[id]')].map(el => el.id), links: [...document.querySelectorAll('a[href]')].map(el => el.href), images: [...document.querySelectorAll('main img')].map(el => el.src), jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent)) }));
    assert.equal(info.h1s, 1, pathname); assert.ok(info.title, pathname);
    assert.equal(info.canonical, 'https://brettcpollak.com' + pathname.replace(/\/$/, '') + (pathname === '/' ? '/' : ''), pathname);
    anchors.set(pathname.replace(/\/$/, '') || '/', new Set(info.ids));
    for (const href of [...info.links, ...info.images]) { const url = new URL(href); if ([base, 'https://brettcpollak.com'].includes(url.origin)) destinations.add(url.pathname + url.hash); }
    pages.push({ pathname, title: info.title, canonical: info.canonical, structuredDataBlocks: info.jsonld.length });
    await page.close();
  }
  const missing = [];
  for (const destination of destinations) {
    const url = new URL(destination, base); const pathname = url.pathname.replace(/\/$/, '') || '/';
    const response = await context.request.get(base + url.pathname);
    if (response.status() !== 200) missing.push({ destination, status: response.status() });
    if (url.hash && anchors.has(pathname) && !anchors.get(pathname).has(decodeURIComponent(url.hash.slice(1)))) missing.push({ destination, missingAnchor: true });
  }
  assert.deepEqual(missing, []);
  const feeds = [];
  for (const kind of ['ai-digest', 'ucsd-ai-news']) {
    const response = await context.request.get(base + '/' + kind + '/feed.xml'); assert.equal(response.status(), 200);
    const xml = await response.text(); const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];
    for (const [_, item] of items) {
      const link = item.match(/<link>([^<]+)<\/link>/)[1]; const guid = item.match(/<guid[^>]*>([^<]+)<\/guid>/)[1];
      const date = link.match(/\d{4}-\d{2}-\d{2}$/)?.[0]; assert.ok(date, link); assert.equal(guid, 'https://brettcpollak.com/' + kind + '#' + date);
      assert.ok(paths.includes('/' + kind + '/' + date));
    }
    feeds.push({ kind, items: items.length, datedLinks: true, originalGuids: true });
  }
  assert.equal((await context.request.get(base + '/ai-digest/1900-01-01')).status(), 404);
  const newsletter = await context.newPage(); await newsletter.goto(base + '/ucsd-ai-news/2026-08-31/');
  const text = await newsletter.locator('article').innerText();
  assert.doesNotMatch(text, /Reply to this email|ucsd-ai-newsletter-.*\.md|\* \* \*|_Want to share/);
  assert.ok(await newsletter.locator('article ul li').count() > 0);
  assert.equal(await newsletter.locator('article a a').count(), 0);
  const result = { reviewedAt: new Date().toISOString(), preview: base, interactions: results, pages, internalDestinations: destinations.size, missing, feeds, newsletterRendering: 'passed' };
  if (output) fs.writeFileSync(output, JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ sitemapPages: pages.length, internalDestinations: destinations.size, missing, feeds, newsletterRendering: 'passed' }));
  await context.close(); await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
