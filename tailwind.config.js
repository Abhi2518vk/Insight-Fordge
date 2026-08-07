/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0B0D",
          surface: "#121418",
          card: "#181A1F",
          border: "#22252C",
          muted: "#2C303B"
        },
        indigo: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          glow: "rgba(79, 70, 229, 0.15)",
          bright: "#818CF8"
        },
        brass: {
          DEFAULT: "#C5A880",
          hover: "#B3956E",
          light: "#DFCEB6",
          dark: "#3B3225"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
