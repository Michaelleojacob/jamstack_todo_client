import { Box, Divider } from "@mui/material";
import LoggedInHeader from "../header/LoggedInHeader";
import Projects from "../projects/projects";
import Tasks from "../tasks/tasks";
import { TaskProvider } from "../context/taskContext";

const DesktopLayout = () => {
  return (
    <Box
      className="desktop_layout"
      sx={{ display: "flex", flexDirection: "column", flex: "1 1 auto" }}
    >
      <LoggedInHeader active={false} />
      <Box
        className="desktop_projects_and_tasks"
        sx={{
          display: "grid",
          gridTemplateColumns: "4fr 10fr",
          height: "100%",
        }}
      >
        <Box className="desktop_project_wrapper">
          <Projects />
        </Box>
        <Box
          className="desktop_task_wrapper"
          sx={{ bgcolor: "background.paper" }}
        >
          <TaskProvider>
            <Tasks />
          </TaskProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopLayout;
