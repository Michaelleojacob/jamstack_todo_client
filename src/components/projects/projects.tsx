import { useProjectContext } from "../context/projectContext";

const Projects = () => {
  const { projects, changeActiveProject, activeProject, noActiveProject } =
    useProjectContext();

  return (
    <div>
      <div>projects</div>
      <button>+</button>
      {projects.length
        ? projects.map((proj) => (
            <div
              key={`${proj.id}_${proj.createdAt}`}
              className={activeProject === proj.id ? "active-project" : ""}
            >
              <button
                onClick={() => changeActiveProject(proj.id)}
                disabled={activeProject === proj.id}
              >
                {proj.title}
              </button>
            </div>
          ))
        : null}
      <button
        onClick={noActiveProject}
        className={!activeProject ? "active-project" : ""}
        disabled={!activeProject}
      >
        all tasks
      </button>
    </div>
  );
};

export default Projects;
