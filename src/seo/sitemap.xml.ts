import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { withBase } from "../lib/urls";

const escapeXml = (value: string) =>
	value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export const GET: APIRoute = async ({ site }) => {
	if (!site) {
		throw new Error("SITE_URL is required to generate the public sitemap.");
	}

	const posts = await getCollection("posts", ({ data }) => !data.draft);
	const projects = await getCollection("projects");
	const fashionCollections = await getCollection("collections");
	const routes = [
		{ path: "", lastModified: undefined },
		{ path: "about/", lastModified: undefined },
		{ path: "collections/", lastModified: undefined },
		{ path: "gallery/", lastModified: undefined },
		{ path: "projects/", lastModified: undefined },
		{ path: "posts/", lastModified: undefined },
		{ path: "lab/", lastModified: undefined },
		{ path: "contact/", lastModified: undefined },
		...posts.map((post) => ({
			path: `posts/${post.id}/`,
			lastModified: post.data.updatedDate ?? post.data.pubDate,
		})),
		...projects.map((project) => ({
			path: `projects/${project.id}/`,
			lastModified: project.data.pubDate,
		})),
		...fashionCollections.map((collection) => ({
			path: `collections/${collection.id}/`,
			lastModified: collection.data.date,
		})),
	];
	const entries = routes.map(({ path, lastModified }) => {
		const location = escapeXml(new URL(withBase(path), site).href);
		const modified = lastModified
			? `\n    <lastmod>${lastModified.toISOString()}</lastmod>`
			: "";

		return `  <url>\n    <loc>${location}</loc>${modified}\n  </url>`;
	});
	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...entries,
		"</urlset>",
	].join("\n");

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
