import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Button from './Button'

const Complexcity = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
      }, []);
    return (
        <>
            <section className="complexcity" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6 text-light">
                            <div className="complexity_box text-md-start text-center">
                                <h2 className='fs-1'>Replacing Complexity With Simplicity</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore non quidem sapiente corrupti repellendus quis quaerat doloremque excepturi vel culpa nesciunt perferendis cupiditate architecto in neque, eveniet consectetur saepe.\</p>
                                <Button text="Get The Cote" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Complexcity
