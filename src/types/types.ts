import { Dispatch, SetStateAction } from "react";

export interface TestComponentProps {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}

export interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}
