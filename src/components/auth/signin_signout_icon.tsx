import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";

const lockstyle = {
  mt: 2,
  height: "50px",
  width: "50px",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "#4a148c",
};

const Lock = () => {
  return (
    <Box className="lock_background" sx={lockstyle}>
      <LockOutlinedIcon fontSize="large" />
    </Box>
  );
};

export default Lock;
