import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import { useProjectContext } from "../context/projectContext";
import TaskCard2 from "./taskCard";

const FilteredTasks = () => {
  const { tasks } = useTaskContext();
  const { activeProject } = useProjectContext();
  const filtered = tasks.filter((task) => task.projectId === activeProject);
  const eachFilteredTask = filtered.map((task) => (
    <Box key={`${task.createdAt}_${task.id}_filtered_tasks`}>
      <TaskCard2 task={task} />
    </Box>
  ));
  return <Box>{eachFilteredTask}</Box>;
};

export default FilteredTasks;
