import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Remove the base: "/portfolio/" line since you're deploying to root
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3300, // Custom port number
    strictPort: true, // Ensures Vite only uses this specific port
    host: true, // Allows access from network
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    // Add proper module handling
    rollupOptions: {
      output: {
        manualChunks: undefined,
        format: "es",
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
});
