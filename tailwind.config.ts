import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1416",
        panel: "#141C1F",
        panel2: "#182124",
        paper: "#EDEAE2",
        muted: "#8FA0A3",
        border: "#25302F",
        signal: "#49C5B6",
        signaldim: "#2E6E68",
        amber: "#E5A248",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(237,234,226,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
