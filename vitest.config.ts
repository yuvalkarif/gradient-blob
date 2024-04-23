import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    include: ['**\/*.test.?(c|m)[jt]s?(x)'],
  },
})
