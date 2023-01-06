// checks for an http only cookie
export const doesHttpOnlyCookieExist = (cookiename: string) => {
  const d = new Date();
  d.setTime(d.getTime() + 1000);
  const expires = "expires=" + d.toUTCString();

  document.cookie = cookiename + "=new_value;path=/;" + expires;
  return document.cookie.indexOf(cookiename + "=") === -1;
};

export const doesTokenExist = () => {
  const d = new Date();
  d.setTime(d.getTime() + 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = "token" + "=new_value;path=/;" + expires;
  return document.cookie.indexOf("token" + "=") === -1;
};
