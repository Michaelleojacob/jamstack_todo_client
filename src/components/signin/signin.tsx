import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const Signin = () => {
  const { mockSignin } = useContext(AuthContext);
  return (
    <div>
      <div>Signin</div>
      <button onClick={mockSignin}>signin</button>
    </div>
  );
};

export default Signin;
