import { useContext } from "react";
import { AuthContext } from "../../context/authContext/authContext";

const Header = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {user && isLoggedIn ? (
        <div>
          Header
          <div>{user.id}</div>
        </div>
      ) : (
        <div>Header</div>
      )}
    </div>
  );
};

export default Header;
