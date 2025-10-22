// tailwind.config.js
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'moveRight1': 'moveRight 15s linear infinite',
        'moveLeft1': 'moveLeft 18s linear infinite',
        'moveRight2': 'moveRight 20s linear infinite',
        'moveLeft2': 'moveLeft 16s linear infinite',
        'moveRight3': 'moveRight 22s linear infinite',
        'moveLeft3': 'moveLeft 14s linear infinite',
        'moveRight4': 'moveRight 19s linear infinite',
        'moveLeft4': 'moveLeft 17s linear infinite',
        'moveRight5': 'moveRight 21s linear infinite',
        'moveLeft5': 'moveLeft 13s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        moveRight: {
          '0%': { 
            transform: 'translateX(-100px) translateY(0px) rotate(0deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateX(calc(100vw + 100px)) translateY(50px) rotate(180deg)',
            opacity: '0.7'
          },
          '100%': { 
            transform: 'translateX(-100px) translateY(0px) rotate(360deg)',
            opacity: '0.3'
          },
        },
        moveLeft: {
          '0%': { 
            transform: 'translateX(calc(100vw + 100px)) translateY(0px) rotate(0deg)',
            opacity: '0.3'
          },
          '50%': { 
            transform: 'translateX(-100px) translateY(-50px) rotate(180deg)',
            opacity: '0.7'
          },
          '100%': { 
            transform: 'translateX(calc(100vw + 100px)) translateY(0px) rotate(360deg)',
            opacity: '0.3'
          },
        },
      },
    },
  },
  plugins: [],
}