/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/Hero.png')"
    },
  },
  plugins: [],
  }
}
