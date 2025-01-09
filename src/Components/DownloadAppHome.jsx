import React, { useEffect } from "react";

import appstorelight from "../../public/img/appstore-light.svg"
import googleplaylight from "../../public/img/googleplay-light.svg"
import appsectdion from "../../public/img/appsectdion.png"


import AOS from "aos";
import "aos/dist/aos.css";
const DownloadAppHome = () => {
     useEffect(() => {
                    AOS.init({ duration: 1200, once: true });
                }, []);
    return (
        <>
            <section className="downloadapp">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 align-self-center ">
                            <div className="banner_left text-white text-lg-start text-center home-about-right ms-md-5 ms-0">
                                <h2 className="fs-1  heading-graident">Know Your Benefits</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                                <div className="download-list">
                                    <button className=''>
                                        <img src={googleplaylight} className='img-fluid bg-dark btn rounded-0 px-3 py-2' width={150} alt="" />
                                    </button>
                                    <button className=' ms-2'>
                                        <img src={appstorelight} className='img-fluid bg-dark btn rounded-0 px-3 py-2' width={150} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 ">
                            <div className="appsection_img" data-aos="fade-up-left">
                                <img src={appsectdion} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadAppHome
