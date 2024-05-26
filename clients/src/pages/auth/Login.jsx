import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSelect, setStateEmty } from "../../features/auth/authSlice";
import useFrom from "../../hooks/useFrom";
import { createToster } from "../../utils/Tooster";
import { userLogin } from "../../features/auth/authApiSilce";

const Login = () => {
  const dispatch = useDispatch();
  const { error, loader, message } = useSelector(authSelect);
  const { input, handleIputchange, restForm } = useFrom({
    auth: "",
    password: "",
  });
  // passwordType to texType
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };
  // user login
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  useEffect(() => {
    if (message) {
      createToster(message, "success");
      dispatch(setStateEmty());
    }
    if (error) {
      createToster(error);
      dispatch(setStateEmty());
    }
  }, [error, message, dispatch]);
  return (
    <>
      {/* Page Content */}
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlhdvnMvRS1h0qMj78RAd8exTbfCGUMpQGB3rzSxyuQ&s"
                      }
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>User</span>
                      </h3>
                    </div>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          value={input.auth}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="mb-3 form-focus input-container">
                        <input
                          type={passwordType}
                          className="form-control floating "
                          name="password"
                          value={input.password}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label ">Password</label>
                        <span
                          className="icon"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordType === "password" ? (
                            <i className="fa fa-eye"></i>
                          ) : (
                            <i className="fa fa-eye-slash"></i>
                          )}
                        </span>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        {loader ? "login..." : "login"}
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Login;
