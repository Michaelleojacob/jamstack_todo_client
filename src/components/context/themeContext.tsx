import { createContext, useState, ReactNode, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContextActions } from "../../types/types";
import { lightTheme } from "../../utils/themes/light";
import { darkTheme } from "../../utils/themes/dark";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = createTheme(mode === "dark" ? darkTheme : lightTheme);

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextActions => {
  const context = useContext(ColorModeContext);
  if (!context) throw new Error("useAppContext must be within the provider");
  return context;
};
