import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const podcasts = defineCollection({
  loader: file("src/data/podcasts.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.url(),
    category: z.enum([
      "Business",
      "Entertainment",
      "Travel",
      "Aviation",
      "Food",
      "News",
    ]),
  }),
});

export const collections = { podcasts };
