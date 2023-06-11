import { AccordionSummary, Button, Box } from "@mui/material";
import { Todo } from "../../types/types";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import TaskPrio from "./prio";

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
        <Box>{task.title}</Box>
        <Box>
          <Button
            variant="text"
            onClick={(e) => e.stopPropagation()}
            sx={{
              color: "primary.light",
              ":hover": { bgcolor: "primary.light", color: "white" },
            }}
          >
            <EditIcon />
          </Button>
          <Button
            variant="text"
            onClick={(e) => e.stopPropagation()}
            sx={{
              color: "error.main",
              ":hover": { bgcolor: "error.main", color: "white" },
            }}
          >
            <ClearIcon />
          </Button>
        </Box>
      </Box>
    </AccordionSummary>
  );
};

export default TaskCardAccordionSummary;
