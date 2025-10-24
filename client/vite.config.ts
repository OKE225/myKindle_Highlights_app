/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // ustawia środowisko testowe na jsdom
    globals: true, // opcjonalnie, by mieć globalne test/expect bez importów
    setupFiles: "./src/setupTests.js", // opcjonalnie plik do setupu (np. import rozszerzeń)
  },
});
