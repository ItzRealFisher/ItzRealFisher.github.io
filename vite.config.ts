import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === "preview" ? "/preview/" : "/",
  build: { outDir: mode === "preview" ? "dist-preview" : "dist" },
}));
