import { Box, Button } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import ProjectList from "./projectList";

const Projects = () => {
  const { projects, activeProject, noActiveProject } = useProjectContext();

  return <Box>{projects.length ? <ProjectList /> : null}</Box>;
};

export default Projects;
