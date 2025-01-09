import React, { useEffect } from "react";
import Button from './Button'

import aboutleft from '../../public/img/about-left.webp'
import adduser from '../../public/img/add-user.png'


import AOS from "aos";
import "aos/dist/aos.css";

const HomeAbout = () => {
    useEffect(() => {
                AOS.init({ duration: 1200, once: true });
            }, []);
    return (
        <>
            <section className="Home_about">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="home-about-left" data-aos="fade-right">
                                <div className="home-about-right banner-bg text-center">
                                    <img src={aboutleft} className='img-fluid  image-shake' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-about-right text-white text-lg-start text-center" data-aos="fade-left">
                                <h2 className='section-head heading-graident'>
                                    Simple payment  gateway process
                                </h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti repellendus fugiat assumenda incidunt ab reiciendis, consectetur molestiae ratione harum.</p>
                                <div className="about_setps ">
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src={adduser} className='' width={30} alt="" />
                                        </div>
                                        <div className="disc text-lg-start text-center ms-3">
                                            <h4>Create Account</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ut.</p>
                                        </div>
                                    </div>
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src={adduser} className='' width={30} alt="" />
                                        </div>
                                        <div className="disc text-lg-start text-center ms-3">
                                            <h4>Create Account</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ut.</p>
                                        </div>
                                    </div>
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src={adduser} className='' width={30} alt="" />
                                        </div>
                                        <div className="disc text-lg-start text-center ms-3">
                                            <h4>Create Account</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ut.</p>
                                        </div>
                                    </div>
                                </div>
                                <Button text={"About us "}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAbout
