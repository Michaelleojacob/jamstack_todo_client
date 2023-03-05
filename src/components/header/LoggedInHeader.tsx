import { Box } from "@mui/material";
import HeaderBar from "./header_bar";

const LoggedInHeader = ({ active }: { active: boolean }) => {
  return (
    <Box sx={{ display: "grid" }}>
      <HeaderBar />
    </Box>
  );
};

export default LoggedInHeader;
