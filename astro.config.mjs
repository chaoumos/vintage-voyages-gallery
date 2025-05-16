import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://vintage-voyages-gallery.example.com',
  integrations: [tailwind()],
  output: 'static',
});