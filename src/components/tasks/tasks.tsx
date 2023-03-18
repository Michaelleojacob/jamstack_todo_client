import { Box } from "@mui/system";
import TaskCard from "./taskCard";
import CreateTaskModal from "./createTask";
import { useTaskContext } from "../context/taskContext";
import { useProjectContext } from "../context/projectContext";

const Tasks = () => {
  const { tasks } = useTaskContext();
  const { activeProject } = useProjectContext();

  console.log(tasks);

  return (
    <Box className="Task_container">
      <CreateTaskModal />

      {
        // tasks are not empty
        tasks.length
          ? // active project IS a number
            activeProject
            ? // filter by project id
              tasks
                .filter((task) => task.projectId === activeProject)
                .map((task) => (
                  <div key={`${task.createdAt}_${task.id}_all_tasks`}>
                    <TaskCard task={task} />
                  </div>
                ))
            : // all tasks
              tasks.map((task) => (
                <div key={`${task.createdAt}_${task.id}_all_tasks`}>
                  {/* <TaskCard task={task} /> */}
                </div>
              ))
          : // tasks are empty
            null
      }
    </Box>
  );
};

export default Tasks;
