/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#194138", // (Dark Green)
        text: "#FFFFFF", // (White)
        subtext: "#F0F4F1", // (Off-White)
        accent: "#FCA0C5", // (Pink)
        foreground: {
          dark: "#13372A", // (Darker Green)
          medium: "#1C4F39", // (Medium Green)
          light: "#2A5C4F", // (Light Green)
        },
      },
    },
  },
  plugins: [],
};
