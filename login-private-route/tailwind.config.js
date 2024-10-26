/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    }, */
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '1000': '1000ms',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    screens: {
      '2xs': '280px',

      'xs': '360px',

      '2sm': '480px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... },

      'max-2xs': { max : '280px'},

      'max-xs': { max : '360px'},

      'max-2sm': { max : '480px'},

      'max-sm': { max : '640px'},
      // => @media (min-width: 640px) { ... }

      'max-md': { max : '768px'},
      // => @media (min-width: 768px) { ... }

      'max-lg': { max : '1024px'},
      // => @media (min-width: 1024px) { ... }

      'max-xl': { max : '1280px'},
      // => @media (min-width: 1280px) { ... }

      'max-2xl': { max : '1536px'},
      // => @media (min-width: 1536px) { ... },

      
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  },
  plugins: [],
}

