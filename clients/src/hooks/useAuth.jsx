import React from "react";
import { authSelect } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { user: auth } = useSelector(authSelect);

  return auth;
};
export default useAuth;
