import path from 'path';
import locale from './presets/prLg/locale';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-primevue'],
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
  devtools: { enabled: true }
})
