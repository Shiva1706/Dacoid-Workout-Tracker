// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fcfcfc",
          "200": "#787878",
          "300": "#252727",
        },
        white: "#fff",
        black: "#2c2b2b",
        "gray-50": "#f1f1f1",
        royalblue: {
          "100": "#5883f7", 
          "200": "#5472db",
        },
        "gray-100": "#808080",
        darkslategray: {
          "100": "#454545",
          "200": "rgba(69, 69, 69, 0.04)",
        },
        cornflowerblue: {
          "100": "#9fb2ff",
          "200": "#93a9ff",
          "300": "#829dff",
          "400": "#819cff",
          "500": "#819aff",
          "600": "#809aff",
          "700": "#8099ff",
          "800": "rgba(140, 177, 255, 0.6)",
        },
        darkslateblue: "rgba(42, 67, 156, 0)",
        red: "rgba(255, 0, 0, 0.42)",
        limegreen: {
          "100": "#34b009",
          "200": "rgba(52, 176, 9, 0.5)",
        },
        crimson: "#eb1754",
        black1: "#000",
        "nd-text-color": "#838892",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        quicksand: "Quicksand",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-3": "1.3px",
        "10xs-7": "2.7px",
        "10xs": "3px",
        xl: "20px",
        "mini-3": "14.3px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      mini: "0.938rem",
      xs: "0.75rem",
      "9xl-5": "1.781rem",
      "xs-4": "0.713rem",
      xl: "1.25rem",
      "3xs": "0.625rem",
      "xs-2": "0.7rem",
      "sm-2": "0.825rem",
      "smi-2": "0.763rem",
      base: "1rem",
      inherit: "inherit",
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
