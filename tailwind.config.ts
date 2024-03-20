import type { Config } from 'tailwindcss';

export default {
  content: [
    './presets/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00AB2E'
      },
    },
  },
  plugins: [],
} satisfies Config;