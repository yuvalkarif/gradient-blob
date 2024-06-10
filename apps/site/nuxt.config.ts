export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
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
  sourcemap: {
    server: true,
    client: true,
  },
  vite: {
    server: {
      fs: {
        cachedChecks: false,
      },
    },
  },
})
