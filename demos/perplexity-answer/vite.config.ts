import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/FRONTEND/demos/perplexity-answer/",
  plugins: [react()],
});
