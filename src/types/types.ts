import { Dispatch, SetStateAction } from "react";

export interface TestComponentProps {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export interface User {
  id: number;
  username: string;
}

export interface AuthContextType {
  isLoggedIn: any;
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
}
