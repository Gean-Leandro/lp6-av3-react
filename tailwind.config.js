/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'display': ['Audiowide'],
      'sans': ['Roboto'],
    },
    extend: {},
  },
  plugins: ['@tailwindcss/aspect-ratio',],
}

