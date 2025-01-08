import React from 'react'
import Corefeaturephone from "../../public/img/core_feature_phone.webp"


const Corefeature = () => {
    return (
        <>
            <section className="coreFeature">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 ">
                            <div className="corehead text-center">
                                <h2 className="heading-graident section-head">Core Features
                                </h2>
                                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ut maiores quo omnis incidunt quos, repellendus nobis aspernatur quod iure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="core_bg">

                        <div className="row g-4 mt-4">
                            <div className="col-lg-4 col-md-6 align-self-center">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="core_feature_box text-lg-end text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="core_feature_box text-lg-end text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="core_feature_box text-lg-end text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="Corefeature_middle_img image-shake text-center">
                                    <img src={Corefeaturephone} className='w-75 ' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 align-self-center">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="core_feature_box  text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="core_feature_box  text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="core_feature_box  text-start text-white">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit dolorem vero error provident expedita?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Corefeature
