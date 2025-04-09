/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7F1E8",
        second: "#443F3A",
        gold1: "#D3943F",
        gold2: "#F7F1E8"
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

