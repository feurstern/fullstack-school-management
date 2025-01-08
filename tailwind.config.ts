import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyBg : "#C3EBFA",
        skyLightBlueBg: "#EDF9FD",
        purpleBg : "#CFCEFF",
        pupleLightBg : '#F1F0FF',
        yelloWBg : "#FAE27C",
        yellowLightBg : "#FEFCE8"
      },
    },
  },
  plugins: [],
} satisfies Config;
