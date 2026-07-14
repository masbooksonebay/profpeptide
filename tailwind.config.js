/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Site accent (cyan). Single source of truth for the accent color that
        // was previously hard-coded as the arbitrary value [#0891b2] across the
        // codebase. `brand-hover` is the darker hover shade (was [#0e7490]).
        brand: {
          DEFAULT: "#0891b2",
          hover: "#0e7490",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
