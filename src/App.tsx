import { useState, useEffect } from "react";
import TestComponent from "./components/test_components/testComponent";
import ChangeStyle from "./components/test_components/change_style";

const App = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => setTheme(!theme);
  return (
    <div className={`${theme ? "light" : "dark"} app`}>
      <TestComponent theme={theme} toggleTheme={toggleTheme} />
      <ChangeStyle theme={theme} />
    </div>
  );
};

export default App;
