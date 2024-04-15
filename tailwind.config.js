/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'subtitle-grey': '#C9C5D3',
        'grey-grid': '#ACAAC0',
        'title-white': '#FFFDF5',
        'orange-grid': '#FFBB56',
        'green-grid': '#45E3BE',
        'violet-grid': '#8D65FF',
        'blue-grid': '#2FBDEA',
        blueish: '#1F2B48',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
  plugins: [],
};
