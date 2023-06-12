import LoggedInHeader from "../header/LoggedInHeader";
import { Box } from "@mui/material";
import Tasks from "../tasks/tasks";
import { TaskProvider } from "../context/taskContext";

const MobileLayout = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LoggedInHeader active={true} />
      <TaskProvider>
        <Tasks />
      </TaskProvider>
    </Box>
  );
};

export default MobileLayout;
