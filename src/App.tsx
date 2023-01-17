import { AuthProvider } from "./components/context/appContext";
import Layout from "./components/layout/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
