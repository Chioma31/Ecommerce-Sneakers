/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(25, 100%, 94%)',
        contrast: '#e78a51',
        accent: 'var(--accent)',
      },
      fontFamily: {
        font: ['Kumbh Sans', 'sans-serif']
      },
      screens: {
        mobile: '0px',
        // => @media () { ... }

        tablet: '1024px',
        // => @media (min-width: 768px, max:1023px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1024px and max:1279px) { ... }
      },
    },

  },
  plugins: [],
}
