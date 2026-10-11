# Verdana

Swedish Microsoft Dynamics 365 Business Central consultancy website.

## Resume
Read docs/PROGRESS.md, docs/TODO.md and docs/DECISIONS.md, then inspect Git status and actual code. The supplied brief is preserved in docs/MASTER-BRIEF.md.

## Scope and approvals
- Current phase is M0: local homepage design preview only. Await Robin's visual approval before research, additional pages, backend or complex interactions.
- Explicit production approval is required before public launch. Do not purchase services or modify DNS without authorization.
- Official logo supplied by Robin is preserved unchanged in public/brand/verdana-original.png. Use the original artwork; do not redraw or generate a replacement. CSS may frame empty margins without clipping the emblem or wordmark.
- Never invent partner status, references, certifications, prices or company history.
- Swedish interface; English code, filenames, technical docs and commits.

## Stack and layout
Next.js App Router, React, TypeScript, Tailwind CSS, Motion and Lucide. src/app contains the homepage, metadata and global design tokens. src/components contains navigation and motion. public/brand is reserved for original brand assets.

## Development
Node 20.9+; npm ci; npm run dev. Local address is printed by Next.js. npm run build, npm run typecheck and npm run lint validate the code. Inspect desktop and mobile in a real browser after visual changes. Respect reduced motion and keyboard navigation.

## Continuity
Update relevant docs and create a local Git checkpoint after meaningful verified work. Preserve unrelated changes. Do not push unless authorized. Keep secrets and environment files out of Git. Design values are provisional until user approval.
