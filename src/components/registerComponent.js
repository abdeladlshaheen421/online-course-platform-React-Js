import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../api/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
export function RegisterComponent() {
  const nameRegex = /^[a-zA-Z ]{3,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [success, setSuccess] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerDataError, setRegisterDataError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  useEffect(
    () =>
      setRegisterDataError({
        nameError: !registerData.name.match(nameRegex)
          ? "please enter a valid name (only characters)"
          : "",
        emailError: !registerData.email.match(emailRegex)
          ? "Please enter a valid email address"
          : "",
        passwordError:
          registerData.password.length < 8
            ? "Please enter a strong password"
            : "",
      }),
    [registerData]
  );
  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      !registerDataError.nameError &&
      !registerDataError.emailError &&
      !registerDataError.passwordError
    )
      axiosInstance
        .post("/user/register", { ...registerData })
        .then((res) => {
          toast.success(res.data.success);
          setSuccess(true);
          setRegisterData({
            name: "",
            email: "",
            password: "",
          });
        })
        .catch((err) => {
          if (err.response.status === 422) {
            err.response.data.errors.map((err) => toast.warning(err));
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
      {success && (
        <p className="alert alert-success text-center fs-5">
          You are registered Successfully
        </p>
      )}
      <form>
        <h1 className="text-center p-2">
          <span className="badge bg-dark fs-4">SignUp Form</span>
        </h1>
        <div className="form-group row my-2 p-2">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
              className="form-control"
              id="inputName"
              placeholder="name"
            />
            {registerDataError.nameError && (
              <p className="text-danger text-center">
                {registerDataError.nameError}
              </p>
            )}
          </div>
        </div>
        <div className="form-group row my-2 p-2">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
            {registerDataError.emailError && (
              <p className="text-danger text-center">
                {registerDataError.emailError}
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
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
              id="inputPassword3"
              placeholder="Password"
            />
            {registerDataError.passwordError && (
              <p className="text-danger text-center">
                {registerDataError.passwordError}
              </p>
            )}
          </div>
        </div>
        <div className="my-2 p-2 text-center">
          <button
            className="btn fs-5 text-light"
            type="submit"
            onClick={(e) => handleSignUp(e)}
            style={{ backgroundColor: "#15f" }}
          >
            Sign Up
          </button>
          <p className="text-center my-4">
            already signed up ?
            <Link to="/login" className="mx-2" style={{ color: "#034f84" }}>
              Sign In
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
