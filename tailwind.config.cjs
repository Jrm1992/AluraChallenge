/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/Hero.png')",
        'glass': "url('src/assets/magnifying-glass-bold .png')"
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '6': '24px',
    }
  },
  plugins: [],
  }
}
