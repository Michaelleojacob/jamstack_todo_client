import { Box } from "@mui/system";
import { useTaskContext } from "../context/taskContext";
import { useProjectContext } from "../context/projectContext";
import TaskCard2 from "./taskCard";
import { AllTasksProps } from "../../types/types";

const FilteredTasks = ({
  expanded,
  handleChange,
  handleClose,
}: AllTasksProps) => {
  const { tasks } = useTaskContext();
  const { activeProject } = useProjectContext();
  const filtered = tasks.filter((task) => task.projectId === activeProject);
  const eachFilteredTask = filtered.map((task) => (
    <Box key={`${task.createdAt}_${task.id}_filtered_tasks`}>
      <TaskCard2
        task={task}
        expanded={expanded}
        handleChange={handleChange}
        handleClose={handleClose}
      />
    </Box>
  ));
  return <Box>{eachFilteredTask}</Box>;
};

export default FilteredTasks;
