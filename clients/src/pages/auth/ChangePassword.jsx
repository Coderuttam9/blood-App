import React, { useEffect, useState } from "react";
import useFrom from "../../hooks/useFrom";
import { useDispatch, useSelector } from "react-redux";
import { authSelect, setStateEmty } from "../../features/auth/authSlice";
import { createToster } from "../../utils/Tooster";
import { changePassword } from "../../features/auth/authApiSilce";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { error, loader, message } = useSelector(authSelect);

  const { input, handleIputchange } = useFrom({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // toggle show password and hide password

  const [showPassword, setShowPassword] = useState("password");
  const [showPassword_first, setShowPassword_first] = useState("password");

  // show hide password handler
  const handleShowHidePassword = () => {
    setShowPassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  // show hide password handler first one
  const handleShowHidePassword_first = () => {
    setShowPassword_first((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  // handle Password change
  const handleChangePassword = (e) => {
    e.preventDefault();
    dispatch(changePassword(input));
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
      <div className="col-md-7 col-lg-8 col-xl-9">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                {/* Change Password Form */}
                <form>
                  <div className="mb-3 input-container">
                    <label className="mb-2">Old Password</label>
                    <input
                      type={showPassword_first}
                      className="form-control"
                      name="oldPassword"
                      value={input.name}
                      onChange={handleIputchange}
                    />
                    <span
                      className="icon mt-3"
                      onClick={handleShowHidePassword_first}
                    >
                      {showPassword_first === "password" ? (
                        <i className="fa fa-eye"></i>
                      ) : (
                        <i className="fa fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  <div className="mb-3 input-container">
                    <label className="mb-2">New Password</label>
                    <input
                      type={showPassword}
                      className="form-control"
                      name="newPassword"
                      value={input.name}
                      onChange={handleIputchange}
                    />
                    <span
                      className="icon mt-3"
                      onClick={handleShowHidePassword}
                    >
                      {showPassword === "password" ? (
                        <i className="fa fa-eye"></i>
                      ) : (
                        <i className="fa fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  <div className="mb-3 input-container">
                    <label className=" mb-2 focus-label">
                      Confirm Password
                    </label>
                    <input
                      type={showPassword}
                      className="form-control floating"
                      name="confirmPassword"
                      value={input.password}
                      onChange={handleIputchange}
                    />
                    <span
                      className="icon mt-3"
                      onClick={handleShowHidePassword}
                    >
                      {showPassword === "password" ? (
                        <i className="fa fa-eye"></i>
                      ) : (
                        <i className="fa fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                  <div className="submit-section">
                    <button
                      type=""
                      className="btn btn-primary submit-btn"
                      onClick={handleChangePassword}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
                {/* /Change Password Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
