import { useAppContext } from "../../context/appContext/appContext";
import BurgerMenu from "./burgerModal";
import LogoutDialog from "./logout";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();

  return (
    <div>
      {user && isLoggedIn ? (
        // user is logged in
        <div>
          <BurgerMenu />
          <LogoutDialog />
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
