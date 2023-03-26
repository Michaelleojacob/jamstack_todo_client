import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import TaskCard2 from "./taskCard";

const AllTasks = () => {
  const { tasks } = useTaskContext();
  return (
    <Box>
      {tasks.map((task) => (
        <Box key={`${task.createdAt}_${task.id}_all_tasks`}>
          <TaskCard2 task={task} />
        </Box>
      ))}
    </Box>
  );
};

export default AllTasks;
