import { useAppContext } from "../../context/appContext/appContext";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const Header = () => {
  const { user, isLoggedIn } = useAppContext();
  return (
    <div>
      {user && isLoggedIn ? (
        <div>
          Header
          <Button onClick={(e) => console.log(e.target)}>{<MenuIcon />}</Button>
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
