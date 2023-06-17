import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtecktedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
