import { fetchProject, fetchProjects } from "../../fetchRequests/projects";
import { fetchRefresh } from "../../fetchRequests/auth";

const TestData = () => {
  return (
    <div>
      <div>TestData</div>
      <button onClick={fetchProjects}>projects</button>
      <button onClick={fetchRefresh}>refresh</button>
      <button onClick={() => fetchProject(18)}>get project 18</button>
    </div>
  );
};

export default TestData;
