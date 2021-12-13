module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryColor: {
        DEFAULT: "#f7f108",
      },
      secondaryColor: {
        DEFAULT: "#000000",
        light: "#444444",
      },
      tertiaryColor: {
        DEFAULT: "#f1f1f1",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
