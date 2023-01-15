import Header from "./header/header";
import Footer from "./footer/footer";
import MainContent from "./mainContent/mainContent";
import AuthContent from "../auth/authContent/authContent";
import { SnackBarProvider } from "../context/snackbar/snackbar";
import { useAppContext } from "../context/appContext/appContext";
import { ProjectProvider } from "../context/projectContext/projectContext";
import useWindowDimensions from "../customHook/useWindowDimensions";
import { useEffect } from "react";

const Layout = () => {
  const { isLoggedIn } = useAppContext();
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <div>
      <SnackBarProvider>
        <div>Layout</div>
        <ProjectProvider>
          <Header />
          {isLoggedIn ? <MainContent /> : <AuthContent />}
        </ProjectProvider>
      </SnackBarProvider>
      <Footer />
    </div>
  );
};

export default Layout;
