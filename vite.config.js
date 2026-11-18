import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "./" permet de déployer dans un sous-dossier (ex. cPanel public_html/)
  base: "./",
});
