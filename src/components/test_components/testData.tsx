import { useAppContext } from "../context/authContext/authContext";

const TestData = () => {
  const { user } = useAppContext();
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
