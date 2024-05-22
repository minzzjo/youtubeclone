/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**.{js,jsx}',
    './src/pages/**.{js,jsx}',
    './src/**.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ytRed': '#FF0000',
        'ytBlack': '#282828',
      },
      width: {
        '120': '30rem',
        '200': '50rem',
        '280': '70rem',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

