import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting: keep heavy animation lib in its own chunk so the
    // initial paint stays lean.
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
