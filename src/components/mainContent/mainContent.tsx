import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";
import { Button } from "antd";

const MainContent = () => {
  const { signout } = useContext(AuthContext);
  return (
    <div>
      <div>MainContent</div>
      <div>projects</div>
      <div>tasks</div>
      <Button type="primary" onClick={signout}>
        sign out
      </Button>
    </div>
  );
};

export default MainContent;
