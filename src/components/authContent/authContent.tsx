import { useContext, useState } from "react";
import { AuthContext } from "../authContext/authContext";
import Signup from "../signup/signup";
import Signin from "../signin/signin";

const AuthContent = () => {
  const { hasUserSignedup } = useContext(AuthContext);
  const [displaySignup, setDisplaySignup] = useState(hasUserSignedup);
  const toggleDisplaySignup = () => setDisplaySignup(!displaySignup);
  return (
    <div>
      <div>AuthContent</div>
      {displaySignup ? (
        <Signup toggleDisplaySignup={toggleDisplaySignup} />
      ) : (
        <Signin toggleDisplaySignup={toggleDisplaySignup} />
      )}
    </div>
  );
};

export default AuthContent;
