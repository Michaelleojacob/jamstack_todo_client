import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { fetchProjects, fetchProject } from "../../../fetchRequests/projects";
import { useAppContext } from "../appContext/appContext";

type ProjectContextActions = {};

export const ProjectContext = createContext<ProjectContextActions>({});

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { userIsLoggedIn } = useAppContext();
  const [projects, setProjects] = useState({});
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const changeActiveProject = (num: number) => setActiveProject(num);
  const noActiveProject = () => setActiveProject(null);

  const getProjects = async () => {
    const p = await fetchProjects();
    setProjects(p);
  };

  const getProject = async (id: number) => {
    const p = await fetchProject(id);
    setActiveProject(p.id);
  };

  useEffect(() => {
    userIsLoggedIn() ? getProjects() : null;
  });

  useEffect(() => {
    console.log(projects);
    console.log(activeProject);
  }, [projects, activeProject]);

  return (
    <ProjectContext.Provider value={{}}>{children}</ProjectContext.Provider>
  );
};
