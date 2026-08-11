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
        // Site accent (steel blue). Single source of truth for the accent color.
        // Previously cyan [#0891b2]; retargeted site-wide to #3A759F (with the
        // inline hardcoded hexes swept to match). `brand-hover` is the darker
        // hover shade (was [#0e7490]).
        brand: {
          DEFAULT: "#3A759F",
          hover: "#2E5E7F",
          // "Professor's Pick" pill — a LIGHT TINT of the accent (fill) with DARK accent text,
          // deliberately NOT a saturated fill: it must not compete with the saturated #3A759F
          // discount pill on the same card. Derived from the #3A759F accent family (not a new
          // hue). Text-on-fill contrast is 6.73:1 (WCAG AA ✓).
          pickBg: "#EAF2F7",
          pickText: "#2A5876",
          pickBorder: "#C5DBE8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
