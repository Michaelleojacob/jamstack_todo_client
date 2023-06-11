import { useState } from "react";
import { List, Divider } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import CreateTaskModal from "./createTask";
import FilteredTasks from "./filteredTasks";
import AllTasks from "./allTasks";

const Tasks = () => {
  const { activeProject } = useProjectContext();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleClose = () => setExpanded(false);

  return (
    <List dense={true}>
      <CreateTaskModal />
      <Divider />
      {activeProject ? (
        <FilteredTasks
          expanded={expanded}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      ) : (
        <AllTasks
          expanded={expanded}
          handleChange={handleChange}
          handleClose={handleClose}
        />
      )}
    </List>
  );
};

export default Tasks;
