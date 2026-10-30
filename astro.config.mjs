// @ts-check
import { defineConfig } from 'astro/config';

/** @type {import("astro").AstroIntegration} */
const generatedSeoRoutes = {
  name: "dark-tzy-seo-routes",
  hooks: {
    "astro:config:setup": ({ injectRoute }) => {
      injectRoute({
        pattern: "/robots.txt",
        entrypoint: "./src/seo/robots.txt.ts",
      });

      injectRoute({
        pattern: "/sitemap.xml",
        entrypoint: "./src/seo/sitemap.xml.ts",
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://ngduy009.github.io",
  base: "/",
  output: "static",
  integrations: [generatedSeoRoutes],
  markdown: {
    syntaxHighlight: {
      type: "shiki",
    },
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
