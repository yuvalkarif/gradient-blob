import type { ModuleOptions } from '@nuxtjs/tailwindcss'
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'
import { themes } from './globals/themes'

type Config = ModuleOptions['config']

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes,
  },

} satisfies Config
