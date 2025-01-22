import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import tsChecker from "vite-plugin-checker";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tsChecker({ typescript: true }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});
