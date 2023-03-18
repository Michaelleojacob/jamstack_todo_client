import { ButtonEvent, Project } from "../../types/types";
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
        <ListItemText primary={proj.title} sx={{ overflow: "hidden" }} />
        <Box
          onClick={(e) => e.stopPropagation()}
          className="project_item_buttons"
          sx={{ display: "flex", padding: "5px", gap: "5px" }}
        >
          <EditProjectModal proj={proj} />
          <DeleteProjectButton id={proj.id} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default ProjectItem;
