import React from 'react';

import logo from "../../public/img/logo.png";  // Use correct path
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} width={180} alt="Logo" />
                    </div>
                    <div className="pages ms-auto d-lg-block d-none">
                        <ul className='list-inline d-flex'>
                            <Link className='nav-items text-decoration-none ' to="/">
                                <li className='nav-items'>
                                    Home
                                </li>
                            </Link>
                            <Link className='nav-items text-decoration-none ' to="/about">
                                <li className='nav-items'>
                                    About Us
                                </li>
                            </Link>
                            <Link className='nav-items text-decoration-none ' to="/expertise">
                                <li className='nav-items'>
                                    Expertise
                                </li>
                            </Link>
                            <Link className='nav-items text-decoration-none ' to="/blog">
                                <li className='nav-items'>
                                    Blog
                                </li>
                            </Link>
                            <Link className='nav-items text-decoration-none ' to="/contact">
                                <li className='nav-items'>
                                    Contact Us
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="mobile_btn d-lg-none d-block">
                        <button className="btn text-light fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <i className="bi bi-list fw-bold"></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Offcanvas Menu */}
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            <img src={logo} width={180} alt="Logo" />
                        </h5>
                        <button type="button" className="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="mobile_nav">
                            <div className="pages ms-auto">
                                <ul className='list-inline '>
                                    <Link className='nav-items text-decoration-none ' to="/">
                                        <li className='nav-items'>
                                            Home
                                        </li>
                                    </Link>
                                    <Link className='nav-items text-decoration-none ' to="/about">
                                        <li className='nav-items'>
                                            About Us
                                        </li>
                                    </Link>
                                    <Link className='nav-items text-decoration-none ' to="/expertise">
                                        <li className='nav-items'>
                                            Expertise
                                        </li>
                                    </Link>
                                    <Link className='nav-items text-decoration-none ' to="/blog">
                                        <li className='nav-items'>
                                            Blog
                                        </li>
                                    </Link>
                                    <Link className='nav-items text-decoration-none ' to="/contact">
                                        <li className='nav-items'>
                                            Contact Us
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
