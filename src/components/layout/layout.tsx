import { Box } from "@mui/material";
import { SnackBarProvider } from "../context/snackbarContext";
import { ProjectProvider } from "../context/projectContext";
import { useAppContext } from "../context/appContext";
import LoggedInLayout from "./loggedInLayout";
import LoggedoutLayout from "./loggedOutLayout";

const Layout = () => {
  const { user } = useAppContext();
  return (
    <Box
      className="main-layout"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <SnackBarProvider>
        <ProjectProvider>
          {user ? <LoggedInLayout /> : <LoggedoutLayout />}
        </ProjectProvider>
      </SnackBarProvider>
    </Box>
  );
};

export default Layout;
