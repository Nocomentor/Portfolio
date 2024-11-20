import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//tanstacRouter
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const rootDir = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": `${rootDir}/src`,
    },
  },
});
