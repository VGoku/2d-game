/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood': '#8B0000',
        'midnight': '#190033',
        'crimson': '#DC143C',
        'gothic-purple': '#2D004D',
        'vampire-black': '#0A0A0A',
      },
      boxShadow: {
        'gothic': '0 4px 14px -3px rgba(139, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gothic-gradient': 'linear-gradient(to bottom, #190033, #0A0A0A)',
      },
    },
  },
  plugins: [],
}