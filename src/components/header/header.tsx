import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const Header = () => {
  const { user, isLoggedIn, mockLogout } = useContext(AuthContext);
  return (
    <div>
      {user && isLoggedIn ? (
        <div>
          Header
          <div>{user.id}</div>
          <button onClick={mockLogout}>logout</button>
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