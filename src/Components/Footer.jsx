import React from 'react'
import logo from "../../public/img/logo.png"

const Footer = () => {
    return (
        <>
            <div className="two_section_bg">

                <section className="NewsLetter aos-init aos-animate py-5" data-aos="fade-up">
                    <div className="container">
                        <div className="d-flex justify-content-center align-items-center text-center flex-column">
                            <h4 className='heading-graident fs-1'>Subscribe Our Newsletter</h4>
                            <p className='text-white'>Get latest news and updates</p>
                            <form className="d-flex align-items-center justify-content-center">
                                <input type="email" placeholder="Enter your Email" name="email" autocomplete="true" />
                                <button type="submit" className="button_graident">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className='text-center'>
                    <div className="container">
                        <div className="logo">
                            <img src={logo} width={150} alt="" />
                        </div>
                        <div className="link py-2 border-bottom border-light ">
                            <ul className='list-inline text-white d-flex justify-content-center  '>
                                <li className='nav-items px-2 fs-5'>About</li>
                                <li className='nav-items px-2 fs-5'>Contact</li>
                                <li className='nav-items px-2 fs-5'>Features</li>
                                <li className='nav-items px-2 fs-5'>Blog</li>
                            </ul>
                        </div>
                        <div className="tmd  border-bottom border-light d-flex flex-lg-row flex-column  align-items-center  justify-content-center  py-3">
                            <div className="col-lg-4 col-md-6">


                                <div className="social_wraper">
                                    <ul className='list-inline d-flex justify-content-center'>
                                        <li className='px-3 py-2 ms-2 bg-white rounded-pill'><i className="bi bi-twitter-x text-black "></i></li>
                                        <li className='px-3 py-2 ms-2 bg-white rounded-pill'><i className="bi bi-facebook  text-black "></i></li>
                                        <li className='px-3 py-2 ms-2 bg-white rounded-pill'><i className="bi bi-instagram text-black "></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">


                                <div className="tmc_wraper  ">
                                    <ul className='list-inline d-flex justify-content-center text-white fs-5'>
                                        <li className='ms-3'>Terms & Conditions</li>
                                        <li className='ms-3'>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">

                                <div className="address text-white">
                                    <marquee behavior="smooth" direction="left">217/8 Hansi Road, Karnal, Haryana - 132001
                                    </marquee>
                                </div>
                            </div>

                        </div>
                        <div className="copyright text-white my fs-5">
                            <p className='mb-0 py-2'>Copyright © <span>2025</span> PayPath by Evonicmedia. All Rights Reserved.</p>
                        </div>
                    </div>

                </footer>
            </div>

        </>
    )
}

export default Footer
