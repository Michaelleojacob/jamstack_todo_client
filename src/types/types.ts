import { Dispatch, SetStateAction } from "react";

export interface TestComponentProps {
  theme: boolean;
  toggleTheme: Dispatch<SetStateAction<boolean>>;
}
