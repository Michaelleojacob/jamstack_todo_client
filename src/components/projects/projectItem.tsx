import { Project } from "../../types/types";
import ProjectListButtons from "./projectButtons";
import { useProjectContext } from "../context/projectContext";
import {
  Box,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditProjectModal from "./editProj";
import DeleteProjectButton from "./deleteProjButton";

const ProjectItem = ({ proj }: { proj: Project }) => {
  const { changeActiveProject, activeProject } = useProjectContext();
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => changeActiveProject(proj.id)}>
        <ListItemIcon>
          {activeProject === proj.id ? <ArrowForwardIosIcon /> : <FolderIcon />}
        </ListItemIcon>
        <ListItemText primary={proj.title} />
      </ListItemButton>
      <Box className="project_item_buttons">
        <EditProjectModal proj={proj} />
        <DeleteProjectButton id={proj.id} />
      </Box>
    </ListItem>
  );
};

export default ProjectItem;
