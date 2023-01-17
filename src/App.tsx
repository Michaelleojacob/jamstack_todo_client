import { AuthProvider } from "./components/context/appContext";
import Layout from "./components/layout/layout";
import { MyThemeProvider } from "./components/context/themeContext";

const App = () => {
  return (
    <MyThemeProvider>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </MyThemeProvider>
  );
};

export default App;
