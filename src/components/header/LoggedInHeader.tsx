import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LogoutDialog from "../auth/logoutButton";
import BurgerMenu from "./burgerModal";

const LoggedInHeader = ({ active }: { active: boolean }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <BurgerMenu active={active} />
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
