import { Navigate } from "react-router";
import { getRole } from "./authFunctions";

export const ProtectAdminRoute = ({ children }) => {
  const role = getRole();
  if (role != "admin") return <Navigate to="/unauthorized" replace />;
  return children;
};
