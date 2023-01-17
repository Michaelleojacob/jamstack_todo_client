import { Box } from "@mui/material";
import useWindowDimensions from "../customHook/useWindowDimensions";
import DesktopLayout from "./desktopLayout";
import MobileLayout from "./mobileLayout";

const LoggedInLayout = () => {
  const { width } = useWindowDimensions();
  return <Box>{width > 760 ? <DesktopLayout /> : <MobileLayout />}</Box>;
};

export default LoggedInLayout;
