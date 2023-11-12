import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), svelte()],
  adapter: vercel({
    imagesConfig: {domains: [], formats: ['image/avif', 'image/webp'], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]},
    imageService: true,
  }),
  image: {
    domains: ['utfs.io'],
  },
});
