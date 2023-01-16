import Header from "../header/header";
import Footer from "../footer/footer";
import { SnackBarProvider } from "../context/snackbarContext";
import { ProjectProvider } from "../context/projectContext";

const Layout = () => {
  return (
    <div>
      <SnackBarProvider>
        <ProjectProvider>
          <Header />
        </ProjectProvider>
      </SnackBarProvider>
      <Footer />
    </div>
  );
};

export default Layout;
