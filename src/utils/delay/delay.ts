export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sleep = (delay: number) => {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
};
