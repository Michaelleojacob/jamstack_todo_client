import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const Signup = () => {
  const { mockSignup } = useContext(AuthContext);
  return (
    <div>
      <div>Signup</div>
      <button onClick={mockSignup}>register</button>
    </div>
  );
};

export default Signup;
