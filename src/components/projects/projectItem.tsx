import { Project } from "../../types/types";
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
    <ListItem disablePadding sx={{ minHeight: "50px" }}>
      <ListItemButton
        onClick={() => changeActiveProject(proj.id)}
        selected={activeProject === proj.id}
        sx={{ minHeight: "50px" }}
      >
        <ListItemIcon>
          {activeProject === proj.id ? <ArrowForwardIosIcon /> : <FolderIcon />}
        </ListItemIcon>
        <ListItemText primary={proj.title} sx={{ overflow: "hidden" }} />
        <Box onClick={(e) => e.stopPropagation()} sx={{ display: "flex" }}>
          <EditProjectModal proj={proj} />
          <DeleteProjectButton id={proj.id} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default ProjectItem;
