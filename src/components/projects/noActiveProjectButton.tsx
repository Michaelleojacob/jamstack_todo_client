import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InboxIcon from "@mui/icons-material/Inbox";

const NoActiveProjectButton = () => {
  const { noActiveProject, activeProject } = useProjectContext();
  return (
    <ListItemButton onClick={noActiveProject}>
      <ListItemIcon>
        {!activeProject ? <ArrowForwardIosIcon /> : <InboxIcon />}
      </ListItemIcon>
      <ListItemText primary={"all tasks"} />
    </ListItemButton>
  );
};

export default NoActiveProjectButton;
