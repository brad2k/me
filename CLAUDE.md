# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# bradazevedo.com — Project Context

Personal portfolio site for Brad Azevedo, front-end engineer based in San Francisco.
Built with **Astro**, scoped component styles, deployed on **Netlify**.

---

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
```

No linter or test suite is configured.

---

## Architecture

### Pages

Active pages and their routes:

- `/` — Home (`src/pages/index.astro`)
- `/about/` — About me (`src/pages/about.astro`)
- `/now/` — Now page (`src/pages/now.astro`)
- `/collections/` — Collections (`src/pages/collections.astro`) — podcasts and TV shows, driven by `src/data/podcasts.json` and `src/data/tv.json` via Astro content collections

Nav currently shows: About, Now, Collections (all active).

### Layout

`src/layouts/Layout.astro` is the single shared layout — wraps every page with `<Head>`, `<Nav>`, `<main class="content-grid">`, and `<Footer>`.

`Layout.astro` accepts `pageTitle` and `pageDescription` props (both required).

### Styling

**No CSS Modules.** Styles live in scoped `<style>` blocks within `.astro` files. Global styles are imported once in `Layout.astro` via `src/styles/imports.css`.

The global CSS is layered:

```
@layer reset, base, utilities;

reset.css      — Eric Meyer-style reset
primitives.css — raw values: hex colors, clamp() spacing scale, type scale, transitions, radii
tokens.css     — semantic aliases that reference primitives (--color-bg, --font-display, etc.)
base.css       — body, a, headings, focus, selection — low-specificity global styles
utilities.css  — .content-grid, .flow, .prose, .visually-hidden, .subtle
```

**Two-layer token system:** `primitives.css` defines named raw values (`--color-clay-200: #c4614a`). `tokens.css` maps semantic names to primitives (`--color-accent: var(--color-clay-200)`). Always use semantic tokens in component styles; never reference primitives directly.

**Dark mode** is active and uses `@media (prefers-color-scheme: dark)` — no JS toggle. Tokens use the CSS `light-dark()` function so each semantic token automatically resolves to its light or dark value. A `data-theme="dark"` attribute on `:root` can also force dark mode. There is no manual toggle in the UI.

### Fonts

Fonts are configured in `astro.config.mjs` via Astro's built-in `fontProviders.google()` and injected in `Head.astro` using `<Font cssVariable="--font-Fraunces" />` / `<Font cssVariable="--font-Epilogue" />`.

- **Fraunces** (`var(--font-display)`) — display text only: hero headline, headings, the logo mark
- **Epilogue** (`var(--font-body)`) — everything else: body copy, nav, labels, captions

Never add manual `<link>` Google Fonts tags — Astro's Font component handles loading and optimization.

### Content collections

Data-driven content is defined in `src/content.config.ts` using Astro's content collections with the `file()` loader. Collections load from JSON files in `src/data/`:

- **`podcasts`** — `src/data/podcasts.json` — schema: `title`, `description`, `image`, `url`, `category`
- **`tv`** — `src/data/tv.json` — schema: `title`, `image`

Add new entries directly to the JSON files. Adding a new collection type requires a new schema entry in `content.config.ts`.

### Content grid

`<main class="content-grid">` creates a 3-column grid:
`[full-start] var(--full) [content-start] var(--content) [content-end] var(--full) [full-end]`

All direct children default to the `content` column. Override with `grid-column: full` to break out edge-to-edge.

---

## Design tokens

All tokens in `src/styles/tokens.css`. CSS custom properties on `:root`:

```css
--color-bg, --color-surface, --color-border
--color-muted, --color-text-body, --color-text
--color-accent, --color-accent-on-dark

--font-display, --font-body
--font-weight-regular/medium/semi-bold/bold/black

--font-size-subtle/base/h1–h6   (reference --size-step-N from primitives)

--gutter              → var(--space-m)
--prose-max-width     → 70ch
```

Spacing scale in `primitives.css`: `--space-xs` through `--space-5xl` (fluid `clamp()` values).
Type scale in `primitives.css`: `--size-step-000` through `--size-step-10` (fluid `clamp()` values).

---

## Logo & wordmark

```html
<a href="/" class="logo-mark">Brad<span class="dot">.</span></a>
```

- "Brad" in Fraunces Bold with `font-variation-settings: "SOFT" 0, "WONK" 0`
- "." in `var(--color-accent)`; on hover the colors invert (text goes accent, dot goes text)

---

## Layout principles

Non-negotiable design decisions:

1. **One accent color, sparingly.** `var(--color-accent)` in: logo period, "currently" labels, link hover. Nowhere else by default.
2. **Type does the work.** No decorative elements, no cards with borders, no shadows. Whitespace and weight are the layout tools.
3. **`var(--color-bg)` is always the page background.** No dark outer containers.
4. **Content width driven by `content-grid`.** Override with `grid-column: full` for edge-to-edge elements.
5. **Nav is minimal.** Logo left, links right. No underlines by default.
6. **Dividers are `1px solid var(--color-border)`.** Never full-bleed decorative bars.
7. **Section labels** ("CURRENTLY", "PREVIOUSLY") use Epilogue Medium, uppercase, `letter-spacing: 0.12em`, accent/muted color respectively.

---

## Voice & copy tone

- Warm, direct, slightly witty — not corporate, not overly casual
- First person, present tense where possible
- Hero line: **"I build the front of the front-end."**
- Avoid apologetic or hedging language
- Oxford commas. Em dashes where appropriate. Proper apostrophes.
- The sabbatical (2022–present) is framed as intentional — not a gap to explain

---

## About Brad (for copy reference)

- 18+ years of front-end experience, self-taught with an Industrial Design background
- Sweet spot: UI architecture, design systems, accessibility, performance
- Most recent role: founding Design Systems Engineer at Gusto (2019–2022)
  - First dedicated front-end engineer in an all-full-stack org
  - Led brand refresh, co-built Workbench design system, owned the docs site
- Prior: Jawbone Health, Jawbone, CBS Interactive (GameSpot, Giant Bomb), Gusto
- Currently based in San Francisco
- Certificated private pilot, pursuing commercial certificate
- Partner: James (SF Symphony oboist)
- Interests: aviation, cycling, nature, travel, finance, the arts, animal conservation

---

## Design reference

Figma file: https://www.figma.com/design/mkxAZyBCCGWs6iINaSqdaN

Inspiration:

- https://lai.nz/ — document simplicity, single accent, no ornamentation
- https://www.terrygodier.com/ — text-first, personality, near-zero chrome

---

## Things to avoid

- No CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript unless genuinely necessary for interaction
- No gradients, drop shadows, or decorative background textures
- No cards with visible borders as a default layout pattern
- No manual Google Fonts `<link>` tags — use Astro's `Font` component
- Don't invent new accent colors — there is one: `var(--color-accent)`
- Don't hardcode hex values in component styles — always use token variables
- Don't reference primitive tokens (`--color-clay-200`) directly in components — use semantic tokens
