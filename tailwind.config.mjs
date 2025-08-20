/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
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
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
};
