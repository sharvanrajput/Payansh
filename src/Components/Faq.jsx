
import React from 'react'

import homefaq from "../api/homefaq.json"
const Faq = () => {
    return (
        <>
            <section className="faq_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner_left text-white text-lg-start text-center home-about-right ">
                                <h2 className="fs-1  heading-graident">Know Your Benefits</h2>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="accordion " id="accordionExample">
                                {homefaq.map((item, index) => {
                                    return(

                                  

                                    <div className="accordion-item mt-3">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                               {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
