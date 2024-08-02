import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: '/',
  output: 'static',
  site: 'https://iinwe.org',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  trailingSlash: 'never',
});
