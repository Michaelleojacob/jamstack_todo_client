import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";

const AllTasks = () => {
  const { tasks } = useTaskContext();
  return (
    <Box>
      {tasks.map((task) => (
        <Box key={`${task.createdAt}_${task.id}_all_tasks`}>{task.title}</Box>
      ))}
    </Box>
  );
};

export default AllTasks;
