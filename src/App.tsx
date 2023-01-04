import { useState, useEffect } from "react";
import TestComponent from "./components/test_components/testComponent";
import ChangeStyle from "./components/test_components/change_style";

const App = () => {
  const checkStorageTheme = localStorage.getItem("isLightMode");
  const savedTheme = checkStorageTheme === "true" ? true : false;
  const [theme, setTheme] = useState(savedTheme);
  const toggleTheme = () => {
    localStorage.setItem("isLightMode", JSON.stringify(!theme));
    setTheme(!theme);
  };

  return (
    <div className={`${theme ? "light" : "dark"} app`}>
      <TestComponent theme={theme} toggleTheme={toggleTheme} />
      <ChangeStyle theme={theme} />
    </div>
  );
};

export default App;
