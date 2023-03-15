import { Box } from "@mui/material";
import useWindowDimensions from "../customHook/useWindowDimensions";
import DesktopLayout from "./desktopLayout";
import MobileLayout from "./mobileLayout";

const LoggedInLayout = () => {
  const { width } = useWindowDimensions();
  return width > 760 ? <DesktopLayout /> : <MobileLayout />;
};

// const LoggedInLayout = () => {
//   const { width } = useWindowDimensions();
//   return (
//     <Box sx={{ display: "flex" }} className="logged_in_layout">
//       {width > 760 ? <DesktopLayout /> : <MobileLayout />}
//     </Box>
//   );
// };

export default LoggedInLayout;
