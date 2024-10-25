/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        skin: {
          primary: '#F6EEEA',
          secondary: '#E8D5CF',
          accent: '#D4A5A5',
          dark: '#333333'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}