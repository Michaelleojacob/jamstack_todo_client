import { ListItemButton, ListItemIcon, ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const CreateTask2 = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ minHeight: "50px" }}>
        <ListItemIcon>
          <CircleIcon />
        </ListItemIcon>
        create task
      </ListItemButton>
    </ListItem>
  );
};

export default CreateTask2;
