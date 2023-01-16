import Signout from "../auth/signout";
import Projects from "../projects/projects";
import Tasks from "../tasks/tasks";
import { TaskProvider } from "../context/taskContext";

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
