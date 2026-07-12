/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#080b12',
          900: '#0b0f17',
          850: '#0f141e',
          800: '#131926',
          700: '#1a2130',
          600: '#232b3d',
          500: '#323d54',
        },
        ink: {
          100: '#f1f4fa',
          300: '#c7cede',
          500: '#8891a8',
          700: '#5b6478',
        },
        violet: {
          DEFAULT: '#8b6bf2',
          soft: '#a894f7',
        },
        cyan: {
          DEFAULT: '#3fc7ea',
          soft: '#7ddcf3',
        },
        emerald: {
          DEFAULT: '#34d399',
          soft: '#6ee7bf',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}

