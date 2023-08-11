/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud': '#C5C6D0',
        'newBlack': '#0A0908',
        'gunmetal': '#22333B',
        'almond': '#EAE0D5',
        'khaki': '#C6AC8F',
        'walnutBrown': '#5E503F'
      }
    },
  },
  plugins: [require('daisyui')]
}
