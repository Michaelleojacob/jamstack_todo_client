import { useProjectContext } from "../context/projectContext";
import { List } from "@mui/material";
import ProjectItem from "./projectItem";
import NoActiveProjectButton from "./noActiveProjectButton";
import CreateProjectDialog from "./create_project";

const ProjectList = () => {
  const { projects } = useProjectContext();
  return (
    <List>
      <CreateProjectDialog />
      <NoActiveProjectButton />
      {projects.map((proj) => (
        <ProjectItem proj={proj} key={`${proj.id}_${proj.createdAt}`} />
      ))}
    </List>
  );
};

export default ProjectList;
