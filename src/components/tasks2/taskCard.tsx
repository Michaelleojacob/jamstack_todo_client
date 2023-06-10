import { Todo } from "../../types/types";
import { Box, ListItemButton } from "@mui/material";
import TaskDate from "./date";

const TaskCard2 = ({ task }: { task: Todo }) => {
  return (
    <ListItemButton>
      {task.prio ? <div>{task.prio}</div> : null}
      <div>{task.title}</div>
      <div>{task.prio}</div>
      <div>{task.due ? <TaskDate taskdue={task.due} /> : null}</div>
    </ListItemButton>
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
