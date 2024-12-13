import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(() => {
    const isLoggedIn = localStorage.getItem("auth");
    return isLoggedIn ? true : false;
  });

  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch!");
      }

      const result = await response.json();
      localStorage.setItem("auth", result.token);

      navigate("/");
      setIsLogin(true);
    } catch (error) {
      throw new Error(`Error : ${error}`);
    }
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
