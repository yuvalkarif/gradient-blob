import type { ModuleOptions } from '@nuxtjs/tailwindcss'

type Config = ModuleOptions['config']

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
