/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#1e3a5f',
          DEFAULT: '#1e3a5f',
        },
        blue: {
          royal: '#2563eb',
          sky: '#60a5fa',
          DEFAULT: '#2563eb',
        },
        cream: {
          pale: '#fef3c7',
          light: '#fef9e7',
          DEFAULT: '#fef3c7',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Roboto', 'Open Sans', 'Arial', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
