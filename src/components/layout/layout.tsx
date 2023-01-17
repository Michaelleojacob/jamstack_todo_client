import { Box } from "@mui/material";
import Footer from "../footer/footer";
import { SnackBarProvider } from "../context/snackbarContext";
import { ProjectProvider } from "../context/projectContext";
import { useAppContext } from "../context/appContext";
import LoggedInLayout from "./loggedInLayout";
import LoggedoutLayout from "./loggedOutLayout";

const Layout = () => {
  const { userIsLoggedIn } = useAppContext();
  return (
    <Box
      className="main-layout"
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <SnackBarProvider>
        <ProjectProvider>
          {userIsLoggedIn() ? <LoggedInLayout /> : <LoggedoutLayout />}
        </ProjectProvider>
      </SnackBarProvider>
      <Footer />
    </Box>
  );
};

export default Layout;
