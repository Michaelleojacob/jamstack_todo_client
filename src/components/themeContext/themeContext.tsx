import { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeContextType } from "../../types/types";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext<ThemeContextType>(null!);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode);

  const value = { isDarkMode, toggleIsDarkMode };
  return (
    <ThemeContext.Provider value={value}>
      <div>hello from ThemeContext</div>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// const ThemeProvider = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode);

//   const value = { isDarkMode, toggleIsDarkMode };
//   return (
//     <ThemeContext.Provider value={value}>
//       <div>hi</div>
//       <Outlet />
//     </ThemeContext.Provider>
//   );
// };
