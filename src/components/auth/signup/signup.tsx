import { useContext } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import { Button } from "antd";

const Signup = () => {
  const { switchToSignin } = useContext(AuthContext);
  return (
    <div>
      <div>Signup</div>
      <Button type="primary" onClick={switchToSignin}>
        sign in
      </Button>
    </div>
  );
};

export default Signup;
