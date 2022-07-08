import { useNavigate } from "react-router-dom";
import { removeToken, removeRole } from "../../guards/authFunctions";
export function LogoutButtonComponent() {
  const navigate = useNavigate();
  const handleLogout = () => {
    e.preventDefault();
    removeToken();
    removeRole();
    navigate("/login");
  };
  return (
    <>
      <button
        onClick={(e) => handleLogout(e)}
        className="btn btn-outline-danger"
      >
        Logout
      </button>
    </>
  );
}
