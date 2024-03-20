# Инструкция использования для Nuxt 3

## Установить зависимости


```bash
npx nuxi module add @nuxtjs/tailwindcss

# Using npm
npm install primevue
npm install --save-dev nuxt-primevue

# Using yarn
yarn add primevue
yarn add --dev nuxt-primevue

# Using pnpm
pnpm add primevue
pnpm add -D nuxt-primevue
```

## Нужно вставить в nuxt.config

```bash
modules: ['nuxt-primevue', "@nuxtjs/tailwindcss"],
primevue: {
 options: {
  unstyled: true,
  locale: locale,
  inputStyle: 'outlined',
  ripple: true,
 },
 usePrimeVue: true,
 importPT: { from: path.resolve(__dirname, './node_modules/prime-test-template/presets/prLg') },
},
tailwindcss: {
 config: {
  ...tailwindConfig,
  content: [
   path.resolve(__dirname, './node_modules/prime-test-template/presets/**/*.{js,vue,ts}'),
   './components/**/*.{js,vue,ts}',
   './layouts/**/*.vue',
   './pages/**/*.vue',
   './plugins/**/*.{js,ts}',
   './app.vue',
   './error.vue',
  ]
},
```
