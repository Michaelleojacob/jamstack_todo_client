import Header from "./header/header";
import Footer from "./footer/footer";
import MainContent from "./mainContent/mainContent";
import AuthContent from "../auth/authContent/authContent";
import TestData from "../test_components/testData";
import { SnackBarProvider } from "../context/snackbar/snackbar";
import { useAppContext } from "../context/appContext/appContext";

const Layout = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div>
      <SnackBarProvider>
        <div>Layout</div>
        <Header />
        <TestData />
        {isLoggedIn ? <MainContent /> : <AuthContent />}
      </SnackBarProvider>
      <Footer />
    </div>
  );
};

export default Layout;
