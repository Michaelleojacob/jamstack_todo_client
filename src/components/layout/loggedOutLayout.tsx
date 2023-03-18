import { Box } from "@mui/material";

import LoggedOutHeader from "../header/LoggedOutHeader";
import { useAppContext } from "../context/appContext";
import Signin from "../auth/signin";
import Signup from "../auth/signup";

const LoggedoutLayout = () => {
  const { displaySignIn } = useAppContext();
  return (
    <Box className="loggedout_layout" sx={{ minWidth: "100%" }}>
      <LoggedOutHeader />
      {displaySignIn ? <Signin /> : <Signup />}
    </Box>
  );
};

export default LoggedoutLayout;
