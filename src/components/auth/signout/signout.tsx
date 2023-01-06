import { fetchSignout } from "../../../fetchRequests/auth";
import { Button } from "@mui/material";
import { useSnackBar } from "../../context/snackbar/snackbar";
import { useAppContext } from "../../context/appContext/appContext";

const Signout = () => {
  const { showSnackBar } = useSnackBar();
  const { signout } = useAppContext();

  const handleSignout = async () => {
    signout();
    const check = await fetchSignout();
    if (!check) console.error(check);
    showSnackBar("logged out", "success");
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
