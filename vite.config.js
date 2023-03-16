// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                project: resolve(__dirname, "/pages/project.html"),
                about: resolve(__dirname, "/pages/about.html"),
            },
        },
    },
});
