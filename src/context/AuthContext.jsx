import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => {
    const isLoggedIn = localStorage.getItem("auth");
    return isLoggedIn ? true : false;
  });

  const navigate = useNavigate();

  const login = (username, password) => {
    if (username == "admin" && password == "123") {
      localStorage.setItem("auth", true);
      setIsLogin(true);
      navigate("/");
      console.log("pencet login");
      return true;
    }
    return false;
  };

  const logout = () => {
      localStorage.setItem("auth", false);
      setIsLogin(false);
      navigate("/login");
 
  };

  const values = {
    isLogin,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error diluar jangkauan");
  }
  return context;
};

export default AuthProvider;
