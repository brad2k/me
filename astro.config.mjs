// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import pdf from "astro-pdf";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bradazevedo.com/",

  output: "static",

  image: {
    layout: "constrained",
    domains: ["is1-ssl.mzstatic.com"],
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

  integrations: [
    sitemap({
      filter: (page) => page !== "https://www.bradazevedo.com/dev/hosting/",
    }),
    pdf({
      pages: {
        "/resume": {
          path: "resume.pdf",
          ensurePath: true,
          screen: false,

          callback: async (page) => {
            await page.$$eval("img[loading=lazy]", (imgs) => {
              imgs.forEach((img) => {
                img.loading = "eager";
              });
            });
            // wait for all images to load
            await page.waitForNetworkIdle();
          },

          pdf: {
            format: "Letter",
            printBackground: true,
          },
        },
      },
    }),
  ],
});
