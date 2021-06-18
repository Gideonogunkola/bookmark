module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      colors: {
        pry: {
          DEFAULT: "hsl(231, 69%, 60%)",
          red: "hsl(0, 94%, 66%)"
        },
        neut: {
          DEFAULT: "hsl(229, 8%, 60%)",
          dark: "hsl(229, 31%, 21%)"
        }
      },
      letterSpacing: {
        morewider: ".2em",
        morewidest: ".25em"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
