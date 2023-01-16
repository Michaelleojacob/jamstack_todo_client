import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  fetchProjects,
  fetchCreateProject,
  fetchDeleteProject,
  fetchUpdateProject,
} from "../../fetchRequests/fetchProjects";
import { useAppContext } from "./appContext";
import { ProjectContextActions, Project } from "../../types/types";

export const ProjectContext = createContext<ProjectContextActions>(null!);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const [projects, setProjects] = useState<Project[] | []>([]);
  const [activeProject, setActiveProject] = useState<number | "">("");

  const changeActiveProject = (num: number) => setActiveProject(num);
  const noActiveProject = () => setActiveProject("");

  const getProjects = async () => {
    const data = await fetchProjects();
    if (data.succ) setProjects(data.projects);
    return data;
  };

  const deleteProject = async (id: number) => {
    setProjects(projects.filter((proj: Project) => proj.id !== id));
    const data = await fetchDeleteProject(id);
    return data;
  };

  const createProject = async (title: string) => {
    const data = await fetchCreateProject(title);
    if (!data) return;
    if (data.succ) await getProjects();
    return data;
  };

  const updateProject = async (id: number, title: string) => {
    const data = await fetchUpdateProject(id, title);
    if (!data) return;
    if (data.succ) await getProjects();
    return data;
  };

  useEffect(() => {
    userIsLoggedIn() ? getProjects() : null;
  }, [userIsLoggedIn]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        changeActiveProject,
        activeProject,
        noActiveProject,
        createProject,
        deleteProject,
        updateProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = (): ProjectContextActions => {
  const context = useContext(ProjectContext);
  if (!context)
    throw new Error("useProjectContext must be within the provider");
  return context;
};
