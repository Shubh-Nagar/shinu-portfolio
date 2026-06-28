# Shinu Rajoriya — Cinematic Portfolio

A cinematic, single-page portfolio for **Shinu Rajoriya** — videographer,
photographer, drone pilot & visual storyteller.
_"Turning Moments into Masterpieces."_

Built with Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion.

---

## ✦ Features

- **Full-screen cinematic hero** with a gold volumetric light-sweep, an HTML5
  canvas ember/particle field, animated headline and a scrolling marquee.
- **Watch Showreel** button → full-screen letterboxed video modal (supports
  YouTube/Vimeo embeds **or** a local `.mp4`).
- **Filterable portfolio grid** (All / Videography / Photography / Drone / Reels)
  with hover-to-play video previews and an image/video **lightbox**.
- **Scroll-triggered reveals & parallax** via Framer Motion.
- **Smooth-scroll navbar** with a scroll-aware background and an animated mobile
  menu.
- **About stats, services, testimonials, contact form** (no backend required —
  ships with a `mailto` handler you can swap for an API).
- **Dark cinematic palette**: deep blacks, warm golds, ember orange, with a
  film-grain + vignette overlay.
- **Production-ready**: lazy-loaded sections, code splitting, SEO/OpenGraph meta,
  visible keyboard focus, and full `prefers-reduced-motion` support.

---

## ✦ Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node 18+**.

---

## ✦ Project structure

```
shinu-portfolio/
├─ index.html                # SEO meta, fonts, root
├─ tailwind.config.js        # Cinematic palette, fonts, keyframes
├─ vite.config.ts            # React plugin + manual chunk splitting
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.tsx               # Entry
   ├─ App.tsx                # Layout + lazy-loaded sections
   ├─ index.css              # Tailwind layers, grain, utilities
   ├─ data/
   │  ├─ site.ts             # ← Brand, contact, socials, showreel URL
   │  └─ content.ts          # ← Stats, services, portfolio, testimonials
   ├─ hooks/
   │  └─ useScrollLock.ts
   ├─ lib/
   │  └─ motion.ts           # Shared Framer Motion variants
   └─ components/
      ├─ Navbar.tsx
      ├─ Hero.tsx
      ├─ EmberCanvas.tsx     # Canvas particle field
      ├─ GrainOverlay.tsx    # Film grain + vignette
      ├─ About.tsx
      ├─ Services.tsx
      ├─ Portfolio.tsx
      ├─ Lightbox.tsx
      ├─ Testimonials.tsx
      ├─ Contact.tsx
      ├─ Footer.tsx
      └─ ShowreelModal.tsx
```

---

## ✦ Making it Shinu's (the only files you need to edit)

Everything personal lives in **two files** so you never have to dig through
components:

### 1. `src/data/site.ts`

```ts
email:  "hello@shinufilms.com"   // ← real email
phone:  "+91 90000 00000"        // ← real phone
socials.instagram / youtube / whatsapp
showreelUrl: "https://www.youtube.com/embed/XXXX" // ← real showreel
```

> For the showreel you can use a YouTube **embed** URL
> (`https://www.youtube.com/embed/VIDEO_ID`) or drop an `.mp4` into `public/`
> and reference it as `"/showreel.mp4"`.

### 2. `src/data/content.ts`

- `stats` — the 100+ / 80+ / 3+ numbers.
- `services` — titles, descriptions, icons (from `lucide-react`).
- `work` — the portfolio. For each item set:
  - `thumb` — grid thumbnail
  - `full` — image URL **or** video embed URL opened in the lightbox
  - `preview` _(optional)_ — a muted `.mp4` that plays on hover
  - `type` — `"image"` or `"video"`
  - `vertical: true` — for 9:16 reels
- `testimonials` — client quotes.

### Images

The portfolio currently uses Unsplash placeholders. Replace them with Shinu's
real stills from **[@shinuu_films_41](https://www.instagram.com/shinuu_films_41)**.
Best practice: download the originals into `public/work/` and reference them as
`/work/filename.jpg`, or keep them on a CDN (Cloudinary, etc.) for automatic
optimization.

The **hero portrait** is set inline at the top of `src/components/Hero.tsx`, and
the **about portrait** at the top of `src/components/About.tsx`.

---

## ✦ Wiring up the contact form

The form ships with a zero-config `mailto:` handler (`src/components/Contact.tsx`).
To collect submissions properly, replace the `handleSubmit` body with a POST to
your endpoint of choice:

- **Formspree** — point the fetch at your form URL.
- **Resend / your own API** — POST `{ name, email, message }`.

---

## ✦ Deployment

This is a static site — it deploys anywhere.

### Vercel (recommended)

1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
4. Deploy.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

```bash
npm run build
# then publish the dist/ folder (e.g. with gh-pages)
```

> If deploying under a sub-path, set `base: "/repo-name/"` in `vite.config.ts`.

---

## ✦ Customizing the look

All design tokens live in `tailwind.config.js`:

- **Colors** — `ink` (blacks), `gold`, `ember`, `bone`, `ash`.
- **Fonts** — `display` (Fraunces), `mono` (Space Grotesk), `body` (Manrope),
  loaded in `index.html`.
- **Animations** — `sweep`, `marquee`, `flicker`, `floaty`.

---

## ✦ Tech

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Build          | Vite 5                          |
| UI             | React 18 + TypeScript           |
| Styling        | Tailwind CSS 3                  |
| Animation      | Framer Motion 11                |
| Icons          | lucide-react                    |
| Particles      | Hand-rolled `<canvas>` (no dep) |

---

Made to be **visually stunning, fast, and effortless to update.**
Replace the placeholders, drop in the showreel, ship it. 🎬
