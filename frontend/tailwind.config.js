/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        roboAnimate: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.05)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        roboAnimate: 'roboAnimate 2s infinite ease-in-out'
      },
      spacing: {
        128: '40rem'
      }
    },
  },
  plugins: [],
}

