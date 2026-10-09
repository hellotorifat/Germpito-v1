import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3fb',
          100: '#dbe5f5',
          200: '#b9cbea',
          300: '#8da9d9',
          400: '#5f81c4',
          500: '#3f63aa',
          600: '#2f4d8c',
          700: '#263e72',
          800: '#1c2e57',
          900: '#13213f',
          950: '#0b1530',
        },
        gold: {
          50: '#fffaeb',
          100: '#fdefc3',
          200: '#fbdc86',
          300: '#f8c846',
          400: '#f3b51c',
          500: '#dc9a0c',
          600: '#b87606',
        },
        paper: '#f6f8fc',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', '"Noto Sans Bengali"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(19,33,63,0.05), 0 4px 16px rgba(19,33,63,0.05)',
        lift: '0 8px 30px rgba(19,33,63,0.12)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.25)' },
          '50%': { transform: 'scaleY(1)' },
        },
        pop: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
        pop: 'pop 0.18s ease-out both',
        flash: 'flash 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
