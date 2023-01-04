import { createContext, useState, ReactNode } from "react";
import { AuthContextType } from "../../types/types";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [hasUserSignedup, setHasUserSignedup] = useState(
    localStorage.getItem("userSignedUp") === "true" ? true : false
  );
  const signin = (user: any) => {
    if (!user) return;
    setIsLoggedIn(true);
    setUser(user);
  };
  const signout = () => {};
  const signup = () => {
    setHasUserSignedup(true);
    localStorage.setItem("hasUserSignedUp", "true");
  };

  const value = { isLoggedIn, user, signin, signout, hasUserSignedup, signup };

  return (
    <AuthContext.Provider value={value}>
      <div>AuthProvider</div>
      {children}
    </AuthContext.Provider>
  );
};
