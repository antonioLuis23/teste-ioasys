import { createContext, useCallback, useState } from "react";

const AuthContext = createContext({
  token: "",
  refreshToken: "",
  isLoggedIn: false,
  name: "",
  login: (token: string, refreshToken: string, name: string) => {},
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

const retrieveName = () => {
  let name = localStorage.getItem("name");
  name = name === null ? "" : name;
  return name;
};

type AuthContextType = {
  children: React.ReactNode;
};
export const AuthContextProvider = ({ children }: AuthContextType) => {
  const [token, setToken] = useState(retrieveStoredToken());
  const [refreshToken, setRefreshToken] = useState(
    retrieveStoredRefreshToken()
  );
  const [name, setName] = useState(retrieveName());

  const logoutHandler = useCallback(() => {
    setToken("");
    setRefreshToken("");
    setName("");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("name");
  }, []);

  const loginHandler = (token: string, refreshToken: string, name: string) => {
    setToken(token);
    setRefreshToken(refreshToken);
    setName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("name", name);
  };

  const userIsLoggedIn = token !== "";

  const contextValue = {
    token,
    refreshToken,
    name,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContext;
