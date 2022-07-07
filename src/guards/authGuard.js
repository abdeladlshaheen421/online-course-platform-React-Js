import { Navigate } from "react-router";
import { getToken } from "./authFunctions";

export const ProtectAuthRoute = ({ children }) => {
  const token = getToken();
  if (!token) return <Navigate to="/login" replace />;
  return children;
};
