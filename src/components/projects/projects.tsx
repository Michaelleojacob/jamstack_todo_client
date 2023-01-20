import { Box } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import ProjectList from "./projectList";

const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <Box className="project_wrapper">
      {projects.length ? <ProjectList /> : null}
    </Box>
  );
};

export default Projects;
