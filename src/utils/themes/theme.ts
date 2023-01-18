import { ThemeOptions } from "@mui/material";
import { purple } from "@mui/material/colors";

/**
 * main types:
 * primary, secondard, error, warning, info, success *plus divider
 * each having 3 types
 * main, dark, light *plus contrastText
 */

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {},

    secondary: {
      main: "#424242",
      dark: purple[500],
      light: purple[800],
      contrastText: "#ffcc00",
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },
};
