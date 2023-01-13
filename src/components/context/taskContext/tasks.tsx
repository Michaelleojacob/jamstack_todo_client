import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAppContext } from "../appContext/appContext";
import { TaskContextActions, Todo, CreateTodo } from "../../../types/types";
import { fetchCreateTask, fetchTasks } from "../../../fetchRequests/tasks";

export const TaskContext = createContext<TaskContextActions>(null!);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const [tasks, setTasks] = useState<Todo[] | []>([]);

  const getAllTasks = async () => {
    const tasks = await fetchTasks();
    if (tasks.succ) setTasks(tasks.todos);
  };

  const createTask = async (taskData: CreateTodo) => {
    const task = await fetchCreateTask(taskData);
    console.log(task);
  };

  useEffect(() => {
    userIsLoggedIn() ? getAllTasks() : null;
  }, [userIsLoggedIn]);

  return (
    <TaskContext.Provider value={{ tasks, getAllTasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextActions => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be within the provider");
  return context;
};
