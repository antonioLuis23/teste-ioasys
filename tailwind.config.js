module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-login": "url('../public/images/background-login.png')",
        "background-home1": "url('../public/images/background-home.png')",
        "background-home2": "url('../public/images/background-home2.png')",
      },
    },
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
      heading: ["Heebo", "sans-serif"],
    },
  },
  plugins: [],
};
