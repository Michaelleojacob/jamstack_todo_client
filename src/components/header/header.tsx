import useWindowDimensions from "../customHook/useWindowDimensions";
import LoggedInHeader from "./LoggedInHeader";

const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width < 760 ? (
        <LoggedInHeader active={true} />
      ) : (
        <LoggedInHeader active={false} />
      )}
    </div>
  );
};

export default Header;
