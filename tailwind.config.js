const tokens = require('./src/theme/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: {
        sans: [tokens.fontFamily.regular],
        semibold: [tokens.fontFamily.semibold],
        bold: [tokens.fontFamily.bold],
      },
      borderRadius: Object.fromEntries(
        Object.entries(tokens.radius).map(([key, value]) => [key, `${value}px`]),
      ),
      spacing: Object.fromEntries(
        Object.entries(tokens.spacing).map(([key, value]) => [key, `${value}px`]),
      ),
    },
  },
  plugins: [],
};
