/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    // colors: {
    //   primary: "#f8fafc",
    //   secondary: "#394623",
    //   accent1: "#6B912C",
    //   accent2: "#FFC700",
    // },
  },
  plugins: [],
};
