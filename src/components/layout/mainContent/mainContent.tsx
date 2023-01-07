import Signout from "../../auth/signout/signout";
import Projects from "./projects/projects";

const MainContent = () => {
  return (
    <div>
      <div>MainContent</div>
      <Projects />
      <div>tasks</div>
      <Signout />
    </div>
  );
};

export default MainContent;
