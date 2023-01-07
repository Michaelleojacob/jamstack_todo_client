import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAppContext } from "../appContext/appContext";
import { TaskContextActions, Todo } from "../../../types/types";
import { fetchTasks } from "../../../fetchRequests/tasks";
import { useProjectContext } from "../projectContext/projectContext";

export const TaskContext = createContext<TaskContextActions>(null!);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const { activeProject } = useProjectContext();
  const [tasks, setTasks] = useState<[Todo] | []>([]);

  const getAllTasks = async () => {
    const tasks = await fetchTasks();
    if (tasks.succ) setTasks(tasks.todos);
  };

  useEffect(() => {
    userIsLoggedIn() ? getAllTasks() : null;
  }, [userIsLoggedIn]);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextActions => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be within the provider");
  return context;
};
