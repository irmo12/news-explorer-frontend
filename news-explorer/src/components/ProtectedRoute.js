import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (user._id === '') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export { ProtectedRoute }