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

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string().optional(),
      badges: z.array(z.string()),
      summary: z.string(),
      brief: z.string().optional(),
      scope: z.string().optional(),
      status: z.string().optional(),
      repo: z.string().optional(),
      logo: z.object({
        image: image(),
        alt: z.string(),
      }),
      images: z.array(
        z.object({
          image: image(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      ),
    }),
});

export const collections = { podcasts, tv, projects };
