import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

const TestData = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div>
          <div>{user.id}</div>
          <div>{user.username}</div>
        </div>
      ) : null}
    </div>
  );
};

export default TestData;
