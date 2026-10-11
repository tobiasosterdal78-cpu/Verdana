# Verdana

Website for Verdana, a Swedish Microsoft Dynamics 365 Business Central consultancy. English at `/`, Swedish at `/sv`.

```sh
npm ci
npm run dev
```

Open the local address printed by Next.js (normally http://127.0.0.1:3000).

```sh
npm run build
npm run typecheck
npm run lint
```

Search indexing stays off until `SITE_INDEXING=on` is set for the approved production build, and the contact form needs `CONTACT_WEBHOOK_URL`; see docs/DEPLOYMENT.md. `node scripts/brand-derivatives.mjs` regenerates the icons and the share image from the owner's artwork in public/brand.

Read CLAUDE.md and docs/PROGRESS.md before continuing.
