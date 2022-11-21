import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      exclude: ['**/components/*.vue'],
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: true,
      },
      dts: true,
    }),
    Components({
      dts: true,
      types: [
        {
          from: "vue-router",
          names: ["RouterView", "RouterLink"],
        },
      ],
    }),
    Unocss({
      configFile: resolve(__dirname, "uno.config.ts"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
