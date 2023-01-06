import { AuthProvider } from "./components/context/authContext/authContext";
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
