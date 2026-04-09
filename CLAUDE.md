# bradazevedo.com — Project Context

Personal portfolio site for Brad Azevedo, front-end engineer based in San Francisco.
Built with **Astro**, **CSS Modules**, deployed on **Netlify**.

---

## Design reference

Figma file: https://www.figma.com/design/mkxAZyBCCGWs6iINaSqdaN

Inspiration sites (study these before making layout or style decisions):
- https://lai.nz/ — document simplicity, single accent, no ornamentation
- https://www.terrygodier.com/ — text-first, personality, near-zero chrome

---

## Stack

- **Framework:** Astro (static, no SSR needed)
- **Styling:** CSS Modules per component, global tokens in `src/styles/global.css`
- **Fonts:** Google Fonts — Fraunces (display), Inter (body/UI)
- **Hosting:** Netlify
- **No TypeScript** — plain JavaScript only

---

## Pages

- `/` — Home (hero + brief intro + currently/previously)
- `/about` — About me (longer bio, values, interests)
- `/resume` — Work history and skills
- `/etc` — Trivia: hobbies, books, films, etc.

---

## Design tokens

All tokens live in `src/styles/global.css` as CSS custom properties on `:root`.
CSS Modules import from there — never hardcode color hex values in component files.

```css
/* ── src/styles/global.css ─────────────────────────────── */

:root {
  /* Color */
  --color-bg:          #FAF8F5;
  --color-surface:     #EFE8E0;
  --color-border:      #E0D8CE;
  --color-muted:       #9E8E84;
  --color-text-body:   #5A4840;
  --color-text:        #221814;
  --color-accent:      #C4614A;

  /* Typography */
  --font-display: 'Fraunces', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;

  /* Type scale */
  --text-hero:    clamp(2.5rem, 6vw, 4rem);
  --text-heading: clamp(1.5rem, 3vw, 2rem);
  --text-body:    1rem;
  --text-small:   0.8125rem;

  /* Spacing */
  --space-xs:  0.5rem;
  --space-sm:  1rem;
  --space-md:  2rem;
  --space-lg:  4rem;
  --space-xl:  8rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:        #120C09;
    --color-surface:   #1E1510;
    --color-border:    #2E2018;
    --color-muted:     #7A6A60;
    --color-text-body: #C0A898;
    --color-text:      #F0E8E0;
    --color-accent:    #D06E56;
  }
}
```

Dark mode is handled entirely via `@media (prefers-color-scheme: dark)` —
no JS toggle, no class switching unless Brad explicitly asks for it.

---

## Typography

### Fonts
Load both from Google Fonts in the Astro `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
```

### Usage rules
- **Fraunces** — display text only: hero headline, page headings, the logo mark
- **Inter** — everything else: body copy, nav links, labels, captions, meta text
- Fraunces Light Italic (`font-weight: 300; font-style: italic`) is the hero voice
- Fraunces Regular (`font-weight: 400`) for headings and the logo "Brad" portion
- Never use Fraunces for body paragraphs or UI chrome

---

## Logo & wordmark

### Nav logotype: `Brad.`
- "Brad" in Fraunces Regular
- "." (period) in Fraunces Light, color: `var(--color-accent)`
- No space between the name and the period
- This is the primary site mark — appears in the nav on every page

```html
<span class="logo">Brad<span class="logo-dot">.</span></span>
```

```css
.logo {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.125rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
}
.logo-dot {
  font-weight: 300;
  color: var(--color-accent);
}
```

### Favicon: `B.`
- Same pattern — "B" in Fraunces Regular, "." in Fraunces Light + accent color
- Generate as SVG favicon; also provide PNG fallback at 32×32 and 180×180

### Full wordmark (used in hero or open graph images)
- "Brad Azevedo" in Fraunces Light Italic
- Tagline "FRONT-END ENGINEER" in Inter Medium, spaced tracking, `var(--color-muted)`

---

## Layout principles

These are non-negotiable design decisions — don't deviate without asking:

1. **One accent color, used sparingly.** `var(--color-accent)` appears in: the logo period, section labels marked "currently", and link hover states. Nowhere else by default.
2. **Type does the work.** No decorative elements, no cards with borders, no shadows. Whitespace and weight are the layout tools.
3. **No dark background on outer containers.** Pages breathe — `var(--color-bg)` is always the page background.
4. **Max content width: `680px`, centered.** Generous side padding on mobile (`var(--space-md)`).
5. **Nav is minimal.** Logo left, links right. Links in `var(--color-muted)`, hover to `var(--color-text)`. No underlines by default.
6. **Dividers are `1px` lines** using `var(--color-border)` — never full-bleed decorative bars.
7. **Labels like "CURRENTLY" and "PREVIOUSLY"** use Inter Medium, uppercase, wide letter-spacing (`0.12em`), in `var(--color-accent)` and `var(--color-muted)` respectively.

---

## Voice & copy tone

- Warm, direct, slightly witty — not corporate, not overly casual
- First person, present tense where possible
- Hero line: **"I build the front of the front-end."**
- Avoid apologetic or hedging language (no "I'm just a...", no "trying to...")
- Oxford commas. Em dashes where appropriate. Proper apostrophes.
- The sabbatical (2022–present) is framed as intentional — not a gap to explain

---

## About Brad (for copy reference)

- 18+ years of front-end experience, self-taught with an Industrial Design background
- Sweet spot: UI architecture, design systems, accessibility, performance
- Most recent role: founding Design Systems Engineer at Gusto (2019–2022)
  - First dedicated front-end engineer in an all-full-stack org
  - Led brand refresh, co-built Workbench design system, owned the docs site
- Prior: Jawbone Health, Jawbone, CBS Interactive (GameSpot, Giant Bomb)
- Currently based in San Francisco
- Certificated private pilot, pursuing commercial certificate
- Partner: James (SF Symphony oboist)
- Interests: aviation, cycling, nature, travel, finance, the arts, animal conservation

---

## File/folder conventions

```
src/
  components/
    Nav.astro
    Footer.astro
  layouts/
    Base.astro       ← shared <head>, nav, footer
  pages/
    index.astro      ← Home
    about.astro
    resume.astro
    etc.astro
  styles/
    global.css       ← tokens + resets only
```

- One CSS Module per component, co-located: `Nav.astro` + `Nav.module.css`
- Global CSS only for: custom properties, resets, base `body`/`html` styles, font import
- No utility classes — write semantic, component-scoped CSS

---

## Things to avoid

- No CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript unless genuinely necessary for interaction
- No gradients, drop shadows, or decorative background textures
- No cards with visible borders as a default layout pattern
- No system fonts — always load Fraunces + Inter
- No TypeScript
- Don't invent new accent colors — there is one: `var(--color-accent)`
