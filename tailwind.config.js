module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-cream": "#FFFDDE",
        "dark-cream": "#E7FBBE",
        "pastel-blue": "#D9D7F1",
        "pastel-pink": "#FFCBCB",
        linkedin: "#0e76a8",
        discord: "#7289d9",
        duolingo: "#7ac70c",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
