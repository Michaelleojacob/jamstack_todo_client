import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { doesTokenExist } from "../../utils/cookie/httpOnlyCookie";
import {
  fetchRefresh,
  fetchSignin,
  fetchSignout,
} from "../../fetchRequests/fetchAuth";
import { AuthContextActions, User } from "../../types/types";

export const AuthContext = createContext<AuthContextActions>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [displaySignIn, setDisplaySignIn] = useState(true);

  const signin = (userObject: User) => {
    if (!userObject) return;
    // const user = fetchSignin(userObject.username, userObject.password);
    setIsLoggedIn(true);
    setUser(userObject);
  };

  const signout = () => {
    setIsLoggedIn(false);
    setUser(null);
    fetchSignout();
  };

  const signup = () => setDisplaySignIn(true);
  const switchToSignin = () => setDisplaySignIn(true);
  const switchToSignup = () => setDisplaySignIn(false);

  const userIsLoggedIn = !!(user && isLoggedIn && doesTokenExist());

  const refreshUser = async () => {
    if (doesTokenExist()) {
      const user = await fetchRefresh();
      if (user.userInfo) {
        setUser(user.userInfo);
        setDisplaySignIn(true);
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
        displaySignIn,
        signup,
        switchToSignin,
        switchToSignup,
        userIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = (): AuthContextActions => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAppContext must be within the provider");
  return context;
};
