import type { APIRoute } from "astro";
import { withBase } from "../lib/urls";

export const GET: APIRoute = ({ site }) => {
	const sitemapLine = site
		? `Sitemap: ${new URL(withBase("/sitemap.xml"), site).href}\n`
		: "";

	return new Response(`User-agent: *\nAllow: /\n${sitemapLine}`, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
