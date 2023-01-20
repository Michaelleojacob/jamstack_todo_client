import { ThemeOptions } from "@mui/material";

/**
 * main types:
 * primary, secondard, error, warning, info, success *plus divider
 * each having 3 types
 * main, dark, light *plus contrastText
 */

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },
};
