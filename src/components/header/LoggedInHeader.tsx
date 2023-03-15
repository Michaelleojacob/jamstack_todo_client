import { Box } from "@mui/material";
import HeaderBar from "./header_bar";

const LoggedInHeader = ({ active }: { active: boolean }) => {
  return (
    <Box className="loggedin_in_header">
      <HeaderBar />
    </Box>
  );
};

export default LoggedInHeader;
