import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContextType } from "../../types/types";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const signin = (user: any) => {
    if (!user) return;
    setIsLoggedIn(true);
    setUser(user);
  };
  const signout = () => {};

  const value = { isLoggedIn, user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      <div>AuthProvider</div>
      <Outlet />
    </AuthContext.Provider>
  );
};
