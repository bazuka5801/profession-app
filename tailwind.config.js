/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,vue,ts}'],

  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-safe-area'), require('@tailwindcss/typography')],

  corePlugins: {
    preflight: false
  }
}
