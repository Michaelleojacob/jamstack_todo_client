import { fetchSignout } from "../../fetchRequests/fetchAuth";
import { Button } from "@mui/material";
import { useSnackBar } from "../context/snackbarContext";
import { useAppContext } from "../context/appContext";

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
      <Button variant="outlined" onClick={handleSignout}>
        log out
      </Button>
    </div>
  );
};

export default Signout;
