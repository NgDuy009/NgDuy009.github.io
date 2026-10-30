# DARK TZY

**The Art of Individuality.**

A personal fashion maison for visual culture and a creative journal, built with Astro and deployed as a static site on GitHub Pages.

## Requirements

- Node.js 22.23.4 or newer
- npm

On Windows PowerShell, use `npm.cmd` if the execution policy prevents running `npm.ps1`.

## Development

```powershell
npm.cmd install
npm.cmd run dev
```

Astro prints the local development URL after the server starts.

## Production build

```powershell
npm.cmd run build
```

The static site is generated in `dist/`.

## GitHub Pages deployment

```powershell
npm.cmd ci
npm.cmd run build
```

Astro is configured for the project site
`https://ngduy009.github.io/darktzy/` with `site: "https://ngduy009.github.io"`
and `base: "/darktzy"`. The deployment workflow builds on pushes to `main` and
deploys `dist/` with GitHub's official Pages Actions. In the repository, select
**Settings → Pages → Build and deployment → Source → GitHub Actions**.

The generated sitemap and `robots.txt`, canonical URLs, Open Graph metadata,
favicon, and internal links all use the project-site base. The share preview
image is `public/og-image.png`.

## Content

- Write journal stories in `src/content/posts/`; see [POSTING_GUIDE.md](./POSTING_GUIDE.md).
- Add owner-confirmed fashion collections in `src/content/collections/`.
- Add retained project and experiment entries in `src/content/projects/` and `src/content/lab/`.
- Schemas and allowed values are validated in `src/content.config.ts`.
- Draft posts are excluded from public pages and the client-side search index.
- Editorial reference images are self-hosted in `public/images/`; see [IMAGE_CREDITS.md](./IMAGE_CREDITS.md). They are not represented as photographs of the site owner.

Collection entries are Markdown files named by slug (for example `src/content/collections/your-collection-slug.md`):

```yaml
---
title: "Replace with an owner-approved title"
description: "Replace with an owner-approved description."
category: "Lookbook"
cover: "/images/your-cover.webp"
coverAlt: "Describe the supplied image."
tags: []
featured: false
images:
  - src: "/images/your-detail.webp"
    alt: "Describe the supplied image."
    caption: "Optional caption"
---

Optional Markdown story for the collection.
```

Allowed categories are `Lookbook`, `Style study`, `Accessories`, and `Visual notes`. Only publish outfit photos and personal details supplied or approved by the site owner.

## Project structure

```text
public/
  images/
src/
  components/
  content/
    collections/
    lab/
    posts/
    projects/
  lib/
  layouts/
  pages/
    collections/
    gallery.astro
    posts/
    projects/
  styles/
```

Personal biography, outfit collections, contact details, and social links are not invented. The site only publishes those details after they are provided and confirmed.
