import { List, Divider } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import CreateTaskModal from "./createTask";
import FilteredTasks from "./filteredTasks";
import AllTasks from "./allTasks";

const Tasks2 = () => {
  const { activeProject } = useProjectContext();

  return (
    <List dense={true}>
      <CreateTaskModal />
      <Divider />
      {activeProject ? <FilteredTasks /> : <AllTasks />}
    </List>
  );
};

export default Tasks2;
