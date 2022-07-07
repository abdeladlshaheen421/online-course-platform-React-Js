import { Navigate } from "react-router";
import { getRole } from "./authFunctions";

export function ProtectUserRoute({ children }) {
  const role = getRole();
  if (role != "user") return <Navigate to="/unauthorized" replace />;
  return children;
}
