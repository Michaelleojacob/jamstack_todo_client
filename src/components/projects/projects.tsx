import { Box } from "@mui/material";
import ProjectList from "./projectList";

const Projects = () => {
  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      <ProjectList />
    </Box>
  );
};

export default Projects;
