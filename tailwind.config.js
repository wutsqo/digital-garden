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
        beige: "#ffdca8",
        primary: "#e248c0",
        "primary-dark": "#920070",
      },
      boxShadow: {
        "offset-black": "3px 3px black",
        "offset-white": "3px 3px white",
        "offset-black-sm": "2px 2px black",
        "offset-white-sm": "2px 2px white",
      },
      fontFamily: {
        header: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
