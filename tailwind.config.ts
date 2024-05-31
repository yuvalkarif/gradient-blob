import type { ModuleOptions } from '@nuxtjs/tailwindcss'
import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'
import { themes } from './globals/themes'

type Config = ModuleOptions['config']

export default {
  content: [
    './pages/**/*.{html,vue}',
    './components/**/*.{html,vue}',
    './helpers/codes.ts',

  ],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes,
  },

} satisfies Config
