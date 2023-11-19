import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fadialailan.github.io",
  base: "/main-webpage",
  integrations: [react()]
});