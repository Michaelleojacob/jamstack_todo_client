import { Box } from "@mui/material";
import LoggedInHeader from "../header/LoggedInHeader";
import Projects from "../projects/projects";
import { TaskProvider } from "../context/taskContext";
import Tasks2 from "../tasks2/tasks";

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
          gridTemplateColumns: "35% 1fr",
          height: "100%",
        }}
      >
        <Box className="desktop_project_wrapper" sx={{ overflow: "hidden" }}>
          <Projects />
        </Box>
        <Box
          className="desktop_task_wrapper"
          sx={{ bgcolor: "background.paper" }}
        >
          <TaskProvider>
            <Tasks2 />
          </TaskProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopLayout;
