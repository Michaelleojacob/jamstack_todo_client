import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextType } from "../../types/types";

export const ThemeContext = createContext<ThemeContextType>(null!);

const ThemeProvider = () => {
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
      <div>ThemeProvider</div>
      <Outlet />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// import { createContext, useState, ReactNode } from "react";
// import { ThemeContextType } from "../../types/types";

// export const ThemeContext = createContext<ThemeContextType>(null!);

// const ThemeProvider = ({ children }: { children: ReactNode }) => {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("isDarkMode") === "true" ? true : false
//   );
//   const toggleIsDarkMode = () => {
//     const reverse = !isDarkMode;
//     setIsDarkMode(reverse);
//     localStorage.setItem("isDarkMode", JSON.stringify(reverse));
//   };

//   const value = { isDarkMode, toggleIsDarkMode };
//   return (
//     <ThemeContext.Provider value={value}>
//       <div>hello from ThemeContext</div>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;
