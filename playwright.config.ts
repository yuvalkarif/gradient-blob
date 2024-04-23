import { fileURLToPath } from 'node:url'
import { defineConfig } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  testMatch: '**\/*.spec.?(c|m)[jt]s?(x)',
  reporter: 'html',
})
