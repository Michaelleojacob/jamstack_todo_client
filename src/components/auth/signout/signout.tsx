import { useContext } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { fetchSignout } from "../../../fetchRequests/auth";
import { Button } from "@mui/material";

const Signout = () => {
  const { signout } = useContext(AuthContext);

  const handleSignout = async () => {
    signout();
    const check = await fetchSignout();
    if (!check) console.error(check);
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
