import { CreateTodo, UpdateTodo } from "../types/types";

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

export const fetchCreateTask = async (taskData: CreateTodo) => {
  const rawFetch = await fetch("http://localhost:3002/todos/", {
    method: "post",
    mode: "cors",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: taskData.title.trim(),
      desc: taskData.desc.trim(),
      prio: Number(taskData.prio),
      due: taskData.due,
      projectId: taskData.projectId,
    }),
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchUpdateTask = async (id: number, taskData: UpdateTodo) => {
  if (taskData.title === undefined) return;
  if (taskData.desc === undefined) taskData.desc = "";
  const rawFetch = await fetch(`http://localhost:3002/todos/${id}`, {
    method: "put",
    mode: "cors",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: taskData.title.trim(),
      desc: taskData.desc.trim(),
      prio: Number(taskData.prio),
      due: taskData.due,
      projectId: taskData.projectId,
    }),
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchDeleteTask = async (id: number) => {
  const rawFetch = await fetch(`http://localhost:3002/todos/${id}`, {
    method: "delete",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await rawFetch.json();
  return data;
};
