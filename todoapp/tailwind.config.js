/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#97Af8f",
        darkGreen: "#355e3b",
        lightGreen: "#d5e7b8",
        red: "#eb6A58",
        white: "#fbfbfb",
        lightWhite: "#fff",
        lightBlue: "#C0CFE6",
        pink: "#F1B6AB",
        black: "#121212",
        dark: "#3D3A45",
        gray: "#8c8896",
        lightGrey: "#d1cfd5",
      },
      fontSize: {
        xxSmall: "11px",
        xSmall: "13px",
        small: "15px",
        medium: "17px",
        large: "21px",
        xLarge: "27px",
        xxLarge: "32px",
        "3xLarge": "46px",
      },
      space: {
        xSmall: "10px",
        small: "12px",
        medium: "16px",
        large: "20px",
        xLarge: "24px",
        xxLarge: "44px",
      },
      padding: {
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
      },
      margin: {
        2: "2px",
        4: "4px",
        8: "8px",
        12: "12px",
        16: "16px",
        20: "20px",
        40: "40px",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        xBold: 1000,
      },
      height: {
        wallBig: "600px",
        wallSmall: "400px",
      },
      screens: {
        none: "100%",
        xsm: "368px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1025px",
        "2xl": "1270px",
      },
      boxShadow: {
        "3xl": "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
        "4xl": "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
      },
      fontFamily:{
        special: "'Lobster', sans-serif",
      }
    },
  },
  plugins: [],
};
