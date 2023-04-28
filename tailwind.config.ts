import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          main: "var(--color-bg-main)",
          toggle: "var(--color-bg-toggle)",
          keypad: "var(--color-bg-keypad)",
          screen: "var(--color-bg-screen)",
        },
        oneKeys: {
          background: "var()",
          shadow: "var()",
        },
        twoKeys: {
          background: "var()",
          shadow: "var()",
        },
        threeKeys: {
          background: "var()",
          shadow: "var()",
        },
        text: {
          one: "var()",
          two: "var()",
        },
      },
      fontSize: {
        numbersFontSize: "32px",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
