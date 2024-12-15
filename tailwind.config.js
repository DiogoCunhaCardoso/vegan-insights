/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#194138", // Background (Dark Green)
        text: "#FFFFFF", // Main Text (White)
        subtext: "#F0F4F1", // Sub-text (Off-White)
        accent: "#FCA0C5", // Accent (Pink)
        foreground: {
          dark: "#13372A", // Foreground (Darker Green)
          medium: "#1C4F39", // Foreground (Medium Green)
          light: "#2A5C4F", // Foreground (Light Green)
        },
      },
    },
  },
  plugins: [],
};
