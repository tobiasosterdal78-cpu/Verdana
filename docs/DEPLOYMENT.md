# Deployment

Not deployed. No hosting, domain or DNS has been configured. The code is on GitHub at https://github.com/Rolle161616/Verdana (private). Vercel and Loopia are Robin's suggested options; choose after the launch decisions below. Obtain explicit approval before launch, paid services or DNS changes, and preserve the existing email DNS records.

## Build
`npm ci`, then `npm run build` and `npm run start`. Every page is statically generated; the contact form runs as a server action, so the host must run Next.js (not a plain static export).

## Environment
| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical origin, e.g. `https://www.example.se`. Canonicals, hreflang, the sitemap, Open Graph URLs and security.txt use it; it defaults to http://127.0.0.1:3000. |
| `SITE_INDEXING` | `on` opens robots.txt and switches pages from `noindex` to indexable. Leave unset everywhere except the approved production build. |
| `CONTACT_WEBHOOK_URL` | Receives each enquiry as JSON. Without it the form reports that nothing was sent. |
| `CONTACT_WEBHOOK_TOKEN` | Optional bearer token for the webhook. |

Set `SITE_URL` and `SITE_INDEXING` before `next build`: they are read at build time.

## Launch checklist
1. Domain and host chosen; `SITE_URL` set.
2. Contact webhook tested end to end.
3. Legal name, VAT number and address added; name and trademark checks done.
4. Prices and NAV dates in the insights rechecked.
5. Robin's approval; production build with `SITE_INDEXING=on`.
6. Search Console and Bing Webmaster Tools verified, sitemap.xml submitted.
