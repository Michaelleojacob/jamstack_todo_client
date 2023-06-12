import { AccordionSummary, Box } from "@mui/material";
import { Todo } from "../../types/types";
import TaskPrio from "./prio";
import EditTaskModal from "./editTask";
import DeleteTask from "./deleteTask";

const TaskCardAccordionSummary = ({ task }: { task: Todo }) => {
  return (
    <AccordionSummary sx={{ maxHeight: "50px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "0.3fr 1.7fr 1fr",
          maxHeight: "50px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TaskPrio prio={task.prio} />
        </Box>
        <Box
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {task.title}
        </Box>
        <Box onClick={(e) => e.stopPropagation()} sx={{ display: "flex" }}>
          <EditTaskModal editTask={task} />
          <DeleteTask taskid={task.id} />
        </Box>
      </Box>
    </AccordionSummary>
  );
};

export default TaskCardAccordionSummary;
