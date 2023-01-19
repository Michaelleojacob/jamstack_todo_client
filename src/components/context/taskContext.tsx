import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAppContext } from "./appContext";
import {
  TaskContextActions,
  Todo,
  CreateTodo,
  UpdateTodo,
} from "../../types/types";
import {
  fetchCreateTask,
  fetchDeleteTask,
  fetchTasks,
  fetchUpdateTask,
} from "../../fetchRequests/fetchTasks";

export const TaskContext = createContext<TaskContextActions>(null!);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const [tasks, setTasks] = useState<Todo[] | []>([]);

  const getAllTasks = async () => {
    const tasks = await fetchTasks();
    if (tasks.succ) setTasks(tasks.todos);
  };

  const createTask = async (taskData: CreateTodo) => {
    const response = await fetchCreateTask(taskData);
    if (response.succ) await getAllTasks();
    return response;
  };

  const updateTask = async (id: number, taskData: UpdateTodo) => {
    const response = await fetchUpdateTask(id, taskData);
    if (!response.succ) return false;
    if (response.succ) await getAllTasks();
    return response;
  };

  const deleteTask = async (id: number) => {
    const response = await fetchDeleteTask(id);
    if (response.succ) setTasks(tasks.filter((task) => task.id !== id));
    return response;
  };

  useEffect(() => {
    userIsLoggedIn ? getAllTasks() : null;
  }, [userIsLoggedIn]);

  return (
    <TaskContext.Provider
      value={{ tasks, getAllTasks, createTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextActions => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be within the provider");
  return context;
};
