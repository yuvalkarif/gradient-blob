export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    "@nuxt/image"
  ],
  eslint: {
    config: {
      // enables extending eslint.config.mjs with antfu
      standalone: false,
    },
  },
  tailwindcss: {
    editorSupport: true,
  },
})