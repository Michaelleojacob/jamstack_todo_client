import { Todo } from "../../types/types";
import { ListItemButton, ListItemIcon, ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import TaskDate from "./date";

const TaskCard2 = ({ task }: { task: Todo }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton sx={{ minHeight: "50px" }}>
        <ListItemIcon>
          <CircleIcon />
        </ListItemIcon>
        {task.prio ? <div>{task.prio}</div> : null}
        <div>{task.title}</div>
        <div>{task.prio}</div>
        <div>{task.due ? <TaskDate taskdue={task.due} /> : null}</div>
      </ListItemButton>
    </ListItem>
  );
};

export default TaskCard2;

// const TaskCard2 = ({ task }: { task: Todo }) => {
//   return (
//     <Box sx={{ display: "grid" }}>
//       {task.prio ? <div>{task.prio}</div> : null}
//       <div>{task.title}</div>
//       <div>{task.prio}</div>
//       <div>{task.due ? <TaskDate taskdue={task.due} /> : null}</div>
//     </Box>
//   );
// };
