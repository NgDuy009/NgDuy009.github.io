# Posting Guide

Journal stories are Markdown files in `src/content/posts/`. Astro validates their
frontmatter, renders them as static pages, and excludes entries marked as drafts.
No CMS account, server, or database is required.

## Create a post

Create a Markdown file with a URL-friendly name, for example:

```text
src/content/posts/first-post.md
```

Add frontmatter at the top:

```yaml
---
title: "A journal story title"
description: "A concise summary of the fashion or visual-culture story."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags:
  - personal-style
  - visual-culture
category: "Journal"
draft: true
cover: "/images/first-post-cover.webp"
coverAlt: "A concise description of the image"
---
```

Required fields are `title`, `description`, and `pubDate`. The schema validates
dates and types during the build. `updatedDate`, `tags`, `category`, `cover`,
`coverAlt`, and `featured` are optional; `draft` and `featured` default to
`false`. The Journal features the newest published story unless a post is
explicitly marked `featured: true`; use that flag only to pin a deliberate
editorial selection. Add `coverAlt` when using a cover so screen-reader users
understand its content.

The filename becomes the post URL:

```text
first-post.md -> /posts/first-post/
```

## Write Markdown

Use regular Markdown for headings, paragraphs, lists, links, blockquotes, and
tables:

```md
## Một ghi chú

Đây là một đoạn văn về thời trang hoặc văn hóa thị giác, có [liên kết tham khảo](https://example.com).

- Mục thứ nhất
- Mục thứ hai

> Một trích dẫn.

| Cột | Giá trị |
| --- | --- |
| Ví dụ | Markdown |
```

The table of contents is generated from level-two and level-three headings.
Code fences are syntax-highlighted with the site's Shiki theme:

````md
```ts
const message: string = "A detail worth noticing";
console.log(message);
```
````

## Add images

Put reusable static images in `public/images/`. From a post or project detail
page, use a relative path so it works under the GitHub Pages project base:

```md
![Mô tả nội dung ảnh](../../images/first-post-cover.webp)
```

Set the optional `cover` frontmatter field to `/images/first-post-cover.webp`
to show a cover on the article page and in social metadata. Always write useful
alt text and optimize large images before adding them. For large inline images,
reserve their intrinsic dimensions and opt into lazy loading:

```html
<img
  src="../../images/diagram.webp"
  alt="A concise description of the diagram"
  width="1200"
  height="800"
  loading="lazy"
  decoding="async"
/>
```

## Preview a draft

Keep `draft: true` while writing. Draft posts are excluded from the public
listing, search index, and generated post routes.

Run the local site:

```powershell
npm.cmd run dev
```

Open the local URL printed by Astro. Since drafts are intentionally not routed,
preview a draft by temporarily setting `draft: false` locally, then restore
`draft: true` before committing it as a draft.

## Publish a post

Change `draft: true` to `draft: false` (or remove the field), verify the content
and links locally, then run:

```powershell
npm.cmd run build
```

After the build succeeds, commit and publish the Markdown file through the
hosting workflow configured for the site.

## Update a published post

Edit its Markdown body or frontmatter. Set `updatedDate` to the date of a
substantive update, preview the result, and run the production build before
committing. Keep the original `pubDate` unless the post is being republished as
a genuinely new entry.

## Projects and Lab entries

Add project Markdown files in `src/content/projects/` and experiment records in
`src/content/lab/`. Their required fields and allowed status/type values are
validated in `src/content.config.ts`. Project statuses are `Completed`,
`In Progress`, `Prototype`, and `Planned`; Lab types are `Experiment`,
`Prototype`, `Demo`, and `Research`.

Project frontmatter:

```yaml
---
title: "Tên dự án đã xác nhận"
description: "Mô tả ngắn về dự án."
status: "Prototype"
category: "Web Development"
stack:
  - Astro
  - TypeScript
cover: "/images/project-cover.webp"
coverAlt: "A concise description of the project image"
github: "https://github.com/owner/repository"
demo: "https://example.com"
pubDate: 2026-10-30
featured: false
---
```

Only add `github`, `demo`, `cover`, or `coverAlt` values when they exist. A
project detail page is generated from its Markdown filename.

Lab frontmatter:

```yaml
---
title: "Tên thử nghiệm"
description: "Mô tả chính xác phạm vi thử nghiệm."
type: "Experiment"
tags:
  - ai
  - automation
date: 2026-10-30
url: "https://example.com"
github: "https://github.com/owner/repository"
---
```

Only include links that are real and verified. Label visual-only work as a
prototype or mockup, not as an integrated AI or API demo.

## Fashion collections

Create an owner-approved collection in `src/content/collections/` as a Markdown
file. Its required `cover` and `coverAlt` form the collection's lead image.
Use `layout` to choose the image story arrangement; it defaults to `masonry`:

```yaml
---
title: "A collection title"
description: "A concise, accurate introduction to this collection."
category: "Style study"
layout: "diptych"
cover: "/images/collection-cover.webp"
coverAlt: "A description of the collection image"
images:
  - src: "/images/collection-detail.webp"
    alt: "A description of the detail image"
    caption: "Optional image caption"
---

Write the collection story here in Markdown.
```

Available layouts are `masonry`, `panorama`, and `diptych`. Include only
verified, owner-approved imagery and collection information.

Only add real project, contact, and external-link information that has been
confirmed. Cover paths use `/images/...`; Markdown body images should use relative paths
such as `../../images/...` so they resolve beneath the configured site base.
