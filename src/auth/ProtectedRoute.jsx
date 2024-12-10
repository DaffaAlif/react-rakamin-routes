import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useAuth();

  
  return isLogin ?  children  : <Navigate to="/login" />;
};

export default ProtectedRoute;
