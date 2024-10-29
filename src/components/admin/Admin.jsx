


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './admin.css';
import AdminNav from './AdminNav';
import SalesOverview from './SalesOverview';
import InventoryManagement from './InventoryManagement';
import OrderProcessing from './OrderProcessing';
import CustomerSupport from './CustomerSupport';

function Admin() {
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleConfirmLogout = () => {
        navigate("/");
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };


    return (
        <div className="admin">
            <AdminNav>


                <div id="content" className="content">
                    <nav id='navbar' className="navbar navbar-expand navbar-dark bg-dark py-3 shadow-sm">
                        <div className="container-fluid">
                            <Link className="navbar-brand fw-bold fs-3" to="/admin">
                                ADMIN
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
                            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link mx-2 fw-bolder"
                                            aria-current="page"
                                            to="/home"
                                            style={{ fontSize: `20px` }}
                                        >
                                            <i className="fa fa-home me-1"></i>Home
                                        </Link>
                                    </li>
                                    <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
                                        <Link className="nav-link" to="/userlist">
                                            User List
                                        </Link>
                                    </li>
                                    <li className="nav-item mx-2 fw-bolder" style={{ fontSize: `20px` }}>
                                        <Link className="nav-link" to="/msglist">
                                            Messages
                                        </Link>
                                    </li>
                                </ul>
                                <div className="buttons">
                                    <button
                                        className="btn btn-light fw-bolder mx-2"
                                        style={{ fontSize: `15px` }}
                                        onClick={handleLogoutClick}
                                    >
                                        Log Out
                                    </button>
                                </div>
                                {/* Logout Confirmation Modal */}
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
                    {/* <h1 id='white'  >Wel e Admin Dashboard how are you  ccccccccccccnnmmm</h1> */}

                    <div className="container">
                        <div className="admin-widgets">
                            <div className="widget">

                                <SalesOverview />
                            </div>
                            <div className="widget">
                                <InventoryManagement />
                            </div>
                            <div className="widget">
                                <OrderProcessing />
                            </div>
                            <div className="widget">
                                <CustomerSupport />
                            </div>
                        </div>
                    </div>

                </div>
            </AdminNav>
        </div>
    );
}

export default Admin;
