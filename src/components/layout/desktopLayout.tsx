import { Box } from "@mui/material";
import LoggedInHeader from "../header/LoggedInHeader";
import Projects from "../projects/projects";
import Tasks from "../tasks/tasks";
import { TaskProvider } from "../context/taskContext";

const DesktopLayout = () => {
  return (
    <Box>
      <LoggedInHeader active={false} />
      <Projects />
      <TaskProvider>
        <Tasks />
      </TaskProvider>
    </Box>
  );
};

export default DesktopLayout;
