import { Button } from "antd";
import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { fetchSignout } from "../../fetchRequests/auth";

const Signout = () => {
  const { signout } = useContext(AuthContext);

  const handleSignout = async () => {
    signout();
    const check = await fetchSignout();
    if (!check) console.error(check);
  };

  return (
    <div>
      <Button type="primary" color="#ff7875" onClick={handleSignout}>
        logout
      </Button>
    </div>
  );
};

export default Signout;
