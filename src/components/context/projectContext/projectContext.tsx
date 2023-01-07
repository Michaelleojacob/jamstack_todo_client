import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchProjects, fetchProject } from "../../../fetchRequests/projects";
import { useAppContext } from "../appContext/appContext";
import { ProjectContextActions, Project } from "../../../types/types";

export const ProjectContext = createContext<ProjectContextActions>(null!);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const [projects, setProjects] = useState<[Project] | []>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const changeActiveProject = (num: number) => setActiveProject(num);
  const noActiveProject = () => setActiveProject(null);

  const getProjects = async () => {
    const data = await fetchProjects();
    if (data.succ) setProjects(data.projects);
    return data;
  };

  const getProject = async (id: number) => {
    const p = await fetchProject(id);
    setActiveProject(p.id);
  };

  useEffect(() => {
    userIsLoggedIn() ? getProjects() : null;
  }, [userIsLoggedIn]);

  return (
    <ProjectContext.Provider
      value={{ projects, changeActiveProject, activeProject, noActiveProject }}
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
