import Button from "./Button"


const HomeBanner = () => {
    return (
        <>

            <section className="banner">
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
                                <img src="../public/img/banner-right.webp" className="img-fluid image-shake" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default HomeBanner
