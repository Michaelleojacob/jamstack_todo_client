import { createContext, useState, ReactNode } from "react";
import { ThemeContextType } from "../../types/types";

export const ThemeContext = createContext<ThemeContextType>(null!);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" ? true : false
  );
  const toggleIsDarkMode = () => {
    const reverse = !isDarkMode;
    setIsDarkMode(reverse);
    localStorage.setItem("isDarkMode", JSON.stringify(reverse));
  };
  const value = { isDarkMode, toggleIsDarkMode };
  return (
    <ThemeContext.Provider value={value}>
      <div>ThemeContext</div>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
