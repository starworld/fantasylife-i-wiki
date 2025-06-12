import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://fantasylife-i.com', // 本番URLに変更予定
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: (page) => page !== 'https://fantasylife-i.com/admin/',
    }),
    mdx(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
  },
  image: {
    domains: ['fantasylife-i.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    assetsInclude: ['**/*.yaml'],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
        },
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});