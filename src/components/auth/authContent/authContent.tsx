import Signup from "../signup/signup";
import Signin from "../signin/signin";
import { useAppContext } from "../../context/authContext/authContext";

const AuthContent = () => {
  const app = useAppContext();
  return (
    <div>
      <div>AuthContent</div>
      {app.hasUserSignedup ? <Signin /> : <Signup />}
    </div>
  );
};

export default AuthContent;
