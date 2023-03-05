import { ThemeOptions, createTheme } from "@mui/material";

/**
 * main types:
 * primary, secondard, error, warning, info, success *plus divider
 * each having 3 types
 * main, dark, light *plus contrastText
 */

// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: "#64748B",
//       contrastText: "#fff",
//     },
//   },
// });

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    neutral: {
      main: "#D81B60",
      light: "#262626",
    },
    primary: { main: "#3f51b5" },
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
