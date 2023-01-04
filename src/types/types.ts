import { Dispatch, SetStateAction } from "react";

export interface TestComponentProps {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleIsDarkMode: Dispatch<SetStateAction<boolean>>;
}
