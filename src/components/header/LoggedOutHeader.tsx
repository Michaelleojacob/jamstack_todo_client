import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import BurgerMenu from "./burgerModal";
import { useAppContext } from "../context/appContext";

const LoggedOutHeader = () => {
  const { displaySignIn, switchToSignin, switchToSignup } = useAppContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%", justifyContent: "space-evenly" }}>
          <BurgerMenu active={false} />
          <Typography variant="h6" component="div">
            Task App
          </Typography>
          {displaySignIn ? (
            <Button onClick={switchToSignup}>sign up</Button>
          ) : (
            <Button onClick={switchToSignin}>sign in</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default LoggedOutHeader;
