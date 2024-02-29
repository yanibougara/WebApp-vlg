// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            leaflet: "leaflet/dist/leaflet-src.esm.js",
        },
    },
});

module.exports = {
    plugins: [
        // Plugin Vue.js pour Vite
        require("@vitejs/plugin-vue")(),
    ],
};