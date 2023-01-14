import { Dayjs } from "dayjs";

export interface User {
  id: number;
  username: string;
}

export interface namepw {
  username: string;
  password: string;
}

export interface Project {
  id: number;
  authorId: number;
  createdAt: Date;
  title: string;
}

export interface AuthContextActions {
  isLoggedIn: boolean;
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
  hasUserSignedup: boolean | null;
  signup: () => void;
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
  switchToSignin: () => void;
  switchToSignup: () => void;
  userIsLoggedIn: () => boolean;
}

export interface CreateProjectResponse {
  project: Project;
  succ: boolean;
  msg: string;
}

export interface ProjectContextActions {
  projects: Project[] | [];
  changeActiveProject: (num: number) => void;
  activeProject: number | "";
  noActiveProject: () => void;
  createProject: (title: string) => Promise<CreateProjectResponse>;
  deleteProject: (id: number) => Promise<CreateProjectResponse>;
  updateProject: (id: number, title: string) => Promise<CreateProjectResponse>;
}

export interface Todo {
  id: number;
  title: string;
  desc?: string;
  notes?: string;
  prio?: "low" | "medium" | "high";
  due?: Date;
  createdAt?: Date;
  done?: boolean;
  projectId?: number;
  authorId: number;
  project?: Project;
}

export interface CreateTodo {
  title: string;
  desc: string;
  prio: "low" | "medium" | "high" | "";
  due: Dayjs | null;
  projectId: number | "";
}

export interface UpdateTodo {
  title?: string;
  desc?: string;
  prio: "low" | "medium" | "high" | "";
  due: Dayjs | null | Date | string;
  projectId: number | "";
}

export interface Due {
  due: Dayjs | null;
}

export interface TaskContextActions {
  tasks: Todo[] | [];
  getAllTasks: () => Promise<any>;
  createTask: (taskData: CreateTodo) => Promise<any>;
  deleteTask: (id: number) => Promise<any>;
  updateTask: (id: number, taskData: UpdateTodo) => Promise<any>;
}

export interface EditProjectModalProps {
  id: number;
  prevTitle: string;
  closeBurger: () => void;
}

export interface TaskCardProps {
  Task: Todo;
}
