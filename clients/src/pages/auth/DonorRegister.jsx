import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authSelect, setStateEmty } from "../../features/auth/authSlice";
import { createToster } from "../../utils/Tooster";
import useFrom from "../../hooks/useFrom";
import { donorRegister } from "../../features/auth/authApiSilce";

const DonorRegister = () => {
  const dispatch = useDispatch();
  const { error, loader, message } = useSelector(authSelect);

  const { input, handleIputchange, restForm } = useFrom({
    name: "",
    auth: "",
    password: "",
    cPass: "",
    role: "donor",
  });

  // user create
  const handleCreateDonor = (e) => {
    e.preventDefault();
    if (input.cPass !== input.password) {
      createToster("Password Not Match");
    } else {
      dispatch(donorRegister(input));
    }
  };

  useEffect(() => {
    if (message) {
      createToster(message, "success");
      dispatch(setStateEmty());
      restForm();
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
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      style={{ paddingRight: "30px" }}
                      src="https://img.freepik.com/free-vector/world-blood-donor-day-heart-blood-drop-with-heartbeat-line-concept-poster_1017-38605.jpg?w=740&t=st=1710092112~exp=1710092712~hmac=e308489b98aa81601f625f09126fc31985fb9e7af573a5d30dd3c06d440011a4"
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Donor Register{" "}
                        <Link to="/register">Are you a Patients?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={handleCreateDonor}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="name"
                          value={input.name}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          value={input.auth}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label">
                          Email or Mobile Number
                        </label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          value={input.password}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="cPass"
                          value={input.cPass}
                          onChange={handleIputchange}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        {loader ? "Creating..." : "Submit"}
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
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default DonorRegister;