import { useAppContext } from "../../context/appContext/appContext";
import BurgerMenu from "./burgerModal";
import LogoutDialog from "./logout";
import useWindowDimensions from "../../customHook/useWindowDimensions";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();
  const { width } = useWindowDimensions();

  return (
    <div>
      {user && isLoggedIn ? (
        // user is logged in
        <div>
          {/* <CreateProjectDialog /> */}
          {width < 770 ? <BurgerMenu /> : null}
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
