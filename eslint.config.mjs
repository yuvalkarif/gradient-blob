import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    typescript: true,
    vue: true,
  }),
).overrideRules(
  { 'test/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  },
)
