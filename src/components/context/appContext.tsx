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
import { AuthContextActions, namepw, User } from "../../types/types";

export const AuthContext = createContext<AuthContextActions>(null!);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [displaySignIn, setDisplaySignIn] = useState(true);

  const signin = async (user: namepw) => {
    if (!user) return;
    if (user.username.trim() === "") return false;
    if (user.password.trim() === "") return false;
    const response = await fetchSignin(user);
    if (response.succ) {
      setUser(response.userInfo);
      return { msg: response.msg, succ: response.succ };
    }
    return { msg: response.msg, succ: response.succ };
  };

  const signout = () => {
    setUser(null);
    fetchSignout();
  };

  const switchToSignin = () => setDisplaySignIn(true);
  const switchToSignup = () => setDisplaySignIn(false);

  const refreshUser = async () => {
    if (doesTokenExist()) {
      const user = await fetchRefresh();
      if (user.userInfo) {
        return setUser(user.userInfo);
      }
    }
    return setUser(null);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        displaySignIn,
        switchToSignin,
        switchToSignup,
        signout,
        signin,
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
