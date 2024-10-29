
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Navbar({ loggedInUser, setLoggedInUser }) {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('products');
  //   navigate("/");
  // }
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('products');
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container my-">
        <Link className="navbar-brand fw-bold fs-3" to="/home">
          PM COLLECTION
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link mx-2 fw-bolder"
                aria-current="page"
                to="/home"
                style={{ fontSize: `20px` }}
              >
                <i className="fa fa-home me-1 "></i>Home
              </Link>
            </li>
            <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
              <Link className="nav-link" to="/product">
                Generate Code
              </Link>
            </li>
            <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>
          </ul>

          {/* <Link
              to="/product"
              className="btn btn-outline-light fw-bolder"
              style={{ fontSize: `20px` }}
            >
              <i className="fa fa-user-plus me-1"></i> Generate Code
            </Link> */}
          {/* <button
              onClick={handleLogout} // Call the handleLogout function when the Logout button is clicked
              className="btn btn-outline-light ms-2 fw-bolder mx-2"
              style={{ fontSize: `20px` }}
            >

              <i className="fa fa-user me-1"></i> LogOut
            </button> */}
          {loggedInUser && (
            <div className="dropdown">
              <button
                className="btn btn-custom"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: `white` }}
              >
                <i
                  className="fa fa-user-circle text-light"
                  style={{ fontSize: '24px', cursor: 'pointer', marginRight: '5px' }}
                ></i>
                {loggedInUser.firstName}
              </button>
              <ul className="dropdown-menu">


                {/* {loggedInUser && (
                  <li className="nav-item mx-2 fw-bolder"  >
                    <Link className="nav-link text-dark" to="/profile">
                      My Profile
                    </Link>
                  </li>
                )} */}
                <li className="nav-item mx-2 fw-bolder"  >
                  <Link onClick={handleLogout} className="nav-link text-dark">
                    Logout
                  </Link>
                </li>

              </ul>
            </div>
          )}

          {showLogoutModal && (
            <div className="logout-modal">
              <div className="modal-content   p-3 rounded shadow" style={{ backgroundColor: `rgba(255, 255, 255, 0.3)` }}>
                <p className="fw-bolder text-dark">Are you sure you want to log out?</p>
                <div className="modal-buttons">
                  <button
                    onClick={handleConfirmLogout}
                    className="btn btn-danger me-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleCancelLogout}
                    className="btn btn-primary"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
