import { useTaskContext } from "../../../context/tasks/tasks";
import { useProjectContext } from "../../../context/projectContext/projectContext";

const Tasks = () => {
  const { tasks, filteredTasks } = useTaskContext();
  const { activeProject } = useProjectContext();
  return (
    <div>
      <div>tasks</div>

      {tasks.length && !activeProject
        ? tasks.map((task) => (
            <div key={`${task.creation}_${task.id}_all_tasks`}>
              <div>{task.title}</div>
            </div>
          ))
        : null}

      {tasks.length && activeProject
        ? filteredTasks.map((task: any) => (
            <div key={`${task.creation}_${task.id}_all_tasks`}>
              <div>{task.title}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Tasks;
