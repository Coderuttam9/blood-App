import React from "react";
import { useLocation } from "react-router-dom";
import { generatePageTitle } from "../../helpers/helper";
const Breadcurm = ({ title }) => {
  const { pathname } = useLocation();

  // blcoking breadCumb list
  const blockBreadCrum = ["/login", "/register", "/donor-register"];

  if (!blockBreadCrum.includes(pathname)) {
    return (
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2
                  className="breadcrumb-title"
                  style={{ textTransform: "capitalize" }}
                >
                  {generatePageTitle(pathname)}
                </h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      {generatePageTitle(pathname)}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
      </>
    );
  }
};

export default Breadcurm;
