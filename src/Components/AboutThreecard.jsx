import React from 'react'

import marketshare from "../../public/img/marketshare.svg"
import easypayment from "../../public/img/easypayment.svg"
import awesomeservices from "../../public/img/awesomeservices.svg"



const AboutThreecard = () => {
    return (
        <>
            <section className="services py-5" style={{paddingTop:100 }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="secure_box h-100">

                                <div className="icon">
                                    <img src={marketshare} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="secure_box h-100">

                                <div className="icon">
                                    <img src={easypayment} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="secure_box h-100">

                                <div className="icon">
                                    <img src={awesomeservices} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutThreecard
