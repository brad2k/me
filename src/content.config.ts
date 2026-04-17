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

const tv = defineCollection({
  loader: file("src/data/tv.json"),
  schema: z.object({
    image: z.url(),
    title: z.string(),
  }),
});

export const collections = { podcasts, tv };
