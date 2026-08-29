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
      // Homepage hero scroll cue: two small downward bounces packed into the first ~8% of a
      // 10s loop (≈0.8s of motion), then dead still for the rest — catches the eye on load and
      // once every ~10s without nagging during reading. Paired with motion-reduce:animate-none.
      // Chat typing indicator: three dots easing between 25% and 100% opacity on a staggered
      // 1.4s loop (delays applied per-dot in ChatWidget). Opacity only — nothing translates or
      // scales, so it reads as quiet activity rather than a bouncing/spinning attention grab.
      // Paired with motion-reduce:animate-none, same as the scroll cue.
      keyframes: {
        "chat-dot": {
          "0%, 80%, 100%": { opacity: "0.25" },
          "40%": { opacity: "1" },
        },
        "scroll-cue": {
          "0%": { transform: "translateY(0)" },
          "2%": { transform: "translateY(6px)" },
          "4%": { transform: "translateY(0)" },
          "6%": { transform: "translateY(4px)" },
          "8%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "chat-dot": "chat-dot 1.4s ease-in-out infinite",
        "scroll-cue": "scroll-cue 10s ease-out infinite",
      },
    },
  },
  plugins: [],
};
