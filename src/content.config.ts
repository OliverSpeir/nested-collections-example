import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const course1Collection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/courses/course1" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
});

const course2Collection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/courses/course2" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
});

export const collections = {
  course1: course1Collection,
  course2: course2Collection,
};
