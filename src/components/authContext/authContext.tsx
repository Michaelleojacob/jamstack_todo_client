import { createContext, useState, ReactNode } from "react";
import { AuthContextType, User } from "../../types/types";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" ? true : false
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
      }}
    >
      <div>AuthProvider</div>
      {children}
    </AuthContext.Provider>
  );
};
