export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
  eslint: {
    config: {
      // enables extending eslint.config.mjs with antfu
      standalone: false,
    },
  },
})
