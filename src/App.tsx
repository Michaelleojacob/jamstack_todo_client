import { Outlet } from "react-router-dom";
import ThemeProvider from "./components/themeContext/themeContext";
import ChangeStyle from "./components/test_components/change_style";
import TestComponent from "./components/test_components/testComponent";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <ChangeStyle />
        <TestComponent />
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default App;
