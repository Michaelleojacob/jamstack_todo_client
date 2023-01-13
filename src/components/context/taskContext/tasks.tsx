import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAppContext } from "../appContext/appContext";
import { TaskContextActions, Todo, CreateTodo } from "../../../types/types";
import {
  fetchCreateTask,
  fetchDeleteTask,
  fetchTasks,
} from "../../../fetchRequests/tasks";

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

  const deleteTask = async (id: number) => {
    const response = await fetchDeleteTask(id);
    console.log(response);
    if (response.succ) setTasks(tasks.filter((task) => task.id !== id));
    return response;
  };

  useEffect(() => {
    userIsLoggedIn() ? getAllTasks() : null;
  }, [userIsLoggedIn]);

  return (
    <TaskContext.Provider
      value={{ tasks, getAllTasks, createTask, deleteTask }}
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
