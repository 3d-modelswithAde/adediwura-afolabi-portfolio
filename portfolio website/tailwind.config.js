/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'col-span-1',
    'col-span-2',
    'col-span-full',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-full',
    'lg:col-span-1',
    'lg:col-span-2',
    'lg:col-span-full',
    'grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          950: '#070a0f',
          900: '#0b0f17',
          850: '#101622',
          800: '#151d2c',
          700: '#1e293b',
          600: '#334155',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
