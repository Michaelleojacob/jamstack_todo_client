import { Todo } from "../../types/types";
import { Box } from "@mui/system";
import TaskDate from "./date";

const TaskCard2 = ({ task }: { task: Todo }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <div>
        {task.title} {task.prio}
      </div>
      {task.due ? <TaskDate taskdue={task.due} /> : null}
    </Box>
  );
};

export default TaskCard2;
