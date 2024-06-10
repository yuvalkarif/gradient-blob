import antfu from '@antfu/eslint-config'

export default 
  antfu({
    typescript: true,
    vue: true,
  })
.overrideRules(
  { 'test/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  },
)
