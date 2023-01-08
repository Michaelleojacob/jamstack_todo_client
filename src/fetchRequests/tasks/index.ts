export const fetchTasks = async () => {
  const rawFetch = await fetch("http://localhost:3002/todos/", {
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
