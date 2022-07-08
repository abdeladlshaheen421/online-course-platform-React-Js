import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import { setToken, setRole } from "../guards/authFunctions";
export function LoginComponent() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [validationErrors, setValidationErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  useEffect(
    () =>
      setValidationErrors({
        emailError: !loginData.email.match(emailRegex)
          ? "please enter a valid email address"
          : "",
        passwordError:
          loginData.password.length < 8
            ? "please enter a password at least 8 char "
            : "",
      }),
    [loginData]
  );

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validationErrors.emailError && !validationErrors.passwordError)
      axiosInstance
        .post("/user/login", { ...loginData })
        .then((res) => {
          const role = res.data.verified.role;
          const token = res.data.verified.token;
          setToken(token);
          setRole(role);
          if (role == "admin") return navigate("/admin");
          return navigate("/user");
        })
        .catch((err) => {
          if (err.response.status === 422) {
            err.response.data.errors.map((err) => toast.warning(err));
          } else if (err.response.status == 401) {
            setValidationErrors({
              ...validationErrors,
              passwordError: err.password,
            });
          } else {
            toast.error("unexpected error");
          }
        });
  };
  return (
    <div
      className="w-50 p-4 mx-auto my-4 rounded"
      style={{ backgroundColor: "#e6e2d3" }}
    >
      <form>
        <h1 className="text-center p-2">
          <span className="badge bg-dark fs-4">Sign In</span>
        </h1>
        <div className="form-group row my-2 p-2">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
            {validationErrors.emailError && (
              <p className="text-danger text-center">
                {validationErrors.emailError}
              </p>
            )}
          </div>
        </div>
        <div className="form-group row my-2 p-2">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              id="inputPassword3"
              placeholder="Password"
            />
            {validationErrors.passwordError && (
              <p className="text-danger text-center">
                {validationErrors.passwordError}
              </p>
            )}
          </div>
        </div>
        <div className="my-2 p-2 text-center">
          <button
            className="btn fs-5 text-light"
            type="submit"
            onClick={(e) => handleSignIn(e)}
            style={{ backgroundColor: "#b9936c" }}
          >
            Sign In
          </button>
          <p className="text-center my-4">
            you Haven't an account ?{" "}
            <Link to="/register" style={{ color: "#034f84" }}>
              Register Now
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
