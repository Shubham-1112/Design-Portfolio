import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        surface: {
          50: "#fafbfc",
          100: "#f4f6f8",
          200: "#e9ecf0",
          300: "#d3d8e0",
          400: "#9aa5b4",
          500: "#6b7a8d",
        },
        ink: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        signature: ["var(--font-signature)", "serif"],
      },
      backgroundImage: {
        "gradient-ocean":
          "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)",
        "gradient-ocean-light":
          "linear-gradient(135deg, #e0f2fe 0%, #cffafe 50%, #ecfeff 100%)",
        "gradient-ocean-subtle":
          "linear-gradient(135deg, #f0f9ff 0%, #ecfeff 50%, #f0fdfa 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 60%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(14, 165, 233, 0.08)",
        "card-hover": "0 20px 60px rgba(14, 165, 233, 0.12)",
        elevated: "0 4px 24px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
