import type { ModuleOptions } from '@nuxtjs/tailwindcss'
import daisyui from 'daisyui'

type Config = ModuleOptions['config']

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
} satisfies Config
