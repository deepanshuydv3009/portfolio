import type { Config } from "tailwindcss";
const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: v("ink"), panel: v("panel"), line: v("line"), paper: v("paper"), mute: v("mute"), accent: v("accent"), onaccent: v("onaccent") },
    fontFamily: { serif: ['"Instrument Serif"', "Georgia", "serif"], sans: ['"Inter Variable"', "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
