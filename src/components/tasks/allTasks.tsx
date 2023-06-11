import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import TaskCard2 from "./taskCard";
import { AllTasksProps } from "../../types/types";

const AllTasks = ({ expanded, handleChange, handleClose }: AllTasksProps) => {
  const { tasks } = useTaskContext();
  return (
    <Box>
      {tasks.map((task) => (
        <Box key={`${task.createdAt}_${task.id}_all_tasks`}>
          <TaskCard2
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
