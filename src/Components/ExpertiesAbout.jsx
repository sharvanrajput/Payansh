import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

  
import Button from './Button'
import aboutdiscleft from "../../public/img/aboutdisc-left.webp"

const ExpertiesAbout = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
    return (
        <>
            <section className="experties_about homesteps">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="banner_left text-white"  data-aos="fade-left">
                                <h1 className="section-head heading-graident">Exceptional  Services and Solutions</h1>
                                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat obcaecati quos totam officia laborum soluta, dolores adipisci autem eos delectus sequi, blanditiis suscipit. Libero expedita dignissimos illo odio sequi.</p>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="steps_box text-start  rounded-4">
                                            <h4 className='my-2'>Register For Free</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="steps_box text-start  rounded-4">
                                            <h4 className='my-2'>Register For Free</h4>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                </div>
                                <Button text={"Get The Card"} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-right banner-bg text-center"  data-aos="fade-right">
                                <img src={aboutdiscleft} className="img-fluid image-shake" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ExpertiesAbout
