/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0a0b10',
          darker: '#06070a',
          card: '#12131c',
          cardHover: '#181926',
          border: '#272a3e',
          light: '#f8fafc',
          lightCard: '#ffffff',
          lightBorder: '#cbd5e1',
        },
        brand: {
          cyan: '#00d2ff',
          blue: '#3b82f6',
          emerald: '#10b981',
          amber: '#f59e0b',
          purple: '#a855f7',
          rose: '#f43f5e',
          indigo: '#6366f1',
        },
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'brutal-cyan': '4px 4px 0px 0px #00d2ff',
        'brutal-emerald': '4px 4px 0px 0px #10b981',
        'brutal-amber': '4px 4px 0px 0px #f59e0b',
        'brutal-purple': '4px 4px 0px 0px #a855f7',
        'brutal-rose': '4px 4px 0px 0px #f43f5e',
        'brutal-blue': '4px 4px 0px 0px #3b82f6',
        'brutal-dark': '4px 4px 0px 0px #000000',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-subtle': '3px 3px 0px 0px rgba(255,255,255,0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
