/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep cinematic blacks
        ink: {
          DEFAULT: "#0A0A0B", // page background
          800: "#121214", // panels
          700: "#1A1A1D", // cards
          600: "#242428", // borders / hovers
        },
        // Warm gold accent system
        gold: {
          DEFAULT: "#E8B23A",
          light: "#F5C451",
          deep: "#C68F22",
        },
        // Cinematic ember orange
        ember: "#D97A2B",
        // Bone / off-white text
        bone: "#F4EFE6",
        ash: "#8A857C", // muted captions
      },
      fontFamily: {
        // High-contrast serif display — the "Masterpieces" voice
        display: ['Fraunces', 'Georgia', 'serif'],
        // Kinetic uppercase labels, stats, eyebrows
        mono: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        // Body copy
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        // Slow gold light-leak sweep across the hero
        sweep: {
          "0%": { transform: "translateX(-30%) rotate(8deg)", opacity: "0" },
          "20%": { opacity: "0.55" },
          "80%": { opacity: "0.55" },
          "100%": { transform: "translateX(130%) rotate(8deg)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.92" },
          "47%": { opacity: "0.78" },
          "49%": { opacity: "0.96" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        sweep: "sweep 9s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        flicker: "flicker 6s ease-in-out infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(232, 178, 58, 0.45)",
      },
    },
  },
  plugins: [],
};
