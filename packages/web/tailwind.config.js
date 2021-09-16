// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Suez One', ...defaultTheme.fontFamily.serif],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: '#130103',
        secondary: '#4F4F4F',
        info: '#680801',
        light: '#D1D5DB',
        dark: '#0A0A0A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
