// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://wow-astro-docs-tutorial-outcome.netlify.app/",
  integrations: [preact()]
});