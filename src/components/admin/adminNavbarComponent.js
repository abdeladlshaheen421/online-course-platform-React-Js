import { NavLink, useNavigate } from "react-router-dom";
import { removeToken, removeRole } from "../../guards/authFunctions";
export function AdminNavbarComponent() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    removeToken();
    removeRole();
    navigate("/login");
  };
  return (
    <>
      <nav class="d-flex p-1 align-items-center bg-light">
        <NavLink
          to="/admin"
          className="navbar-brand align-self-start"
          style={{ textDecoration: "none" }}
        >
          <span
            className="badge bg-dark p-3"
            style={{ textDecoration: "monospace" }}
          >
            Admin Dashboard
          </span>
        </NavLink>
        <NavLink className="mx-2" to="/courses" style={{ textDecoration: "none" }}>
          Courses
        </NavLink>
        <NavLink
          className="mx-2"
          to="/categories"
          style={{ textDecoration: "none" }}
        >
          Categories
        </NavLink>
        <div className="ml-auto">
          <button
            className="btn btn-outline-danger"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
