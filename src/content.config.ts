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

export const collections = { posts, projects, lab };
