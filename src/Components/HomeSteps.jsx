import React from 'react'

const HomeSteps = () => {
    return (
        <>
            <section className="homesteps pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner_left text-white text-lg-start text-center home-about-right">
                                <h2 className="fs-1 heading-graident">Digitize Your Financial.</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur, officia debitis amet dicta quo pariatur architecto fuga libero corrupti, repudiandae exercitationem blanditiis? Quibusdam, cum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 g-4">
                        {/* <div className="col-lg-6">
                            <div className="homestep-left banner-bg text-center">
                                <img src="../public/img/homesteps-left.webp" className='img-fluid image-shake' alt="" />
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="steps_box">
                                <div className="icon">
                                    <img src="../public/img/edit.png" width={50} alt="" />
                                </div>
                                <h4 className='mt-2'>Register For Free</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, nemo.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="steps_box">
                                <div className="icon">
                                    <img src="../public/img/rupee.png" width={50} alt="" />
                                </div>
                                <h4 className='mt-2'>Choose an amount to send</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, nemo.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="steps_box">
                                <div className="icon">
                                    <img src="../public/img/registration.png" width={50} alt="" />
                                </div>
                                <h4 className='mt-2'>Add recipient’s bank details</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, nemo.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="steps_box">
                                <div className="icon">
                                    <img src="../public/img/money.png" width={50} alt="" />
                                </div>
                                <h4 className='mt-2'>Transfer Money</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, nemo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HomeSteps