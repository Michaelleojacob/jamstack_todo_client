import { fetchProject, fetchProjects } from "../../fetchRequests/projects";
import { fetchRefresh } from "../../fetchRequests/auth";
import { useProjectContext } from "../context/projectContext/projectContext";

const TestData = () => {
  const { activeProject } = useProjectContext();
  const handleClick = async () => {
    if (!activeProject) return;
    const thing = await fetchProject(activeProject);
    console.log(thing);
  };

  return (
    <div>
      <div>TestData</div>
      <button onClick={fetchProjects}>projects</button>
      <button onClick={fetchRefresh}>refresh</button>
      <button onClick={handleClick}>get project 18</button>
    </div>
  );
};

export default TestData;
