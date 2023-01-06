import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/authContext";
import Signup from "../signup/signup";
import Signin from "../signin/signin";

const AuthContent = () => {
  const { hasUserSignedup } = useContext(AuthContext);
  return (
    <div>
      <div>AuthContent</div>
      {hasUserSignedup ? <Signin /> : <Signup />}
    </div>
  );
};

export default AuthContent;
