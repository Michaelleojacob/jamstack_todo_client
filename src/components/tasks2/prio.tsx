import { ListItemIcon, useTheme } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const TaskPrio = ({ prio }: { prio: number | undefined }) => {
  const theme = useTheme();
  let iconColor;

  switch (prio) {
    case 0:
      iconColor = theme.palette.primary.main;
      break;
    case 1:
      iconColor = theme.palette.success.main;
      break;
    case 2:
      iconColor = theme.palette.warning.main;
      break;
    case 3:
      iconColor = theme.palette.error.main;
      break;
    default:
      return null; // Render nothing if prio is undefined or not within the expected values
  }
  return (
    <ListItemIcon>
      <ListItemIcon>
        <CircleIcon sx={{ color: iconColor, opacity: "0.5" }} />
      </ListItemIcon>
    </ListItemIcon>
  );
};

export default TaskPrio;
