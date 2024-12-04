import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const course1Collection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/courses/course1" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			ogImage: image(),
			ogImageAlt: z.string().default(""),
		}),
});

const course2Collection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/courses/course2" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			ogImage: image(),
			ogImageAlt: z.string().default(""),
		}),
});

export const collections = {
	course1: course1Collection,
	course2: course2Collection,
};
