import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: {
        main: "var(--color-bg-main)",
        keypad: "var(--color-bg-keypad)",
        screen: "var(--color-bg-screen)",
      },
      toggle: {
        background: "--color-toggle-background",
        thumb: "--color-toggle-thumb",
      },
      resetKey: {
        background: "var(--color-resetKey-background)",
        shadow: "var(--color-resetKey-shadow)",
      },
      equalKey: {
        background: "var(--color-equalKey-background)",
        shadow: "var(--color-equalKey-shadow)",
      },
      numberKey: {
        background: "var(--color-numberKey-background)",
        shadow: "var(--color-numberKey-shadow)",
      },
      text: {
        numberKey: "var(--color-numberKey-text)",
        primary: "var(--color-primary-text)",
      },
    },

    extend: {
      fontSize: {
        numbersFontSize: "32px",
      },
      boxShadow: {
        keyShadow: "0px 5px 0px 0px",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
