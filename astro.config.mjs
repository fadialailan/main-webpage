import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fadialailan.uk",
  // base: "/main-webpage",
  integrations: [react()]
});
