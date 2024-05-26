import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicGrad = () => {
  const { user } = useSelector((state) => state.auth);
  if (localStorage.getItem("userLogin")) {
    return user ? <Navigate to="/dashboard" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};
export default PublicGrad;
