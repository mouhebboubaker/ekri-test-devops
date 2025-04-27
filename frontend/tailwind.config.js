/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "full+": "120vh",
      },
      colors: {
        "custom-indigo": "#1C1F33",
        "custom-cyan": "#5CA9BA",
        "custom-lime": "#4E706B",
        "custom-blue":"#00AAFF",
        "custom-orange":"#FF6100",
        "footer-blue":"#49AAE1"
      },
      fontFamily: {
        Inika: ['"Inika"', "serif"],
      },
    },
  },
  plugins: [],
};
