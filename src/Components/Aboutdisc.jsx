import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutdiscleft from "../../public/img/aboutdisc-left.webp"
import Button from './Button'

const Aboutdisc = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
    return (
        <>
            <section className="Aboutdisc">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center" >
                            <div className="banner_left text-white" data-aos="fade-left">
                                <h2 className=" fs-1 heading-graident">Digitize Your Financial.</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur, officia debitis amet dicta quo pariatur architecto fuga libero corrupti, repudiandae exercitationem blanditiis? Quibusdam, cum.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur, officia debitis amet dicta quo pariatur architecto fuga libero corrupti, repudiandae exercitationem blanditiis? Quibusdam, cum.</p>
                                <Button text={"Get The Card"} />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="banner-right banner-bg text-center" data-aos="fade-right">
                                <img src={aboutdiscleft} className="img-fluid image-shake" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutdisc
