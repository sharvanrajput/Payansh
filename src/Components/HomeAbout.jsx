import React from 'react'
import Button from './Button'

const HomeAbout = () => {
    return (
        <>
            <section className="Home_about">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="home-about-left">
                                <div className="home-about-right banner-bg text-center">
                                    <img src="../public/img/about-left.webp" className='img-fluid  image-shake' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-about-right text-white text-lg-start text-center">
                                <h2 className='section-head heading-graident'>
                                    Simple payment  gateway process
                                </h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure corrupti repellendus fugiat assumenda incidunt ab reiciendis, consectetur molestiae ratione harum.</p>
                                <div className="about_setps ">
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src="../public/img/add-user.png" className='' width={30} alt="" />
                                        </div>
                                        <div className="disc text-lg-start text-center ms-3">
                                            <h4>Create Account</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ut.</p>
                                        </div>
                                    </div>
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src="../public/img/add-user.png" className='' width={30} alt="" />
                                        </div>
                                        <div className="disc text-lg-start text-center ms-3">
                                            <h4>Create Account</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laborum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ut.</p>
                                        </div>
                                    </div>
                                    <div className="step_box mt-4 d-flex align-items-center   flex-lg-row flex-column">
                                        <div className="icon">
                                            <img src="../public/img/add-user.png" className='' width={30} alt="" />
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
