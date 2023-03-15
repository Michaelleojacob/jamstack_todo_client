import { Box } from "@mui/material";
import { useAppContext } from "../context/appContext";
import HeaderBar from "./header_bar";

const LoggedOutHeader = () => {
  const { displaySignIn, switchToSignin, switchToSignup } = useAppContext();
  return (
    <Box sx={{ display: "grid" }} className="loggedoutheader">
      <HeaderBar />
    </Box>
  );
};

export default LoggedOutHeader;

// {displaySignIn ? (
//   <Button onClick={switchToSignup} sx={{ minWidth: "100px" }}>
//     sign up
//   </Button>
// ) : (
//   <Button onClick={switchToSignin} sx={{ minWidth: "100px" }}>
//     sign in
//   </Button>
// )}
