# Design system

Source of truth: src/app/globals.css (tokens, utilities, components) and src/components. Tailwind CSS v4, configured in CSS (`@theme inline`); `dark:` follows `html[data-theme="dark"]`.

## Colour
Tokens keep one name in both themes; `.tone-night` bands use the dark values in either theme.

| Token | Light | Dark |
| --- | --- | --- |
| `--canvas` | #ffffff | #060a15 |
| `--canvas-raised` / `--surface-2` | #f3f6fa | #0a1020 / #131b31 |
| `--fg` | #0b1430 | #eef2f8 |
| `--fg-muted` | #3c4865 | #b8c2d5 |
| `--fg-subtle` | #5a6681 | #9eaac1 |
| `--accent` | #2a5bff | #3a66ff |
| `--accent-ink` | #1b44db | #8eabff |
| `--glacier` | #1d9fd0 | #63d2f7 |
| `--hairline` | #dce3ee | white 7.5 % |

Midnight bands: #070c1a with a blue glow from the top right and a faint glacier glow from the bottom left. `--page-canvas` holds the page colour of the current theme, also inside a midnight band.

## Type
Instrument Sans Variable, bundled locally. Headings weight 600 with tight tracking and a slightly condensed width (`font-stretch` 92–94 %); body 1.0625rem at line height 1.65.

| Utility | Size |
| --- | --- |
| `type-display` | clamp(2.6rem, 1rem + 5.4vw, 5.75rem) |
| `type-title` | clamp(2.4rem, 1.4rem + 4.2vw, 5rem) |
| `type-h2` | clamp(2rem, 1.3rem + 2.6vw, 3.5rem) |
| `type-h3` | clamp(1.25rem, 1.12rem + 0.45vw, 1.55rem) |
| `type-lead` | clamp(1.125rem, 1.04rem + 0.38vw, 1.35rem) |

## Layout and shape
`wrap`: max width 80rem, side gutter clamp(1rem, 0.4rem + 2.6vw, 3rem). `section-pad`: clamp(4.5rem, 2.8rem + 6vw, 8.5rem) top and bottom. Cards 1.25rem radius, panels 1.75rem, buttons 0.75rem, with fine hairline borders.

## Components
- Header: lockup, the Services and Business Central menus (click to open), Insights, About, theme switch, language switcher and contact button. Glass that turns translucent only once the page has scrolled under it; scroll progress bar on its bottom edge. The current page is marked by a short line under its navigation item and, in the Services menu, a blue tint on its icon.
- Footer: the V, organisation number 559602-6616, language links (EN · SV) and the owner's wordmark drawn large and faint at the foot.
- Closing band (`CtaBand`): on wide screens the V, heading, text and two buttons hold the exact centre of the screen and the three steps (`StepTrail`) sit near the right edge. Each step lights up as the band scrolls into view. Two columns at 1024 px, stacked on mobile.
- Spotlight: a wash of blue follows the mouse across cards, dark blue in light mode and light blue in dark mode, never for touch or pen.
- Pin field: thin pins in midnight bands light up near the pointer and fade out; nothing at rest.
- Home: NAV lifecycle timeline computed at build time, and an order moving through a connected Business Central setup (CSS animation).

## Motion and accessibility
CSS-only motion. Reduced motion stops the animations, the pin field, smooth scrolling and the scroll progress bar. Visible focus ring (`--accent-ink`), a skip link, and Escape closes menus. The theme and the reading position are restored before first paint, so neither flashes.
