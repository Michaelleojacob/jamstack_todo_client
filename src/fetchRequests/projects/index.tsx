export const fetchProjects = async () => {
  const rawFetch = await fetch("http://localhost:3002/projects/", {
    method: "get",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchProject = async (id: number) => {
  const rawFetch = await fetch(`http://localhost:3002/projects/${id}`, {
    method: "get",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await rawFetch.json();
  return data;
};
