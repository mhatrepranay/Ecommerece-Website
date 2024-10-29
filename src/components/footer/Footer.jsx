import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>Your trusted source for eco-friendly shopping.</p>
                    </div>

                    <div className="col-md-6">
                        <h5>Contact Info</h5>
                        <p>Email: mhatrepranay1234@gmail.com</p>
                        <p>Phone:+91 8087155191</p>
                        <div className="social-icons">
                            <Link to="#" className="mr-3 text-decoration-none text-white">
                                <i className="fa fa-facebook fa-2x mx-2 facebook-icon"></i>
                            </Link>
                            <Link to="#" className="mr-3 text-decoration-none text-white">
                                <i className="fa fa-twitter fa-2x mx-2 twit-icon"></i>
                            </Link>
                            <Link to="#" className="text-decoration-none text-white">
                                <i className="fa fa-instagram fa-2x mx-2 instagram-icon"></i>
                            </Link>
                            <Link to="#" className="text-decoration-none text-white">
                                <i className="fa fa-linkedin fa-2x mx-2 linkedin-icon"></i>

                            </Link>
                        </div>

                    </div>
                </div>
                <hr />
                <p>&copy; {new Date().getFullYear()} PM COLLECTION. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
