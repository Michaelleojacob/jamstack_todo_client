import { namepw } from "../types/types";

export const fetchSignin = async (user: namepw) => {
  // const rawFetch = await fetch("http://localhost:3002/auth/signin", {
  const rawFetch = await fetch(
    "https://jamstacktodoserver-production.up.railway.app/auth/signin",
    {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    }
  );
  const data = await rawFetch.json();
  return data;
};

export const fetchSignout = async () => {
  // const rawFetch = await fetch("http://localhost:3002/auth/signout", {
  const rawFetch = await fetch(
    "https://jamstacktodoserver-production.up.railway.app/auth/signout",
    {
      method: "GET",
      mode: "cors",
      credentials: "include",
    }
  );
  const data = await rawFetch.json();
  return data;
};

export const fetchSignup = async ({ username, password }: namepw) => {
  // const rawFetch = await fetch("http://localhost:3002/auth/signup", {
  const rawFetch = await fetch(
    "https://jamstacktodoserver-production.up.railway.app/auth/signup",
    {
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
    }
  );
  const data = await rawFetch.json();
  return data;
};

export const fetchRefresh = async () => {
  // const rawFetch = await fetch("http://localhost:3002/auth/refresh", {
  const rawFetch = await fetch(
    "https://jamstacktodoserver-production.up.railway.app/auth/refresh",
    {
      mode: "cors",
      credentials: "include",
    }
  );
  const data = await rawFetch.json();
  return data;
};
