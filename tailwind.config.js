/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["winter","night"],
  },
  theme: {
    fontFamily:{
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
}

