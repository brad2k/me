// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bradazevedo.com/",

  output: "static",

  image: {
    layout: "constrained",
    domains: ["is1-ssl.mzstatic.com"],
  },

  // 301 by default
  redirects: {
    "/me/": "/",
  },

  fonts: [
    {
      name: "Fraunces",
      cssVariable: "--font-Fraunces",
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["serif"],
    },
    {
      name: "Epilogue",
      cssVariable: "--font-Epilogue",
      provider: fontProviders.google(),
      weights: [400, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Fira Mono",
      cssVariable: "--font-Fira",
      provider: fontProviders.google(),
      weights: [400, 500, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],

  integrations: [sitemap()],
  adapter: netlify({
    imageCDN: false,
  }),
});
