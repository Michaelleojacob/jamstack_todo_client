import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import TaskCard from "./taskCard";
import { HandleAccordionExpand } from "../../types/types";

const AllTasks = ({
  expanded,
  handleChange,
  handleClose,
}: HandleAccordionExpand) => {
  const { tasks } = useTaskContext();
  return (
    <Box>
      {tasks.map((task) => (
        <Box key={`${task.createdAt}_${task.id}_all_tasks`}>
          <TaskCard
            task={task}
            expanded={expanded}
            handleChange={handleChange}
            handleClose={handleClose}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AllTasks;
