import { AuthProvider } from "./components/authContext/authContext";
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
