# PRIMA CAFÉ

A premium, fully responsive marketing website for **PRIMA CAFÉ**, a specialty coffee house in Les Berges du Lac, Tunis.

![PRIMA CAFÉ — an espresso on a marble table](public/images/hero.jpg)

Five complete pages, an original brand identity, 25 original photographs and no backend to maintain — everything runs as a static site.

---

## Pages

| Route       | Page        | What it contains |
| ----------- | ----------- | ---------------- |
| `/`         | Home        | Hero with the "Every Cup Tells a Story." headline and both CTAs, brand marquee, featured drinks, story section with stats, reasons to choose Prima, testimonials, Instagram-style gallery, location and opening hours, reservation call-to-action |
| `/menu`     | Menu        | Six categories with an interactive filter, 18 products with photo, description and price in TND, dietary tags, order-ahead links |
| `/about`    | Our Story   | Brand philosophy, coffee quality, atmosphere and customer experience, with founders' story, philosophy quote and stats |
| `/gallery`  | Gallery     | 12-image masonry grid with an accessible lightbox (arrow keys, Escape, counter, thumbnails) |
| `/contact`  | Contact     | Validated contact form, phone, email, address, opening hours, social links, map locator card |
| `*`         | Not Found   | On-brand 404 with routes back to the site |

## Tech stack

- **React 18** with **TypeScript 5** (strict mode)
- **Vite 6** for dev server and production build
- **Tailwind CSS 4** via `@tailwindcss/vite`, configured CSS-first in `src/index.css`
- **React Router 6** for client-side routing
- **Lucide** for icons
- **Fraunces** (headings) and **Jost** (body) self-hosted through Fontsource — no external font requests

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
```

### Scripts

| Command             | Description |
| ------------------- | ----------- |
| `npm run dev`       | Start the Vite dev server with hot reload |
| `npm run build`     | Type-check the project (`tsc -b`) and build to `dist/` |
| `npm run preview`   | Serve the production build locally |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Project structure

```
prima-cafe/
├─ public/
│  ├─ images/           # 25 original photographs (hero, menu, gallery, interior)
│  ├─ favicon.svg       # Brand emblem
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/       # Header, Footer, Layout, Logo, Button, PageHero,
│  │                    # SectionHeading, Reveal, Seo, MapCard, WhatsAppFloat
│  ├─ data/             # site.ts, menu.ts, gallery.ts, testimonials.ts
│  ├─ pages/            # Home, Menu, About, Gallery, Contact, NotFound
│  ├─ App.tsx           # Routes
│  ├─ main.tsx          # Entry point, fonts, router
│  └─ index.css         # Tailwind import, design tokens, shared utilities
├─ index.html           # Base metadata and Open Graph tags
├─ vite.config.ts
└─ tsconfig*.json
```

## Editing content

Everything a café owner would change lives in four files:

| File                        | Controls |
| --------------------------- | -------- |
| `src/data/site.ts`          | Brand name, tagline, phone, email, address, WhatsApp number, social links, opening hours, map URL |
| `src/data/menu.ts`          | Categories, all 18 products, descriptions, prices in TND, tags, which items are featured on the home page |
| `src/data/gallery.ts`       | Gallery images, alt text, captions and dimensions |
| `src/data/testimonials.ts`  | Customer quotes, names and roles |

Prices are stored as numbers and formatted to three decimals (`8.5` → `8.500 TND`) by `formatPrice()` in `src/data/menu.ts`.

### Replacing photographs

All photography lives in `public/images/` and is referenced by path, so you can drop in a new photo with the same filename. If you change a filename, update the matching entry in `src/data/menu.ts` or `src/data/gallery.ts` (gallery entries also carry `width`/`height` so the browser reserves space and avoids layout shift).

## Design system

The palette, typography and motion tokens are defined once in `src/index.css` under Tailwind's `@theme`:

| Token | Value | Use |
| ----- | ----- | --- |
| `cream` | `#faf6ef` | Page background |
| `sand` | `#f1e8da` | Alternating sections |
| `beige` | `#e7d9c4` | Borders, accents |
| `espresso` | `#2b1d14` | Headings, dark sections |
| `espresso-deep` | `#1a110b` | Footer, overlays |
| `cocoa` | `#4b372a` | Body copy on light backgrounds |
| `gold` | `#b08d57` | Eyebrows, accents, CTAs |
| `ink` | `#241f1b` | Default text |

Scroll-reveal animations are handled by `src/components/Reveal.tsx`, which is progressive: content is measured against the viewport, shown immediately when the document is hidden, and disabled entirely under `prefers-reduced-motion`.

## Contact form

The form in `src/pages/Contact.tsx` validates the name, email, optional phone and message client-side (with inline errors and focus management). On a valid submit it composes a message and opens **WhatsApp** with the text pre-filled — no backend, no third-party service and nothing stored, which is why the interface says so explicitly.

To send email through a server instead, replace the `handleSubmit` body with a `fetch` to your API or form service; the validation and UI states can stay as they are.

## SEO and accessibility

- Per-route `<title>`, description, canonical URL and Open Graph/Twitter tags via `src/components/Seo.tsx`
- Base metadata, Open Graph image and theme colour in `index.html`
- `public/robots.txt` and `public/sitemap.xml`
- Semantic landmarks (`header`, `main`, `nav`, `footer`), one `h1` per page, skip-to-content link, visible focus styles, labelled form fields, `aria-*` state on the mobile menu and lightbox
- Lazy-loaded images with intrinsic `width`/`height`, self-hosted fonts, no external requests

## Deployment

```bash
npm run build
```

Upload the generated `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, an Apache/Nginx server). Because routing is client-side, configure a **single-page-app fallback** that rewrites unknown paths to `index.html` — otherwise refreshing `/menu` returns a 404. On GitHub Pages, also set `base` in `vite.config.ts` to `/<repository-name>/`.

## Before going live

Replace the sample details in `src/data/site.ts`:

- Phone `+216 25 400 900` and WhatsApp number `21625400900`
- Email `hello@primacafe.tn`
- Address `12 Rue du Lac Léman, Les Berges du Lac, Tunis 1053`
- Social URLs, which currently point at the platform home pages
- Founders' names and quotes in `src/pages/About.tsx` and `src/data/testimonials.ts`
- The domain `primacafe.tn` in `index.html`, `public/sitemap.xml` and `public/robots.txt`

## License

This is a private project: the brand identity, copy and photography were produced for PRIMA CAFÉ. Add a `LICENSE` file if you intend to open-source it.
