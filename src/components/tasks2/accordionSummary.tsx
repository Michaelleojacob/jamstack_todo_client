import { AccordionSummary, Button, Box } from "@mui/material";
import { Todo } from "../../types/types";
import ClearIcon from "@mui/icons-material/Clear";
import TaskPrio from "./prio";
import EditTaskModal from "./editTask";
import DeleteTask from "./deleteTask";

/**
 * condense or move the buttons!
 */

const TaskCardAccordionSummary = ({ task }: { task: Todo }) => {
  return (
    <AccordionSummary sx={{ maxHeight: "50px" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "0.2fr 1fr 1fr",
          maxHeight: "50px",
          alignItems: "center",
        }}
      >
        <Box>
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
