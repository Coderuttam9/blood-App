import logo from "../../assets/forntend/img/logo.png";
import { Link, Outlet } from "react-router-dom";
import { Avater } from "../Avater/Avater";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  // get from state
  const auth = useAuth();

  return (
    <>
      {" "}
      <header className="header header-custom header-fixed header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <Link to="dashboard" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="dashboard" className="menu-logo">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu">
                  <a href="javascript:void(0);">
                    Home <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a href="index.html" className="inner-demo-img">
                                  <img
                                    src="assets/img/home-11.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a href="index.html" className="inner-demo-img">
                                  General Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <a
                                  href="index-2.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-10.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-2.html"
                                  className="inner-demo-img"
                                >
                                  General Home 2
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-3.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-09.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-3.html"
                                  className="inner-demo-img"
                                >
                                  General Home 3
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-4.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-08.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-4.html"
                                  className="inner-demo-img"
                                >
                                  General Home 4
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-5.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-07.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-5.html"
                                  className="inner-demo-img"
                                >
                                  Cardiology Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-6.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-06.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-6.html"
                                  className="inner-demo-img"
                                >
                                  Eye Care Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-7.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-05.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-7.html"
                                  className="inner-demo-img"
                                >
                                  Veterinary Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-8.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-04.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-8.html"
                                  className="inner-demo-img"
                                >
                                  Paediatric Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-9.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-03.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-9.html"
                                  className="inner-demo-img"
                                >
                                  Fertility Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-10.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-02.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-10.html"
                                  className="inner-demo-img"
                                >
                                  ENT Hospital Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-11.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-01.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-11.html"
                                  className="inner-demo-img"
                                >
                                  Cosmetics Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-12.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-12.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-12.html"
                                  className="inner-demo-img"
                                >
                                  Lab Test Home
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="index-13.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="assets/img/home-13.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="index-13.html"
                                  className="inner-demo-img"
                                >
                                  Homecare Home
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Doctors <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="doctor-dashboard.html">Doctor Dashboard</a>
                    </li>
                    <li>
                      <a href="appointments.html">Appointments</a>
                    </li>
                    <li>
                      <a href="schedule-timings.html">Schedule Timing</a>
                    </li>
                    <li>
                      <a href="my-patients.html">Patients List</a>
                    </li>
                    <li>
                      <a href="patient-profile.html">Patients Profile</a>
                    </li>
                    <li>
                      <a href="chat-doctor.html">Chat</a>
                    </li>
                    <li>
                      <a href="invoices.html">Invoices</a>
                    </li>
                    <li>
                      <a href="doctor-profile-settings.html">
                        Profile Settings
                      </a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="doctor-register.html">Doctor Register</a>
                    </li>
                    <li className="has-submenu">
                      <a href="doctor-blog.html">Blog</a>
                      <ul className="submenu">
                        <li>
                          <a href="doctor-blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog view</a>
                        </li>
                        <li>
                          <a href="doctor-add-blog.html">Add Blog</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Patients <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Doctors</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="map-grid.html">Map Grid</a>
                        </li>
                        <li>
                          <a href="map-list.html">Map List</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Search Doctor</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="search.html">Search Doctor 1</a>
                        </li>
                        <li>
                          <a href="search-2.html">Search Doctor 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="doctor-profile.html">Doctor Profile</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Booking</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="booking.html">Booking 1</a>
                        </li>
                        <li>
                          <a href="booking-2.html">Booking 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="booking-success.html">Booking Success</a>
                    </li>
                    <li>
                      <a href="patient-dashboard.html">Patient Dashboard</a>
                    </li>
                    <li>
                      <a href="favourites.html">Favourites</a>
                    </li>
                    <li>
                      <a href="chat.html">Chat</a>
                    </li>
                    <li>
                      <a href="profile-settings.html">Profile Settings</a>
                    </li>
                    <li>
                      <a href="change-password.html">Change Password</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Pharmacy <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="pharmacy-index.html">Pharmacy</a>
                    </li>
                    <li>
                      <a href="pharmacy-details.html">Pharmacy Details</a>
                    </li>
                    <li>
                      <a href="pharmacy-search.html">Pharmacy Search</a>
                    </li>
                    <li>
                      <a href="product-all.html">Product</a>
                    </li>
                    <li>
                      <a href="product-description.html">Product Description</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="product-checkout.html">Product Checkout</a>
                    </li>
                    <li>
                      <a href="payment-success.html">Payment Success</a>
                    </li>
                    <li>
                      <a href="pharmacy-register.html">Pharmacy Register</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0);">
                    Pages <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Call</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="voice-call.html">Voice Call</a>
                        </li>
                        <li>
                          <a href="video-call.html">Video Call</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Invoices</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="invoices.html">Invoices</a>
                        </li>
                        <li>
                          <a href="invoice-view.html">Invoice View</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Authentication</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="login-email.html">Login Email</a>
                        </li>
                        <li>
                          <a href="login-phone.html">Login Phone</a>
                        </li>
                        <li>
                          <a href="doctor-signup.html">Doctor Signup</a>
                        </li>
                        <li>
                          <a href="patient-signup.html">Patient Signup</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot Password 1</a>
                        </li>
                        <li>
                          <a href="forgot-password2.html">Forgot Password 2</a>
                        </li>
                        <li>
                          <a href="login-email-otp.html">Email OTP</a>
                        </li>
                        <li>
                          <a href="login-phone-otp.html">Phone OTP</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0);">Error Pages</a>
                      <ul className="submenu inner-submenu">
                        <li>
                          <a href="error-404.html">404 Error</a>
                        </li>
                        <li>
                          <a href="error-500.html">500 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blank-page.html">Starter Page</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="terms-condition.html">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="components.html">Components</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="has-submenu">
                  <a href="#">
                    Blog <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    Admin <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="admin/index.html" target="_blank">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="pharmacy/index.html" target="_blank">
                        Pharmacy Admin
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              {/* Cart */}
              {auth && (
                <>
                  <li className="nav-item dropdown noti-nav view-cart-header me-3">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link p-0 position-relative"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-cart-shopping" />{" "}
                      <small className="unread-msg1">7</small>
                    </a>
                    <div className="dropdown-menu notifications dropdown-menu-end">
                      <div className="shopping-cart">
                        <ul className="shopping-cart-items list-unstyled">
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a
                              href="product-description.html"
                              className="item-name"
                            >
                              Benzaxapine Croplex
                            </a>
                            <span className="item-price">$849.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product1.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a
                              href="product-description.html"
                              className="item-name"
                            >
                              Ombinazol Bonibamol
                            </a>
                            <span className="item-price">$1,249.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product2.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a
                              href="product-description.html"
                              className="item-name"
                            >
                              Dantotate Dantodazole
                            </a>
                            <span className="item-price">$129.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                        </ul>
                        <div className="booking-summary pt-3">
                          <div className="booking-item-wrap">
                            <ul className="booking-date">
                              <li>
                                Subtotal <span>$5,877.00</span>
                              </li>
                              <li>
                                Shipping <span>$25.00</span>
                              </li>
                              <li>
                                Tax <span>$0.00</span>
                              </li>
                              <li>
                                Total <span>$5.2555</span>
                              </li>
                            </ul>
                            <div className="booking-total">
                              <ul className="booking-total-list text-align">
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <a className="apt-btn" href="cart.html">
                                      View Cart
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <a
                                      className="apt-btn"
                                      href="product-checkout.html"
                                    >
                                      Checkout
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Cart */}
                  {/* Notifications */}
                  <li className="nav-item dropdown noti-nav me-3 pe-0">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link p-0"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-bell" />{" "}
                      <span className="badge">5</span>
                    </a>
                    <div className="dropdown-menu notifications dropdown-menu-end ">
                      <div className="topnav-dropdown-header">
                        <span className="notification-title">
                          Notifications
                        </span>
                      </div>
                      <div className="noti-content">
                        <ul className="notification-list">
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <span className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Ruby perin"
                                    src="assets/img/clients/client-01.jpg"
                                  />
                                </span>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">
                                      18.30 PM
                                    </span>
                                  </h6>
                                  <p className="noti-details">
                                    Sent a amount of $210 for his Appointment{" "}
                                    <span className="noti-title">
                                      Dr.Ruby perin{" "}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <span className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Hendry Watt"
                                    src="assets/img/clients/client-02.jpg"
                                  />
                                </span>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">
                                      12 Min Ago
                                    </span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    has booked her appointment to{" "}
                                    <span className="noti-title">
                                      Dr. Hendry Watt
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <div className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Maria Dyen"
                                    src="assets/img/clients/client-03.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">
                                      6 Min Ago
                                    </span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    Sent a amount $210 for his Appointment{" "}
                                    <span className="noti-title">
                                      Dr.Maria Dyen
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <div className="avatar avatar-sm">
                                  <img
                                    className="avatar-img"
                                    alt="client-image"
                                    src="assets/img/clients/client-04.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">
                                      8.30 AM
                                    </span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    Send a message to his doctor
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* /Notifications */}
                  {/* User Menu */}
                  <li className="nav-item dropdown has-arrow logged-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img">
                        <Avater url={auth.photo && auth.photo} />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src=""
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Richard Wilson</h6>
                          <p className="text-muted mb-0">Patient</p>
                        </div>
                      </div>
                      <a className="dropdown-item" href="doctor-dashboard.html">
                        Dashboard
                      </a>
                      <a className="dropdown-item" href="profile-settings.html">
                        Profile Settings
                      </a>
                      <Link className="dropdown-item" to="/login">
                        Logout
                      </Link>
                    </div>
                  </li>
                </>
              )}

              {!auth && (
                <>
                  <li class="register-btn">
                    <Link to="/register" class="btn reg-btn">
                      <i class="feather-user"></i>Register
                    </Link>
                  </li>
                  <li class="register-btn">
                    <Link to="/login" class="btn btn-primary log-btn">
                      <i class="feather-lock"></i>Login
                    </Link>
                  </li>
                </>
              )}

              {/* /User Menu */}
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default Header;
