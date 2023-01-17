import { AuthProvider } from "./components/context/appContext";
import Layout from "./components/layout/layout";
import { MyThemeProvider } from "./components/context/themeContext";

const App = () => {
  return (
    <div>
      <MyThemeProvider>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </MyThemeProvider>
    </div>
  );
};

export default App;
