# Deployment

Not deployed. No hosting, domain or DNS has been configured. The code is on GitHub at https://github.com/tobiasosterdal78-cpu/Verdana (private). Vercel and Loopia are Robin's suggested options; choose after the launch decisions below. Obtain explicit approval before launch, paid services or DNS changes, and preserve the existing email DNS records.

## Build
`npm ci`, then `npm run build` and `npm run start`. Every page is statically generated; the contact form runs as a server action, so the host must run Next.js (not a plain static export).

## Environment
| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical origin, e.g. `https://www.example.se`. Canonicals, hreflang, the sitemap, Open Graph URLs and security.txt use it; it defaults to http://127.0.0.1:3000. |
| `SITE_INDEXING` | `on` opens robots.txt and switches pages from `noindex` to indexable. Leave unset everywhere except the approved production build. |
| `MS_TENANT_ID`, `MS_CLIENT_ID`, `MS_CLIENT_SECRET` | The Microsoft Entra app registration that lets the contact form send each enquiry as an email to hello@vardena.se through Microsoft Graph. Without them (and without a webhook) the form says it could not send and offers the same message as a `mailto:` link. |
| `CONTACT_MAILBOX` | Optional. The mailbox the email is sent from; defaults to hello@vardena.se. |
| `CONTACT_WEBHOOK_URL` | Optional second channel: receives each enquiry as JSON. |
| `CONTACT_WEBHOOK_TOKEN` | Optional bearer token for the webhook. |

Set `SITE_URL` and `SITE_INDEXING` before `next build`: they are read at build time.

## Contact email
vardena.se receives its mail in Microsoft 365 (MX `vardena-se.mail.protection.outlook.com`, checked 2026-10-12), so the form sends through Microsoft Graph as the mailbox itself, with the visitor as reply-to. To switch it on:
1. In the Microsoft Entra admin centre, register an application (single tenant, no redirect URI).
2. Under API permissions add Microsoft Graph, application permission `Mail.Send`, and grant admin consent.
3. Create a client secret and note its expiry date; the form stops sending when it expires.
4. Set `MS_TENANT_ID` (Directory ID), `MS_CLIENT_ID` (Application ID) and `MS_CLIENT_SECRET` on the host, never in Git.
5. Recommended: restrict the application to the hello@vardena.se mailbox (RBAC for Applications in Exchange Online, or an application access policy), since `Mail.Send` otherwise covers every mailbox in the tenant.
6. Send a test enquiry from the deployed site and confirm it arrives and that Reply goes to the sender.

## Launch checklist
1. Domain and host chosen; `SITE_URL` set.
2. Contact email tested end to end (see Contact email).
3. Legal name, VAT number and address added; name and trademark checks done.
4. Prices and NAV dates in the insights rechecked.
5. Robin's approval; production build with `SITE_INDEXING=on`.
6. Search Console and Bing Webmaster Tools verified, sitemap.xml submitted.
