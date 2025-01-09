import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 
import Experties_complesity from "../../public/img/Experties_complexity.webp"
import creditcard from "../../public/img/creditcard.webp"
import Button from './Button'


const Experties_complexity = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
    return (
        <>
            <section className="expertiex_complesity">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mainimg" data-aos="fade-up">
                                <img src={Experties_complesity} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-10 ">
                            <div className="bottom_two" data-aos="fade-up">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="banner_left text-white">
                                            <h1 className="section-head heading-graident">Exceptional  Services and Solutions</h1>
                                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat obcaecati quos totam officia laborum soluta, dolores adipisci autem eos delectus sequi, blanditiis suscipit. Libero expedita dignissimos illo odio sequi.</p>
                                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat obcaecati quos totam officia laborum soluta, dolores adipisci autem eos delectus sequi, blanditiis suscipit. Libero expedita dignissimos illo odio sequi.</p>
                                            <Button text="Try PayPath Now" classname='w-100' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 align-self-center mt-3 ">
                                        <div className="banner-right text-white banner-bg">
                                            <h2> <span className=' fw-bold heading-graident section-heading'>280+</span>
                                                <span className='fs-5'>  Integrations</span></h2>
                                              <p className='py-3'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellendus consequatur laborum accusantium dolorum ullam, autem nemo fugit nostrum sint!</p>
                                            <img src={creditcard} className="w-100 image-shake" alt="" />
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

export default Experties_complexity
