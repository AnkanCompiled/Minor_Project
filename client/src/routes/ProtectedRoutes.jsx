import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/dataContext";

const ProtectedRoute = ({ children }) => {
  const { userImage } = useData();

  return userImage ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
