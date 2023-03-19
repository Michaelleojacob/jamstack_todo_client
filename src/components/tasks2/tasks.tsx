import { Box } from "@mui/system";
import { useProjectContext } from "../context/projectContext";
import CreateTaskModal from "../tasks/createTask";
import FilteredTasks from "./filteredTasks";
import AllTasks from "./allTasks";

const Tasks2 = () => {
  const { activeProject } = useProjectContext();

  return (
    <Box>
      <CreateTaskModal />
      {activeProject ? <FilteredTasks /> : <AllTasks />}
    </Box>
  );
};

export default Tasks2;
