/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "background-light": "#F8FAFC",
        "background-dark": "#101c22",
        "foreground-light": "#1E293B",
        "foreground-dark": "#F8FAFC",
        "card-light": "#FFFFFF",
        "card-dark": "#1E293B",
        "card-foreground-light": "#1E293B",
        "card-foreground-dark": "#F8FAFC",
        "muted-light": "#64748B",
        "muted-dark": "#94A3B8",
        "border-light": "#E2E8F0",
        "border-dark": "#334155",
        "success": "#10B981",
        "warning": "#F59E0B",
        "error": "#EF4444",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
