import { Box, List, Divider } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import CreateTask2 from "./createTask";
import FilteredTasks from "./filteredTasks";
import AllTasks from "./allTasks";

const Tasks2 = () => {
  const { activeProject } = useProjectContext();

  return (
    <List dense={false}>
      <CreateTask2 />
      <Divider />
      {activeProject ? <FilteredTasks /> : <AllTasks />}
    </List>
  );
};

export default Tasks2;
