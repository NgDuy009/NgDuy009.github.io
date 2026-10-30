import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		tags: z.array(z.string()).default([]),
		category: z.string().optional(),
		draft: z.boolean().default(false),
		featured: z.boolean().default(false),
		cover: z.string().optional(),
		coverAlt: z.string().trim().min(1).optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		status: z.enum(["Completed", "In Progress", "Prototype", "Planned"]),
		category: z.string().optional(),
		stack: z.array(z.string()).default([]),
		cover: z.string().optional(),
		coverAlt: z.string().trim().min(1).optional(),
		github: z.string().url().optional(),
		demo: z.string().url().optional(),
		pubDate: z.date().optional(),
		featured: z.boolean().default(false),
	}),
});

const fashionCollections = defineCollection({
	loader: glob({ base: "./src/content/collections", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string().trim().min(1),
		description: z.string().trim().min(1),
		category: z.enum(["Lookbook", "Style study", "Accessories", "Visual notes"]),
		layout: z.enum(["masonry", "panorama", "diptych"]).default("masonry"),
		cover: z.string().trim().min(1),
		coverAlt: z.string().trim().min(1),
		date: z.date().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		images: z.array(z.object({
			src: z.string().trim().min(1),
			alt: z.string().trim().min(1),
			caption: z.string().optional(),
		})).default([]),
	}),
});

const lab = defineCollection({
	loader: glob({ base: "./src/content/lab", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.enum(["Experiment", "Prototype", "Demo", "Research"]),
		tags: z.array(z.string()).default([]),
		date: z.date().optional(),
		url: z.string().url().optional(),
		github: z.string().url().optional(),
	}),
});

export const collections = { posts, projects, collections: fashionCollections, lab };
