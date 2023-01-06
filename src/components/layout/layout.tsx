import Header from "./header/header";
import Footer from "./footer/footer";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/authContext";
import MainContent from "./mainContent/mainContent";
import AuthContent from "../auth/authContent/authContent";
import TestData from "../test_components/testData";

const Layout = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <div>Layout</div>
      <Header />
      <TestData />
      {isLoggedIn ? <MainContent /> : <AuthContent />}
      <Footer />
    </div>
  );
};

export default Layout;
