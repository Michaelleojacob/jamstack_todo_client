import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const Signup = () => {
  const { switchToSignIn } = useContext(AuthContext);
  return (
    <div>
      <div>Signup</div>
      <button onClick={switchToSignIn}>sign in</button>
    </div>
  );
};

export default Signup;
