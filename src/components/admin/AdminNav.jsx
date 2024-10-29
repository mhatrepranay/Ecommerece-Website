import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const AdminNav = ({ children }) => {
    const [homeSubmenuOpen, setHomeSubmenuOpen] = useState(false);
    const [pageSubmenuOpen, setPageSubmenuOpen] = useState(false);

    const toggleHomeSubmenu = () => {
        setHomeSubmenuOpen(!homeSubmenuOpen);
    };

    const togglePageSubmenu = () => {
        setPageSubmenuOpen(!pageSubmenuOpen);
    };

    return (
        <div className="admin-layout">
            <nav id="sidebar" className="sidebar open">
                <div className="sidebar-header">
                    <h3>ADMIN DASHBOARD</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>PM COLLECTION</p>
                    <li className={homeSubmenuOpen ? 'activeq' : ''}>
                        <Link
                            to="/admin"
                            onClick={toggleHomeSubmenu}
                            aria-expanded={homeSubmenuOpen}
                        // className={`dropdown-toggle ${homeSubmenuOpen ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                        <ul className={`collapse list-unstyled ${homeSubmenuOpen ? 'show' : ''}`} id="homeSubmenu">
                            {/* <li>
                                <Link to="#">Home 1</Link>
                            </li>
                            <li>
                                <Link to="#">Home 2</Link>
                            </li>
                            <li>
                                <Link to="#">Home 3</Link>
                            </li> */}
                        </ul>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li className={pageSubmenuOpen ? 'activeq' : ''}>
                        <Link
                            to="#pageSubmenu"
                            onClick={togglePageSubmenu}
                            aria-expanded={pageSubmenuOpen}
                            className={`dropdown-toggle ${pageSubmenuOpen ? 'active' : ''}`}
                        >
                            Pages
                        </Link>
                        <ul className={`collapse list-unstyled ${pageSubmenuOpen ? 'show' : ''}`} id="pageSubmenu">
                            <li>
                                <Link to="/userlist">User list</Link>
                            </li>
                            <li>
                                <Link to="/msglist">Messages</Link>
                            </li>
                            <li>
                                <Link to="/prodlist">Product List</Link>
                            </li>
                            <li>
                                <Link to="/addprod">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/qr">Generate QR code</Link>
                            </li>
                            <li>
                                <Link to="/orderlist">Orders</Link>
                            </li>

                        </ul>
                    </li>
                    {/* <li>
                        <Link to="#">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li> */}
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default AdminNav;
