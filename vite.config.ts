import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    root: "src",
    globals: true,
    reporters: ["verbose"],
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["main.tsx", "**/types.ts", "vite-env.d.ts"],
      include: ["**/*.tsx", "**/*.ts"],
      reportsDirectory: "../coverage",
    },
  },
});
