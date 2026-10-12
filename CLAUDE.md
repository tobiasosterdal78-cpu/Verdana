# Vardena

Swedish Microsoft Dynamics 365 Business Central consultancy website, in English and Swedish. The company was called Verdana until 2026-10-12; the folder, the package and the GitHub repository still carry that name.

## Resume
Read docs/PROGRESS.md, docs/TODO.md and docs/DECISIONS.md, then inspect Git status and the actual code. The original brief is in docs/MASTER-BRIEF.md; the SEO and market research is in docs/reports/.

## Scope and approvals
- The redesign is complete locally and pushed to GitHub. Launch waits for Robin's decisions and explicit production approval. Do not purchase services or modify DNS without authorization.
- Owner-supplied artwork in public/brand is used unchanged (see public/brand/README.md). Only the V is in use: the lockup and wordmark spell the former name and are archived in docs/brand-archive until Robin supplies artwork for Vardena. Do not redraw or generate replacements; derivatives are crop, centre and resize only, through scripts/brand-derivatives.mjs.
- Never invent partner status, references, certifications, prices or company history. Only the organisation number 559602-6616 and the email address hello@vardena.se are confirmed; do not invent legal name, VAT number, address or social profiles. No Microsoft logos or badges.
- Cryvanta, the reference site Robin points to, may inspire placement and behaviour; do not copy its theme or menus.
- English and Swedish interface; English code, filenames, technical docs and commits.

## Stack and layout
Next.js 16 App Router (read node_modules/next/dist/docs first, see AGENTS.md), React 19, TypeScript, Tailwind CSS v4, Phosphor icons and Instrument Sans Variable. src/app/(en) and src/app/(sv)/sv are the two root layouts; src/lib/routes.ts is the single route table; copy lives in src/content/{en,sv}; page bodies in src/views; shared components in src/components; metadata and structured data in src/lib/seo.ts; design tokens in src/app/globals.css.

## Development
Node 20.9+; `npm ci`; `npm run dev`. Robin often runs the dev server on http://127.0.0.1:3000 and watches it; use another port (for example `npx next start -p 3100`) for production checks. `npm run build`, `npm run typecheck` and `npm run lint` validate the code. Inspect desktop and mobile in a real browser (Playwright with Microsoft Edge) after visual changes, and check the header edge at fractional display scales after header changes. Respect reduced motion and keyboard navigation.

## Continuity
Since 2026-10-12 changes may only be committed and pushed to https://github.com/tobiasosterdal78-cpu/Verdana (private), at the owner's instruction. Do not push to, or change anything in, any other repository, including the Rolle161616 one named below and in older docs. Check the remote before every push.

Update the relevant docs and commit after meaningful verified work. Preserve unrelated changes. The first four commits were pushed to https://github.com/Rolle161616/Verdana on 2026-10-11; that repository is now left alone and `origin` is the repository above, first pushed 2026-10-12; push later work when Robin asks, and never force-push or rewrite published history. Commit with an explicit per-command identity (docs/DECISIONS.md, Git); do not change global Git configuration. Keep secrets and environment files out of Git.
