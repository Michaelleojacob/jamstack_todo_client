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
  user: User | null;
  displaySignIn: boolean;
  switchToSignin: () => void;
  switchToSignup: () => void;
  signout: () => void;
  signin: (user: namepw) => Promise<any>;
}

export interface ThemeContextActions {
  toggleColorMode: () => void;
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
  prio?: number;
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
  prio: number;
  due: Dayjs | null;
  projectId: number | "";
}

export interface UpdateTodo {
  title?: string;
  desc?: string;
  prio: number;
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
  proj: Project;
}

export type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

export interface HandleAccordionExpand {
  expanded: number | boolean;
  handleChange: (
    panel: number
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  handleClose: () => void;
}

export interface TaskCardProps {
  task: Todo;
  expanded: number | boolean;
  handleChange: (
    panel: number
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  handleClose: () => void;
}
