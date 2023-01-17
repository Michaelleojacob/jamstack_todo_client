import { useAppContext } from "../context/appContext";
import LoggedInLayout from "./loggedInLayout";
import LoggedoutLayout from "./loggedOutLayout";

const DesktopLayout = () => {
  const { userIsLoggedIn } = useAppContext();
  return (
    <div>{userIsLoggedIn() ? <LoggedInLayout /> : <LoggedoutLayout />}</div>
  );
};

export default DesktopLayout;
