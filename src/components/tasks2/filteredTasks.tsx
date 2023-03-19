import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import { useProjectContext } from "../context/projectContext";

const FilteredTasks = () => {
  const { tasks } = useTaskContext();
  const { activeProject } = useProjectContext();
  const filtered = tasks.filter((task) => task.projectId === activeProject);
  const eachFilteredTask = filtered.map((task) => (
    <Box key={`${task.createdAt}_${task.id}_filtered_tasks`}>{task.title}</Box>
  ));
  return <Box>{eachFilteredTask}</Box>;
};

export default FilteredTasks;
