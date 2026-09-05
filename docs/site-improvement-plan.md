# Personal website improvement plan

Prepared September 5, 2026, following a review of the live site.

## Outcome

Help visitors quickly understand Brett's full technology portfolio, see concrete examples of his work, explore projects, and inquire about speaking. Preserve the existing typography, muted colors, photography, and understated, factual voice.

Implementation covers all six recommendations. Completion means the changes are implemented, tested, and available in a local preview with a concise review summary. Publication requires Brett's explicit approval under the workspace instructions; it is not a prerequisite for completing this implementation goal.

## Working conditions

- Preserve existing work and inspect repository instructions before implementation.
- The current checkout contains iCloud-offloaded files. Use a materialized checkout or a separate clean clone before Git operations, dependency installation, or builds. Do not overwrite or delete the existing checkout.
- Work on a `codex/` branch. Keep this plan with the implementation checkout and update its checklist as work finishes.
- Inspect current source, deployment configuration, and live pages before changing behavior. Do not assume the earlier audit describes every implementation detail.
- Use public, attributable sources for externally presented facts. Do not turn private professional context into new website claims.
- Preserve reported metrics, qualifiers, source titles, and attribution. Identify Brett's contribution separately from team accomplishments when evidence supports that distinction.
- Keep existing routes and external links working. Avoid a framework migration, new visual identity, or unnecessary dependencies.

## Implementation sequence

### 1. Repair responsive navigation and Media layout

Priority: first. Dependencies: a usable checkout.

Observed issues: the desktop navigation reaches approximately 892px wide at 768px and 820px viewport widths. The Media page measures 413px wide on a 390px viewport. The mobile menu did not close with Escape during the audit.

Deliverables:

- Keep compact navigation until the full navigation fits with adequate spacing.
- Correct Media grid, row, and text sizing at narrow widths without hiding overflow at the document level.
- Make menu opening, closing, keyboard use, and focus behavior consistent.

Acceptance:

- No horizontal document overflow on affected routes at 390, 768, 820, 1024, and 1440px.
- All navigation destinations remain reachable by keyboard and touch.
- Escape closes open menus and returns focus appropriately.

### 2. Compress the homepage and clarify visitor choices

Priority: first implementation pass. Dependencies: phase 1 navigation decisions.

Observed issue: the portfolio begins approximately 2,300px down on mobile, and the introduction, caption, and team panel repeat information.

Deliverables:

- Shorten the introduction while retaining the formal Executive Director title and full portfolio.
- Consolidate repeated team and current-focus information.
- Provide clear paths to selected work and Speaking.
- Label the link to `/now` as current focus or an equivalent description that matches its destination.
- Retain the headshot, approachable tone, and useful working questions.

Acceptance:

- The main actions appear in the initial 390x844 viewport.
- Selected work is reachable within roughly two phone screens.
- Infrastructure, data, support, collaboration, and AI remain represented.
- Every call to action has a destination consistent with its label.

### 3. Develop three source-backed case studies

Priority: second pass. Dependencies: public evidence review; homepage structure.

Deliverables:

- Select one infrastructure or service example, one data example, and one AI example.
- Candidate subjects to investigate include campus web or service modernization, the Student Activity Hub, and TritonGPT. Final selection depends on usable public evidence.
- Write concise accounts of the problem, Brett's documented contribution, the team's work, results, and lessons.
- Link metrics and significant factual claims to supporting sources.
- Surface a short version on the homepage and provide enough detail for visitors to assess the work.

Acceptance:

- All three examples have a documented source basis and accurately qualified outcomes.
- No invented metrics, personal attribution, or lessons presented as Brett's experience without support.
- Draft any source-dependent uncertainty explicitly for review rather than silently turning it into a fact.
- If public evidence cannot establish a material claim, omit that claim or resolve it with Brett before finalizing the case study.

### 4. Reorganize Speaking around event planning

Priority: first implementation pass. Dependencies: public recording and biography verification.

Deliverables:

