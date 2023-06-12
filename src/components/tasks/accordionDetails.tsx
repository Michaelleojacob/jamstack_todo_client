import { Todo } from "../../types/types";
import { Box, AccordionDetails } from "@mui/material";
import { DetailsTaskPrio } from "./prio";
import TaskDate from "./date";
import CreatedAt from "./createdAt";

const TaskCardAccordionDetails = ({ task }: { task: Todo }) => {
  console.log(task);
  return (
    <AccordionDetails>
      <Box>{task.desc}</Box>
      <DetailsTaskPrio prio={task.prio} />
      {task.due ? <TaskDate taskdue={task.due} /> : null}
      <CreatedAt date={task.createdAt} />
    </AccordionDetails>
  );
};

export default TaskCardAccordionDetails;
