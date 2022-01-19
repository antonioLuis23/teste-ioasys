import { createContext, useCallback, useState } from "react";

const AuthContext = createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  login: (token: string, refreshToken: string) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  let token = localStorage.getItem("token");
  token = token === null ? "" : token;
  return token;
};

const retrieveStoredRefreshToken = () => {
  let refreshToken = localStorage.getItem("refreshToken");
  refreshToken = refreshToken === null ? "" : refreshToken;
  return refreshToken;
};

type AuthContextType = {
  children: React.ReactNode;
};
export const AuthContextProvider = ({ children }: AuthContextType) => {
  const [token, setToken] = useState(retrieveStoredToken());
  const [refreshToken, setRefreshToken] = useState(
    retrieveStoredRefreshToken()
  );
  const logoutHandler = useCallback(() => {
    setToken("");
    setRefreshToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  }, []);

  const loginHandler = (token: string, refreshToken: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const userIsLoggedIn = token !== "";

  const contextValue = {
    token,
    refreshToken,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
