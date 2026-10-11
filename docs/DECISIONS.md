# Decisions

## 2026-10-11: Design first
Build only the homepage until the user approves. Defer deeper competitor research, additional routes, forms, calculators and infrastructure. This follows the explicit scope and keeps the first deliverable reviewable.

## Provisional art direction
Midnight navy opening, blue/cyan accents, local Manrope typography, restrained dimensional system illustration, light editorial sections, dark ecosystem and blue contact section. Vary section structure instead of repeating card grids.

## Missing logo
The supplied GitHub repository was empty and the only attachment was text. Use plain text for company identification; do not fabricate the official emblem. All colors remain provisional until the actual assets can be inspected.

## Honest preview
No invented credentials, references, metrics or product screenshots. The hero is a conceptual system illustration; ecosystem links are possibilities, not promised turnkey integrations. Contact area discloses that booking and delivery are not yet connected.

## Technical choices
Use the requested Next.js App Router and TypeScript. Keep most homepage markup server rendered. Client components are limited to navigation and reduced-motion-aware reveals. Fonts are bundled locally to avoid runtime font requests. No shadcn or GSAP needed for this phase.

## Source
Framework initialization checked against https://nextjs.org/docs/app/getting-started/installation on 2026-10-11. Exact dependencies are captured in package-lock.json.

## Local checkpoint attribution
No Git author identity was configured. Use an explicit per-command automation identity, Codex <codex@local.invalid>, for the initial local checkpoint. This does not impersonate the owner or change global Git configuration.

## 2026-10-11: Original logo received
Robin supplied the original 1254 x 1254 PNG. Preserve it unchanged in public/brand/verdana-original.png and display it through Next Image in header, hero and footer. Replace the provisional hero diagram with the original emblem and wordmark. CSS frames empty margins in compact placements and blends only the background edges. Use the original file for the favicon until a dedicated small icon is supplied. This resolves the missing-asset blocker; visual approval is still pending.
