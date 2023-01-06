import { useAppContext } from "../../context/authContext/authContext";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();
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
