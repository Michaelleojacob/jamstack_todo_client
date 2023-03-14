import { Box } from "@mui/material";
import BurgerMenu from "./burgerModal";
import LogoutDialog from "../auth/logoutButton";

const HeaderBar = ({}) => {
  return (
    <Box
      sx={{
        display: "grid",
        bgcolor: "header.main",
        justifyItems: "center",
        alignItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "0.5rem",
        fontSize: "1.4rem",
      }}
    >
      <BurgerMenu active={true} />
      <div>Task App</div>
      <div>
        <LogoutDialog />
      </div>
    </Box>
  );
};

export default HeaderBar;
