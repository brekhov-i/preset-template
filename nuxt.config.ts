import path from 'path';
import locale from './presets/prLg/locale';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-primevue', "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      unstyled: true,
      locale: locale,
      inputStyle: 'outlined',
      ripple: true,
    },
    usePrimeVue: true,
    importPT: { from: path.resolve(__dirname, './presets/prLg') },
  },
  tailwindcss: {
    configPath: path.resolve(__dirname, './tailwind.config.ts')
  },
  devtools: { enabled: true }
})