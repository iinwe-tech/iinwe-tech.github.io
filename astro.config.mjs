import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/',
  output: 'static',
  integrations: [tailwind()],
  trailingSlash: 'never',
});
