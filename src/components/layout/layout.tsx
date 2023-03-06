import { Box } from "@mui/material";
import { SnackBarProvider } from "../context/snackbarContext";
import { ProjectProvider } from "../context/projectContext";
import { useAppContext } from "../context/appContext";
import LoggedInLayout from "./loggedInLayout";
import LoggedoutLayout from "./loggedOutLayout";

const Layout = () => {
  const { user } = useAppContext();
  return (
    // this box is just for consistency with the background
    <Box sx={{ bgcolor: "background.default" }}>
      <Box
        className="main-layout"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <SnackBarProvider>
          <ProjectProvider>
            {user ? <LoggedInLayout /> : <LoggedoutLayout />}
          </ProjectProvider>
        </SnackBarProvider>
      </Box>
    </Box>
  );
};

export default Layout;
