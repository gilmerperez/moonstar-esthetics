import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["moonstar-esthetics.onrender.com"],
    port: process.env.PORT || 4173,
  },
});
