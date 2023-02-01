import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import LogoutDialog from "../auth/logoutButton";
import BurgerMenu from "./burgerModal";

const LoggedInHeader = ({ active }: { active: boolean }) => {
  return (
    <Box sx={{ display: "grid" }}>
      <AppBar position="static">
        <Toolbar
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            justifyItems: "center",
          }}
        >
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
