// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
      site: "https://www.abdelkbirnainiaa.me/",
  integrations: [
    react(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.abdelkbirnainiaa.me/',
        'https://www.abdelkbirnainiaa.me/resume',
        'https://www.abdelkbirnainiaa.me/blog'
      ],
      filter: (page) => !page.includes('/admin') && !page.includes('/draft'),
      serialize(item) {
        if (item.url === 'https://www.abdelkbirnainiaa.me/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        }
        if (item.url.includes('/blog/')) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        }
        return item;
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: "hidden",
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (
                id.includes("@react-three/drei") ||
                id.includes("@react-three/fiber") ||
                id.includes("three")
              ) {
                return "three";
              }
              if (id.includes("react") || id.includes("react-dom")) {
                return "react";
              }
              if (id.includes("motion")) {
                return "motion";
              }
              if (
                id.includes("lucide-react") ||
                id.includes("@tabler/icons-react") ||
                id.includes("react-icons")
              ) {
                return "icons";
              }
            }
          },
        },
      },
    },
  },
});
