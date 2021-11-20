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
      },
      boxShadow: {
        'card': "-2px -2px 7px 0 rgba(39, 2, 6, 0.5), 2px 2px 12px 0 rgba(39, 2, 6, 0.5)"
      },
      margin: {
        '18': '4.5rem'
      },
      fontSize: {
        '2xs': '.5rem',
        '3xs': '.25rem'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}
