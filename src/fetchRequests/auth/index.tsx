import { namepw } from "../../types/types";

export const fetchSignin = async (username: string, password: string) => {
  const rawFetch = await fetch("http://localhost:3002/auth/signin", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchSignout = async () => {
  const rawFetch = await fetch("http://localhost:3002/auth/signout", {
    mode: "cors",
    credentials: "include",
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchSignup = async ({ username, password }: namepw) => {
  const rawFetch = await fetch("http://localhost:3002/auth/signup", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const data = await rawFetch.json();
  return data;
};

export const fetchRefresh = async () => {
  const rawFetch = await fetch("http://localhost:3002/auth/refresh", {
    mode: "cors",
    credentials: "include",
  });
  const data = await rawFetch.json();
  return data;
};
