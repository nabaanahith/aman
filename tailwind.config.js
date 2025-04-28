/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      fontFamily: {
      elMessiri: ["var(--font-elMessiri)", ...fontFamily.sans], // Using the font from next/font
      almarai: ["var(--font-almarai)", ...fontFamily.sans], // Optional, if you also use Almarai
  
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        900: "#271802",
        600: "#e18c09",
        500: "#f8b959",
        300: "#fbdaa7",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      neutral: {
        900: "#00121f",
        800: "#002a48",
        700: "#2f404c",
        600: "#3e5365",
        500: "#597791",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      elmessiri: ["ElMessiri-Bold", "sans-serif"],
      almarai: ["Almarai-Regular", "sans-serif"],
      almaraibold: ["Almarai-Bold", "sans-serif"],
    },
  
},
  },
  plugins: [],
}
