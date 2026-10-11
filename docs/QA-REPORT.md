# QA report

Date: 2026-10-11. Scope: M0 homepage preview only.

## Passed
- npm run build: Next.js 16.4.0 production build; homepage prerendered.
- npm run lint: no errors or warnings.
- npm run typecheck: no TypeScript errors.
- npm audit --omit=dev: zero reported production dependency vulnerabilities at check time.
- Playwright using installed Microsoft Edge: desktop 1440x1000, tablet 768x1024, mobile 375x812, narrow mobile 320x812.
- Visually inspected rendered desktop, tablet, mobile hero, full-page views and open mobile navigation.
- No horizontal page overflow at 320, 375, 768 or 1440 pixels. Narrow mobile heading was adjusted to fit its container.
- Mobile menu toggles, navigation closes it, Escape closes it and restores trigger focus.
- Services and consultation anchors reach the intended sections. Contact disclosure opens and closes without sending data.
- Keyboard Tab reaches the skip link with visible focus. Reduced-motion emulation disables smooth scrolling.
- Final browser flow: no console errors, uncaught page errors, failed requests or HTTP error responses.
- Removed missing-favicon request with an empty metadata icon pending the official asset.

## Limitations
- Original logo missing; the temporary company-name label is not approved branding.
- Booking and contact delivery are deliberately unconnected.
- No exhaustive accessibility, performance, security or cross-browser audit. No production readiness or WCAG conformance claim.
- Build verification was repeated after layout and metadata changes; final text-only whitespace corrections do not change functionality.
- Screenshots are stored in the parent workspace outputs directory. The local server is intentionally left running for the requested design review.

Initial dependency audit: five high findings in the development-only eslint-config-next -> fast-glob -> micromatch -> braces chain (GHSA-vfj7-8cjw-p6xm). npm proposes a major downgrade; not applied. Reassess at production hardening. This is not a completed security audit.
