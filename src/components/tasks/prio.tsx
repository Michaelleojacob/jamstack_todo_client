import { ListItemIcon, useTheme } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const TaskPrio = ({ prio }: { prio: number | undefined }) => {
  const theme = useTheme();
  let iconColor;
  let IconComponent = CircleIcon;

  switch (prio) {
    case 0:
      iconColor = theme.palette.primary.main;
      IconComponent = CircleOutlinedIcon;
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
        <IconComponent sx={{ color: iconColor, opacity: "0.5" }} />
      </ListItemIcon>
    </ListItemIcon>
  );
};

export const DetailsTaskPrio = ({ prio }: { prio: number | undefined }) => {
  const theme = useTheme();
  let coloredWord = "";
  let textColor = "";
  let secondWord = "priority";
  switch (prio) {
    case 1:
      coloredWord = "low";
      textColor = theme.palette.success.main;
      break;
    case 2:
      coloredWord = "medium";
      textColor = theme.palette.warning.main;
      break;
    case 3:
      coloredWord = "high";
      textColor = theme.palette.error.main;
      break;
    default:
      coloredWord = "";
      secondWord = "";
      textColor = "white";
  }
  return (
    <span>
      <span style={{ color: textColor }}>{coloredWord} </span>
      <span>{secondWord}</span>
    </span>
  );
};

export default TaskPrio;
