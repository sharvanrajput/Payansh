import React from 'react'
import rupeeindia from '../../public/img/rupee-indian.png'
import verified from '../../public/img/verified.png'
import fingerprint from '../../public/img/fingerprint.png'
import clock from '../../public/img/clock.png'
const Services = () => {
    return (
        <>
            <section className="services">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="secure_box">

                                <div className="icon">
                                    <img src={rupeeindia} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="secure_box">

                                <div className="icon">
                                    <img src={verified} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="secure_box">

                                <div className="icon">
                                    <img src={fingerprint} width={50} alt="" />
                                </div>
                                <h4 className=" pt-3">Transparent Pricing</h4>
                                <p>Flat 2.50 % will be charged for all payment type and accept all kind of Credit cards.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="secure_box">

                                <div className="icon">
                                    <img src={clock} width={50} alt="" />
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

export default Services
