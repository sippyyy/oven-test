import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
    palette: {
      primary: {
        main:"#97Af8f",
        light:"#d5e7b8",
        dark:"#355e3b",
        contrastText: "#fff",
      },
      error:{
        main:"#c63637",
        light:"#FDE9EA",
        dark:"#F1B6AB",
        contrastText: "#fff",
      },
      info:{
        main: "#507fa9",
        light:"#D4E0EE",
        dark:"#C0CFE6",
      }
    },
  });