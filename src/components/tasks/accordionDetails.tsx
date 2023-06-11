import { Todo } from "../../types/types";
import { Box, AccordionDetails } from "@mui/material";
import { DetailsTaskPrio } from "./prio";
import TaskDate from "./date";

const TaskCardAccordionDetails = ({ task }: { task: Todo }) => {
  return (
    <AccordionDetails>
      <Box>{task.desc}</Box>
      <DetailsTaskPrio prio={task.prio} />
      {task.due ? <TaskDate taskdue={task.due} /> : null}
    </AccordionDetails>
  );
};

export default TaskCardAccordionDetails;
