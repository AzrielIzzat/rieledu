import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#620FB2', dark: '#21053D', accent: '#9235EE', light: '#E8D5FB' },
        ink: '#21182B', muted: '#746A80', canvas: '#F9F7FC'
      },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
      boxShadow: { card: '0 12px 40px rgba(54, 22, 82, .07)' }
    }
  },
  plugins: []
} satisfies Config
