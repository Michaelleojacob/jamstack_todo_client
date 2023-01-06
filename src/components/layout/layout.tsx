import Header from "./header/header";
import Footer from "./footer/footer";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/authContext";
import MainContent from "./mainContent/mainContent";
import AuthContent from "../auth/authContent/authContent";
import TestData from "../test_components/testData";
import { SnackBarProvider } from "../snackbar/v2";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <SnackBarProvider>
        <div>Layout</div>
        <Header />
        <TestData />
        {isLoggedIn ? <MainContent /> : <AuthContent />}
        <Footer />
      </SnackBarProvider>
    </div>
  );
};

export default Layout;
