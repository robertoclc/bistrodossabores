import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bistrodossabores.com.br",
build: {
    format: "file",
  },
  integrations: [sitemap()],
});