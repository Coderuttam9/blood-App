import { Link, Outlet } from "react-router-dom";
import Breadcurm from "../breadcurm/Breadcurm";
import "./layout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Layout = () => {
  return (
    <div className="main-wrapper">
      {/* Header */}
      <Header />

      <Breadcurm title={"Dashboard"}></Breadcurm>

      {/* content  */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
