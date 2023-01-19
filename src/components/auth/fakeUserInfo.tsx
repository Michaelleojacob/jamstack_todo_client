import { Button, Box } from "@mui/material";
import { User } from "../../types/types";
import { useAppContext } from "../context/appContext";

const publicUsers = [
  { username: "d", password: "d" },
  { username: "d", password: "d" },
  { username: "d", password: "d" },
  { username: "d", password: "d" },
];

const FakeUserInfo = () => {
  const { signin } = useAppContext();
  const handleClick = (user: User) => {};
  return (
    <Box
      className="public_user_container"
      sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}
    >
      <div>public pre-made accounts</div>
      <div>please use responibly</div>
      {publicUsers.map((user, index) => (
        <Button
          variant="outlined"
          key={index}
          sx={{ textTransform: "none" }}
          // onClick={() => handleClick(user)}
        >
          account: {user.username}
        </Button>
      ))}
    </Box>
  );
};

export default FakeUserInfo;
