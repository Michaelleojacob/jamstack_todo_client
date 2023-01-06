import { createContext, useState, ReactNode, useEffect } from "react";
import { AuthContextType, User } from "../../../types/types";
import { doesTokenExist } from "../../../utils/cookie/httpOnlyCookie";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    // default to true if it does not exist yet
    localStorage.getItem("isDarkMode") === "false" ? false : true
  );
  const toggleIsDarkMode = () => {
    const reverse = !isDarkMode;
    setIsDarkMode(reverse);
    localStorage.setItem("isDarkMode", JSON.stringify(reverse));
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState<User | null>({ id: 2, username: "migs" });
  const [hasUserSignedup, setHasUserSignedup] = useState(
    localStorage.getItem("userSignedup") === "true" ? true : false
  );
  const signin = (userObject: User) => {
    if (!userObject) return;
    setIsLoggedIn(true);
    setUser(userObject);
  };
  const signout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };
  const signup = () => {
    setHasUserSignedup(true);
    localStorage.setItem("hasUserSignedup", "true");
  };

  const switchToSignin = () => setHasUserSignedup(true);
  const switchToSignup = () => {
    setHasUserSignedup(false);
    setHasUserSignedup(false);
  };

  useEffect(() => {
    doesTokenExist() ? setHasUserSignedup(true) : null;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        signin,
        signout,
        hasUserSignedup,
        signup,
        isDarkMode,
        toggleIsDarkMode,
        switchToSignin,
        switchToSignup,
      }}
    >
      <div>AuthProvider</div>
      {children}
    </AuthContext.Provider>
  );
};
