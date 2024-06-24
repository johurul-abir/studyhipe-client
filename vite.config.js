import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "client/src/main.jsx", // Ensure this path is correct
    },
    outDir: "dist", // Default output directory
  },
});
