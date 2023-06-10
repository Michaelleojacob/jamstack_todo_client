import { useState, useEffect } from "react";
import { List, Divider } from "@mui/material";
import { useProjectContext } from "../context/projectContext";
import CreateTaskModal from "./createTask";
import FilteredTasks from "./filteredTasks";
import AllTasks from "./allTasks";

const Tasks2 = () => {
  const { activeProject } = useProjectContext();
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    console.log(expanded);
  }, [expanded]);

  return (
    <List dense={true}>
      <CreateTaskModal />
      <Divider />
      {activeProject ? (
        <FilteredTasks expanded={expanded} handleChange={handleChange} />
      ) : (
        <AllTasks expanded={expanded} handleChange={handleChange} />
      )}
    </List>
  );
};

export default Tasks2;
