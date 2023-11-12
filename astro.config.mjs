import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import {defineConfig} from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), svelte()],
  adapter: vercel(),
  image: {
    domains: ["utfs.io"],
  }
});