/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: 'Noto Sans'
    },
    extend: {
      height: {
        screen: '100dvh'
      },
      padding: {
        '22' : '5.5rem'
      }
    },
  },
  plugins: [],
}

