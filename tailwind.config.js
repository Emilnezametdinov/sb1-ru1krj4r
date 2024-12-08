/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2563eb',
        'sidebar': '#f9fafb',
        'hover': '#f3f4f6',
      }
    },
  },
  plugins: [],
};