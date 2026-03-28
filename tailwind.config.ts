import type { Config } from "tailwindcss";

const config: Config = {
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
        navy: {
          DEFAULT: "#050b1a",
          subtle: "#0a1228",
        },
        carbon: "#111827",
        finance: "#2563eb",
        safe: "#10b981",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "PingFang SC",
          "Microsoft YaHei",
          "Noto Sans SC",
          "system-ui",
          "sans-serif",
        ],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(1.25rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 8s ease infinite",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(37, 99, 235, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
