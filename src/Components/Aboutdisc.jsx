import React from 'react'

const Aboutdisc = () => {
    return (
        <>
            <section className="Aboutdisc">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="banner_left text-white">
                                <h1 className="banner-heading heading-graident">Digitize Your Financial.</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur, officia debitis amet dicta quo pariatur architecto fuga libero corrupti, repudiandae exercitationem blanditiis? Quibusdam, cum.</p>
                                <Button text={"Get The Card"} />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
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

export default Aboutdisc
