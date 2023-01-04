import { Outlet } from "react-router-dom";
import ThemeProvider from "./components/themeContext/themeContext";
import { AuthProvider } from "./components/authContext/authContext";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
