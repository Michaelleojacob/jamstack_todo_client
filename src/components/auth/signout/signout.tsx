import { useContext } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { fetchSignout } from "../../../fetchRequests/auth";
import { Button } from "@mui/material";
import { useSnackBar } from "../../snackbar/snackbar";

const Signout = () => {
  const sb = useSnackBar();
  const { signout } = useContext(AuthContext);

  const handleSignout = async () => {
    signout();
    const check = await fetchSignout();
    if (!check) console.error(check);
    sb.showSnackBar("logged out", "success");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSignout}>
        log out
      </Button>
    </div>
  );
};

export default Signout;
