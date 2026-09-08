# Aerospace Engineering Portfolio Site — Requirements Doc

**Owner:** Isaiah Conway
**Status:** Draft v0.1

## 1. Purpose

A personal portfolio site showcasing engineering projects to demonstrate capability as a prospective aerospace engineer (internships, grad school, recruiters).

## 2. Constraints

- **No frameworks.** Vanilla HTML/CSS/JS only.
- **No build tooling.** No npm, no bundler, no transpiler. Everything must run by opening the file / pushing to a repo — no build step.
- **Hosting:** GitHub Pages (static hosting only — no server, no database, no backend code execution).
- **Implication:** any "dynamic" behavior (editing content, handling messages) must be solved client-side or via a third-party static-friendly service, not a custom backend.

## 3. Functional Requirements

### 3.1 Project Sections
- Display a list/grid of projects (title, short description, tags e.g. "CFD", "structures", "propulsion", images/links, maybe a detail view).
- **Content should be editable without touching HTML/CSS/JS code.**
  - Candidate approach: single **data file** (e.g. `projects.json` or `projects.js` exporting an array) that the page reads and renders into the DOM at load time via JS.
  - Adding/editing a project = editing one structured file, not the markup.
  - Open question: do you want a detail page per project, or just an expandable card? Affects how much the data schema needs (e.g. long-form body text vs. just summary fields).

### 3.2 Messages / Feedback Section
- Visitors can send you a message or feedback.
- **Constraint conflict to resolve:** GitHub Pages cannot process form submissions or run server code. Options, roughly in order of typical fit for a no-backend static site:
  1. **Third-party form endpoint** (e.g. Formspree, Getform, Web3Forms) — plain `<form>` posts to their API, they email you the submission. Free tiers exist, no backend code needed.
  2. **`mailto:` link/form** — opens the visitor's own email client. Zero setup, but clunky UX and unreliable (many browsers/devices mishandle mailto).
  3. Something more roundabout (e.g. a Google Form embedded/linked) if you're fine with it not being visually native to the site.
- Needs a decision before this section can be scoped further — pick one and I'll write the specific requirement.

## 4. Non-Functional Requirements
- Static files only (`.html`, `.css`, `.js`, plus a JSON/JS data file for projects).
- Must work when served from a GitHub Pages project URL (relative paths, correct base paths — no absolute `/` paths that assume a custom domain unless you set one up).
- Reasonably responsive (usable on mobile and desktop) — plain CSS (flexbox/grid), no framework.
- No sensitive data (e.g. form API keys with write-broader-than-needed scope) committed to the public repo, since GitHub Pages repos are typically public.

## 5. Out of Scope (for now)
- CMS or admin UI for editing projects (editing the data file directly is the mechanism).
- Backend/server, database, authentication.
- Build tooling, package management, frameworks (React/Vue/etc.), CSS preprocessors.

## 6. Open Decisions
1. Project data format: `.json` fetched via `fetch()`, or `.js` file with an exported array/object (simpler — no CORS/fetch-from-`file://` issues during local testing).
2. Project detail level: cards only vs. per-project detail page.
3. Feedback mechanism: Formspree/similar vs. mailto vs. other.
4. Any content sections beyond Projects + Messages? (e.g. About, Resume/CV link, Contact/socials) — not requested yet, flagging in case it's implied.
