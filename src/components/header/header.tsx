import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const Header = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {user && isLoggedIn ? (
        <div>
          Header
          <div>{user.id}</div>
          <div>x_logout</div>
        </div>
      ) : (
        <div>
          Header
          <div>x_signup</div>
          <div>x_signin</div>
        </div>
      )}
    </div>
  );
};

export default Header;
