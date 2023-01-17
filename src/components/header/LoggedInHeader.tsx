import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LogoutDialog from "../auth/logoutButton";
import BurgerMenu from "./burgerModal";
import useWindowDimensions from "../customHook/useWindowDimensions";

const LoggedInHeader = () => {
  const { width } = useWindowDimensions();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {width > 760 ? (
            <BurgerMenu active={true} />
          ) : (
            <BurgerMenu active={false} />
          )}
          <Typography variant="h6" component="div">
            Task App
          </Typography>
          <LogoutDialog />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedInHeader;
