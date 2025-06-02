/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0F14',
        accentPrimary: '#4B5A6B',
        blueGlow: '#00C4FF',
        orangeHighlight: '#FF543D',
        gradientPulseStart: '#8A4FFF',
        gradientPulseEnd: '#C1B6FF',
        textWhite: '#EAEAEA',
      },
      fontFamily: {
        header: ['Satoshi', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        xxl: '2.25rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      boxShadow: {
        elevated: '0px 10px 30px rgba(0, 196, 255, 0.25)',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      animation: {
        'ripple-ring': 'ripple 4s linear infinite',
      },
    },
  },
  plugins: [],
}
