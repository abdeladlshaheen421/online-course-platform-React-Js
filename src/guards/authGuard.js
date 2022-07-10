import { Navigate } from "react-router";
import { getToken, getRole } from "./authFunctions";

export const LoggedIn = ({ children }) => {
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

export const Loggedout = ({ children }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
