import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fafafa",
        text: "#111827",
        muted: "#6b7280",
        card: "#ffffff",
        stroke: "#e5e7eb",
        pill: "#f3f4f6",
        accent: "#0ea5e9"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: [],
} satisfies Config;
