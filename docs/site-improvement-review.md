# Personal website implementation review

Prepared September 5, 2026. The six implementation phases are complete in a local review branch. Publication is outside this change's authorization.

## What changed

- **Navigation and layout:** compact navigation through tablet widths, a keyboard-operable Notes disclosure, Escape and outside-click closing, visible focus, and a Media grid that fits phone screens.
- **Homepage:** a shorter introduction, immediate Selected work and Speaking actions, three case-study previews, the full six-domain portfolio, and optional institutional-AI notes. Existing photography, typography, colors, and measured outcomes remain.
- **Selected work:** three historical cases covering responsive campus websites, the Student Activity Hub, and TritonGPT. Each distinguishes Brett's documented contribution from team work and links to public sources. See [source notes](case-study-sources.md).
- **Speaking:** topics and audience takeaways first, a verified historical webinar, bio and headshot downloads, three recent engagements with the older archive expandable, and speaking intent carried into Contact.
- **Projects:** primary navigation, campus/personal/experiment groupings, qualified availability labels, compact screenshots, and the corrected Resolution Companion App Store link. Existing `/products` routes remain.
- **Reference and reading pages:** architecture section navigation and expandable history; three featured Media items with all 63 archive entries retained; compact digest/newsletter indexes and nine permanent dated edition routes; corrected Markdown and web contact instructions.

## Measured results

Measurements use the exported site in Chromium at a 390px viewport with an 844px height. The baseline is the live site inspected before implementation. Page lengths include the footer; expandable content starts collapsed.

| Observation | Before | After |
| --- | ---: | ---: |
| Main homepage actions, lower edge | About 772px | 517px |
| First substantive work section | About 2,332px | 1,015px |
| Homepage total height | 8,434px | 7,240px |
| Speaking total height | 7,808px | 6,380px |
| Architecture total height | 41,952px | 28,691px |
| AI Digest index total height | 45,632px | 4,624px |
| Media document width at 390px | 413px | 390px |
| Navigation document width at 768px / 820px | 892px | 768px / 820px |

The work-section comparison is the previous portfolio section versus the new Selected work section. The Media archive is slightly longer because three featured entries were added above the unchanged archive. The architecture page still contains substantial reference material, reachable through section links.

## Validation

Copy editing by a dedicated editor is recorded in [copy-edit review](copy-edit-review.md). Final acceptance results are recorded in [responsive results](responsive-results.json) and [browser results](interaction-results.json).

- `npm run verify`: lint, TypeScript, production static export, and directory aliases.
- `node --test tests/reading.test.mjs`: Markdown safety and formatting, digest rollover and corrections, archive retention when inputs disappear, and safe failure on unexpected existing data.
- Browser checks at 390, 768, 820, 1024, and 1440px: 18 representative routes per width, with no horizontal overflow, one page heading, expected canonical URLs, valid JSON-LD, and no runtime errors.
- Interaction checks at all five widths: skip link, visible focus, menu keyboard operation and closing, Media filters, archive disclosure, both downloads, speaking contact preselection, intercepted success/error submissions, and architecture deep links.
- Sitemap crawl: all 25 listed pages and 128 internal destinations, with no missing routes or fragments; both edition feeds and all nine stable GUIDs; missing-edition 404; and newsletter presentation.
- Screenshots reviewed at desktop and phone widths, including scrolled sections and loaded images. External case-study sources and featured links were verified against their original publishers.

Browser automation uses Chromium. It is not a full screen-reader audit or a physical-device Safari check. External project entry pages were checked for access; those applications were not modified or tested end to end. No contact or subscription messages were delivered during review.

## Review and operation

The preview serves the production export at **http://127.0.0.1:3017** while the local server is running. Start it again from the implementation checkout with:

```sh
python3 -m http.server 3017 --bind 127.0.0.1 --directory out
```

Required checks use the repository's supported Node 20–24 runtime. The optional browser checks in `tests/site-review.cjs` and `tests/responsive-review.cjs` use Playwright; set `PLAYWRIGHT_MODULE` to an existing installation if it is not on Node's module path, and set `SITE_REVIEW_OUTPUT=docs/interaction-results.json` to save interaction results. Responsive checks write `docs/responsive-results.json`; `SITE_SCREENSHOT_DIR` selects the screenshot folder. No dependency was added to the application.

The original checkout contains iCloud-offloaded files, so implementation uses a separate materialized clone. The original checkout's existing work was preserved. The local branch is `codex/site-improvements`; no push, merge, or deployment has been performed.

The generation scripts retain editions inside the existing generated TypeScript modules. Existing publishing jobs already commit those modules, so older dated routes remain available when the current week changes. Corrections to a source edition replace its content at the same dated URL. Existing feed URLs and item GUIDs remain unchanged; each item now points to its dated page.

Any later approved publication should use the normal deployment workflow and then verify the actual production pages, downloads, dated routes, and responsive navigation.

Representative screenshots from the final export are available in the local review folder. The original plan is also offloaded by iCloud, so its completed checklist is maintained with this materialized implementation checkout.
