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
                            <li className='nav-items'><Link to="/">Home</Link></li>
                            <li className='nav-items'><Link to="/about">About Us</Link></li>
                            <li className='nav-items'><Link to="/expertise">Expertise</Link></li>
                            <li className='nav-items'><Link to="/blog">Blog</Link></li>
                            <li className='nav-items'><Link to="/contact">Contact Us</Link></li>
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
                                <ul className='list-inline d-flex flex-column'>
                                    <li className='nav-items'><Link to="/">Home</Link></li>
                                    <li className='nav-items'><Link to="/about">About</Link></li>
                                    <li className='nav-items'><Link to="/expertise">Expertise</Link></li>
                                    <li className='nav-items'><Link to="/blog">Blog</Link></li>
                                    <li className='nav-items'><Link to="/contact">Contact</Link></li>
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
