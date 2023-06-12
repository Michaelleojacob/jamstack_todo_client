import { Button, Box } from "@mui/material";
import { namepw } from "../../types/types";
import { useAppContext } from "../context/appContext";

const publicUsers = [
  {
    display: "community account 1",
    username: "communityAccount1",
    password: "communityAccount1",
  },
  {
    display: "community account 2",
    username: "communityAccount2",
    password: "communityAccount2",
  },
];

const FakeUserInfo = () => {
  const { signin } = useAppContext();
  const handleClick = async (user: namepw) => await signin(user);
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
          value={index}
          onClick={() => handleClick(user)}
        >
          {user.display}
        </Button>
      ))}
    </Box>
  );
};

export default FakeUserInfo;
