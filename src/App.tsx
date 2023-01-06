import { AuthProvider } from "./components/context/appContext/appContext";
import Layout from "./components/layout/layout";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </div>
  );
};

export default App;
