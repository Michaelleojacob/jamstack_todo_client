import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { doesTokenExist } from "../../../utils/cookie/httpOnlyCookie";
import { fetchRefresh } from "../../../fetchRequests/auth";
import { AuthContextActions, User } from "../../../types/types";

export const AuthContext = createContext<AuthContextActions>(null!);

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

  const userIsLoggedIn = () => {
    if (isLoggedIn && user && doesTokenExist()) return true;
    return false;
  };

  const refreshUser = async () => {
    if (doesTokenExist()) {
      const user = await fetchRefresh();
      if (user.userInfo) {
        setUser(user.userInfo);
        setHasUserSignedup(true);
        setIsLoggedIn(true);
        return true;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    refreshUser();
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
        userIsLoggedIn,
      }}
    >
      <div>AuthProvider</div>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = (): AuthContextActions => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAppContext must be within the provider");
  return context;
};
