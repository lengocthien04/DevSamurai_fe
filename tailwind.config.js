/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Inter Fallback"],
      },
      colors: {
        "card-foreground": "hsl(240 10% 3.9%)",
        "muted-foreground": "hsl(240 3.8% 46.1%)",
        foreground: "hsl(240 10% 3.9%)",
        "primary-foreground": "white",
      },
      fontWeight: {
        medium: 500,
      },
      backgroundColor: {
        primary: "black",
      },
    },
  },
  plugins: [],
};
