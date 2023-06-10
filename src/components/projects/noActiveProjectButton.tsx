import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InboxIcon from "@mui/icons-material/Inbox";

const NoActiveProjectButton = () => {
  const { noActiveProject, activeProject } = useProjectContext();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={noActiveProject}
        selected={activeProject === ""}
        sx={{ minHeight: "50px" }}
      >
        <ListItemIcon>
          {!activeProject ? <ArrowForwardIosIcon /> : <InboxIcon />}
        </ListItemIcon>
        <ListItemText primary={"all tasks"} />
      </ListItemButton>
    </ListItem>
  );
};

export default NoActiveProjectButton;
