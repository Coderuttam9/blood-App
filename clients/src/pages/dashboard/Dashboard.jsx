import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/auth/authApiSilce";
import { createToster } from "../../utils/Tooster";
import { Avater } from "../../components/Avater/Avater";
import { Link, Outlet } from "react-router-dom";
import { authSelect, setStateEmty } from "../../features/auth/authSlice";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { loader, error, message } = useSelector(authSelect);
  const dispatch = useDispatch();

  // get auth form useAAuth hook
  const auth = useAuth();

  // user logout handler
  const handleUserLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
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
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      {/* from avarer component  */}
                      <Avater url={auth?.photo} />
                    </a>
                    <div className="profile-det-info">
                      <h3>{auth?.name}</h3>
                      <div className="patient-details">
                        <h5>
                          {auth?.dateOfbirth && (
                            <>
                              <i className="fas fa-birthday-cake" />{" "}
                              {auth?.dateOfbirth}
                              years
                            </>
                          )}
                        </h5>
                        <h5 className="mb-0">
                          {auth?.location && (
                            <>
                              <i className="fas fa-map-marker-alt" />
                              {auth?.location}
                            </>
                          )}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="patient-dashboard.html">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark" />
                          <span>Favourites</span>
                        </a>
                      </li>
                      <li>
                        <a href="dependent.html">
                          <i className="fas fa-users" />
                          <span>Dependent</span>
                        </a>
                      </li>

                      <li>
                        <Link to="profile-setting">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="change-passwords">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <a href="#" onClick={handleUserLogout}>
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* / Profile Sidebar */}
            <Outlet />
          </div>
        </div>
      </div>

      {/* /Page Content */}
    </>
  );
};

export default Dashboard;
