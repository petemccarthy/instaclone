const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
      },
      height: {
        128: '36rem',
      },
    },
  },
  plugins: [],
}
