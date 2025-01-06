import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

const site = "https://fadialailan.uk"

// https://astro.build/config
export default defineConfig({
  site: site,
  // base: "/main-webpage",
  integrations: [
    react(),
    sitemap({
      filter : function(page) {
        const removed_pages = [site + "/playground/old_home_page/"]
        const page_in_removed_pages = removed_pages.includes(page)

        if (page_in_removed_pages) {
          return false
        }

        return true

      }
    })
  ],
  prefetch: true,

});
