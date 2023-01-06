import { useAppContext } from "../../context/appContext/appContext";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();
  return (
    <div>
      {user && isLoggedIn ? (
        <div>
          Header
          <div>
            id: {user.id} username: {user.username}
          </div>
        </div>
      ) : (
        <div>Header</div>
      )}
    </div>
  );
};

export default Header;
