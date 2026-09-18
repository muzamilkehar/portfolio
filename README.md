# Muzamil Kehar — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio. Verified with
`tsc --noEmit` and a full `next build` — it compiles clean out of the box.

## 1. Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Add your content (nothing else to build — just drop files in)

| What | Where | Notes |
|---|---|---|
| Photo | `public/images/profile.jpg` | Portrait, ~4:5 ratio, 800×1000px+ |
| Résumé | `public/resume/Muzamil-Kehar-Resume.pdf` | Filename must match exactly, or update `resumeUrl` in `lib/data.ts` |
| Project previews | `public/projects/<slug>-poster.jpg` + `<slug>-preview.mp4` | Portrait (3:4), short (5–15s) screen recordings. Filenames are already wired up in `lib/data.ts` |
| Social preview image | `public/og-image.jpg` | 1200×630px — shown when your link is shared on LinkedIn/Twitter/WhatsApp |
| Your real domain | `siteConfig.siteUrl` in `lib/data.ts` | Used in metadata, sitemap, and JSON-LD — set this before deploying |

All copy — bio, services, skills, project descriptions — lives in one file:
**`lib/data.ts`**. Edit text there; the components just render it.

I filled the four projects in `lib/data.ts` from what I know about your work
(Smart Agriculture Platform, SentryScan, Subtext, World Computers &
Printers). Double-check the **SentryScan tech tags** — I wasn't certain of
your exact stack there, so I made a reasonable placeholder. Add live/GitHub
links for each project where you have them (`liveUrl` / `codeUrl` — omit a
field and its button just won't render).

## 3. Deploy

Push to GitHub, then import the repo on Vercel (zero config needed — Next.js
is theirs). Add the real domain in `siteConfig.siteUrl` first so metadata and
the sitemap resolve correctly.

## 4. Design direction

Avoided the generic "AI portfolio" look (warm cream + serif, or near-black +
neon accent, or identical rounded SaaS cards) in favor of something grounded
in the actual work — dashboards, monitoring, and instrumentation:

- **Palette** — near-black ink (`#0E1416`) with a calibrated teal "signal"
  accent (`#49C5B6`), not the more common blue or acid-green. A warm amber
  (`#E5A248`) is reserved for later use if you want a status/highlight color.
- **Type** — Space Grotesk for headlines (a little technical, some
  personality) paired with IBM Plex Sans for body text (built for technical
  documentation, very legible).
- **Layout** — services and projects render as hairline-divided rows rather
  than a grid of identical cards, more like a spec sheet or changelog than a
  template. Projects pair a portrait media frame with the write-up beside it.
- **Motion** — one grouped reveal on the hero load; everywhere else, motion
  only happens in response to something you do (hovering or tapping a
  project preview).

## 5. SEO already built in

- Per-page `<title>`/description via the Metadata API, Open Graph + Twitter
  card tags, canonical URL
- `Person` JSON-LD structured data (name, role, location, social links)
- Auto-generated `sitemap.xml` and `robots.txt` (`app/sitemap.ts` /
  `app/robots.ts`)
- Semantic HTML (one `h1`, ordered `h2`s per section, a real `<nav>`/`<main>`/
  `<footer>`)
- `next/image` for the profile photo (automatic resizing/lazy-loading)
- Keyword set already in `siteConfig.keywords` — tuned for
  "Full-Stack Developer Pakistan", "Next.js Developer Sindh", "MERN Stack
  Developer", "Freelance Web Developer Shikarpur". Adjust to match how
  clients actually search for you.

## 6. Things worth adding next (your call, not required)

- **Case study pages.** Right now each project is a card on the homepage.
  A dedicated `/projects/[slug]` page per project (problem, your role,
  screenshots, outcome) is what actually convinces a freelance client to
  reach out — the homepage card is the trailer, not the whole story.
- **A short testimonial or client quote** from the World Computers &
  Printers client, if they're willing. One real sentence from a paying
  client outweighs a whole services list.
- **Analytics** (Vercel Analytics or Plausible) so you can see whether
  people are actually clicking through to LinkedIn or downloading the
  résumé — tells you if the page is working.
- **A blog or "notes" section**, even a few posts on things like your RBAC
  setup or the Cloudinary pipeline. Consistently the highest-leverage SEO
  move for a personal site — it's what actually ranks for long-tail
  searches, more than the homepage ever will.
- **Contact form as a backup to email**, using something like Formspree or
  Resend, for people who won't open their mail client from a browser.
- **Favicon polish** — I generated a plain "MK" monogram SVG
  (`app/icon.svg`) as a placeholder; swap it for a proper mark if you design
  one.
- **Compress your project videos** before adding them (HandBrake or
  `ffmpeg -crf 28`) — portrait screen recordings get large fast, and page
  weight is itself an SEO/Core Web Vitals factor.

## Stack

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · lucide-react
