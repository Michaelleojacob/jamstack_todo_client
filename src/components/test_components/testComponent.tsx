import { Switch } from "antd";
import { ThemeContext } from "../themeContext/themeContext";
import { useContext } from "react";

const TestComponent = () => {
  const { isDarkMode, toggleIsDarkMode } = useContext(ThemeContext);
  return (
    <div>
      {isDarkMode ? "dark" : "light"}
      <Switch checked={isDarkMode} onChange={toggleIsDarkMode}></Switch>
    </div>
  );
};

export default TestComponent;
