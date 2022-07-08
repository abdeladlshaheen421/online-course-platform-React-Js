import { Navigate } from "react-router";
import { getToken, getRole } from "./authFunctions";


export const LoggedOut = ({ children }) => {
  const token = getToken();
  if (token) {
    return getRole() == "admin" ? (
      <Navigate to="/admin" replace />
    ) : (
      <Navigate to="/user" />
    );
  }
  return children;
};
