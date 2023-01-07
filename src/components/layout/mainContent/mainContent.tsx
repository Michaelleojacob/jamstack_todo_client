import Signout from "../../auth/signout/signout";
import Projects from "./projects/projects";
import Tasks from "./tasks/tasks";
import { TaskProvider } from "../../context/tasks/tasks";

const MainContent = () => {
  return (
    <div>
      <div>MainContent</div>
      <Projects />
      <TaskProvider>
        <Tasks />
      </TaskProvider>
      <Signout />
    </div>
  );
};

export default MainContent;