- Lead with topics, audience takeaways, and a straightforward inquiry action.
- Replace the prominent empty-calendar panel with a useful invitation.
- Feature one verified recording when a suitable public recording is available.
- Show three recent engagements, with older engagements available through an accessible expansion or archive.
- Provide a downloadable existing headshot and a short, factual speaker biography.
- Carry speaking intent into the contact form, so a visitor need not select the same topic again.

Acceptance:

- An organizer can find topics, a biography, a headshot, and the inquiry action without searching the archive.
- Downloads and the featured recording link work.
- The contact form preselects the speaking subject from the Speaking page.
- No messages are sent during verification; submission behavior is checked through an intercepted request if needed.

### 5. Promote and organize Projects

Priority: second pass. Dependencies: navigation structure.

Deliverables:

- Use Projects as the visitor-facing label while preserving `/products` and its existing detail routes.
- Add Projects to primary navigation; place detailed architecture content within the appropriate secondary navigation.
- Group projects into campus tools, personal apps, and experiments using simple section links or accessible filters.
- Use consistent project statuses based on verified evidence: available, prototype, private demonstration, or another accurate label.
- Describe what Brett built or contributed where supported, and retain useful screenshots and working links.

Acceptance:

- Projects is easy to find on desktop and mobile.
- Existing detail routes and external application links remain intact.
- Categories are understandable and statuses do not imply availability or institutional endorsement without evidence.
- Private demonstrations remain clearly labeled.

### 6. Improve reference pages, archives, and newsletter rendering

Priority: final content pass. Dependencies: review of the existing content generation scripts and data model.

Deliverables:

- Add a short overview and section navigation to the architecture page; make detailed sections easier to traverse on mobile.
- Provide durable links to digest editions and a compact way to browse older entries.
- Feature three selected Media items above the full archive without dropping archive entries or source links.
- Remove production-source filenames from reader-facing newsletter content.
- Render intended Markdown correctly and replace email-only instructions with a useful web contact link.
- Apply newsletter fixes to the generating workflow where necessary so subsequent updates retain them.

Acceptance:

- Section and edition links resolve to the intended content, including on direct load.
- Expand/collapse controls work with keyboard and screen-reader semantics.
- Existing feed URLs continue to work; edition links remain meaningful after the current week changes.
- No literal Markdown artifacts or email-only reply instructions remain in the revised newsletter presentation.
- Selected Media items have verified titles, dates, source URLs, and accurate descriptions.

## Verification and handoff

- Run the repository's required verification command, currently `npm run verify`, after checking the current package scripts.
- Test affected pages at 390, 768, 820, 1024, and 1440px, including the homepage, About, Speaking, Contact, Projects, Media, Now, TritonAI, architecture, and both newsletter pages where shared components change.
- Check overflow, navigation, focus visibility, menu behavior, expandable sections, filters, downloads, deep links, and contact preselection.
- Inspect rendered desktop and mobile screenshots, including content reached by scrolling so lazy-loaded images are assessed correctly.
- Check page titles, canonical URLs, structured data, sitemap, and feeds where changed. Preserve discovery support already present.
- Review the final diff for unintended factual changes, broken routes, and unrelated modifications.
- Deliver a local preview, representative screenshots, source notes for the case studies, and a short summary of changes, validation results, and any remaining limitations.
- Any later approved release must be followed by verification of the actual production pages and affected route coverage.

## Progress

- [x] Review the live site and identify recommendations.
- [x] Record implementation scope, order, and acceptance criteria.
- [x] Establish a safe implementation checkout and inspect current repository instructions.
- [x] Phase 1: responsive navigation and Media fixes.
- [x] Phase 2: homepage compression and visitor paths.
- [x] Phase 3: three evidence-backed case studies.
- [x] Phase 4: Speaking page and inquiry path.
- [x] Phase 5: Projects navigation and organization.
- [x] Phase 6: reference pages, archives, and newsletter rendering.
- [x] Complete validation and prepare the reviewable handoff.

Implementation is in a separate materialized checkout on `codex/site-improvements`. See `site-improvement-review.md` for the final evidence and preview instructions.
