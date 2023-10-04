/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: "#099DBA",
        primarybold: "#046DBF",
        second: "#F3FEFE",
        brown: "#474551",
      },
    },
  },
  plugins: [],
};
