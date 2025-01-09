import Button from "./Button"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImg from "../../public/img/banner-right.webp"


const HomeBanner = () => {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (
        <>

            <section className="banner"  data-aos="fade-up">
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-6 align-self-center" data-aos="fade-up" >
                            <div className="banner_left text-white">
                                <h1 className="banner-heading heading-graident">Digitize Your Financial.</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur, officia debitis amet dicta quo pariatur architecto fuga libero corrupti, repudiandae exercitationem blanditiis? Quibusdam, cum.</p>
                                <Button text={"Get The Card"} />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center" data-aos="fade-up"   >
                            <div className="banner-right banner-bg">
                                <img src={bannerImg} className="img-fluid image-shake" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeBanner
