# Portfolio

Personal portfolio site — Astro 5 + Tailwind 4, static, no JavaScript bundle.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the built site
```

## Editing the content

**Every word on the site lives in `src/data/site.ts`.** Edit that file, not the
components — name, tagline, links, hero stats, projects, skills and the about
text all come from it.

A project entry carries its own screenshots:

```ts
shots: [
  { src: '/shots/name.png', alt: 'What it shows', caption: 'Shown under the image' },
]
```

Drop the image in `public/shots/`, add the entry, done. An empty `shots: []`
simply renders the card without an image strip.

## Layout

```
src/
  data/site.ts        all copy and project data
  styles/global.css   theme tokens + every animation
  layouts/Base.astro  <head>, theme script, scroll-reveal observer
  components/         Nav, Hero, Section, ProjectCard
  pages/index.astro   the single page
public/
  cv.pdf
  shots/              project screenshots
```

## Theming

Colours are CSS custom properties on `:root` in `global.css`, redefined for dark
mode under both `prefers-color-scheme` and `[data-theme="dark"]`. The toggle in
the nav writes to `localStorage`; an inline script in `<head>` applies it before
first paint so the page never flashes the wrong theme.

## Animation

All CSS, driven by one small `IntersectionObserver` in `Base.astro` that adds
`.in` to `.reveal` elements as they scroll into view. Everything collapses under
`prefers-reduced-motion: reduce`.

## Deploying (Cloudflare Pages)

Connected through the Pages Git integration, so every push to `main` deploys:

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 (pinned in `.nvmrc`) |

`public/_headers` sets long-lived caching for the fingerprinted `/_astro/`
assets and a few security headers. Update `site` in `astro.config.mjs` if you
attach a custom domain.
