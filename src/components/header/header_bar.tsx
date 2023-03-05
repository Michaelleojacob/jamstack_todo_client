import { Box } from "@mui/material";

const HeaderBar = ({}) => {
  return (
    <Box sx={{ display: "flex", padding: "1rem", bgcolor: "primary.dark" }}>
      <div>burger | </div>
      <div>header bar | </div>
      <div>logout</div>
    </Box>
  );
};

export default HeaderBar;
