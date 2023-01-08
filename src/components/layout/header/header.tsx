import { useAppContext } from "../../context/appContext/appContext";
import BurgerMenu from "./burgerModal";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();

  return (
    <div>
      {user && isLoggedIn ? (
        // user is logged in
        <div>
          <BurgerMenu />
          id: {user.id} username: {user.username}
        </div>
      ) : (
        // user is not logged in
        <div>Header</div>
      )}
    </div>
  );
};

export default Header;
