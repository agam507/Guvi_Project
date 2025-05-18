/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo-600
        secondary: "#10B981", // Emerald-500
        accent: "#F59E42",    // Optional: Accent color (orange-ish)
      },
      fontFamily: {
        sans: ['Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For prose/markdown content
  ],
  darkMode: 'class', // Enable dark mode support via class strategy
}
