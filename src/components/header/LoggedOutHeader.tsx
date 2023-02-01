import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import BurgerMenu from "./burgerModal";
import { useAppContext } from "../context/appContext";

const LoggedOutHeader = () => {
  const { displaySignIn, switchToSignin, switchToSignup } = useAppContext();
  return (
    <Box sx={{ display: "grid" }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            justifyItems: "center",
          }}
          disableGutters
        >
          <BurgerMenu active={false} />
          <Typography variant="h6" component="div" sx={{ minWidth: "100px" }}>
            Task App
          </Typography>
          {displaySignIn ? (
            <Button onClick={switchToSignup} sx={{ minWidth: "100px" }}>
              sign up
            </Button>
          ) : (
            <Button onClick={switchToSignin} sx={{ minWidth: "100px" }}>
              sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedOutHeader;
