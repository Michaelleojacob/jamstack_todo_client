import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LogoutDialog from "../auth/logoutButton";
import BurgerMenu from "./burgerModal";
import { useAppContext } from "../context/appContext";
import useWindowDimensions from "../customHook/useWindowDimensions";

const Header = () => {
  const { userIsLoggedIn } = useAppContext();
  const { width } = useWindowDimensions();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {userIsLoggedIn() && width < 760 ? (
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

export default Header;
