// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bradazevedo.com/",

  fonts: [
    {
      name: "Lora",
      cssVariable: "--font-Lora",
      provider: fontProviders.google(),
    },
    {
      name: "Fraunces",
      cssVariable: "--font-Fraunces",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
    {
      name: "DM Sans",
      cssVariable: "--font-DM",
      provider: fontProviders.google(),
      weights: [400, 700, 800, 900],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Epilogue",
      cssVariable: "--font-Epilogue",
      provider: fontProviders.google(),
      weights: [400, 600, 700, 900],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
  ],

  integrations: [sitemap()],
});
