# DARK TZY

A personal digital space for technology, projects, experiments, and writing.

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

- Write posts in `src/content/posts/`; see [POSTING_GUIDE.md](./POSTING_GUIDE.md)
  for frontmatter, Markdown, drafts, images, and publishing.
- Add project entries in `src/content/projects/`.
- Add experiments in `src/content/lab/`.
- Collection fields and allowed values are validated in `src/content.config.ts`.
- Draft posts are excluded from public pages and the client-side search index.

## Project structure

```text
public/
src/
  components/
  content/
    lab/
    posts/
    projects/
  layouts/
  pages/
    posts/
    projects/
  styles/
```

Personal profile and contact details remain placeholders until confirmed.
