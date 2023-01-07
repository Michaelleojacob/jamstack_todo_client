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

export interface ProjectContextActions {
  projects: [Project] | [];
  changeActiveProject: (num: number) => void;
  activeProject: number | null;
  noActiveProject: () => void;
}

export interface Todo {
  id: number;
  title: string;
  desc?: string;
  notes?: string;
  prio?: "low" | "medium" | "high";
  due?: Date;
  creation?: Date;
  done?: boolean;
  projectId?: number;
  authorId: number;
}

export interface TaskContextActions {
  tasks: [Todo] | [];
  filteredTasks: any;
}
