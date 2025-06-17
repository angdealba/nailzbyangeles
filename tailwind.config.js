/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        testpink: "#ff00ff",
        border: "hsl(240 5.9% 50%)",
        input: "hsl(240 5.9% 90%)",
        ring: "hsl(240 5.9% 90%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",

        primary: "hsl(333 71% 50%)",
        "primary-foreground": "hsl(0 0% 100%)",

        secondary: "hsl(0 65% 91%)",
        "secondary-foreground": "hsl(0 0% 87%)",

        muted: "hsl(240 4.8% 95%)",
        "muted-foreground": "hsl(240 3.8% 46%)",

        accent: "hsl(240 4.8% 95%)",
        "accent-foreground": "hsl(240 5.9% 10%)",

        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(240 10% 3.9%)",

        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(240 10% 3.9%)",
      },
    },
  },
  plugins: [],
}
