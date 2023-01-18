import { Box, Divider } from "@mui/material";
import LoggedInHeader from "../header/LoggedInHeader";
import Projects from "../projects/projects";
import Tasks from "../tasks/tasks";
import { TaskProvider } from "../context/taskContext";

const DesktopLayout = () => {
  return (
    <Box>
      <LoggedInHeader active={false} />
      <Box className="desktop_projects_and_tasks">
        <Box
          className="desktop_project_wrapper"
          sx={{ bgcolor: "secondary.main" }}
        >
          <Projects />
        </Box>
        <Divider />
        <Box className="desktop_task_wrapper">
          <TaskProvider>
            <Tasks />
          </TaskProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopLayout;
