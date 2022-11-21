import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  rules: [
    ["hl-none", { "line-height": "initial" }],
    [/^hl-(\d+)$/, ([, d]) => ({ "line-height": `${d * 0.25}rem` })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
