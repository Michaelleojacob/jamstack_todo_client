import { Switch } from "antd";
import { TestComponentProps } from "../../types/types";

const TestComponent = ({ theme, toggleTheme }: TestComponentProps) => {
  return (
    <div>
      {theme ? "light" : "dark"}
      <Switch defaultChecked onChange={toggleTheme}></Switch>
    </div>
  );
};

export default TestComponent;
