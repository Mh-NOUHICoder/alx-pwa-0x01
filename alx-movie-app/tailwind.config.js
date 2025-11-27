/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode via class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"], // use Sora globally
        heading: ["var(--font-sora)", "sans-serif"], // optional heading alias
      },
      colors: {
        brand: {
          DEFAULT: "#6366F1", // Indigo 500
          dark: "#4338CA", // Indigo 700
          light: "#A5B4FC", // Indigo 300
        },
        surface: {
          DEFAULT: "#0f172a", // slate-900
          light: "#1e293b", // slate-800
          accent: "#334155", // slate-700
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(99, 102, 241, 0.6)", // indigo glow
        neon: "0 0 10px rgba(236, 72, 153, 0.8)", // pink neon
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
