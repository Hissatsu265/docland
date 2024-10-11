/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      san: ["Roboto", "sans-serif"], // Đặt Roboto làm font mặc định cho fontFamily sans
    },

    // colors: {
    //   primary: "#3e18ff",
    //   primary100: "##dfd9ff",
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3e18ff",
        },
      },
    },
  },
  plugins: [],
};
