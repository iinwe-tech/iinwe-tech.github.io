import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: '/',
  output: 'static',
  site: 'https://iinwe.org',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  trailingSlash: 'never',
});
