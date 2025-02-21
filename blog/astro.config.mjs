// @ts-check
import node from "@astrojs/node";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [react(), db()],

  vite: {
    plugins: [tailwindcss()],
  },
});
