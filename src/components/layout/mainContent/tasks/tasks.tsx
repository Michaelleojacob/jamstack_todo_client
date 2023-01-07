import { useTaskContext } from "../../../context/tasks/tasks";
import { useProjectContext } from "../../../context/projectContext/projectContext";

const Tasks = () => {
  const { tasks } = useTaskContext();
  const { activeProject } = useProjectContext();

  return (
    <div>
      <div>tasks</div>

      {
        // tasks are not empty
        tasks.length
          ? // active project IS a number
            activeProject
            ? // active project IS a num, filter tasks -> tasks.filter().map()
              tasks
                .filter((task) => task.projectId === activeProject)
                .map((task: any) => (
                  <div key={`${task.creation}_${task.id}_all_tasks`}>
                    <div>{task.title}</div>
                  </div>
                ))
            : // active project is NULL display all tasks
              tasks.map((task) => (
                <div key={`${task.creation}_${task.id}_all_tasks`}>
                  <div>{task.title}</div>
                </div>
              ))
          : null
      }
    </div>
  );
};

export default Tasks;
